import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function SpecialistAdvantage() {
  return (
    <section id="prosthodontist" className="py-24 bg-champagne-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-gold-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
              Why Choose a Dental Prosthodontist?
            </h2>
            <div className="text-lg text-charcoal leading-relaxed font-light space-y-6 text-left">
              <p>
                A prosthodontist is a dental specialist in replacing missing teeth and/or restoring damaged teeth. Prosthodontics is an official specialty recognized by the ADA and is one of only two dental specialties that focuses on cosmetics or esthetics.
              </p>
              <p>
                In layman's terms, if you are considering having dental implants, dentures, porcelain veneers, crowns, or any other prosthetic dental device in your mouth to restore your winning smile, don't just see any dentist. See a prosthodontist!
              </p>
              <p>
                Prosthodontists are required to have a dental degree AND an additional 3-4 years of postgraduate specialty training in an ADA accredited program. While there are more than 170,000 dentists in the United States, less than 2% of them are prosthodontists.
              </p>
              <p>
                Many general dentists call themselves "cosmetic dentists," but cosmetic dentistry is NOT a specialty. Prosthodontics IS a specialty and focuses on esthetics. It is an art and a skill to keep teeth esthetically pleasing while using prosthetic devices.
              </p>
              <p>
                The Blackburns are a rare prestigious breed. If anybody is capable of giving you a smile makeover, Drs. Blackburn and Blackburn are, and they both are available to restore your winning smile at their dentistry in the heart of Atlanta, GA.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[600px]">
              {/* User should replace this src with their actual image URL from ibb.co (https://ibb.co/bM03bwgK) */}
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dental Prosthodontist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
