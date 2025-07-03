
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, Clock, Users, Star } from 'lucide-react';

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/80cc333c-c44f-4b3d-90b2-857d22c7531a.png" 
                alt="Nagham Rasbieh - Professional Consultant" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 bg-purple-dark text-white p-4 rounded-full shadow-lg">
              <Star className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-sage-light text-purple-dark p-4 rounded-full shadow-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-purple-dark mb-6">
                Book a Consultation
              </h2>
              <p className="text-lg text-purple-medium leading-relaxed mb-8">
                Choose your preferred way to connect with Nagham and start your healing transformation 
                journey. Let's discuss how we can work together to unlock your emotional freedom and inner peace.
              </p>

              {/* Key features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-dark rounded-full"></div>
                  <span className="text-purple-dark">30-minute complimentary discovery call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-dark rounded-full"></div>
                  <span className="text-purple-dark">Direct WhatsApp consultation available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-dark rounded-full"></div>
                  <span className="text-purple-dark">Personalized healing strategy discussion</span>
                </div>
              </div>
            </div>

            {/* Consultation options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Discovery Call Card */}
              <Card className="bg-gradient-to-br from-purple-very-light to-purple-light/50 border-2 border-purple-light hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-dark mb-3">
                    Book a Discovery Call
                  </h3>
                  <p className="text-purple-medium text-sm mb-4 leading-relaxed">
                    Schedule a 30-minute complimentary call to discuss your healing needs
                  </p>
                  <p className="text-xs text-purple-medium mb-6 leading-relaxed">
                    This no-obligation discovery call allows us to understand your challenges and explore 
                    how our healing approach can help you overcome them.
                  </p>
                  <Button className="w-full bg-purple-dark hover:bg-purple-medium text-white">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Consultation Card */}
              <Card className="bg-gradient-to-br from-sage-light/30 to-sage-light/50 border-2 border-sage-light hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-dark mb-3">
                    WhatsApp Consultation
                  </h3>
                  <p className="text-purple-medium text-sm mb-4 leading-relaxed">
                    Direct WhatsApp messaging for quick questions or inquiries
                  </p>
                  <p className="text-xs text-purple-medium mb-6 leading-relaxed">
                    Prefer a chat? Reach out directly via WhatsApp for a text-based conversation about how our 
                    healing services can address your specific needs.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
