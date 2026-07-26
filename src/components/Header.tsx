import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href: string; subtitle?: string }[] = [
    { name: 'About Us', href: '#about' },
    { name: 'Dental Services', href: '#services' },
    { name: 'What is a Prosthodontist?', href: '#prosthodontist' },
    { name: 'Contact Us', href: '#booking' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="flex flex-col">
            <img 
              src="https://i.ibb.co/yFdG6yT2/logo.png" 
              alt="Atlanta Prosthodontics" 
              className="h-[50px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center">
              <a href={link.href} className="text-sm font-medium text-charcoal hover:text-gold-500 transition-colors">
                {link.name}
              </a>
              {link.subtitle && (
                <span className="text-[10px] text-gray-500 mt-0.5">{link.subtitle}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex flex-col items-end space-y-0.5">
            <a href="tel:4046597696" className="flex items-center text-navy-900 font-bold text-base xl:text-lg hover:text-gold-500 transition-colors">
              <Phone className="w-4 h-4 mr-1.5 text-gold-500" />
              (404) 659-7696
            </a>
            <a href="tel:4048697618" className="flex items-center text-navy-900 font-bold text-base xl:text-lg hover:text-gold-500 transition-colors">
              <Phone className="w-4 h-4 mr-1.5 text-gold-500" />
              (404) 869-7618
            </a>
          </div>
          <a href="#booking" className="bg-navy-900 text-white px-8 py-3.5 rounded font-bold text-base hover:bg-gold-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 transform shadow-md hover:shadow-lg whitespace-nowrap">
            Request Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <a href="tel:4046597696" className="p-2 text-navy-900 bg-champagne-light rounded-full">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-navy-900 p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <a href={link.href} className="text-base font-medium text-navy-900 hover:text-gold-500" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                  {link.subtitle && (
                    <span className="text-xs text-gray-500 mt-1">{link.subtitle}</span>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a href="tel:4046597696" className="flex items-center justify-center w-full bg-champagne-light text-navy-900 px-6 py-3 rounded font-bold text-lg">
                  <Phone className="w-5 h-5 mr-2 text-gold-500" />
                  (404) 659-7696
                </a>
                <a href="tel:4048697618" className="flex items-center justify-center w-full bg-champagne-light text-navy-900 px-6 py-3 rounded font-bold text-lg">
                  <Phone className="w-5 h-5 mr-2 text-gold-500" />
                  (404) 869-7618
                </a>
                <a href="#booking" className="flex items-center justify-center w-full bg-navy-900 text-white px-6 py-3.5 rounded font-bold text-lg hover:bg-gold-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 transform shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
