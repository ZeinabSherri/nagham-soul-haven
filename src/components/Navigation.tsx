import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import LogoProcessor from './LogoProcessor';
import { scrollToSection } from '@/utils/scrollUtils';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>('');
  const handleScrollToSection = (sectionId: string) => {
    console.log(`Navigation: Scrolling to section ${sectionId}`);
    scrollToSection(sectionId);
    setIsOpen(false);
  };
  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
  };
  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };
  return <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-soft-lavender shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <LogoProcessor originalImageUrl="/lovable-uploads/aa0504d9-9244-495e-bdf6-b5ae3af2a200.png" onProcessed={handleLogoProcessed} className="h-20 sm:h-28 md:h-36 w-auto" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 flex-1 justify-center ml-8">
            <button onClick={() => handleScrollToSection('about-section')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple whitespace-nowrap">
              About 
            </button>
            <button onClick={() => handleScrollToSection('consulting')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple whitespace-nowrap">What's Unique</button>
            <button onClick={() => handleScrollToSection('services-title')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple">
              Services
            </button>
            <button onClick={() => handleScrollToSection('certifications-title')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple">
              Certifications
            </button>
            <button onClick={() => handleScrollToSection('testimonials')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple">
              Testimonials
            </button>
            <button onClick={() => handleScrollToSection('get-in-touch-title')} className="text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple">
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
        {isOpen && <div className="md:hidden py-4 space-y-4 border-t border-soft-lavender">
            <button onClick={() => handleScrollToSection('about-section')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">About </button>
            <button onClick={() => handleScrollToSection('services-title')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Services
            </button>
            <button onClick={() => handleScrollToSection('consulting')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              What Makes My Work Different?
            </button>
            <button onClick={() => handleScrollToSection('certifications-title')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Certifications
            </button>
            <button onClick={() => handleScrollToSection('testimonials')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Testimonials
            </button>
            <button onClick={() => handleScrollToSection('get-in-touch-title')} className="block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full hover:bg-vibrant-purple w-full text-left">
              Contact
            </button>
            <Button onClick={handleBookSession} className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-2 rounded-lg w-full font-bold hover:scale-105 transition-all duration-300">
              Book Session
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;