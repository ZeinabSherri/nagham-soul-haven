
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/nagham-rasbieh', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            Ways to Start
          </h2>
          <p className="text-xl text-purple-medium max-w-3xl mx-auto leading-relaxed">
            Take the first step towards healing. I'm here to support you on your journey.
          </p>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full mt-6"></div>
        </div>

        {/* Booking Calendar Section */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-purple-very-light border-2 border-purple-light shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-purple-dark flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3 text-purple-medium" />
                Book Your Healing Session
              </CardTitle>
              <p className="text-purple-medium">Schedule your personalized healing session directly through my calendar</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-xl p-8 border border-purple-light">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-purple-dark mb-4">Online Booking Calendar</h3>
                <p className="text-purple-medium mb-6">
                  Click below to view available times and book your session instantly
                </p>
                <Button 
                  onClick={handleCalendlyClick}
                  className="bg-purple-medium hover:bg-purple-dark text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Available Times
                </Button>
                <p className="text-sm text-purple-medium mt-4">
                  Sessions available online and in-person • Flexible scheduling • Instant confirmation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-sage-light border-2 border-sage-light shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-dark">
                Get in Touch
              </CardTitle>
              <p className="text-purple-medium">
                Have questions? I'd love to hear from you and help you get started.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border-purple-light focus:border-purple-medium"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-purple-light focus:border-purple-medium"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me a bit about what you're looking for..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-purple-light focus:border-purple-medium min-h-32"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-purple-medium hover:bg-purple-dark text-white py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-purple-light border-2 border-purple-light shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-dark mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-medium" />
                    <span className="text-purple-dark">hello@naghamsoul.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-sage-dark" />
                    <span className="text-purple-dark">+961 3 633 483</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-medium" />
                    <span className="text-purple-dark">Dawhet el Hoss, Lebanon (Online sessions available worldwide)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-very-light border-2 border-purple-light shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-dark mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-purple-medium hover:bg-purple-dark rounded-full flex items-center justify-center text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-sage-dark hover:bg-sage-light rounded-full flex items-center justify-center text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-purple-dark hover:bg-purple-medium rounded-full flex items-center justify-center text-white transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream border-2 border-purple-light shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-dark mb-4">Newsletter</h3>
                <p className="text-purple-medium mb-4">
                  Receive healing tips and insights directly to your inbox
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white border-purple-light"
                  />
                  <Button className="bg-sage-dark hover:bg-sage-light text-white px-6 rounded-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
