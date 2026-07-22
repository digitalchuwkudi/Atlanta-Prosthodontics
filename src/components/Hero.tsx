import { motion } from 'motion/react';
import { ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Premium Dental Clinic Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
          >
            Reclaim Your Confidence With Atlanta's Specialists in Restorative & Aesthetic Dentistry.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light"
          >
            Led by Dr. Blackburn II and Dr. Blackburn III, Atlanta Prosthodontics delivers elite, ADA-recognized specialty care in Buckhead—from advanced implants to natural-looking aesthetic dentures.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#appointment" className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded text-center font-semibold text-lg transition-colors flex items-center justify-center min-h-[48px]">
              Schedule a Consultation
            </a>
            <a href="#services" className="border border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 rounded text-center font-semibold text-lg transition-all flex items-center justify-center min-h-[48px]">
              Explore Our Procedures
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 pt-6 border-t border-white/20"
          >
            <div className="flex items-center text-white/90">
              <ShieldCheck className="w-5 h-5 text-gold-500 mr-2" />
              <span className="text-sm font-medium tracking-wide">ADA Recognized Specialists</span>
            </div>
            <div className="flex items-center text-white/90">
              <Award className="w-5 h-5 text-gold-500 mr-2" />
              <span className="text-sm font-medium tracking-wide">Georgia Dental Association</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
