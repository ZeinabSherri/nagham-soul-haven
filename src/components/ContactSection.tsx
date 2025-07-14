
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar, Heart, Star, Sparkles, Leaf, Shield } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
  };

  const transformationAreas = [
    {
      title: "Anxiety & Stress",
      description: "Find inner peace and calm your nervous system",
      icon: Heart,
      color: "bg-soft-lavender"
    },
    {
      title: "Self-Confidence",
      description: "Reconnect with your authentic power and worth",
      icon: Star,
      color: "bg-light-olive"
    },
    {
      title: "Life Purpose",
      description: "Discover your unique path and calling",
      icon: Sparkles,
      color: "bg-light-lavender-pink"
    },
    {
      title: "Relationships",
      description: "Heal patterns and create deeper connections",
      icon: Leaf,
      color: "bg-creamy-beige"
    },
    {
      title: "Past Trauma",
      description: "Release what's been holding you back",
      icon: Shield,
      color: "bg-soft-lavender"
    }
  ];

  return (
    <section id="contact-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title with semantic ID */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="get-in-touch-title" className="text-4xl md:text-5xl font-bold text-deep-purple mb-4 scroll-mt-32">
            Get in Touch
          </h2>
          <p className="text-lg text-dark-olive max-w-3xl mx-auto">
            Ready to begin your transformation? I'm here to support you every step of the way.
          </p>
        </div>

        {/* Transformation Areas */}
        <div className="mb-12 animate-fade-in delay-200">
          <h3 className="text-2xl font-bold text-deep-purple text-center mb-8">
            Areas of Transformation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {transformationAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index} 
                  className={`${area.color} border-2 border-vibrant-purple/20 hover:border-vibrant-purple/50 transition-all duration-300 transform hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-deep-purple mb-2 text-sm">
                      {area.title}
                    </h4>
                    <p className="text-xs text-dark-olive leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ways to Start Section */}
        <div id="ways-to-start" className="mb-12 animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-deep-purple text-center mb-8">
            Ready to Start? Choose Your Path
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book a Session Card */}
            <Card className="bg-vibrant-purple text-white border-2 border-vibrant-purple hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-700">
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">Book a Free Call</h4>
                <p className="mb-6 leading-relaxed">
                  Start with a complimentary 15-minute discovery call to see if we're a good fit and discuss your goals.
                </p>
                <div className="space-y-3 mb-6">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    ✓ No pressure, just connection
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    ✓ Personalized approach discussion
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    ✓ Clear next steps
                  </Badge>
                </div>
                <Button 
                  onClick={handleBookSession}
                  size="lg" 
                  className="bg-white text-vibrant-purple hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Free Call
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="bg-white border-2 border-vibrant-purple hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-900">
              <CardContent className="p-8">
                <Mail className="w-16 h-16 mx-auto mb-4 text-vibrant-purple" />
                <h4 className="text-2xl font-bold text-deep-purple text-center mb-4">Send a Message</h4>
                <p className="text-center mb-6 text-dark-olive">
                  Have questions? Want to learn more? I'd love to hear from you.
                </p>
                
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-deep-purple mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-vibrant-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-purple focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-purple mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-vibrant-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-purple focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-purple mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-vibrant-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-purple focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-purple mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-vibrant-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-purple focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell me a bit about what you're looking for or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-vibrant-purple hover:bg-deep-purple text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center animate-fade-in delay-1100">
          <div className="bg-creamy-beige rounded-xl p-8 border-2 border-soft-lavender">
            <h3 className="text-xl font-bold text-deep-purple mb-6">Connect With Me</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-dark-olive">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-vibrant-purple" />
                <span>hello@naghamthecoach.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-vibrant-purple" />
                <span>Available by appointment</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-vibrant-purple" />
                <span>Online & In-Person (Lebanon)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
