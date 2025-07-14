// navigation.tsx (REPLACEMENT CODE)

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import LogoProcessor from './LogoProcessor';
import { scrollToSection } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>('');
  const isMobile = useIsMobile();

  // Map section names to the title IDs
  const sectionTitleMap: Record<string, string> = {
    about: 'about-title',
    unique: 'consulting-title',
    services: 'services-title',
    certifications: 'certifications-title',
    testimonials: 'testimonials-title',
    contact: 'get-in-touch-title'
  };

  const handleScrollToSection = (section: string) => {
    const sectionId = sectionTitleMap[section] || section;
    scrollToSection(sectionId, 0); // Pass 0 offset to ensure title is flush with nav bar
    setIsOpen(false);
  };

  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
    setIsOpen(false);
  };

  const handleLogoProcessed = (processedUrl: string) => setLogoUrl(processedUrl);

  const createNavButton = (text: string, section: string, extraClass = '') => (
    <button
      onClick={() => handleScrollToSection(section)}
      className={`text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-110 px-3 py-2 rounded-full hover:bg-vibrant-purple whitespace-nowrap touch-manipulation ${extraClass}`}
      style={{ WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)' }}
    >
      {text}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-soft-lavender shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <LogoProcessor 
            originalImageUrl="/lovable-uploads/aa0504d9-9244-495e-bdf6-b5ae3af2a200.png" 
            onProcessed={handleLogoProcessed} 
            className="h-20 sm:h-28 md:h-36 w-auto" 
          />
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 flex-1 justify-center ml-8">
            {createNavButton('About', 'about')}
            {createNavButton("What's Unique", 'unique')}
            {createNavButton('Services', 'services')}
            {createNavButton('Certifications', 'certifications')}
            {createNavButton('Testimonials', 'testimonials')}
            {createNavButton('Contact', 'contact')}
          </div>
          <div className="hidden md:block">
            <Button 
              onClick={handleBookSession} 
              className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 touch-manipulation"
            >
              Book Session
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-vibrant-purple hover:text-deep-purple transition-colors p-2 touch-manipulation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              style={{ WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-soft-lavender">
            {createNavButton('About', 'about', 'w-full text-left')}
            {createNavButton("What's Unique", 'unique', 'w-full text-left')}
            {createNavButton('Services', 'services', 'w-full text-left')}
            {createNavButton('Certifications', 'certifications', 'w-full text-left')}
            {createNavButton('Testimonials', 'testimonials', 'w-full text-left')}
            {createNavButton('Contact', 'contact', 'w-full text-left')}
            <Button 
              onClick={handleBookSession} 
              className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-3 rounded-lg w-full font-bold hover:scale-105 transition-all duration-300 touch-manipulation mt-4"
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
