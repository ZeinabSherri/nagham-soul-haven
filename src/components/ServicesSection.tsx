
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
      color: "rose"
    },
    {
      title: "Hypnotherapy",
      description: "Access your subconscious mind to release limiting beliefs and create positive change.",
      duration: "60-90 minutes",
      format: "Online & In-Person",
      icon: Clock,
      color: "amber"
    },
    {
      title: "NLP & Time Line Therapy®",
      description: "Powerful techniques to reframe experiences and release emotional blocks from the past.",
      duration: "90 minutes",
      format: "Online & In-Person",
      icon: Video,
      color: "green"
    },
    {
      title: "Access Bars",
      description: "Gentle touch technique to release mental and emotional blocks, creating more ease.",
      duration: "60 minutes",
      format: "In-Person Only",
      icon: Home,
      color: "purple"
    },
    {
      title: "Reiki Healing",
      description: "Energy healing to balance chakras, reduce stress, and promote deep relaxation.",
      duration: "60 minutes",
      format: "Online & In-Person",
      icon: Users,
      color: "blue"
    },
    {
      title: "Past Life Regression",
      description: "Explore past lives to understand current patterns and release karmic blocks.",
      duration: "2 hours",
      format: "Online & In-Person",
      icon: Clock,
      color: "indigo"
    },
    {
      title: "Laughter Yoga",
      description: "Joyful practice combining laughter exercises with yogic breathing for stress relief.",
      duration: "45 minutes",
      format: "Group Sessions",
      icon: Users,
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      rose: "from-rose-50 to-rose-100 border-rose-200 text-rose-800",
      amber: "from-amber-50 to-amber-100 border-amber-200 text-amber-800",
      green: "from-green-50 to-green-100 border-green-200 text-green-800",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-800",
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-800",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-800",
      yellow: "from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-800"
    };
    return colors[color as keyof typeof colors] || colors.rose;
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            My Services
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Each healing session is uniquely designed for you, combining ancient wisdom 
            with modern therapeutic techniques for profound transformation.
          </p>
          <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${getColorClasses(service.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/70">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-current">
                      {service.format}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
            What Makes My Work Different
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Integrative Approach</h4>
              <p className="text-amber-700">Combining multiple healing modalities for comprehensive transformation</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Client-Focused Customization</h4>
              <p className="text-amber-700">Every session is tailored to your unique needs and healing journey</p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Safe & Deep Results</h4>
              <p className="text-amber-700">Creating lasting change in a supportive, non-judgmental environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
