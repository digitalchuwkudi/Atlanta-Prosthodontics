import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold-500/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-champagne-light/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Client Success Stories</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">What Our Patients Say</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Written Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-1 bg-navy-800 rounded-2xl p-8 md:p-10 border border-white/10 relative h-full flex flex-col"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-500/20" />
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-300 italic mb-8 flex-grow leading-relaxed">
              "Had a great experience with Dr. Blackburn and his wonderful staff. Very professional and his expertise in the field is unsurpassed. I would recommend his services to anyone, and have suggested that many of my patients see him as well. No regrets...just great results!"
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-lg">Dr. Titus Duncan</p>
                <p className="text-gold-500 text-sm font-medium">Plastic Surgeon</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500/30 hover:border-[#00E5FF]/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] shrink-0 ml-4 shadow-md transition-all duration-300">
                <img 
                  src="https://i.ibb.co/HDhy5Wn6/image.jpg" 
                  alt="Dr. Titus Duncan" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 lg:col-span-1 bg-navy-800 rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col h-full"
          >
            <div className="relative w-full pb-[70%] h-0 rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe 
                src="https://www.youtube.com/embed/0ESDIjtzhco?rel=0&showinfo=0" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allowFullScreen
                title="Atlanta Denture Patient Testimonial"
              ></iframe>
            </div>
            <div className="mt-auto">
              <p className="font-bold text-white text-lg">Denture Patient</p>
              <p className="text-gold-500 text-sm font-medium">Atlanta, GA</p>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 lg:col-span-1 bg-navy-800 rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col h-full"
          >
            <div className="relative w-full pb-[70%] h-0 rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe 
                src="https://www.youtube.com/embed/620NXNfj8-A?rel=0&showinfo=0" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allowFullScreen
                title="Simon Cohen Video Testimonial - Crowns and Veneers"
              ></iframe>
            </div>
            <div className="mt-auto">
              <p className="font-bold text-white text-lg">Simon Cohen</p>
              <p className="text-gold-500 text-sm font-medium">Crowns & Veneers</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
