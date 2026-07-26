import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-champagne rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900 rounded-3xl p-10 md:p-16 shadow-2xl border border-navy-800"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Smile with Total Confidence?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience elite dental artistry right here in Atlanta. Contact our Buckhead office today to schedule your consultation.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4046597696" className="bg-gold-500 text-white hover:bg-white hover:text-gold-500 px-6 py-4 rounded font-semibold text-lg hover:-translate-y-1 transition-all duration-300 transform flex items-center justify-center min-h-[56px] shadow-lg">
                (404) 659-7696
              </a>
              <a href="tel:4048697618" className="bg-gold-500 text-white hover:bg-white hover:text-gold-500 px-6 py-4 rounded font-semibold text-lg hover:-translate-y-1 transition-all duration-300 transform flex items-center justify-center min-h-[56px] shadow-lg">
                (404) 869-7618
              </a>
            </div>
            <a href="#booking" className="bg-white text-gold-500 hover:bg-gold-500 hover:text-white border border-white/20 px-8 py-4 rounded font-semibold text-lg hover:-translate-y-1 transition-all duration-300 transform flex items-center justify-center min-h-[56px]">
              Request Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
