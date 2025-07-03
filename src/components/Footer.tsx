import React from 'react';
import { Instagram, Facebook, Youtube, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Nagham Rasbieh</h3>
          <p className="text-purple-light text-lg">
            Emotional Healing • Subconscious Work • Energy Clearing
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.facebook.com/NaghamTheCoach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/naghamthecoach/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com/NaghamTheCoach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://www.tiktok.com/@naghamthecoach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.142-1.935-1.142-3.338h-2.515v13.917a3.72 3.72 0 0 1-1.814 3.193 3.729 3.729 0 0 1-3.967.289 3.704 3.704 0 0 1-2.017-3.289c0-2.061 1.673-3.734 3.734-3.734.387 0 .764.062 1.121.18v-2.586a6.27 6.27 0 0 0-1.121-.099C5.03 8.871 2 11.901 2 15.891c0 2.433 1.203 4.584 3.047 5.891.849.601 1.88.949 2.967.949 2.99 0 5.421-2.431 5.421-5.421V9.562a8.667 8.667 0 0 0 5.074 1.621V8.611c-.849 0-1.644-.258-2.293-.711-.522-.362-.959-.849-1.279-1.431-.174-.318-.318-.653-.431-1.003-.107-.332-.18-.678-.185-1.024z"/>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@NaghamTheCoach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-purple-light mb-2">
            © 2024 Nagham Rasbieh. All rights reserved.
          </p>
          <p className="text-white flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-purple-light" /> for healing and transformation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
