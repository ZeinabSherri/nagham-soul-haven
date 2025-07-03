import React from 'react';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-r from-purple-dark to-sage-dark text-white py-12 px-4 sm:px-6 lg:px-8 bg-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Nagham Rasbieh</h3>
          <p className="text-purple-light text-lg">
            Emotional Healing • Subconscious Work • Energy Clearing
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
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
    </footer>;
};
export default Footer;