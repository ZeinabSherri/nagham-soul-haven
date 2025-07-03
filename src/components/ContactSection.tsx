
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Ways to Start
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards healing. I'm here to support you on your journey.
          </p>
          <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Booking Calendar Section */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-rose-50 to-amber-50 border-2 border-rose-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-amber-900 flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3 text-rose-500" />
                Book Your Healing Session
              </CardTitle>
              <p className="text-amber-700">Schedule your personalized healing session directly through my calendar</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white/60 rounded-xl p-8 border border-amber-200">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Online Booking Calendar</h3>
                <p className="text-amber-700 mb-6">
                  Click below to view available times and book your session instantly
                </p>
                <Button 
                  onClick={handleCalendlyClick}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Available Times
                </Button>
                <p className="text-sm text-amber-600 mt-4">
                  Sessions available online and in-person • Flexible scheduling • Instant confirmation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-amber-50 to-rose-50 border-2 border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-900">
                Get in Touch
              </CardTitle>
              <p className="text-amber-700">
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
                    className="bg-white/70 border-amber-300 focus:border-rose-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/70 border-amber-300 focus:border-rose-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me a bit about what you're looking for..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/70 border-amber-300 focus:border-rose-400 min-h-32"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-green-50 to-amber-50 border-2 border-green-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-rose-500" />
                    <span className="text-amber-800">hello@naghamsoul.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-green-600" />
                    <span className="text-amber-800">+961 3 633 483</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <span className="text-amber-800">Dawhet el Hoss, Lebanon(Online sessions available worldwide)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-rose-50 border-2 border-purple-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-green-50 border-2 border-amber-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Newsletter</h3>
                <p className="text-amber-700 mb-4">
                  Receive healing tips and insights directly to your inbox
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/70 border-amber-300"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-6 rounded-full">
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
