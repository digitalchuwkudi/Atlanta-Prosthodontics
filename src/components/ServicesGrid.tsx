import { motion } from 'motion/react';
import { Activity, Smile, Layers, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Mini Dental Implants',
      copy: 'Secure loose dentures and restore bite function in just 1 to 2 visits. A less invasive, highly affordable alternative to standard implants.',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Premium Dentures & Thermoflex',
      copy: 'Say goodbye to ugly metal clasps. Our advanced Thermoflex Acetal Resin offers incredibly comfortable, natural-looking partials that blend seamlessly.',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Full Mouth Reconstruction & Crowns',
      copy: 'Advanced porcelain veneers, crowns, bridges, and teeth whitening designed to completely revitalize your smile\'s function and beauty.',
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
              <a href="#appointment" className="inline-flex items-center text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
