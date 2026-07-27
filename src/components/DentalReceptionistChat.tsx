import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  BellRing,
  MapPin,
  ChevronRight
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface LeadCaptured {
  name?: string;
  contact?: string;
  urgency?: "URGENT" | "NORMAL";
  interest?: string;
}

const STORAGE_HISTORY_KEY = "atl_prostho_chat_history";
const STORAGE_TIME_KEY = "atl_prostho_chat_time";
const STORAGE_LEAD_KEY = "atl_prostho_lead_captured";
const TTL_HOURS = 6;

export default function DentalReceptionistChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(false);
  const [leadAlert, setLeadAlert] = useState<LeadCaptured | null>(null);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [leadCaptured, setLeadCaptured] = useState(() => {
    return localStorage.getItem(STORAGE_LEAD_KEY) === "true";
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const hasAutoOpened = useRef(false);
  const leadCapturedRef = useRef(leadCaptured);

  useEffect(() => {
    localStorage.setItem(STORAGE_LEAD_KEY, leadCaptured ? "true" : "false");
    leadCapturedRef.current = leadCaptured;
  }, [leadCaptured]);

  // Initialize Speech Synthesis and Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = "en-US";

        rec.onresult = (event: any) => {
          const text = event.results[0][0].transcript;
          setInputValue(text);
          setIsListening(false);
        };

        rec.onerror = () => {
          setIsListening(false);
        };

        rec.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = rec;
      }
    }
  }, []);

  // 6-Hour memory refresh (TTL) on load
  useEffect(() => {
    const lastSavedTime = localStorage.getItem(STORAGE_TIME_KEY);
    const savedHistory = localStorage.getItem(STORAGE_HISTORY_KEY);
    
    let parsedHistory: Message[] = [];

    if (lastSavedTime && savedHistory) {
      const elapsedMs = Date.now() - parseInt(lastSavedTime, 10);
      const elapsedHours = elapsedMs / (1000 * 60 * 60);

      if (elapsedHours < TTL_HOURS) {
        try {
          parsedHistory = JSON.parse(savedHistory).map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }));
        } catch (e) {
          console.error("Failed to parse chat history:", e);
        }
      } else {
        localStorage.removeItem(STORAGE_HISTORY_KEY);
        localStorage.removeItem(STORAGE_TIME_KEY);
        localStorage.removeItem(STORAGE_LEAD_KEY);
        setLeadCaptured(false);
      }
    }

    if (parsedHistory.length > 0) {
      setMessages(parsedHistory);
    } else {
      // Default welcoming message
      const initialGreeting: Message = {
        id: "init-welcome",
        role: "assistant",
        content: `Welcome to Atlanta Prosthodontics. I am your specialized Receptionist. How can I support your dental restoration goals today?`,
        timestamp: new Date()
      };
      setMessages([initialGreeting]);
      saveChatHistory([initialGreeting]);
    }
  }, []);

  // Auto-popup & Exit Intent & Mobile Scroll trigger to maximize conversions
  useEffect(() => {
    let timer: any;
    let observer: IntersectionObserver;

    const triggerOpen = () => {
      if (!hasAutoOpened.current) {
        setIsOpen(true);
        setShowNotificationBadge(false);
        hasAutoOpened.current = true;
      }
    };

    // 1. Timer popup (less than 7 secs - we use 5 seconds)
    timer = setTimeout(() => {
      triggerOpen();
    }, 5000);

    // 2. Mobile/Tablet Scroll trigger (scroll towards about or services section)
    if (typeof window !== "undefined" && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            triggerOpen();
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "100px" }
      );

      const targetSection = document.getElementById("about") || document.getElementById("services");
      if (targetSection) {
        observer.observe(targetSection);
      }
    }

    // 3. Exit Intent Detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerOpen();
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timer) clearTimeout(timer);
      if (observer) observer.disconnect();
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Auto-reminder and auto-close logic (after lead capture)
  useEffect(() => {
    if (!leadCaptured) return;

    const hasUserMessage = messages.some(m => m.role === "user");
    if (!hasUserMessage) return;

    // 5-minute auto-close timeout
    const closeTimer = setTimeout(() => {
      setMessages(prev => {
        if (prev.length > 0 && prev[prev.length - 1].content.includes("stepped away")) return prev;
        const autoCloseMsg: Message = {
          id: `msg-${Date.now()}-autoclose`,
          role: "assistant",
          content: "It looks like you've stepped away, so I'll close our chat for now. Have a wonderful day!",
          timestamp: new Date()
        };
        return [...prev, autoCloseMsg];
      });
      setTimeout(() => setIsOpen(false), 2000);
    }, 5 * 60 * 1000);

    // 1-minute "Wait!" reminder
    const reminderTimer = setTimeout(() => {
      setMessages(prev => {
        if (prev.length > 0 && prev[prev.length - 1].content.includes("Wait!")) return prev;
        if (prev.length > 0 && prev[prev.length - 1].role === "user") return prev;
        if (prev.length > 0 && prev[prev.length - 1].content.includes("stepped away")) return prev;
        const waitMsg: Message = {
          id: `msg-${Date.now()}-wait`,
          role: "assistant",
          content: "Wait! Do you have more questions about our treatments and service before you go?",
          timestamp: new Date()
        };
        return [...prev, waitMsg];
      });
    }, 60 * 1000);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(reminderTimer);
    };
  }, [messages, leadCaptured]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const saveChatHistory = (history: Message[]) => {
    localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history));
    localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());
  };

  // Speaks text via Browser Speech Synthesis
  const speakText = (text: string) => {
    if (!isTtsEnabled || typeof window === "undefined" || !window.speechSynthesis) return;

    // Stop current speaking
    window.speechSynthesis.cancel();

    // Clean markdown or special characters
    const cleanText = text.replace(/[#*`_~]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Attempt to select a premium empathetic female voice if available
    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(v => 
      v.name.includes("Google US English") || 
      v.name.includes("Natural") || 
      v.lang.startsWith("en-US")
    );
    if (premiumVoice) utterance.voice = premiumVoice;
    
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  };

  // Toggle Text-to-Speech
  const toggleTts = () => {
    setIsTtsEnabled(prev => {
      const next = !prev;
      if (!next && typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  };

  // Toggle Microphone
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please use a modern browser like Chrome.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  // Silently forwards lead details to FormSubmit (madudimcjx@gmail.com)
  const sendLeadSilently = async (
    name: string, 
    contact: string, 
    interest: string, 
    currentMessages: Message[]
  ) => {
    try {
      const transcript = currentMessages
        .map(m => `${m.role === "user" ? "Lead" : "Practice Receptionist"}: ${m.content}`)
        .join("\n\n");

      const emailContent = `
NEW LEAD CAPTURED FROM ATLANTA PROSTHODONTICS AI RECEPTIONIST

Lead Name: ${name}
Lead Contact: ${contact}
Specialty/Interest: ${interest || "General Prosthodontic Inquiry"}

--- CHAT TRANSCRIPT ---
${transcript}
      `.trim();

      await fetch("https://formsubmit.co/ajax/madudimcjx@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New AI Chat Lead: ${name} - ${interest || 'General'}`,
          name: name || "Unknown Lead",
          email: contact.includes("@") ? contact : "no-email@provided.com",
          phone: !contact.includes("@") ? contact : "Not provided",
          message: emailContent,
          _captcha: "false"
        })
      });
      console.log("Lead forwarded silently to madudimcjx@gmail.com via FormSubmit");
    } catch (e) {
      console.error("Failed to silently send lead:", e);
    }
  };

  // Send message handler
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    setInputValue("");
    
    const userMsg: Message = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      content: text,
      timestamp: new Date()
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    saveChatHistory(updatedHistory);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedHistory.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send chat message");
      }

      const data = await response.json();
      
      const botMsg: Message = {
        id: `msg-${Date.now()}-assistant`,
        role: "assistant",
        content: data.reply || "I apologize, but I am having trouble connecting with the team right now. Please try again.",
        timestamp: new Date()
      };

      setIsTyping(false);
      const finalHistory = [...updatedHistory, botMsg];
      setMessages(finalHistory);
      saveChatHistory(finalHistory);

      // Speak reply if TTS is on
      if (data.reply) {
        speakText(data.reply);
      }

      // Check if lead captured simulation should trigger
      if (data.leadCaptured && data.leadCaptured.name && data.leadCaptured.contact) {
        setLeadAlert(data.leadCaptured);
        setLeadCaptured(true);
        sendLeadSilently(
          data.leadCaptured.name,
          data.leadCaptured.contact,
          data.leadCaptured.interest || "General",
          finalHistory
        );
      }
    } catch (err) {
      console.error(err);
      setIsTyping(false);
      const errorMsg: Message = {
        id: `msg-${Date.now()}-error`,
        role: "assistant",
        content: "I apologize, but I am experiencing a brief communication issue. Rest assured, your care is my highest priority. Please call our Buckhead practice directly at (404) 261-4941 or try sending your message again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Hover / Entry Tooltip */}
        {showNotificationBadge && !isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-navy-900 border border-gold-500/30 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 max-w-xs relative"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute -top-1 -right-1" />
            <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
            <span>Speak with our <strong>Elite Reception Concierge</strong></span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationBadge(false);
              }}
              className="text-gray-400 hover:text-white ml-1.5 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}

        {/* The floating chat button */}
        <motion.button
          id="receptionist-chat-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotificationBadge(false);
          }}
          className="bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border border-gold-500/30 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="receptionist-chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-4 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[520px] max-h-[calc(100dvh-120px)] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-navy-900 text-white px-5 py-4 flex items-center justify-between border-b border-gold-500/20 relative shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-navy-800 rounded-full flex items-center justify-center border-2 border-gold-400/50 shadow-md">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute bottom-0 right-0 border-2 border-navy-900" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm tracking-wide flex items-center gap-1.5">
                    Practice Receptionist
                  </h3>
                  <p className="text-[11px] text-gold-400 font-medium tracking-wider uppercase">
                    Atlanta Prosthodontics
                  </p>
                </div>
              </div>

              {/* Header Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleTts}
                  className={`p-3 sm:p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isTtsEnabled ? "bg-gold-500/20 text-gold-400" : "text-gray-400 hover:text-white"}`}
                  title={isTtsEnabled ? "Mute Speech Synthesis" : "Enable Speech Synthesis"}
                >
                  {isTtsEnabled ? <Volume2 className="w-5 h-5 sm:w-4 sm:h-4" /> : <VolumeX className="w-5 h-5 sm:w-4 sm:h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 sm:p-2 text-gray-400 hover:text-white rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Minimize Chat"
                >
                  <X className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* HIPAA Compliance Badge */}
            <div className="bg-navy-950/5 border-b border-gray-100 px-4 py-2 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>HIPAA Compliant • Patient Privacy Protected</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 relative">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === "user" 
                      ? "bg-navy-900 text-white rounded-tr-none" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-none font-light"
                  }`}>
                    {/* Preserve line breaks */}
                    {msg.content.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-2.5" : ""}>
                        {para}
                      </p>
                    ))}
                    <div className={`text-[10px] mt-1 text-right ${msg.role === "user" ? "text-white/60" : "text-gray-400"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3.5 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Interactive simulated clinic alert */}
              {leadAlert && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-3.5 text-xs text-emerald-950 space-y-2 mt-4 shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-6 -mt-6" />
                  <div className="flex items-center gap-2 text-emerald-800 font-bold tracking-wide uppercase text-[10px]">
                    <BellRing className="w-4 h-4 text-emerald-600 animate-bounce" />
                    <span>⚡ Real-Time Lead alert simulation</span>
                  </div>
                  <p className="font-light leading-relaxed">
                    This notification demonstrates exactly how the Buckhead clinic is instantly alerted to high-value leads:
                  </p>
                  <div className="bg-white/80 border border-emerald-200/40 rounded-lg p-2.5 space-y-1.5 font-mono text-[10px] text-gray-700">
                    <div><span className="text-emerald-800 font-bold">NAME:</span> {leadAlert.name}</div>
                    <div><span className="text-emerald-800 font-bold">CONTACT:</span> {leadAlert.contact}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-800 font-bold">INTEREST:</span> 
                      <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] font-bold">
                        {leadAlert.interest || "IMPLANT INTEREST"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-800 font-bold">PRIORITY:</span> 
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${leadAlert.urgency === "URGENT" ? "bg-rose-100 text-rose-800 animate-pulse" : "bg-blue-100 text-blue-800"}`}>
                        {leadAlert.urgency || "NORMAL"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-1 text-[10px] text-emerald-700 font-medium">
                    <span>Delivered securely to CRM</span>
                    <button 
                      onClick={() => setLeadAlert(null)}
                      className="hover:underline text-emerald-900"
                    >
                      Dismiss Alert
                    </button>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>



            {/* Microphone listening indicator */}
            {isListening && (
              <div className="bg-gold-50 px-4 py-2 flex items-center justify-between text-xs text-navy-900 border-t border-gold-200 animate-pulse">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                  <span>Listening... Speak clearly into your mic</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-navy-900 animate-[bounce_0.6s_infinite]" />
                  <div className="w-1 h-3 bg-navy-900 animate-[bounce_0.6s_infinite_150ms]" />
                  <div className="w-1 h-3 bg-navy-900 animate-[bounce_0.6s_infinite_300ms]" />
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none shrink-0 ${
                  isListening 
                    ? "bg-rose-500 text-white animate-pulse" 
                    : "bg-gray-100 hover:bg-gold-500/10 hover:text-gold-500 text-gray-500"
                }`}
                title={isListening ? "Stop listening" : "Speak your message"}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                placeholder="Type your reply here..."
                className="flex-1 bg-gray-50 hover:bg-gray-100/70 focus:bg-white text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-gold-500/40 border border-gray-200/80 transition-all font-light"
              />

              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none shrink-0 ${
                  inputValue.trim() 
                    ? "bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-900" 
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
