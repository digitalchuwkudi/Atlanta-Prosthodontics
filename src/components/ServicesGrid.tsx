import { motion } from 'motion/react';
import { Activity, Smile, Layers, ArrowRight, Shield, Crown, Gem, Sparkles, PlusCircle } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Dentures',
      copy: 'Premium aesthetic dentures offering comfortable, natural-looking fits that blend seamlessly with your smile. Crafted from advanced, durable materials, our custom complete and partial dentures are designed to restore full chewing ability, support your facial muscles, and enhance your confidence with a secure, slip-free fit.',
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Crowns & Bridges',
      copy: 'Advanced porcelain crowns and bridges designed to completely revitalize your smile\'s function and beauty. Each restoration is custom-milled to match the precise shade, translucency, and contours of your natural teeth, protecting weak teeth and bridging gaps seamlessly to support long-term alignment.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Dental Implants',
      copy: 'Permanent, natural-looking replacements for missing teeth, restoring full function and preserving jawbone health. Acting as a replacement tooth root, these biocompatible titanium posts fuse directly with your bone, providing an incredibly stable foundation for single crowns, bridges, or full-arch restorations.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Mini Dental Implants',
      copy: 'Secure loose dentures and restore bite function in fewer visits. A less invasive alternative to standard implants, mini implants can be placed with minimal recovery time, immediately stabilizing lower dentures so you can eat, speak, and smile with confidence on the very same day.',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Full Mouth Reconstruction',
      copy: 'Comprehensive restorative treatment combining multiple procedures to completely rebuild and restore your smile. Tailored to complex cases involving severe wear, decay, or trauma, we orchestrate a personalized plan of implants, crowns, and therapy to harmonize your bite, health, and aesthetics.',
    },
    {
      icon: <PlusCircle className="w-8 h-8" />,
      title: 'Dental Bonding',
      copy: 'Quick and effective cosmetic treatment to repair chipped, cracked, or discolored teeth using tooth-colored composite resin. Sculpted and polished directly by our skilled specialists, bonding provides a cost-effective, single-visit solution that perfectly blends with your adjacent enamel.',
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Porcelain Veneers',
      copy: 'Custom-crafted, ultra-thin porcelain shells designed to cover imperfections and create a flawless, dazzling smile. Handcrafted to optimize color, length, and shape, veneers offer a stain-resistant solution for correcting minor gaps, stubborn discoloration, or minor misalignment.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Teeth Whitening',
      copy: 'Professional-grade whitening treatments to safely and effectively brighten your smile by several shades. Utilizing highly concentrated active ingredients and advanced curing light systems, our in-office and take-home treatments lift deep stains without damaging enamel or causing sensitivity.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'TMJ Disorders Treatment',
      copy: 'Specialized therapy and custom oral appliances to relieve jaw pain, chronic headaches, and restore proper joint function. By analyzing your neuromuscular bite alignment, we design precise orthotics to reduce joint compression, alleviate facial muscle tension, and protect teeth from grinding.',
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
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto bg-champagne-light text-gold-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-navy-900 mb-4">{service.title}</h4>
              <p className="text-charcoal leading-relaxed">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
