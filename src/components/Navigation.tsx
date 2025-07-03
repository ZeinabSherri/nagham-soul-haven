
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-amber-900">
            Nagham Rasbieh
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-amber-800 hover:text-rose-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-amber-800 hover:text-rose-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-amber-800 hover:text-rose-600 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-amber-800 hover:text-rose-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-amber-800 hover:text-rose-600 transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-800 hover:text-rose-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-orange-100">
            <button onClick={() => scrollToSection('about')} className="block text-amber-800 hover:text-rose-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-amber-800 hover:text-rose-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block text-amber-800 hover:text-rose-600 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-amber-800 hover:text-rose-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-amber-800 hover:text-rose-600 transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full w-full"
            >
              Book Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
