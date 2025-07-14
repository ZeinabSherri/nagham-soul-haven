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

  const handleScrollToSection = (sectionId: string) => {
    console.log(`Navigation: Scrolling to section ${sectionId}`);
    scrollToSection(sectionId);
    setIsOpen(false); // Close mobile menu after navigation
  };

  const handleBookSession = () => {
    console.log('Navigation: Opening Calendly booking page');
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
    setIsOpen(false); // Close mobile menu after action
  };

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  // Nav helper
  const getSectionId = (section: string) => {
    switch (section) {
      case 'about': return 'about-title';
      case 'unique': return 'consulting-title';
      case 'services': return 'services-title';
      case 'certifications': return 'certifications-title';
      case 'testimonials': return 'testimonials-title';
      case 'contact': return 'get-in-touch-title';
      default: return section;
    }
  };

  // Mobile-friendly button
  const createMobileNavButton = (text: string, sectionId: string, extraClass = '') => (
    <button
      onClick={() => handleScrollToSection(sectionId)}
      className={`block text-vibrant-purple hover:text-white font-medium hover:font-bold transition-all duration-300 hover:scale-105 px-4 py-3 rounded-full hover:bg-vibrant-purple w-full text-left touch-manipulation ${extraClass}`}
      style={{ WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)' }}
    >
      {text}
    </button>
  );

  // Desktop nav button
  const createDesktopNavButton = (text: string, sectionId: string, extraClass = '') => (
    <button
      onClick={() => handleScrollToSection(sectionId)}
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
            {createDesktopNavButton('About', getSectionId('about'))}
            {createDesktopNavButton("What's Unique", getSectionId('unique'))}
            {createDesktopNavButton('Services', getSectionId('services'))}
            {createDesktopNavButton('Certifications', getSectionId('certifications'))}
            {createDesktopNavButton('Testimonials', getSectionId('testimonials'))}
            {createDesktopNavButton('Contact', getSectionId('contact'))}
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
            {createMobileNavButton('About', getSectionId('about'))}
            {createMobileNavButton("What's Unique", getSectionId('unique'))}
            {createMobileNavButton('Services', getSectionId('services'))}
            {createMobileNavButton('Certifications', getSectionId('certifications'))}
            {createMobileNavButton('Testimonials', getSectionId('testimonials'))}
            {createMobileNavButton('Contact', getSectionId('contact'))}
            
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
