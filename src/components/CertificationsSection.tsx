
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [ {
    title: "Clinical Hypnotherapy",
    org: "American Board of Hypnotherapy (ABH)",
    logo: "/lovable-uploads/84ad1457-3c87-408c-9ce8-27d48a253d66.png",
    description: "Professional clinical hypnotherapy certification"
  },{
    title: "Time Line Therapy®",
    org: "TLT® Association",
    logo: "/lovable-uploads/83d5f222-8dd4-4a0b-b14f-93065557e489.png",
    description: "Advanced therapeutic technique for emotional healing"
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
  }, {
    title: "Professional Certification",
    org: "Therapeutic Training Institute",
    logo: "/lovable-uploads/2403300f-e082-4573-93ac-849c73996313.png",
    description: "Advanced therapeutic methodologies"
  }, {
    title: "Advanced Practitioner",
    org: "International Healing Association",
    logo: "/lovable-uploads/63b0502e-a679-4e45-9e33-c4489d57e78a.png",
    description: "Advanced healing techniques certification"
  }, {
    title: "Master Practitioner Certification",
    org: "Global Wellness Institute",
    logo: "/lovable-uploads/80cc333c-c44f-4b3d-90b2-857d22c7531a.png",
    description: "Comprehensive wellness and healing practices"
  }, {
    title: "Specialized Training Certificate",
    org: "Professional Development Academy",
    logo: "/lovable-uploads/8e92d398-8495-4988-a303-5fb8be016750.png",
    description: "Specialized therapeutic approaches"
  }, {
    title: "Advanced Certification",
    org: "International Therapy Board",
    logo: "/lovable-uploads/96c45d35-a86f-45f2-bb90-1fdb7c1455c1.png",
    description: "Advanced therapeutic interventions"
  }, {
    title: "Professional Excellence Award",
    org: "Healing Arts Institute",
    logo: "/lovable-uploads/9b32dbbe-02c5-418a-b0c1-9fe944e8b0c2.png",
    description: "Recognition for professional excellence"
  }, {
    title: "Master Healer Certification",
    org: "Energy Healing Academy",
    logo: "/lovable-uploads/b84e3626-0d98-484b-81e7-ee27351bbe3e.png",
    description: "Comprehensive energy healing practices"
  }];

  const additionalTrainings = ["Access Bars® Practitioner & Facilitator", "Master Reiki", "Master Choa Kok Sui's Pranic Healing", "Access FaceLift® Practitioner", "Certified Trainer", "Intuitive Healing", "Space Clearing & Recharging", "Consciousness Advisor", "Sexual Agility Specialist", "Past-life Regression Specialist", "SuperRelationships Specialist", "Money Reiki", "Laughter Yoga Leader"];

  return (
    <section id="certifications-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="certifications-title" className="text-4xl md:text-5xl font-bold text-deep-purple mb-4 scroll-margin-top">Professional Certifications</h2>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start overflow-x-hidden">
          {/* Certification Carousel */}
          <div className="animate-fade-in delay-300 overflow-x-hidden">
            <div className="bg-gradient-to-br from-soft-lavender to-light-lavender-pink p-8 rounded-2xl shadow-lg overflow-x-hidden">
              <h3 className="text-2xl font-semibold text-deep-purple mb-6 text-center">Internationally Certified Master Practitioner in:</h3>
              
              <div className="overflow-x-hidden">
                <Carousel className="w-full max-w-md mx-auto overflow-x-hidden">
                  <CarouselContent className="overflow-x-hidden">
                    {certifications.map((cert, index) => (
                      <CarouselItem key={index} className="overflow-x-hidden">
                        <Card className="border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-x-hidden">
                          <CardContent className="p-6 overflow-x-hidden">
                            <div className="aspect-square flex items-center justify-center mb-4 bg-white rounded-lg p-4 overflow-hidden">
                              <img src={cert.logo} alt={`${cert.title} certification from ${cert.org}`} className="w-full h-full object-contain" />
                            </div>
                            <div className="text-center">
                              <h4 className="font-semibold text-deep-purple text-lg mb-2">
                                {cert.title}
                              </h4>
                              <p className="text-dark-olive text-sm mb-2">
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
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </div>
              
              {/* Mobile swipe indicator */}
              <p className="text-center text-dark-olive text-sm mt-4 sm:hidden">
                Swipe to view all certifications
              </p>
            </div>
          </div>

          {/* Certification Lists */}
          <div className="space-y-8 animate-fade-in delay-500 overflow-x-hidden">
            {/* Main Certifications List */}
            <div className="bg-creamy-beige p-6 rounded-xl overflow-x-hidden">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-vibrant-purple mr-3" />
                <h3 className="text-xl font-bold text-deep-purple">Internationally Certified Master Practitioner in:</h3>
              </div>
              <div className="space-y-4 overflow-x-hidden">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm overflow-x-hidden">
                    <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                    <div className="overflow-x-hidden">
                      <h4 className="font-semibold text-deep-purple">
                        {cert.title}
                      </h4>
                      <p className="text-dark-olive text-sm">
                        {cert.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Trainings */}
            <div className="bg-light-olive p-6 rounded-xl overflow-x-hidden">
              <div className="flex items-center mb-6">
                <Check className="w-6 h-6 text-vibrant-purple mr-3" />
                <h3 className="text-xl font-bold text-deep-purple">Additional Specialized Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 overflow-x-hidden">
                {additionalTrainings.map((training, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-white/70 rounded-md overflow-x-hidden">
                    <div className="w-2 h-2 bg-vibrant-purple rounded-full flex-shrink-0"></div>
                    <span className="text-deep-purple text-sm font-medium">
                      {training}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Wall Reference */}
        <div className="mt-16 text-center animate-fade-in delay-700 overflow-x-hidden">
          <div className="relative max-w-4xl mx-auto overflow-x-hidden">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-soft-lavender">
              <img src="/lovable-uploads/place.jpg" alt="Professional certification display wall showing years of dedicated training and education in therapeutic practices" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-soft-lavender overflow-x-hidden">
              <p className="text-lg italic text-deep-purple font-medium mb-2">&quot;These are more than just title. They reflect the depth, care, and responsibility I bring into every session.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
