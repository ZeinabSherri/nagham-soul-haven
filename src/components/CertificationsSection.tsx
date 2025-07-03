
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
      color: "rose"
    },
    {
      org: "ABNLP",
      title: "American Board of NLP",
      credential: "Certified NLP Practitioner",
      icon: Star,
      color: "amber"
    },
    {
      org: "TLT®",
      title: "Time Line Therapy®",
      credential: "Certified Practitioner",
      icon: Shield,
      color: "green"
    },
    {
      org: "ICBCH",
      title: "International Board of Certified Hypnotherapists",
      credential: "Board Certified Hypnotherapist",
      icon: Heart,
      color: "purple"
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
      rose: "from-rose-50 to-rose-100 border-rose-200 text-rose-800",
      amber: "from-amber-50 to-amber-100 border-amber-200 text-amber-800",
      green: "from-green-50 to-green-100 border-green-200 text-green-800",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-800"
    };
    return colors[color as keyof typeof colors] || colors.rose;
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Verified Certifications
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            My credentials reflect years of dedicated study and commitment to providing 
            the highest quality healing services.
          </p>
          <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${getColorClasses(cert.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-4" />
                  <Badge variant="secondary" className="mb-3 bg-white/70">
                    {cert.org}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm font-medium">{cert.credential}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Additional Specialized Trainings
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalTrainings.map((training, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-amber-900 font-medium">{training}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 border-2 border-green-200 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            Perfect for You If...
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You're ready to release what's been holding you back</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You want to feel more calm and grounded in your body</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You're seeking deeper self-understanding and clarity</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You're open to exploring both mind and energy healing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You want to break free from limiting patterns and beliefs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-amber-800">You're committed to your personal growth and healing journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
