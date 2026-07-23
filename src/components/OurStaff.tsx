import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export default function OurStaff() {
  const staff = [
    {
      name: "Palak Patel",
      role: "Dental Hygienist",
    },
    {
      name: "Bert Butts",
      role: "Treatment / Financial Coordinator",
    },
    {
      name: "Selena Ennis",
      role: "Special Projects / Admin",
    },
    {
      name: "Gisele Gonzales",
      role: "Surgical Assistant / Implant Coordinator",
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4 text-gold-500">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Our Dedicated Team</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">Our Staff</h3>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Our experienced and caring staff is dedicated to providing you with the highest level of comfort and personalized care during every visit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-champagne-light rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full overflow-hidden border-2 border-gold-500 mb-6 flex items-center justify-center">
                {/* User should replace this src with actual staff image URLs */}
                <img 
                  src="https://images.unsplash.com/photo-1590611936760-eeb9bcabe615?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">{member.name}</h4>
              <p className="text-charcoal font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
