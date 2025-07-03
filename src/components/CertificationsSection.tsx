
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Shield, Heart } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      org: "ABH",
      title: "American Board of Hypnotherapy",
      credential: "Certified Hypnotherapist",
      icon: Award,
      color: "purple-light"
    },
    {
      org: "ABNLP",
      title: "American Board of NLP",
      credential: "Certified NLP Practitioner",
      icon: Star,
      color: "sage-light"
    },
    {
      org: "TLT®",
      title: "Time Line Therapy®",
      credential: "Certified Practitioner",
      icon: Shield,
      color: "purple-medium"
    },
    {
      org: "ICBCH",
      title: "International Board of Certified Hypnotherapists",
      credential: "Board Certified Hypnotherapist",
      icon: Heart,
      color: "sage-dark"
    }
  ];

  const additionalTrainings = [
    "Reiki Master Teacher",
    "Access Bars Practitioner",
    "Past Life Regression Therapist",
    "Laughter Yoga Leader",
    "Meditation Teacher",
    "Energy Healing Practitioner"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      "purple-light": "bg-purple-light border-purple-light text-purple-dark",
      "sage-light": "bg-sage-light border-sage-light text-purple-dark",
      "purple-medium": "bg-purple-medium border-purple-medium text-white",
      "sage-dark": "bg-sage-dark border-sage-dark text-white"
    };
    return colors[color as keyof typeof colors] || colors["purple-light"];
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            Verified Certifications
          </h2>
          <p className="text-xl text-purple-medium max-w-3xl mx-auto leading-relaxed">
            My credentials reflect years of dedicated study and commitment to providing 
            the highest quality healing services.
          </p>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certificate wall image */}
        <div className="mb-16 flex justify-center">
          <div className="relative max-w-4xl">
            <img 
              src="/lovable-uploads/b84e3626-0d98-484b-81e7-ee27351bbe3e.png" 
              alt="Wall of Professional Certifications and Credentials" 
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-purple-dark font-semibold">Professional Certifications Display</p>
              <p className="text-purple-medium text-sm">Years of dedicated training and education</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className={`${getColorClasses(cert.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <CardContent className="p-6 text-center">
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${cert.color === 'purple-medium' || cert.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'}`} />
                  <Badge variant="secondary" className="mb-3 bg-white/70 text-purple-dark">
                    {cert.org}
                  </Badge>
                  <h3 className={`font-bold text-lg mb-2 ${cert.color === 'purple-medium' || cert.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'}`}>{cert.title}</h3>
                  <p className={`text-sm font-medium ${cert.color === 'purple-medium' || cert.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'}`}>{cert.credential}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-sage-light rounded-2xl p-8 border-2 border-sage-light">
          <h3 className="text-2xl font-bold text-purple-dark mb-6 text-center">
            Additional Specialized Trainings
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalTrainings.map((training, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-purple-medium rounded-full"></div>
                <span className="text-purple-dark font-medium">{training}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-purple-very-light rounded-2xl p-8 border-2 border-purple-light text-center">
          <h3 className="text-2xl font-bold text-purple-dark mb-4">
            Perfect for You If...
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You're ready to release what's been holding you back</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You want to feel more calm and grounded in your body</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You're seeking deeper self-understanding and clarity</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You're open to exploring both mind and energy healing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You want to break free from limiting patterns and beliefs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage-dark rounded-full mt-2"></div>
                <p className="text-purple-dark">You're committed to your personal growth and healing journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
