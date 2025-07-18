import React from 'react';
import { Instagram, Youtube, Heart, Facebook } from 'lucide-react';
import LogoProcessor from './LogoProcessor';
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9613633483', '_blank');
  };
  return <footer className="bg-white border-t border-deep-purple/10 text-deep-purple py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          
          <h3 className="text-2xl font-bold mb-2 text-deep-purple">Nagham The Coach</h3>
          <p className="text-dark-olive text-lg">Emotional Healing • Mind-Body Transformation • Energy Clearing</p>
        </div>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <LogoProcessor 
              originalImageUrl="/lovable-uploads/aa0504d9-9244-495e-bdf6-b5ae3af2a200.png"
              onProcessed={() => {}}
              className="h-24 sm:h-28 md:h-32 w-auto"
            />
          </div>
          <h4 className="text-lg font-semibold mb-4 text-deep-purple">Let's stay connected:</h4>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/naghamthecoach/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-deep-purple hover:text-vibrant-purple transition-colors duration-300 transform hover:scale-105">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/nagham.rasbieh" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-deep-purple hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@naghamthecoach" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-deep-purple hover:text-black transition-colors duration-300 transform hover:scale-105">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.183-.11c-3.516 0-6.368 2.852-6.368 6.367 0 3.516 2.852 6.368 6.368 6.368 3.516 0 6.368-2.852 6.368-6.368V7.749a8.636 8.636 0 0 0 4.1 1.039v-3.445a4.792 4.792 0 0 1-.952-.187Z" />
              </svg>
            </a>
            
            <a href="https://www.youtube.com/@NaghamTheCoach" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-deep-purple hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
              <Youtube className="w-6 h-6" />
            </a>
            <button onClick={handleWhatsAppClick} className="flex items-center space-x-2 text-deep-purple hover:text-green-600 transition-colors duration-300 transform hover:scale-105">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-t border-deep-purple/20 pt-8 text-center">
          <p className="text-lg font-medium text-deep-purple mb-4 italic">
            "Healing doesn't have to be hard. It just has to be honest."
          </p>
          <p className="text-dark-olive mb-2">© 2025 Nagham Rasbieh. All rights reserved.</p>
          <p className="text-deep-purple flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-vibrant-purple" /> for healing and transformation
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;