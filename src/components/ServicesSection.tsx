import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain2, Sparkles, Users, Baby, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [{
    title: "Individual Therapy",
    description: "Personalized sessions for adults seeking emotional healing and personal growth.",
    icon: Heart,
    details: ["Anxiety", "Depression", "Trauma", "Relationship Issues"],
    price: "$150 / session",
    color: "soft-lavender"
  }, {
    title: "Couples Therapy",
    description: "Strengthen your relationship with guided communication and conflict resolution techniques.",
    icon: Users,
    details: ["Communication", "Conflict Resolution", "Intimacy", "Pre-Marital Counseling"],
    price: "$200 / session",
    color: "light-olive"
  }, {
    title: "Family Therapy",
    description: "Improve family dynamics and create a supportive environment for all members.",
    icon: Baby,
    details: ["Parenting", "Adolescent Issues", "Blended Families", "Grief and Loss"],
    price: "$180 / session",
    color: "light-lavender-pink"
  }, {
    title: "Consciousness Coaching",
    description: "Unlock your full potential and live a more conscious, fulfilling life.",
    icon: Brain2,
    details: ["Personal Growth", "Mindfulness", "Spiritual Development", "Goal Setting"],
    price: "$170 / session",
    color: "vibrant-purple"
  }, {
    title: "Energy Healing",
    description: "Balance your energy and promote physical and emotional well-being.",
    icon: Sparkles,
    details: ["Reiki", "Pranic Healing", "Chakra Balancing", "Energy Clearing"],
    price: "$120 / session",
    color: "dark-olive"
  }, {
    title: "Hypnotherapy",
    description: "Access the power of your subconscious mind to overcome challenges and achieve your goals.",
    icon: Clock,
    details: ["Smoking Cessation", "Weight Loss", "Stress Reduction", "Phobias"],
    price: "$160 / session",
    color: "creamy-beige"
  }];

  const getColorClasses = (color: string) => {
    const colors = {
      "soft-lavender": "bg-soft-lavender border-soft-lavender text-deep-purple",
      "light-olive": "bg-light-olive border-light-olive text-deep-purple",
      "light-lavender-pink": "bg-light-lavender-pink border-light-lavender-pink text-deep-purple",
      "vibrant-purple": "bg-vibrant-purple border-vibrant-purple text-white",
      "dark-olive": "bg-dark-olive border-dark-olive text-white",
      "creamy-beige": "bg-creamy-beige border-creamy-beige text-deep-purple"
    };
    return colors[color as keyof typeof colors] || colors["soft-lavender"];
  };

  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
  };

  return (
    <section id="services-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with specific ID for navigation */}
        <div className="mb-12 animate-fade-in">
          <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-deep-purple text-left mb-4 scroll-mt-32">
            Services & Specialties
          </h2>
          <p className="text-lg text-vibrant-purple max-w-3xl">
            Personalized healing journeys designed to meet you exactly where you are.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className={`${getColorClasses(service.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group`} style={{
              animationDelay: `${200 + index * 100}ms`
            }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`w-6 h-6 mr-3 ${service.color === 'vibrant-purple' || service.color === 'dark-olive' ? 'text-white' : 'text-vibrant-purple'} transition-transform duration-300 group-hover:scale-110`} />
                  <h3 className={`text-xl font-semibold ${service.color === 'vibrant-purple' || service.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-colors duration-300 group-hover:text-opacity-90`}>{service.title}</h3>
                </div>
                <p className={`mb-4 leading-relaxed ${service.color === 'vibrant-purple' || service.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-colors duration-300 group-hover:text-opacity-90`}>{service.description}</p>
                <ul className="list-disc pl-5 mb-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className={`text-sm ${service.color === 'vibrant-purple' || service.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-colors duration-300 group-hover:text-opacity-90`}>{detail}</li>
                  ))}
                </ul>
                <p className={`font-semibold text-sm ${service.color === 'vibrant-purple' || service.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-colors duration-300`}>{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing and Booking Section */}
        <div className="text-center animate-fade-in delay-800">
          <div className="bg-light-lavender-pink rounded-xl p-6 border-2 border-soft-lavender max-w-4xl mx-auto hover:shadow-lg transition-all duration-500">
            <h3 className="text-xl font-bold text-deep-purple mb-4 animate-fade-in delay-900">Ready to Start Your Healing Journey?</h3>
            <p className="text-vibrant-purple mb-6 animate-fade-in delay-1000">
              Find the support you need to heal, grow, and thrive.
            </p>
            <Button onClick={handleBookSession} className="bg-vibrant-purple hover:bg-deep-purple text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in delay-1100">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
