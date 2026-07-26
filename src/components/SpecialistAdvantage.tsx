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
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">What is a Prosthodontist?</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">Buckhead Restorative Dentistry</h3>
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] lg:h-[600px] w-full bg-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,229,255,0.45)] hover:border-gold-500/25 border border-transparent group">
              <img 
                src="https://i.ibb.co/bM03bwgK/image.jpg" 
                alt="Dental Prosthodontist"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
