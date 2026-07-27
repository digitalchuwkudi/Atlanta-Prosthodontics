import { motion } from 'motion/react';
import { ShieldCheck, Award } from 'lucide-react';
// @ts-ignore
import heroImg from '../assets/images/prosthodontist_hero_bg_1785124448754.jpg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Prosthodontist crafting a dental restoration" 
          className="w-full h-full object-cover object-center image-render-sharp brightness-50 opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
          >
            Restore Your Smile With Atlanta's Leading Prosthodontic Specialists
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light"
          >
            Prosthodontics care Led by Dr. Blackburn II and Dr. Blackburn III in Buckhead, offering aesthetic dentures, dental implants, cosmetic crowns, bridges, and full-mouth restorations that look natural, feel comfortable, and are built to last.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#booking" className="bg-gold-500 text-white hover:bg-white hover:text-gold-500 px-8 py-4 rounded text-center font-semibold text-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 transform flex items-center justify-center min-h-[48px] shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </a>
            <a href="#services" className="bg-white text-navy-900 hover:bg-gold-500 hover:text-white px-8 py-4 rounded text-center font-semibold text-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 transform flex items-center justify-center min-h-[48px] shadow-md hover:shadow-lg">
              Explore Our Services
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/20"
          >
            <img src="https://i.ibb.co/BHftVdRf/ada-logo.png" alt="ADA Recognized" className="h-16 w-auto object-contain bg-white/90 p-1.5 rounded transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(0,229,255,0.45)]" />
            <img src="https://i.ibb.co/S7wtsJ7b/hinman-dental-meeting.jpg" alt="Hinman Dental Meeting" className="h-16 w-auto object-contain rounded transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(0,229,255,0.45)]" />
            <img src="https://i.ibb.co/fG9DC7pv/national-dental-association.png" alt="National Dental Association" className="h-16 w-auto object-contain bg-white/90 p-1.5 rounded transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(0,229,255,0.45)]" />
            <img src="https://i.ibb.co/7sv5TRw/georgia-dental-association-logo.png" alt="Georgia Dental Association" className="h-16 w-auto object-contain bg-white/90 p-1.5 rounded transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_15px_rgba(0,229,255,0.45)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
