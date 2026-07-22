import { ShieldCheck, MapPin, Phone, Mail, Facebook, Linkedin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex flex-col mb-6">
              <img 
                src="https://i.ibb.co/yFdG6yT2/logo.png" 
                alt="Atlanta Prosthodontics" 
                className="h-[50px] w-auto object-contain object-left"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Elite specialty care specializing in aesthetic dentures, mini dental implants, and full mouth reconstruction.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Google Plus">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 11h-2v2h-2v-2H9v-2h2V9h2v2h2v2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-gold-500 transition-colors" title="Foursquare">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.89 3.03H6.55c-1.1 0-2.02.92-2.02 2.03v15.9l5.05-5.04h9.3c1.1 0 2.02-.9 2.02-2.02V5.06c0-1.11-.9-2.03-2-2.03zm-2.02 9.07H9.57v2.02H7.55V7.06h9.3v5.04z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Cities Around Atlanta Served</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Sandy Springs</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Decatur</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Dunwoody</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Roswell</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Stone Mountain</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Procedures</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Mini Dental Implants</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Aesthetic Dentures & Partials</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Thermoflex Acetal Resin</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Advanced Cosmetic Crowns</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Full Mouth Reconstruction</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <span>2812 Piedmont Rd<br />Atlanta GA, 30305</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <a href="tel:4046597696" className="hover:text-gold-500 transition-colors">(404) 659-7696</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <a href="tel:4048697618" className="hover:text-gold-500 transition-colors">(404) 869-7618</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@atlantaprosthodontics.com" className="hover:text-gold-500 transition-colors">info@atlantaprosthodontics.com</a>
              </li>
              <li className="flex items-start pt-2">
                <Clock className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Office Hours:<br />Tues - Fri 9 am - 5 pm</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atlanta Prosthodontics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
