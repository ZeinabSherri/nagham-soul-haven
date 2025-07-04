
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Shield, Heart, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      org: "ABH",
      title: "American Board of Hypnotherapy",
      credential: "Certified Hypnotherapist",
      description: "Professional certification in clinical hypnotherapy practices",
      year: "2020",
      icon: Award
    },
    {
      org: "ABNLP",
      title: "American Board of NLP",
      credential: "Certified NLP Practitioner",
      description: "Advanced training in Neuro-Linguistic Programming techniques",
      year: "2019",
      icon: Star
    },
    {
      org: "TLT®",
      title: "Time Line Therapy®",
      credential: "Certified Practitioner",
      description: "Specialized training in Timeline Therapy methodology",
      year: "2021",
      icon: Shield
    },
    {
      org: "ICBCH",
      title: "International Board of Certified Hypnotherapists",
      credential: "Board Certified Hypnotherapist",
      description: "International certification in hypnotherapy practice",
      year: "2020",
      icon: Heart
    }
  ];

  const additionalTrainings = [
    { name: "Reiki Master Teacher", year: "2018" },
    { name: "Access Bars Practitioner", year: "2019" },
    { name: "Past Life Regression Therapist", year: "2020" },
    { name: "Laughter Yoga Leader", year: "2018" },
    { name: "Meditation Teacher", year: "2017" },
    { name: "Energy Healing Practitioner", year: "2019" }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-purple">
            Certifications
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-dark-olive">
            Professional credentials reflecting years of dedicated study and commitment to providing 
            the highest quality healing services.
          </p>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certificate Wall Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative max-w-4xl">
            <img 
              src="/lovable-uploads/b84e3626-0d98-484b-81e7-ee27351bbe3e.png" 
              alt="Wall of Professional Certifications and Credentials" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold text-deep-purple">Professional Certifications Display</p>
              <p className="text-sm text-dark-olive">Years of dedicated training and education</p>
            </div>
          </div>
        </div>

        {/* Primary Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-vibrant-purple transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className="w-16 h-16 mx-auto mb-3 text-deep-purple" />
                    <Badge 
                      variant="secondary" 
                      className="bg-vibrant-purple text-white text-xs font-semibold px-3 py-1"
                    >
                      {cert.org}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 leading-tight text-deep-purple">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm font-medium mb-3 text-dark-olive">
                    {cert.credential}
                  </p>
                  
                  <p className="text-xs mb-3 leading-relaxed text-dark-olive">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-xs text-vibrant-purple">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Specialized Trainings */}
        <div className="bg-creamy-beige rounded-2xl p-8 border-2 border-light-olive">
          <h3 className="text-2xl font-bold mb-8 text-center text-deep-purple">
            Additional Specialized Trainings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTrainings.map((training, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-vibrant-purple hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm leading-tight text-deep-purple">
                    {training.name}
                  </span>
                  <span className="text-xs ml-2 flex-shrink-0 text-dark-olive">
                    {training.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect for You Section */}
        <div className="mt-16 bg-light-lavender-pink rounded-2xl p-8 border-2 border-soft-lavender text-center">
          <h3 className="text-2xl font-bold mb-6 text-deep-purple">
            Perfect for You If...
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You're ready to release what's been holding you back</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You want to feel more calm and grounded in your body</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You're seeking deeper self-understanding and clarity</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You're open to exploring both mind and energy healing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You want to break free from limiting patterns and beliefs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple">You're committed to your personal growth and healing journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
