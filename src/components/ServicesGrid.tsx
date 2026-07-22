import { motion } from 'motion/react';
import { Activity, Smile, Layers, ArrowRight, Shield, Stethoscope, Star, Sparkles, PlusCircle } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Dentures',
      copy: 'Premium aesthetic dentures offering comfortable, natural-looking fits that blend seamlessly with your smile.',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Crowns & Bridges',
      copy: 'Advanced porcelain crowns and bridges designed to completely revitalize your smile\'s function and beauty.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Dental Implants',
      copy: 'Permanent, natural-looking replacements for missing teeth, restoring full function and preserving jawbone health.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Mini Dental Implants',
      copy: 'Secure loose dentures and restore bite function in fewer visits. A less invasive alternative to standard implants.',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Full Mouth Reconstruction',
      copy: 'Comprehensive restorative treatment combining multiple procedures to completely rebuild and restore your smile.',
    },
    {
      icon: <PlusCircle className="w-8 h-8" />,
      title: 'Dental Bonding',
      copy: 'Quick and effective cosmetic treatment to repair chipped, cracked, or discolored teeth using tooth-colored resin.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Porcelain Veneers',
      copy: 'Custom-crafted, ultra-thin porcelain shells designed to cover imperfections and create a flawless, dazzling smile.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Teeth Whitening',
      copy: 'Professional-grade whitening treatments to safely and effectively brighten your smile by several shades.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'TMJ Disorders Treatment',
      copy: 'Specialized therapy and custom oral appliances to relieve jaw pain, headaches, and restore proper joint function.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Our Specialties</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Buckhead Restorative Dentistry</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-champagne-light text-gold-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-navy-900 mb-4">{service.title}</h4>
              <p className="text-charcoal mb-6 leading-relaxed">
                {service.copy}
              </p>
              <a href="#booking" className="inline-flex items-center text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
