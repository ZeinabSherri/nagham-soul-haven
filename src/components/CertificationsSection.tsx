import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Award } from 'lucide-react';
const CertificationsSection = () => {
  // Main 4 certifications for the carousel
  const mainCertifications = [{
    title: "Clinical Hypnotherapy",
    org: "American Board of Hypnotherapy (ABH)",
    logo: "/lovable-uploads/84ad1457-3c87-408c-9ce8-27d48a253d66.png",
    description: "Professional clinical hypnotherapy certification"
  }, {
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
  }];

  // All certifications including the new ones
  const allCertifications = [...mainCertifications, {
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
  }, {
    title: "Trainer of Master Time Line Therapy",
    org: "Time Line Therapy Association",
    logo: "/lovable-uploads/ac4801f4-1fe5-4fdd-9ab9-dbd984045148.png",
    description: "Advanced trainer certification in Time Line Therapy"
  }, {
    title: "ICBCH Master Certification",
    org: "International Certification Board of Coaches and Hypnotists",
    logo: "/lovable-uploads/c0d768ac-ceaa-46a4-9dc3-1cfbb1e889e6.png",
    description: "Master level coaching and hypnotherapy certification"
  }, {
    title: "NLP Coaching Division Certification",
    org: "Coaching Division of the American Board of NLP",
    logo: "/lovable-uploads/61152745-2b6c-48ea-a08e-7cc1c58d477a.png",
    description: "Approved training in NLP coaching methodologies"
  }];
  const additionalTrainings = ["Access Bars® Practitioner & Facilitator", "Master Reiki", "Master Choa Kok Sui's Pranic Healing", "Access FaceLift® Practitioner", "Certified Trainer", "Intuitive Healing", "Space Clearing & Recharging", "Consciousness Advisor", "Sexual Agility Specialist", "Past-life Regression Specialist", "SuperRelationships Specialist", "Money Reiki", "Laughter Yoga Leader"];
  return <section id="certifications-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="certifications-title" className="text-4xl md:text-5xl font-bold text-deep-purple mb-4 scroll-margin-top">Professional Certifications</h2>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Certification Carousel */}
          <div className="animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-soft-lavender to-light-lavender-pink p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-deep-purple mb-6 text-center">Internationally Certified Master Practitioner in:</h3>
              
              <div className="w-full">
                <Carousel 
                  className="w-full" 
                  data-carousel="true"
                  opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                    startIndex: 0,
                    dragFree: false,
                    containScroll: "trimSnaps"
                  }}
                >
                  <CarouselContent className="flex w-full">
                    {mainCertifications.map((cert, index) => (
                      <CarouselItem key={`cert-${index}`} className="w-full flex-shrink-0">
                        <div className="p-2 w-full">
                          <Card className="border-2 border-white shadow-md hover:shadow-lg transition-all duration-300 w-full">
                            <CardContent className="p-4 sm:p-6">
                              <div className="aspect-square flex items-center justify-center mb-3 sm:mb-4 bg-white rounded-lg p-3 sm:p-4">
                                <img 
                                  src={cert.logo} 
                                  alt={`${cert.title} certification from ${cert.org}`} 
                                  className="w-full h-full object-contain" 
                                  loading="lazy" 
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
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 sm:-left-12 bg-white hover:bg-vibrant-purple hover:text-white border-vibrant-purple text-vibrant-purple shadow-lg" />
                  <CarouselNext className="right-2 sm:-right-12 bg-white hover:bg-vibrant-purple hover:text-white border-vibrant-purple text-vibrant-purple shadow-lg" />
                </Carousel>
                
                {/* Certification count indicator */}
                <div className="text-center mt-4">
                  <p className="text-dark-olive text-sm">
                    {mainCertifications.length} Professional Certifications
                  </p>
                </div>
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
            <div className="bg-creamy-beige p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-vibrant-purple mr-3" />
                <h3 className="text-xl font-bold text-deep-purple">Internationally Certified Master Practitioner in:</h3>
              </div>
              
              
              <div className="space-y-4">
                {mainCertifications.map((cert, index) => <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-deep-purple">
                        {cert.title}
                      </h4>
                      <p className="text-dark-olive text-sm">
                        {cert.org}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Additional Trainings */}
            <div className="bg-light-olive p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <Check className="w-6 h-6 text-vibrant-purple mr-3" />
                <h3 className="text-xl font-bold text-deep-purple">Additional Specialized Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {additionalTrainings.map((training, index) => <div key={index} className="flex items-center space-x-2 p-2 bg-white/70 rounded-md">
                    <div className="w-2 h-2 bg-vibrant-purple rounded-full flex-shrink-0"></div>
                    <span className="text-deep-purple text-sm font-medium">
                      {training}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Wall Reference */}
        <div className="mt-16 text-center animate-fade-in delay-700">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-soft-lavender">
              <img src="/lovable-uploads/place.jpg" alt="Professional certification display wall showing years of dedicated training and education in therapeutic practices" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-soft-lavender">
              <p className="text-lg italic text-deep-purple font-medium mb-2">&quot;These are more than just title. They reflect the depth, care, and responsibility I bring into every session.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CertificationsSection;