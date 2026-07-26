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
                  <option>Dentures</option>
                  <option>Crowns & Bridges</option>
                  <option>Mini Dental Implants</option>
                  <option>Full Mouth Reconstruction</option>
                  <option>Dental Bonding</option>
                  <option>Porcelain Veneers</option>
                  <option>Teeth Whitening</option>
                  <option>TMJ Disorders Treatment</option>
                  <option>General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none" placeholder="Tell us about your dental needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gold-500 border-2 border-gold-500 text-white font-bold py-4 rounded-lg hover:bg-navy-900 hover:text-gold-500 hover:border-navy-900 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform active:translate-y-0 text-lg mt-4">
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
            <div className="bg-navy-900 text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between text-center items-center">
              <div className="w-full flex flex-col items-center">
                <h4 className="text-2xl font-serif font-bold mb-8">Contact Information</h4>
                
                <div className="space-y-8 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-gold-500 mb-2 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Our Location</h5>
                      <p className="text-gray-300">2812 Piedmont Rd<br />Atlanta GA, 30305</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-gold-500 mb-2 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Call Us</h5>
                      <a href="tel:4046597696" className="block text-gray-300 hover:text-gold-500 transition-colors">(404) 659-7696</a>
                      <a href="tel:4048697618" className="block text-gray-300 hover:text-gold-500 transition-colors mt-1">(404) 869-7618</a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-gold-500 mb-2 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Email</h5>
                      <a href="mailto:info@atlantaprosthodontics.com" className="block text-gray-300 hover:text-gold-500 transition-colors">info@atlantaprosthodontics.com</a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Clock className="w-6 h-6 text-gold-500 mb-2 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-lg mb-1">Office Hours</h5>
                      <p className="text-gray-300">Tues - Fri 9 am - 5 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 w-full flex flex-col items-center">
                <h5 className="font-semibold text-lg mb-4">Connect With Us</h5>
                <div className="flex space-x-3 justify-center">
                  <a href="https://www.facebook.com/atlantaprosthodontics" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-md" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/user/AtlantaProsthodontic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-md" title="YouTube">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.097C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.566C1.576 4.339.774 5.14.502 6.163.07 7.997.07 11.837.07 11.837s0 3.84.432 5.674c.272 1.022 1.074 1.824 2.096 2.097 1.844.566 9.402.566 9.402.566s7.558 0 9.402-.566c1.022-.273 1.824-1.075 2.096-2.097.433-1.834.433-5.674.433-5.674s0-3.84-.433-5.674zM9.545 15.568V8.106L16.031 11.8l-6.486 3.768z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/atlanta-prosthodontics" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-md" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://foursquare.com/v/atlanta-prosthodontics/4d7a868fbd6ca1433152069e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-md" title="Foursquare">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.657 11.233h-2.314V16.31h-2.12v-9.61h5.811V8.625H11.343v1.942h2.314v1.666z"/>
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
