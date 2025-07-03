
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
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-purple-dark mb-6 leading-tight tracking-tight">
            Start Feeling Safe, Seen & <br />
            <span className="font-normal">Connected Again</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-purple-medium mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Hi, I'm Nagham and I help you release what's weighing you down so you can feel 
            <span className="font-medium text-purple-dark"> calm in your body</span>, 
            <span className="font-medium text-purple-dark"> clear in your mind</span>, and 
            <span className="font-medium text-purple-dark"> free in your life</span>.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-purple-dark hover:bg-purple-medium text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300"
            >
              Begin Your Healing
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-2 border-purple-light text-purple-dark hover:bg-purple-very-light px-8 py-4 rounded-md text-lg font-medium transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-8 bg-purple-very-light rounded-lg">
              <Heart className="w-12 h-12 text-purple-medium mb-4" />
              <h3 className="text-xl font-medium text-purple-dark mb-3">Subconscious Healing</h3>
              <p className="text-purple-medium text-center leading-relaxed">Deep transformation at the root level</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-sage-light/30 rounded-lg">
              <Shield className="w-12 h-12 text-sage-dark mb-4" />
              <h3 className="text-xl font-medium text-purple-dark mb-3">Nervous System Regulation</h3>
              <p className="text-purple-medium text-center leading-relaxed">Find safety and calm in your body</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-purple-light/50 rounded-lg">
              <Sparkles className="w-12 h-12 text-purple-dark mb-4" />
              <h3 className="text-xl font-medium text-purple-dark mb-3">Deep Emotional Shifts</h3>
              <p className="text-purple-medium text-center leading-relaxed">Release what no longer serves you</p>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-purple-very-light rounded-lg shadow-sm flex items-center justify-center border border-purple-light">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-xl font-medium text-purple-dark mb-2">Welcome Video</h3>
                <p className="text-purple-medium">Meet Nagham and discover her healing approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
