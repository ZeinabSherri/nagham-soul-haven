import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar, Instagram, Youtube, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ContactSection: Form submitted with data:', formData);
    const subject = encodeURIComponent('New Message from Website');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:Hello@naghamthecoach?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCalendlyClick = () => {
    console.log('ContactSection: Opening Calendly booking page');
    window.open('https://calendly.com/hello-naghamthecoach/book-a-free-15-min-call', '_blank');
  };

  const handleBookSessionClick = () => {
    console.log('ContactSection: Scrolling to services section');
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWhatsAppClick = () => {
    console.log('ContactSection: Opening WhatsApp link 1');
    window.open('https://wa.me/9613633483', '_blank');
  };

  const handleWhatsAppClicks = () => {
    console.log('ContactSection: Opening WhatsApp link 2');
    window.open('https://wa.me/971506607034', '_blank');
  };

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`ContactSection: Opening ${platform} link`);
    window.open(url, '_blank');
  };

  return <section id="contact-section" className="py-12 md:py-20 px-3 sm:px-6 lg:px-8 bg-white max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <h2 id="contact-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-purple text-left mb-4 md:mb-6" style={{
          scrollMarginTop: '180px'
        }}>
            How to Start
          </h2>
          <p className="text-lg md:text-xl text-dark-olive max-w-3xl leading-relaxed">Take the first step toward healing. I'm here to support you every step of the way.</p>
        </div>

        {/* Booking Calendar Section */}
        <div className="mb-12 md:mb-16 animate-fade-in delay-300">
          <Card className="max-w-4xl mx-auto bg-white border-2 border-deep-purple/20 shadow-xl">
            <CardHeader className="text-center px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-deep-purple flex items-center justify-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-vibrant-purple" />
                Book a Free 15-min Call
              </CardTitle>
              
            </CardHeader>
            <CardContent className="text-center px-4 md:px-6">
              <div className="mb-6">
                <Button onClick={handleCalendlyClick} className="bg-vibrant-purple hover:bg-deep-purple text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 touch-manipulation">
                  Book a Call Now
                </Button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 md:p-8 border border-deep-purple/10">
                <div className="text-4xl md:text-6xl mb-4">✨</div>
                <h3 className="text-lg md:text-xl font-semibold text-deep-purple mb-4">Online Booking Calendar</h3>
                <p className="text-sm md:text-base text-dark-olive mb-6">Click below to view available times and book your session for the <span className="font-bold">SERVICE</span> you need instantly</p>
                <Button onClick={handleBookSessionClick} className="bg-deep-purple hover:bg-vibrant-purple text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 touch-manipulation">
                  Book a Session
                </Button>
                <p className="text-xs md:text-sm text-dark-olive">
                  Sessions available online and in-person • Flexible scheduling • Instant confirmation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-full">
          {/* Contact Form */}
          <Card id="contact-form" className="bg-white border-2 border-deep-purple/20 shadow-lg animate-fade-in delay-600 max-w-full">
            <CardHeader className="px-4 md:px-6">
              <CardTitle id="get-in-touch-title" className="text-xl md:text-2xl font-bold text-deep-purple" style={{
              scrollMarginTop: '140px'
            }}>
                Get in Touch
              </CardTitle>
              <p className="text-sm md:text-base text-dark-olive">
                Have questions? I'd love to hear from you and help you get started.
              </p>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-white border-deep-purple/30 focus:border-vibrant-purple w-full" />
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="bg-white border-deep-purple/30 focus:border-vibrant-purple w-full" />
                </div>
                <div>
                  <Textarea name="message" placeholder="Tell me a bit about what you're looking for..." value={formData.message} onChange={handleInputChange} className="bg-white border-deep-purple/30 focus:border-vibrant-purple min-h-32 w-full resize-none" />
                </div>
                <Button type="submit" className="w-full bg-deep-purple hover:bg-vibrant-purple text-white py-3 rounded-full font-semibold transition-all duration-300 touch-manipulation">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-fade-in delay-800 max-w-full">
            <Card className="bg-white border-2 border-deep-purple/20 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-deep-purple mb-4 md:mb-6">Contact Information</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3 md:space-x-4 break-all">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-vibrant-purple flex-shrink-0" />
                    <span className="text-sm md:text-base text-deep-purple">Hello@naghamthecoach.com</span>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer hover:text-vibrant-purple transition-colors touch-manipulation" onClick={handleWhatsAppClick} style={{
                  WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)'
                }}>
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-vibrant-purple flex-shrink-0" />
                    <span className="text-sm md:text-base text-deep-purple">+961 3 633 483</span>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer hover:text-vibrant-purple transition-colors touch-manipulation" onClick={handleWhatsAppClicks} style={{
                  WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)'
                }}>
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-vibrant-purple flex-shrink-0" />
                    <span className="text-sm md:text-base text-deep-purple">+971 50 660 70 34</span>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-vibrant-purple flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-deep-purple">Lebanon: Ain W Zain, Chouf</span>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-vibrant-purple flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-deep-purple">UAE: Dubai South, Dubai </span>
                  </div>
                  <div className="ml-8 md:ml-10">
                    <span className="text-deep-purple text-xs md:text-sm">(Online sessions available worldwide)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-2 border-deep-purple/20 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-deep-purple mb-4 md:mb-6">Let's Stay Connected</h3>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                  <button 
                    onClick={() => handleSocialClick('Instagram', 'https://www.instagram.com/naghamthecoach/')} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 transform hover:scale-110 touch-manipulation" 
                    aria-label="Instagram"
                    style={{ WebkitTapHighlightColor: 'rgba(163, 57, 156, 0.3)' }}
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <button 
                    onClick={() => handleSocialClick('Facebook', 'https://www.facebook.com/NaghamTheCoach')} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 transform hover:scale-110 touch-manipulation" 
                    aria-label="Facebook"
                    style={{ WebkitTapHighlightColor: 'rgba(37, 99, 235, 0.3)' }}
                  >
                    <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <button 
                    onClick={() => handleSocialClick('TikTok', 'https://www.tiktok.com/@naghamthecoach')} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors duration-300 transform hover:scale-110 touch-manipulation" 
                    aria-label="TikTok"
                    style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.3)' }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.86-4.43V7.83a8.25 8.25 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26Z" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => handleSocialClick('YouTube', 'https://www.youtube.com/@NaghamTheCoach')} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 transform hover:scale-110 touch-manipulation" 
                    aria-label="YouTube"
                    style={{ WebkitTapHighlightColor: 'rgba(220, 38, 38, 0.3)' }}
                  >
                    <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/971506607034', '_blank')} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 transform hover:scale-110 touch-manipulation" 
                    aria-label="WhatsApp"
                    style={{ WebkitTapHighlightColor: 'rgba(34, 197, 94, 0.3)' }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
