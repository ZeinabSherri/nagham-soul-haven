
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
  return <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[75vh]">
          {/* Left side - Content */}
          <div className="text-left my-[70px]">
            {/* Main Headline with smaller size and proper spacing */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-deep-purple mb-3 leading-tight animate-fade-in">Start Feeling Safe, Seen & Connected <br /><span>Again</span></h1>
            
            {/* Subheadline */}
            <p className="text-vibrant-purple mb-3 leading-relaxed animate-fade-in delay-300 font-normal text-lg">
              I'm Nagham, Your Guide to Transformation.<br />
              I help you <strong>Release</strong> what's heavy, <strong>Reconnect</strong> with yourself, & <strong>Rise</strong> into who you were always meant to be.
            </p>

            {/* Title for key points */}
            <h2 className="font-semibold text-deep-purple mb-1 animate-fade-in delay-400 text-base">In our work together, I bring:</h2>

            {/* Key points list */}
            <div className="mb-3 space-y-1">
              <div className="flex items-center text-deep-purple animate-fade-in delay-500">
                <span className="text-vibrant-purple mr-3 text-lg">•</span>
                <span className="text-sm">Transformational Healing</span>
              </div>
              <div className="flex items-center text-deep-purple animate-fade-in delay-900">
                <span className="text-vibrant-purple mr-3 text-lg">•</span>
                <span className="text-sm">Deep Emotional Rewiring</span>
              </div>
              <div className="flex items-center text-deep-purple animate-fade-in delay-700">
                <span className="text-vibrant-purple mr-3 text-lg">•</span>
                <span className="text-sm"> Nervous System Reset &amp; Trauma Release</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-fade-in delay-1100">
              <Button onClick={() => scrollToSection('services')} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Begin Your Transformation</Button>
              <Button onClick={() => scrollToSection('contact')} className="bg-vibrant-purple hover:bg-deep-purple text-creamy-beige px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Book Your 15 min Free Call</Button>
            </div>

          </div>

          {/* Right side - Visual element */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-1000">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-vibrant-purple/20 rounded-3xl blur-3xl transform rotate-6 animate-pulse"></div>
              
              {/* Main content box */}
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-deep-purple mb-4 animate-fade-in delay-1200">
                    Ready to Begin?
                  </h3>
                  <p className="text-vibrant-purple text-base mb-6 leading-relaxed animate-fade-in delay-1400">Start your Journey to Inner Peace and Emotional Freedom Today.</p>
                  
                  {/* Feature icons */}
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
    </section>;
};
export default HeroSection;
