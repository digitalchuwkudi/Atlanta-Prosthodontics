import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

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
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">ADA Recognized Specialist</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-500 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About the Doctors</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Procedures & Services</a></li>
              <li><a href="#prosthodontist" className="hover:text-gold-500 transition-colors">What is a Prosthodontist?</a></li>
              <li><a href="#patients" className="hover:text-gold-500 transition-colors">New Patient Information</a></li>
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
