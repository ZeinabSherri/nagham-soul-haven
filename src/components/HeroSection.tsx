
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
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Start Feeling Safe, Seen & <br />
            <span className="text-rose-600">Connected Again</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Hi, I'm Nagham and I help you release what's weighing you down so you can feel 
            <span className="font-semibold text-rose-600"> calm in your body</span>, 
            <span className="font-semibold text-green-700"> clear in your mind</span>, and 
            <span className="font-semibold text-amber-700"> free in your life</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Begin Your Healing
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Heart className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Subconscious Healing</h3>
              <p className="text-amber-700 text-center">Deep transformation at the root level</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Nervous System Regulation</h3>
              <p className="text-amber-700 text-center">Find safety and calm in your body</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Sparkles className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Deep Emotional Shifts</h3>
              <p className="text-amber-700 text-center">Release what no longer serves you</p>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl shadow-lg flex items-center justify-center border-2 border-amber-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Welcome Video</h3>
                <p className="text-amber-700">Meet Nagham and discover her healing approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
