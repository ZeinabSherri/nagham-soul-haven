import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import LogoProcessor from './LogoProcessor';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-purple-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <LogoProcessor 
              originalImageUrl="/lovable-uploads/96c45d35-a86f-45f2-bb90-1fdb7c1455c1.png"
              onProcessed={handleLogoProcessed}
              className="h-10 w-auto"
            />
            <div className="text-2xl font-light text-purple-dark">
              Nagham Rasbieh
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('consulting')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              Consulting
            </button>
            <button onClick={() => scrollToSection('certifications')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-purple-medium">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('consulting')} 
              className="bg-sage-light hover:bg-sage-dark text-purple-dark px-6 py-2 rounded-md font-light transition-all duration-300 hover:scale-105"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-medium hover:text-purple-dark transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-purple-light">
            <button onClick={() => scrollToSection('about')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('consulting')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              Consulting
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-purple-medium hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-medium w-full text-left">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('consulting')} 
              className="bg-sage-light hover:bg-sage-dark text-purple-dark px-6 py-2 rounded-md w-full font-light hover:scale-105 transition-all duration-300"
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
