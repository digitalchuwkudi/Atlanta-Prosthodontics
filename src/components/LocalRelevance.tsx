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
            className="bg-navy-800 p-8 rounded-xl border border-white/10"
          >
            <div className="flex items-center justify-center mb-4 text-gold-500">
              <Heart className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-serif font-bold text-white">Community First</h3>
            </div>
            <p className="text-center text-lg text-champagne font-medium">
              Now Accepting WellCare Patients &amp; Offering Veteran Discounts.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
