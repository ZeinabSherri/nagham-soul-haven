
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#562383' }}>
            Certifications
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#657024' }}>
            Professional credentials reflecting years of dedicated study and commitment to providing 
            the highest quality healing services.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full mt-6" style={{ backgroundColor: '#a3399c' }}></div>
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
              <p className="font-semibold" style={{ color: '#562383' }}>Professional Certifications Display</p>
              <p className="text-sm" style={{ color: '#657024' }}>Years of dedicated training and education</p>
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
                className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                style={{ 
                  '--hover-border-color': '#a3399c'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#a3399c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent 
                      className="w-16 h-16 mx-auto mb-3" 
                      style={{ color: '#562383' }}
                    />
                    <Badge 
                      variant="secondary" 
                      className="text-white text-xs font-semibold px-3 py-1"
                      style={{ backgroundColor: '#a3399c' }}
                    >
                      {cert.org}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 leading-tight" style={{ color: '#562383' }}>
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm font-medium mb-3" style={{ color: '#657024' }}>
                    {cert.credential}
                  </p>
                  
                  <p className="text-xs mb-3 leading-relaxed" style={{ color: '#657024' }}>
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-xs" style={{ color: '#a3399c' }}>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Specialized Trainings */}
        <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: '#f9f1dc', borderColor: '#c6d48a' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#562383' }}>
            Additional Specialized Trainings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTrainings.map((training, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-shadow duration-300"
                style={{ borderLeftColor: '#a3399c' }}
              >
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm leading-tight" style={{ color: '#562383' }}>
                    {training.name}
                  </span>
                  <span className="text-xs ml-2 flex-shrink-0" style={{ color: '#657024' }}>
                    {training.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect for You Section */}
        <div className="mt-16 rounded-2xl p-8 border-2 text-center" style={{ backgroundColor: '#f7e3fc', borderColor: '#d8c8f4' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#562383' }}>
            Perfect for You If...
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You're ready to release what's been holding you back</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You want to feel more calm and grounded in your body</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You're seeking deeper self-understanding and clarity</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You're open to exploring both mind and energy healing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You want to break free from limiting patterns and beliefs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#a3399c' }}></div>
                <p style={{ color: '#562383' }}>You're committed to your personal growth and healing journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
