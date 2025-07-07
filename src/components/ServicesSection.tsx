import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Video, Home, Heart, Star, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "1:1 Healing Sessions",
      description: "Personalized sessions combining multiple modalities for deep transformation.",
      duration: "90 min",
      format: "Online & In-Person",
      icon: Users
    },
    {
      title: "Hypnotherapy",
      description: "Access your subconscious mind to release limiting beliefs and create positive change.",
      duration: "60-90 min",
      format: "Online & In-Person",
      icon: Clock
    },
    {
      title: "NLP & Time Line Therapy®",
      description: "Powerful techniques to reframe experiences and release emotional blocks.",
      duration: "90 min",
      format: "Online & In-Person",
      icon: Video
    },
    {
      title: "Access Bars",
      description: "Gentle touch technique to release mental and emotional blocks.",
      duration: "60 min",
      format: "In-Person Only",
      icon: Home
    },
    {
      title: "Reiki Healing",
      description: "Energy healing to balance chakras and promote deep relaxation.",
      duration: "60 min",
      format: "Online & In-Person",
      icon: Heart
    },
    {
      title: "Past Life Regression",
      description: "Explore past lives to understand current patterns and release blocks.",
      duration: "2 hours",
      format: "Online & In-Person",
      icon: Star
    }
  ];

  const handleBookNow = () => {
    window.open('https://calendly.com/hello-naghamthecoach/new-healing-session', '_blank');
  };

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">
            My Services
          </h2>
          <p className="text-lg text-dark-olive mt-4 max-w-3xl animate-fade-in delay-200">
            Each healing session is uniquely designed for you, combining ancient wisdom 
            with modern therapeutic techniques for profound transformation.
          </p>
        </div>

        {/* Compact 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border border-vibrant-purple/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-vibrant-purple rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-deep-purple mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-dark-olive leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Duration and Format */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="bg-vibrant-purple/10 text-deep-purple px-2 py-1 rounded-full">
                      {service.duration}
                    </span>
                    <span className="bg-vibrant-purple/10 text-deep-purple px-2 py-1 rounded-full">
                      {service.format}
                    </span>
                  </div>
                  
                  {/* Call-to-Action Button */}
                  <Button 
                    onClick={handleBookNow}
                    size="sm"
                    className="w-full bg-deep-purple hover:bg-vibrant-purple text-white text-sm font-medium transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* What Makes My Work Different - Compact */}
        <div className="bg-creamy-beige rounded-xl p-6 border border-vibrant-purple/20 animate-fade-in delay-1600">
          <h3 className="text-xl font-bold text-deep-purple mb-4 text-left">
            What Makes My Work Different
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="animate-fade-in delay-1800">
              <h4 className="font-semibold text-deep-purple mb-2">Integrative Approach</h4>
              <p className="text-dark-olive">Combining multiple healing modalities for comprehensive transformation</p>
            </div>
            <div className="animate-fade-in delay-2000">
              <h4 className="font-semibold text-deep-purple mb-2">Client-Focused Customization</h4>
              <p className="text-dark-olive">Every session is tailored to your unique needs and healing journey</p>
            </div>
            <div className="animate-fade-in delay-2200">
              <h4 className="font-semibold text-deep-purple mb-2">Safe & Deep Results</h4>
              <p className="text-dark-olive">Creating lasting change in a supportive, non-judgmental environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
