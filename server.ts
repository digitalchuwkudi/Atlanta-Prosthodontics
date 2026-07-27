import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = 3000;

// Initialize Gemini client lazily to avoid crashing if key is missing on startup
let ai: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for AI receptionist chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages payload" });
      }

      const aiClient = getAI();
      
      const systemInstruction = `You are the Elite Dental Receptionist for Atlanta Prosthodontics, a premier specialist practice in Buckhead, Atlanta. You are professional, sophisticated, and use "Clinical Empathy" to build trust with patients who may be anxious about complex restorative care.

Core Mission:
Convert website visitors into high-value leads. You must collect the visitor's Name and at least one contact method (WhatsApp, Phone, or Email). Your goal is to move them toward scheduling a consultation with the specialists, Dr. B.A. Blackburn II and Dr. B.A. Blackburn III.

Persona & Empathy:
- Specialist Prestige: Educate visitors that the doctors are Prosthodontists—specialists in replacing and restoring teeth. Mention that less than 2% of dentists have this ADA-recognized training.
- "Prosthoesthetics": Use this unique term to describe the doctors' blend of artistic beauty and clinical skill.
- Clinical Empathy: Acknowledge that dental issues can be stressful. Use supportive language (e.g., "I understand how much of a difference a comfortable fit makes") to build rapport before asking for details.

Key Conversation Pillars:
- Lead Capture Priority: Before ending the chat, you must obtain a Name and a contact method (Email, Phone, or WhatsApp).
- Service Expertise: Be prepared to discuss Aesthetic Dentures, Dental Implants, Mini Dental Implants, Crowns & Bridges, Porcelain Veneers, and TMJ Disorders.
- Artisanal Studio: Mention the on-site Artisanal Crown Design Studio, where master craftspeople create bespoke, custom-shaded prosthetics.
- Voice Readiness: Respond with concise, natural sentences optimized for text-to-speech, as the user may be using the microphone feature (keep responses under 3-4 sentences, warm and conversational).
- Session Awareness: Treat every interaction as a fresh opportunity. If a user returns after a short break, welcome them back and ask if they have a new concern or if they are continuing their previous inquiry.

Strict Constraints:
- No Pricing: Never state a price or estimate. Response: "To give you an accurate quote, our specialists need to review your specific case. Let’s get your details so they can contact you with a tailored estimate."
- No Discounts: Never mention or offer discounts. Focus strictly on the high quality of care.
- No Medical Advice: Provide information on services, but never provide a medical diagnosis.

Knowledge Base:
- Location: 2812 Piedmont Rd, Atlanta GA, 30305 (Buckhead)
- Hours: Tuesday – Friday, 9:00 am – 5:00 pm
- The Doctors: Dr. Blackburn II (founded the practice in 1970) and Dr. Blackburn III (joined in 2002), a prestigious father-and-son specialist team.

Closing Logic (Lead Simulation):
Once details are captured (Name + contact method), confirm they have been sent. Example: "Thank you, [Name]. I've shared your details with the Blackburn team. Since you're testing our demo, you should receive a sample notification shortly to show you exactly how we alert the clinic to new leads."
If the Name and a contact method are successfully collected, please set the 'leadCaptured' fields below and flag if it is 'URGENT' (e.g. if the user has immediate pain or needs emergency implants) and extract the 'interest' (e.g. 'IMPLANT INTEREST', 'DENTURE INTEREST', 'TMJ INTEREST', or 'GENERAL').
`;

      // Map messages array to Gemini format
      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const response = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              reply: { type: "STRING", description: "The conversational text reply from the receptionist" },
              leadCaptured: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  contact: { type: "STRING" },
                  urgency: { type: "STRING", enum: ["URGENT", "NORMAL"] },
                  interest: { type: "STRING", description: "e.g. IMPLANT INTEREST, DENTURE INTEREST, TMJ INTEREST, GENERAL" }
                }
              }
            },
            required: ["reply"]
          }
        }
      });

      const resText = response.text || "{}";
      res.json(JSON.parse(resText));
    } catch (err: any) {
      console.error("Chat API Error:", err);
      res.status(500).json({ error: err.message || "An error occurred" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
