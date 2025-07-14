import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactSection = () => {
  const handleBookSession = () => {
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/13059850984', '_blank');
  };

  return (
    <section id="contact-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-soft-lavender to-light-lavender-pink">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with specific ID for navigation */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="get-in-touch-title" className="text-4xl md:text-5xl font-bold text-deep-purple mb-4 scroll-mt-32">
            Get In Touch
          </h2>
          <p className="text-lg text-vibrant-purple max-w-2xl mx-auto">
            Ready to begin your transformation? Let's connect and explore what's possible for you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Contact Card */}
          <Card className="bg-creamy-beige border-2 border-soft-lavender shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <CardContent className="p-6 flex flex-col items-center">
              <Phone className="w-8 h-8 text-vibrant-purple mb-4" />
              <h3 className="text-xl font-semibold text-deep-purple mb-2">Call Me</h3>
              <p className="text-dark-olive">Available Mon-Fri, 9am-5pm</p>
              <a href="tel:+13059850984" className="text-vibrant-purple hover:text-deep-purple transition-colors">
                +1 (305) 985-0984
              </a>
            </CardContent>
          </Card>

          {/* Email Contact Card */}
          <Card className="bg-creamy-beige border-2 border-soft-lavender shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-100">
            <CardContent className="p-6 flex flex-col items-center">
              <Mail className="w-8 h-8 text-vibrant-purple mb-4" />
              <h3 className="text-xl font-semibold text-deep-purple mb-2">Email Me</h3>
              <p className="text-dark-olive">Response within 24 hours</p>
              <a href="mailto:nagham@naghamthecoach.com" className="text-vibrant-purple hover:text-deep-purple transition-colors">
                nagham@naghamthecoach.com
              </a>
            </CardContent>
          </Card>

          {/* Location Contact Card */}
          <Card className="bg-creamy-beige border-2 border-soft-lavender shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200">
            <CardContent className="p-6 flex flex-col items-center">
              <MapPin className="w-8 h-8 text-vibrant-purple mb-4" />
              <h3 className="text-xl font-semibold text-deep-purple mb-2">Visit Me</h3>
              <p className="text-dark-olive">By Appointment Only</p>
              <a href="https://maps.app.goo.gl/o5fPj6o2KMeE9jEe7" target="_blank" rel="noopener noreferrer" className="text-vibrant-purple hover:text-deep-purple transition-colors">
                Miami, FL
              </a>
            </CardContent>
          </Card>

          {/* Booking Contact Card */}
          <Card className="bg-creamy-beige border-2 border-soft-lavender shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300">
            <CardContent className="p-6 flex flex-col items-center">
              <Calendar className="w-8 h-8 text-vibrant-purple mb-4" />
              <h3 className="text-xl font-semibold text-deep-purple mb-2">Book a Session</h3>
              <p className="text-dark-olive">Limited Spots Available</p>
              <Button onClick={handleBookSession} className="bg-vibrant-purple hover:bg-deep-purple text-white px-4 py-2 rounded-md font-semibold transition-colors">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="text-center animate-fade-in delay-400">
          <h3 className="text-2xl font-bold text-deep-purple mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/naghamthecoach/" target="_blank" rel="noopener noreferrer" className="text-vibrant-purple hover:text-deep-purple transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/naghamthecoach" target="_blank" rel="noopener noreferrer" className="text-vibrant-purple hover:text-deep-purple transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@naghamrasbieh" target="_blank" rel="noopener noreferrer" className="text-vibrant-purple hover:text-deep-purple transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
