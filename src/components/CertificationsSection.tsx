
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [{
    title: "Time Line Therapy®",
    org: "TLT® Association",
    logo: "/lovable-uploads/83d5f222-8dd4-4a0b-b14f-93065557e489.png",
    description: "Advanced therapeutic technique for emotional healing"
  }, {
    title: "Clinical Hypnotherapy",
    org: "American Board of Hypnotherapy (ABH)",
    logo: "/lovable-uploads/84ad1457-3c87-408c-9ce8-27d48a253d66.png",
    description: "Professional clinical hypnotherapy certification"
  }, {
    title: "Neuro-Linguistic Programming (NLP)",
    org: "American Board of NLP (ABNLP)",
    logo: "/lovable-uploads/6961dfd4-de35-4e03-be6a-7c198a412632.png",
    description: "Advanced NLP techniques and methodologies"
  }, {
    title: "Cognitive-Behavioral Therapy Specialist (CBT)",
    org: "International Certification Board of Coaches And Hypnotist (ICBCH)",
    logo: "/lovable-uploads/0174fa00-b417-456f-a192-b363fbe2842b.png",
    description: "Specialized CBT therapeutic approach"
  }];

  const additionalTrainings = ["Access Bars® Practitioner & Facilitator", "Master Reiki", "Master Choa Kok Sui's Pranic Healing", "Access FaceLift® Practitioner", "Certified Trainer", "Intuitive Healing", "Space Clearing & Recharging", "Consciousness Advisor", "Sexual Agility Specialist", "Past-life Regression Specialist", "SuperRelationships Specialist", "Money Reiki", "Laughter Yoga Leader"];

  return (
    <section id="certifications-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="certifications-title" className="text-4xl md:text-5xl font-bold text-deep-purple mb-4 scroll-margin-top">Professional Certifications</h2>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Certification Carousel - Mobile Responsive */}
          <div className="animate-fade-in delay-300 w-full">
            <div className="bg-gradient-to-br from-soft-lavender to-light-lavender-pink p-4 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-deep-purple mb-6 text-center">Internationally Certified Master Practitioner in:</h3>
              
              {/* Mobile-First Responsive Carousel Container */}
              <div className="w-full max-w-full overflow-hidden">
                <Carousel className="w-full" opts={{ align: "center", loop: true }}>
                  <CarouselContent className="-ml-2 sm:-ml-4">
                    {certifications.map((cert, index) => (
                      <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full">
                        <Card className="border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto max-w-sm">
                          <CardContent className="p-4 sm:p-6">
                            <div className="aspect-square flex items-center justify-center mb-4 bg-white rounded-lg p-2 sm:p-4">
                              <img 
                                src={cert.logo} 
                                alt={`${cert.title} certification from ${cert.org}`} 
                                className="w-full h-full object-contain max-w-full max-h-full" 
                              />
                            </div>
                            <div className="text-center">
                              <h4 className="font-semibold text-deep-purple text-base sm:text-lg mb-2">
                                {cert.title}
                              </h4>
                              <p className="text-dark-olive text-xs sm:text-sm mb-2">
                                {cert.org}
                              </p>
                              <p className="text-dark-olive text-xs italic">
                                {cert.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Navigation arrows - hidden on mobile, visible on larger screens */}
                  <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
                  <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
                </Carousel>
              </div>
              
              {/* Mobile swipe indicator */}
              <p className="text-center text-dark-olive text-sm mt-4 sm:hidden">
                Swipe to view all certifications
              </p>
            </div>
          </div>

          {/* Certification Lists */}
          <div className="space-y-8 animate-fade-in delay-500">
            {/* Main Certifications List */}
            <div className="bg-creamy-beige p-4 sm:p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="w-5 sm:w-6 h-5 sm:h-6 text-vibrant-purple mr-3" />
                <h3 className="text-lg sm:text-xl font-bold text-deep-purple">Internationally Certified Master Practitioner in:</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-deep-purple text-sm sm:text-base">
                        {cert.title}
                      </h4>
                      <p className="text-dark-olive text-xs sm:text-sm">
                        {cert.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Trainings */}
            <div className="bg-light-olive p-4 sm:p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <Check className="w-5 sm:w-6 h-5 sm:h-6 text-vibrant-purple mr-3" />
                <h3 className="text-lg sm:text-xl font-bold text-deep-purple">Additional Specialized Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {additionalTrainings.map((training, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-white/70 rounded-md">
                    <div className="w-2 h-2 bg-vibrant-purple rounded-full flex-shrink-0"></div>
                    <span className="text-deep-purple text-xs sm:text-sm font-medium min-w-0">
                      {training}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Wall Reference */}
        <div className="mt-16 text-center animate-fade-in delay-700">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-soft-lavender">
              <img 
                src="/lovable-uploads/place.jpg" 
                alt="Professional certification display wall showing years of dedicated training and education in therapeutic practices" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 max-w-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md border border-soft-lavender">
              <p className="text-base sm:text-lg italic text-deep-purple font-medium mb-2">&quot;These are more than just title. They reflect the depth, care, and responsibility I bring into every session.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
