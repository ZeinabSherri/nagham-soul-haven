
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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Nagham Rasbieh
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md w-full font-medium"
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
