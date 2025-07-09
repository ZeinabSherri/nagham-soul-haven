
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

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/hello-naghamthecoach/new-healing-session', '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background Texture Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/63b0502e-a679-4e45-9e33-c4489d57e78a.png')"
      }}></div>
      
      {/* Enhanced Semi-transparent Overlay with subtle vignette */}
      <div className="absolute inset-0 bg-creamy-beige/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-creamy-beige/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-deep-purple/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-vibrant-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-soft-lavender/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[75vh]">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main Headline with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-deep-purple leading-tight animate-fade-in">
                Start Feeling Safe, Seen & Connected Again
              </h1>
              
              {/* Subheadline with improved spacing */}
              <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-vibrant-purple leading-relaxed font-light animate-fade-in delay-300">
                I'm Nagham. I help you release what your body holds, what your mind replays, and what your soul is finally ready to let go of.
              </p>
            </div>

            {/* Services Section with enhanced spacing */}
            <div className="space-y-6 animate-fade-in delay-400">
              <h2 className="text-2xl lg:text-xl xl:text-2xl font-semibold text-deep-purple">
                What I bring into your healing space:
              </h2>

              {/* Enhanced key points list */}
              <div className="space-y-5">
                <div className="flex items-center text-deep-purple text-lg lg:text-base xl:text-lg animate-fade-in delay-500">
                  <span className="text-vibrant-purple mr-6 text-2xl font-bold">•</span>
                  <span className="font-medium">Transformational Healing</span>
                </div>
                <div className="flex items-center text-deep-purple text-lg lg:text-base xl:text-lg animate-fade-in delay-700">
                  <span className="text-vibrant-purple mr-6 text-2xl font-bold">•</span>
                  <span className="font-medium">Nervous System Reset & Trauma Release</span>
                </div>
                <div className="flex items-center text-deep-purple text-lg lg:text-base xl:text-lg animate-fade-in delay-900">
                  <span className="text-vibrant-purple mr-6 text-2xl font-bold">•</span>
                  <span className="font-medium">Deep Emotional Rewiring</span>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons with enhanced spacing */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-1100">
              <Button 
                onClick={() => scrollToSection('services')} 
                className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Begin Your Healing
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="border-2 border-deep-purple text-deep-purple backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 bg-white/80 hover:bg-vibrant-purple hover:text-creamy-beige hover:scale-105"
              >
                Book 15min Free Call
              </Button>
            </div>
          </div>

          {/* Right Column - Enhanced Side Card */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-1000">
            <div className="relative w-full max-w-md">
              {/* Enhanced background glow */}
              <div className="absolute inset-0 bg-vibrant-purple/15 rounded-3xl blur-3xl transform rotate-3 animate-pulse"></div>
              
              {/* Main content box with enhanced styling */}
              <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 lg:p-10 xl:p-12 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-deep-purple animate-fade-in delay-1200">
                    Ready to Begin?
                  </h3>
                  <p className="text-vibrant-purple text-lg leading-relaxed animate-fade-in delay-1400">
                    Start your journey to inner peace and emotional freedom today.
                  </p>
                  
                  {/* Feature icons with enhanced spacing */}
                  <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="flex flex-col items-center animate-fade-in delay-1600 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive/80 rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
                        <Heart className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-sm font-medium">Healing</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-1800 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive/80 rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
                        <Shield className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-sm font-medium">Safety</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-2000 hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-light-olive/80 rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
                        <Sparkles className="w-8 h-8 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-sm font-medium">Transform</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleCalendlyClick} 
                    className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in delay-2200 w-full"
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
