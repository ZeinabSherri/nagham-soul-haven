
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

  const handleScrollToSection = (titleId: string) => {
    console.log(`Navigation: Scrolling to title ${titleId}`);
    scrollToSection(titleId);
    setIsOpen(false); // Close mobile menu after navigation
  };

  const handleBookSession = () => {
        console.log('HeroSection: Scrolling to services section');
    scrollToSection('services-title');
    setIsOpen(false); // Close mobile menu after action
  };

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  // Enhanced mobile-friendly button with better touch handling and direct title targeting
  const createMobileNavButton = (text: string, titleId: string, extraClass = '') => (
    <button
      onClick={() => handleScrollToSection(titleId)}
      className={`block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-3 rounded-full hover:bg-vibrant-purple w-full text-left touch-manipulation ${extraClass}`}
      style={{ WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)' }}
    >
      {text}
    </button>
  );

  // Enhanced desktop nav button with better hover states and title targeting
  const createDesktopNavButton = (text: string, titleId: string, extraClass = '') => (
    <button
      onClick={() => handleScrollToSection(titleId)}
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
            className="h-12 w-auto" 
          />
          
          {/* Desktop Navigation - Direct title targeting */}
          <div className="hidden md:flex space-x-6 flex-1 justify-center ml-8">
            {createDesktopNavButton('About', 'about-title')}
            {createDesktopNavButton("What's Unique", 'consulting-title')}
            {createDesktopNavButton('Services', 'services-title')}
            {createDesktopNavButton('Certifications', 'certifications-title')}
            {createDesktopNavButton('Testimonials', 'testimonials-title')}
            {createDesktopNavButton('Contact', 'contact-form')}
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

        {/* Mobile Navigation - Direct title targeting */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-soft-lavender">
            {createMobileNavButton('About', 'about-title')}
            {createMobileNavButton("What's Unique", 'consulting-title')}
            {createMobileNavButton('Services', 'services-title')}
            {createMobileNavButton('Certifications', 'certifications-title')}
            {createMobileNavButton('Testimonials', 'testimonials-title')}
            {createMobileNavButton('Contact', 'contact-form')}
            
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
