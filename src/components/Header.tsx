
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5371994a-ea13-4b33-a94e-dd79a9caec70.png" 
              alt="Safe Lock Logo"
              className="w-10 h-10 ml-2"
            />
            <span className="text-xl font-bold text-slate-900 mr-2">Safe Lock</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              ראשי
            </button>
            <button 
              onClick={() => scrollToSection('safes')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              סוגי כספות
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              שירותים
            </button>
            <button 
              onClick={() => scrollToSection('articles')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              מאמרים
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              לקוחות
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-900 transition-colors"
            >
              צור קשר
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:050-1234567" 
              className="flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4 ml-2" />
              050-1234567
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
