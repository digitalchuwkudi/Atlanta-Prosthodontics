import { motion } from 'motion/react';
import { MapPin, Heart } from 'lucide-react';

export default function LocalRelevance() {
  return (
    <section className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4 text-gold-500">
              <MapPin className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold uppercase tracking-wider">Convenient Intown Buckhead Location</h3>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              Proudly serving <span className="text-white font-semibold">Buckhead, Sandy Springs, Decatur, Dunwoody, Roswell, and Stone Mountain.</span> Your local Buckhead Cosmetic Dentist for advanced specialty care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gold-500 p-8 rounded-xl border border-gold-500/20 text-navy-950 shadow-lg shadow-gold-500/10"
          >
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl font-bold uppercase tracking-wider text-navy-950">COMMUNITY FIRST</h3>
            </div>
            <p className="text-center text-lg font-bold mb-4 text-navy-950 leading-snug">
              We are accepting WellCare Patients and are offering Veterans Discounts.
            </p>
            <p className="text-center text-sm font-semibold text-navy-950 mb-4">
              We accept cash, checks, debit, Visa, Mastercard, and American Express.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-5">
              {/* Visa */}
              <div className="bg-white px-3.5 py-1.5 rounded-lg shadow-md border border-navy-900/10 flex items-center justify-center h-10 w-16 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                <span className="text-[#1A1F71] font-extrabold italic text-base tracking-wide select-none">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white px-3.5 py-1.5 rounded-lg shadow-md border border-navy-900/10 flex items-center justify-center h-10 w-16 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="flex items-center -space-x-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#EB001B] opacity-90"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
                </div>
              </div>
              {/* Amex */}
              <div className="bg-[#0070D1] px-3 py-1.5 rounded-lg shadow-md border border-white/10 flex items-center justify-center h-10 w-16 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                <span className="text-white font-bold text-xs tracking-wider uppercase select-none">AMEX</span>
              </div>
              {/* Debit */}
              <div className="bg-navy-900 px-3 py-1.5 rounded-lg shadow-md border border-white/10 flex items-center justify-center h-10 w-16 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                <span className="text-gold-500 font-bold text-[10px] tracking-widest uppercase select-none">DEBIT</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
