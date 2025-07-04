
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
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned Section Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">
            Certifications
          </h2>
          <p className="text-lg text-dark-olive mt-4 max-w-3xl">
            Professional credentials reflecting years of dedicated study and commitment to providing 
            the highest quality healing services.
          </p>
        </div>

        {/* Certificate Wall Image - Redesigned */}
        <div className="mb-12 flex justify-center animate-fade-in delay-300">
          <div className="relative max-w-3xl w-full">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-gray-100">
              <img 
                src="/lovable-uploads/b84e3626-0d98-484b-81e7-ee27351bbe3e.png" 
                alt="Wall of Professional Certifications and Credentials" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-white/20">
              <p className="font-semibold text-deep-purple text-sm">Professional Certifications Display</p>
              <p className="text-xs text-dark-olive">Years of dedicated training and education</p>
            </div>
          </div>
        </div>

        {/* Primary Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-vibrant-purple transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 mx-auto mb-3 text-deep-purple" />
                    <Badge 
                      variant="secondary" 
                      className="bg-vibrant-purple text-white text-xs font-semibold px-3 py-1"
                    >
                      {cert.org}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-base mb-2 leading-tight text-deep-purple">
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
        <div className="bg-creamy-beige rounded-xl p-6 border-2 border-light-olive mb-12 animate-fade-in delay-1000">
          <h3 className="text-xl font-bold mb-6 text-left text-deep-purple">
            Additional Specialized Trainings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalTrainings.map((training, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-vibrant-purple hover:shadow-md transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${1200 + index * 50}ms` }}
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
        <div className="bg-light-lavender-pink rounded-xl p-6 border-2 border-soft-lavender animate-fade-in delay-1400">
          <h3 className="text-xl font-bold mb-6 text-left text-deep-purple">
            Perfect for You If...
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You're ready to release what's been holding you back</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You want to feel more calm and grounded in your body</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You're seeking deeper self-understanding and clarity</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You're open to exploring both mind and energy healing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You want to break free from limiting patterns and beliefs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vibrant-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-deep-purple text-sm">You're committed to your personal growth and healing journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
