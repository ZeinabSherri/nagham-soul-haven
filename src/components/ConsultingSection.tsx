
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, Check, Star, Clock, Users } from 'lucide-react';

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/c4b0d2fc-4a47-4b54-9288-4d88a56e4554.png" 
                alt="Professional Therapy and Consultation Space" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accents */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-vibrant-purple rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-light-olive rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-deep-purple" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-purple mb-6">
                Book a Consultation
              </h2>
              <p className="text-lg text-dark-olive leading-relaxed mb-8">
                Choose your preferred way to connect with Nagham and start your healing transformation 
                journey. Let's discuss how we can work together to unlock your emotional freedom and inner peace.
              </p>

              {/* Key benefits with vibrant purple bullet points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-vibrant-purple" />
                  <span className="text-deep-purple font-medium">30-minute complimentary discovery call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-vibrant-purple" />
                  <span className="text-deep-purple font-medium">Direct WhatsApp consultation available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-vibrant-purple" />
                  <span className="text-deep-purple font-medium">Personalized healing strategy discussion</span>
                </div>
              </div>
            </div>

            {/* Consultation options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Discovery Call Card */}
              <Card className="bg-white border-2 border-gray-200 hover:border-vibrant-purple hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-deep-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-purple mb-3">
                    Book a Discovery Call
                  </h3>
                  <p className="text-dark-olive text-sm mb-4 leading-relaxed">
                    Schedule a 30-minute complimentary call to discuss your healing needs
                  </p>
                  <p className="text-xs text-dark-olive mb-6 leading-relaxed">
                    This no-obligation discovery call allows us to understand your challenges and explore 
                    how our healing approach can help you overcome them.
                  </p>
                  <Button className="w-full bg-deep-purple hover:bg-vibrant-purple text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Consultation Card */}
              <Card className="bg-creamy-beige border-2 border-light-olive hover:border-vibrant-purple hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-dark-olive rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-purple mb-3">
                    WhatsApp Consultation
                  </h3>
                  <p className="text-dark-olive text-sm mb-4 leading-relaxed">
                    Direct WhatsApp messaging for quick questions or inquiries
                  </p>
                  <p className="text-xs text-dark-olive mb-6 leading-relaxed">
                    Prefer a chat? Reach out directly via WhatsApp for a text-based conversation about how our 
                    healing services can address your specific needs.
                  </p>
                  <Button className="w-full bg-deep-purple hover:bg-vibrant-purple text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA Button */}
            <div className="text-center pt-6">
              <Button className="bg-deep-purple hover:bg-vibrant-purple text-white px-12 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Start Your Healing Journey Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
