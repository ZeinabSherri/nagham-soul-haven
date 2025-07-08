
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Clinical Hypnotherapy",
       org: "American Board of Hypnotherapy (ABH)",
    },
    {
      title: "Neurologist Programming ( NLP)",
       org: "American Board of NLP (ABNLP)",
    },
    {
      title: "Time Line Therapy®",
      org: "TLT® Association",
    },
    {
      title: "Cognitive-Behavioral Therapy Specialist (CBT)",
      org: "International Certification Board of Coaches And Hypnotist",
    }
  ];

  const additionalTrainings = [
    "Access Bars",
    "Reiki",
    "Pranic Healing",
    "Past Life Regression",
    "CBT foundations",
    "Laughter Yoga",
    "Transcendental Meditation"
  ];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">
            Verified Certifications
          </h2>
        </div>

        {/* Certificate Wall Image */}
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

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - International Certifications */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl font-bold mb-8 text-deep-purple">
              Internationally Certified Practitioner in:
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <Check className="w-6 h-6 text-vibrant-purple mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-deep-purple mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-dark-olive">
                      {cert.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Additional Trainings */}
          <div className="animate-fade-in delay-700">
            <h3 className="text-2xl font-bold mb-8 text-deep-purple">
              Also trained in:
            </h3>
            <div className="space-y-4">
              {additionalTrainings.map((training, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 animate-fade-in"
                  style={{ animationDelay: `${900 + index * 50}ms` }}
                >
                  <Check className="w-5 h-5 text-vibrant-purple flex-shrink-0" />
                  <span className="text-lg text-dark-olive">
                    {training}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-creamy-beige rounded-xl p-8 text-center animate-fade-in delay-1200">
          <p className="text-xl italic text-deep-purple font-medium leading-relaxed">
            "These are more than just titles. They reflect the depth, care, and responsibility I bring into every session."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
