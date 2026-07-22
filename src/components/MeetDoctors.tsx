import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function MeetDoctors() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500 translate-x-4 translate-y-4 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. B.A. Blackburn II and Dr. B.A. Blackburn III" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
              Decades of Expertise.<br />One Shared Goal.
            </h2>
            <blockquote className="border-l-4 border-gold-500 pl-4 py-1 mb-8 italic text-lg text-navy-800 font-serif">
              "To provide you with the very best in quality dental care and superior customer service."
            </blockquote>
            <p className="text-charcoal leading-relaxed mb-8">
              Dr. B.A. Blackburn II and Dr. B.A. Blackburn III combine advanced laboratory artistry with state-of-the-art restorative techniques. As your trusted Atlanta Prosthodontist team, we are dedicated to excellence in every smile we restore.
            </p>
            
            <ul className="space-y-4">
              {[
                'General dental needs & hygiene visits',
                'Complex reconstruction cases',
                'Advanced Cosmetic Crowns & Bridges',
                'Personal injury restorations',
                'Dedicated Veterans discounts available'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                  <span className="text-charcoal font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
