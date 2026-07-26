import { ShieldCheck, MapPin, Phone, Mail, Facebook, Linkedin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center justify-items-center">
          
          <div className="flex flex-col items-center text-center max-w-sm">
            <a href="#" className="flex flex-col mb-6 items-center">
              <img 
                src="https://i.ibb.co/yFdG6yT2/logo.png" 
                alt="Atlanta Prosthodontics" 
                className="h-[50px] w-auto object-contain object-center"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Elite specialty care specializing in aesthetic dentures, mini dental implants, and full mouth reconstruction.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <a href="https://www.facebook.com/atlantaprosthodontics" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-sm" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/user/AtlantaProsthodontic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-sm" title="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.097C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.566C1.576 4.339.774 5.14.502 6.163.07 7.997.07 11.837.07 11.837s0 3.84.432 5.674c.272 1.022 1.074 1.824 2.096 2.097 1.844.566 9.402.566 9.402.566s7.558 0 9.402-.566c1.022-.273 1.824-1.075 2.096-2.097.433-1.834.433-5.674.433-5.674s0-3.84-.433-5.674zM9.545 15.568V8.106L16.031 11.8l-6.486 3.768z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/atlanta-prosthodontics" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-sm" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://foursquare.com/v/atlanta-prosthodontics/4d7a868fbd6ca1433152069e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gold-500 hover:-translate-y-1 transition-all duration-300 transform shadow-sm" title="Foursquare">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.657 11.233h-2.314V16.31h-2.12v-9.61h5.811V8.625H11.343v1.942h2.314v1.666z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Cities Around Atlanta Served</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Sandy Springs</li>
              <li>Decatur</li>
              <li>Dunwoody</li>
              <li>Roswell</li>
              <li>Stone Mountain</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500 flex flex-col items-center">
              <li className="flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 mb-1.5 text-gold-500 flex-shrink-0" />
                <span>2812 Piedmont Rd<br />Atlanta GA, 30305</span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Phone className="w-5 h-5 mb-1.5 text-gold-500 flex-shrink-0" />
                <a href="tel:4046597696" className="hover:text-gold-500 transition-colors">(404) 659-7696</a>
              </li>
              <li className="flex flex-col items-center text-center">
                <Phone className="w-5 h-5 mb-1.5 text-gold-500 flex-shrink-0" />
                <a href="tel:4048697618" className="hover:text-gold-500 transition-colors">(404) 869-7618</a>
              </li>
              <li className="flex flex-col items-center text-center">
                <Mail className="w-5 h-5 mb-1.5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@atlantaprosthodontics.com" className="hover:text-gold-500 transition-colors">info@atlantaprosthodontics.com</a>
              </li>
              <li className="flex flex-col items-center text-center pt-1">
                <Clock className="w-5 h-5 mb-1.5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-500">Office Hours:<br />Tues - Fri 9 am - 5 pm</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 text-center md:text-left">
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
