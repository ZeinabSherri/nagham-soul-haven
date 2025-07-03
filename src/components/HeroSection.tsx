
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-dark via-purple-medium to-sage-dark relative overflow-hidden">
      {/* Background decoration circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-light/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-sage-light/15 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-very-light/30 rounded-full blur-lg"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text px-4 py-2 inline-block">
                Inner World!
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Welcome to healing with Nagham! I'll help you master:
            </p>

            {/* Key points list */}
            <div className="mb-10 space-y-3">
              <div className="flex items-center text-white/90 text-lg">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Subconscious Pattern Release</span>
              </div>
              <div className="flex items-center text-white/90 text-lg">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Nervous System Regulation</span>
              </div>
              <div className="flex items-center text-white/90 text-lg">
                <span className="text-yellow-400 mr-3">✓</span>
                <span>Deep Emotional Healing</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Discover My Services →
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-light/30 to-sage-light/30 rounded-3xl blur-3xl transform rotate-6"></div>
              
              {/* Main content box */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Ready to Begin?
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Start your journey to inner peace and emotional freedom today.
                  </p>
                  
                  {/* Feature icons */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-3">
                        <Heart className="w-8 h-8 text-purple-dark" />
                      </div>
                      <p className="text-white/80 text-sm">Healing</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-3">
                        <Shield className="w-8 h-8 text-purple-dark" />
                      </div>
                      <p className="text-white/80 text-sm">Safety</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-3">
                        <Sparkles className="w-8 h-8 text-purple-dark" />
                      </div>
                      <p className="text-white/80 text-sm">Transform</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => scrollToSection('consulting')}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Your Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
