
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/new-healing-session', '_blank');
  };

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-soft-lavender shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <LogoProcessor 
            originalImageUrl="/lovable-uploads/aa0504d9-9244-495e-bdf6-b5ae3af2a200.png" 
            onProcessed={handleLogoProcessed} 
            className="h-20 w-auto" 
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">
              About Me
            </button>
            <button onClick={() => scrollToSection('services')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">
              Services
            </button>
            <button onClick={() => scrollToSection('consulting')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">What's Unique</button>
            <button onClick={() => scrollToSection('certifications')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full hover:bg-vibrant-purple">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button onClick={handleBookSession} className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-vibrant-purple hover:text-deep-purple transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-soft-lavender">
            <button onClick={() => scrollToSection('about')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              About Me
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('consulting')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              What Makes My Work Different?
            </button>
            <button onClick={() => scrollToSection('certifications')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Certifications
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Contact
            </button>
            <Button onClick={handleBookSession} className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-2 rounded-lg w-full font-bold hover:scale-105 transition-all duration-300">
              Book Session
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
