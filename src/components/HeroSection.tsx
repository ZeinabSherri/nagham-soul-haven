
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')"
      }}></div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-deep-purple/85"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-creamy-beige/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-light-olive/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-soft-lavender/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-creamy-beige mb-6 leading-tight animate-fade-in delay-200">
              Start Feeling Safe, Seen & Connected Again
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-creamy-beige/90 mb-8 leading-relaxed font-light animate-fade-in delay-600">
              Hi, I'm Nagham and I help you release what's weighing you down so you can feel calm in your body, clear in your mind, and free in your life.
            </p>

            {/* Key points list */}
            <div className="mb-10 space-y-3">
              <div className="flex items-center text-creamy-beige/90 text-lg animate-fade-in delay-700">
                <span className="text-light-olive mr-3">•</span>
                <span>Subconscious healing</span>
              </div>
              <div className="flex items-center text-creamy-beige/90 text-lg animate-fade-in delay-800">
                <span className="text-light-olive mr-3">•</span>
                <span>Nervous system regulation</span>
              </div>
              <div className="flex items-center text-creamy-beige/90 text-lg animate-fade-in delay-1000">
                <span className="text-light-olive mr-3">•</span>
                <span>Deep emotional shifts</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in delay-1200">
              <Button onClick={() => scrollToSection('services')} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Begin Your Healing</Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-2 border-creamy-beige/30 text-creamy-beige backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 bg-deep-purple/60 hover:bg-vibrant-purple/60 hover:scale-105">Let's Talk</Button>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-500">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-soft-lavender/30 rounded-3xl blur-3xl transform rotate-6 animate-pulse"></div>
              
              {/* Main content box */}
              <div className="relative bg-creamy-beige/10 backdrop-blur-lg rounded-3xl p-12 border border-creamy-beige/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-creamy-beige mb-6 animate-fade-in delay-700">
                    Ready to Begin?
                  </h3>
                  <p className="text-creamy-beige/90 text-lg mb-8 leading-relaxed animate-fade-in delay-800">
                    Start your journey to inner peace and emotional freedom today.
                  </p>
                  
                  {/* Feature icons */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center animate-fade-in delay-900 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Heart className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-creamy-beige/80 text-sm">Healing</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-1000 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Shield className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-creamy-beige/80 text-sm">Safety</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-1100 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Sparkles className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-creamy-beige/80 text-sm">Transform</p>
                    </div>
                  </div>
                  
                  <Button onClick={() => scrollToSection('consulting')} className="bg-light-olive hover:bg-dark-olive text-deep-purple px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in delay-1200">
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
