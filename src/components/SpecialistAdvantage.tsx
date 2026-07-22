import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function SpecialistAdvantage() {
  return (
    <section id="prosthodontist" className="py-24 bg-champagne-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-gold-500">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
            Why Choose an ADA-Recognized Prosthodontist?
          </h2>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed font-light">
            A prosthodontist is a highly skilled dental specialist with years of additional advanced training beyond general dentistry. When it comes to complex cosmetic procedures, implants, and full mouth reconstruction, you aren't just seeing a dentist—you're seeing an <span className="font-semibold text-navy-900">architect of the smile</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
