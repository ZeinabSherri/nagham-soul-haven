
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Video, Home, Heart, Star, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "1:1 Healing Sessions",
      description: "Personalized sessions combining multiple modalities for deep transformation and healing.",
      duration: "90 minutes",
      format: "Online & In-Person",
      icon: Users,
      isEven: false
    },
    {
      title: "Hypnotherapy",
      description: "Access your subconscious mind to release limiting beliefs and create positive change.",
      duration: "60-90 minutes",
      format: "Online & In-Person",
      icon: Clock,
      isEven: true
    },
    {
      title: "NLP & Time Line Therapy®",
      description: "Powerful techniques to reframe experiences and release emotional blocks from the past.",
      duration: "90 minutes",
      format: "Online & In-Person",
      icon: Video,
      isEven: false
    },
    {
      title: "Access Bars",
      description: "Gentle touch technique to release mental and emotional blocks, creating more ease.",
      duration: "60 minutes",
      format: "In-Person Only",
      icon: Home,
      isEven: true
    },
    {
      title: "Reiki Healing",
      description: "Energy healing to balance chakras, reduce stress, and promote deep relaxation.",
      duration: "60 minutes",
      format: "Online & In-Person",
      icon: Heart,
      isEven: false
    },
    {
      title: "Past Life Regression",
      description: "Explore past lives to understand current patterns and release karmic blocks.",
      duration: "2 hours",
      format: "Online & In-Person",
      icon: Star,
      isEven: true
    },
    {
      title: "Laughter Yoga",
      description: "Joyful practice combining laughter exercises with yogic breathing for stress relief.",
      duration: "45 minutes",
      format: "Group Sessions",
      icon: Sparkles,
      isEven: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple mb-6">
            My Services
          </h2>
          <p className="text-xl text-dark-olive max-w-3xl mx-auto leading-relaxed">
            Each healing session is uniquely designed for you, combining ancient wisdom 
            with modern therapeutic techniques for profound transformation.
          </p>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`${service.isEven ? 'bg-creamy-beige' : 'bg-white'} border-2 border-vibrant-purple/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-vibrant-purple rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-deep-purple mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-dark-olive leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="bg-vibrant-purple/10 text-deep-purple px-3 py-1 rounded-full font-medium">
                            Duration: {service.duration}
                          </span>
                          <span className="bg-vibrant-purple/10 text-deep-purple px-3 py-1 rounded-full font-medium">
                            {service.format}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Call-to-Action Button */}
                    <div className="flex-shrink-0">
                      <Button 
                        onClick={scrollToContact}
                        className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-creamy-beige rounded-2xl p-8 border-2 border-vibrant-purple/20 animate-fade-in delay-700 hover:shadow-lg transition-all duration-500">
          <h3 className="text-2xl font-bold text-deep-purple mb-4 text-center">
            What Makes My Work Different
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in delay-800 hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold text-deep-purple mb-2">Integrative Approach</h4>
              <p className="text-dark-olive">Combining multiple healing modalities for comprehensive transformation</p>
            </div>
            <div className="animate-fade-in delay-900 hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold text-deep-purple mb-2">Client-Focused Customization</h4>
              <p className="text-dark-olive">Every session is tailored to your unique needs and healing journey</p>
            </div>
            <div className="animate-fade-in delay-1000 hover:scale-105 transition-transform duration-300">
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
