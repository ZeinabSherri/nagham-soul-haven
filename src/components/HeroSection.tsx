
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
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background Texture Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/lovable-uploads/63b0502e-a679-4e45-9e33-c4489d57e78a.png')"
      }}></div>
      
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-creamy-beige/45"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-deep-purple/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-vibrant-purple/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-soft-lavender/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start min-h-[calc(100vh-12rem)]">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Main Headline with reduced spacing */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-deep-purple mb-6 leading-tight animate-fade-in">
              Start Feeling Safe, Seen & Connected Again
            </h1>
            
            {/* Subheadline with reduced spacing */}
            <p className="text-xl md:text-xl text-vibrant-purple mb-8 leading-relaxed animate-fade-in delay-300 font-normal">
              I'm Nagham, Your Guide to Transformation.<br />
              I help you <strong>Release</strong> what's heavy, <strong>Reconnect</strong> with yourself, & <strong>Rise</strong> into who you were always meant to be.
            </p>

            {/* Call-to-Action Buttons - moved up with reduced spacing */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in delay-1100">
              <Button onClick={() => scrollToSection('services')} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Begin Your Transformation</Button>
              <Button onClick={() => scrollToSection('contact')} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Book Your 15 min Free Call</Button>
            </div>
          </div>

          {/* Right side - Visual elements with reduced spacing */}
          <div className="flex flex-col space-y-6 animate-scale-in delay-1000">
            {/* Bullet points section with reduced spacing */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h2 className="text-xl font-semibold text-deep-purple mb-4 animate-fade-in delay-400">In our work together, I bring:</h2>
              <div className="space-y-3">
                <div className="flex items-center text-deep-purple text-base animate-fade-in delay-500">
                  <span className="text-vibrant-purple mr-3 text-lg">•</span>
                  <span>Transformational Healing</span>
                </div>
                <div className="flex items-center text-deep-purple text-base animate-fade-in delay-700">
                  <span className="text-vibrant-purple mr-3 text-lg">•</span>
                  <span>Deep Emotional Rewiring</span>
                </div>
                <div className="flex items-center text-deep-purple text-base animate-fade-in delay-900">
                  <span className="text-vibrant-purple mr-3 text-lg">•</span>
                  <span>Nervous System Reset &amp; Trauma Release</span>
                </div>
              </div>
            </div>

            {/* Ready to Begin card with reduced size and spacing */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-vibrant-purple/20 rounded-2xl blur-2xl transform rotate-3 animate-pulse"></div>
              
              {/* Main content box */}
              <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-deep-purple mb-4 animate-fade-in delay-1200">
                    Ready to Begin?
                  </h3>
                  <p className="text-vibrant-purple text-base mb-6 leading-relaxed animate-fade-in delay-1400">Start your Journey to Inner Peace and Emotional Freedom Today.</p>
                  
                  {/* Feature icons with reduced spacing */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center animate-fade-in delay-1600 hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-light-olive rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Heart className="w-6 h-6 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-xs">Safety</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-1800 hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-light-olive rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Shield className="w-6 h-6 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-xs">Healing</p>
                    </div>
                    <div className="flex flex-col items-center animate-fade-in delay-2000 hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-light-olive rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Sparkles className="w-6 h-6 text-deep-purple" />
                      </div>
                      <p className="text-deep-purple text-xs">Transformation</p>
                    </div>
                  </div>
                  
                  <Button onClick={handleCalendlyClick} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in delay-2200">
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
