
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Video, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "1:1 Healing Sessions",
      description: "Personalized sessions combining multiple modalities for deep transformation and healing.",
      duration: "90 minutes",
      format: "Online & In-Person",
      icon: Users,
      color: "purple-medium"
    },
    {
      title: "Hypnotherapy",
      description: "Access your subconscious mind to release limiting beliefs and create positive change.",
      duration: "60-90 minutes",
      format: "Online & In-Person",
      icon: Clock,
      color: "purple-light"
    },
    {
      title: "NLP & Time Line Therapy®",
      description: "Powerful techniques to reframe experiences and release emotional blocks from the past.",
      duration: "90 minutes",
      format: "Online & In-Person",
      icon: Video,
      color: "sage-light"
    },
    {
      title: "Access Bars",
      description: "Gentle touch technique to release mental and emotional blocks, creating more ease.",
      duration: "60 minutes",
      format: "In-Person Only",
      icon: Home,
      color: "purple-dark"
    },
    {
      title: "Reiki Healing",
      description: "Energy healing to balance chakras, reduce stress, and promote deep relaxation.",
      duration: "60 minutes",
      format: "Online & In-Person",
      icon: Users,
      color: "sage-dark"
    },
    {
      title: "Past Life Regression",
      description: "Explore past lives to understand current patterns and release karmic blocks.",
      duration: "2 hours",
      format: "Online & In-Person",
      icon: Clock,
      color: "purple-very-light"
    },
    {
      title: "Laughter Yoga",
      description: "Joyful practice combining laughter exercises with yogic breathing for stress relief.",
      duration: "45 minutes",
      format: "Group Sessions",
      icon: Users,
      color: "cream"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      "purple-medium": "bg-purple-medium border-purple-medium text-white",
      "purple-light": "bg-purple-light border-purple-light text-purple-dark",
      "sage-light": "bg-sage-light border-sage-light text-purple-dark",
      "purple-dark": "bg-purple-dark border-purple-dark text-white",
      "sage-dark": "bg-sage-dark border-sage-dark text-white",
      "purple-very-light": "bg-purple-very-light border-purple-light text-purple-dark",
      "cream": "bg-cream border-purple-light text-purple-dark"
    };
    return colors[color as keyof typeof colors] || colors["purple-medium"];
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            My Services
          </h2>
          <p className="text-xl text-purple-medium max-w-3xl mx-auto leading-relaxed">
            Each healing session is uniquely designed for you, combining ancient wisdom 
            with modern therapeutic techniques for profound transformation.
          </p>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`${getColorClasses(service.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${service.color === 'purple-medium' || service.color === 'purple-dark' || service.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'} transition-transform duration-300 group-hover:scale-110`} />
                    <Badge variant="secondary" className="bg-white/70 text-purple-dark transition-all duration-300 group-hover:bg-white">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardTitle className={`text-xl font-bold mb-2 ${service.color === 'purple-medium' || service.color === 'purple-dark' || service.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'} transition-all duration-300`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`mb-4 leading-relaxed ${service.color === 'purple-medium' || service.color === 'purple-dark' || service.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'} transition-all duration-300`}>
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-purple-medium text-purple-dark bg-white transition-all duration-300 group-hover:bg-purple-very-light">
                      {service.format}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-purple-very-light rounded-2xl p-8 border-2 border-purple-light animate-fade-in delay-1000 hover:shadow-lg transition-all duration-500">
          <h3 className="text-2xl font-bold text-purple-dark mb-4 text-center">
            What Makes My Work Different
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in delay-1200 hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold text-purple-dark mb-2">Integrative Approach</h4>
              <p className="text-purple-medium">Combining multiple healing modalities for comprehensive transformation</p>
            </div>
            <div className="animate-fade-in delay-1400 hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold text-purple-dark mb-2">Client-Focused Customization</h4>
              <p className="text-purple-medium">Every session is tailored to your unique needs and healing journey</p>
            </div>
            <div className="animate-fade-in delay-1600 hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold text-purple-dark mb-2">Safe & Deep Results</h4>
              <p className="text-purple-medium">Creating lasting change in a supportive, non-judgmental environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
