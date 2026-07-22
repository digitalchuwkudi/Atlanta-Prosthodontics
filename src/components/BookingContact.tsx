import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Clock } from 'lucide-react';
// Note: Google Plus and Foursquare icons are not available in lucide-react by default
// Let's use generic custom icons or text for those if needed, or similar icons. 
// We will use UserPlus for Google Plus and Map for Foursquare as fallbacks, or just create simple SVGs.

export default function BookingContact() {
  return (
    <section id="booking" className="py-24 bg-champagne-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Schedule a Consultation</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Book Your Appointment</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-navy-900 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-navy-900 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" placeholder="(404) 555-0123" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-2">Service of Interest</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors bg-white">
                  <option>Dental Implants</option>
                  <option>Aesthetic Dentures</option>
                  <option>Cosmetic Crowns</option>
                  <option>Full Mouth Reconstruction</option>
                  <option>General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none" placeholder="Tell us about your dental needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gold-500 hover:bg-gold-400 text-white font-bold py-4 rounded-lg transition-colors text-lg mt-4">
                Request Appointment
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-navy-900 text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-serif font-bold mb-8">Contact Information</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gold-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Our Location</h5>
                      <p className="text-gray-300">2812 Piedmont Rd<br />Atlanta GA, 30305</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-gold-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Call Us</h5>
                      <a href="tel:4046597696" className="block text-gray-300 hover:text-gold-500 transition-colors">(404) 659-7696</a>
                      <a href="tel:4048697618" className="block text-gray-300 hover:text-gold-500 transition-colors mt-1">(404) 869-7618</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-gold-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Email</h5>
                      <a href="mailto:info@atlantaprosthodontics.com" className="block text-gray-300 hover:text-gold-500 transition-colors">info@atlantaprosthodontics.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-gold-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Office Hours</h5>
                      <p className="text-gray-300">Tues - Fri 9 am - 5 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h5 className="font-semibold text-lg mb-4">Connect With Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Google Plus">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 11h-2v2h-2v-2H9v-2h2V9h2v2h2v2z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Foursquare">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.89 3.03H6.55c-1.1 0-2.02.92-2.02 2.03v15.9l5.05-5.04h9.3c1.1 0 2.02-.9 2.02-2.02V5.06c0-1.11-.9-2.03-2-2.03zm-2.02 9.07H9.57v2.02H7.55V7.06h9.3v5.04z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
