
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star, Heart, Sparkles } from 'lucide-react';

const ConsultingSection = () => {
  const handleStartTransformation = () => {
    window.open('https://calendly.com/hello-naghamthecoach/new-healing-session', '_blank');
  };

  // Define paired bullet points for perfect alignment
  const bulletPairs = [
    {
      left: {
        icon: Check,
        title: "Certified from ABH, ABNLP, TLT®, and ICBCH",
        description: "Accredited credentials you can trust, backed by years of professional training."
      },
      right: {
        icon: Sparkles,
        title: "Fewer sessions, real shifts",
        description: "A results-focused approach designed to create lasting change."
      }
    },
    {
      left: {
        icon: Star,
        title: "I blend CBT, hypnotherapy, and subconscious tools",
        description: "Including Reiki, Access Bars®, Past Life Regression, and more."
      },
      right: {
        icon: Check,
        title: "Customized to you",
        description: "I don't follow scripts; I follow you."
      }
    },
    {
      left: {
        icon: Heart,
        title: "You'll feel safe, seen, and never judged",
        description: "This is your sanctuary for healing and deep transformation."
      },
      right: {
        icon: Heart,
        title: "We work on all levels",
        description: "Mind, body, energy, and emotion for complete transformation."
      }
    }
  ];

  return (
    <section id="consulting" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">Why Work With Me?</h2>
          <p className="text-lg text-dark-olive mt-4 max-w-4xl">Because this isn't cookie-cutter coaching or talk therapy. It's deep, personal, and integrative.</p>
        </div>

        {/* Aligned bullet point pairs */}
        <div className="max-w-5xl mx-auto space-y-8">
          {bulletPairs.map((pair, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left bullet point */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                  <pair.left.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-deep-purple leading-relaxed">
                  <span className="font-semibold">{pair.left.title}</span> — {pair.left.description}
                </p>
              </div>

              {/* Right bullet point */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                  <pair.right.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-deep-purple leading-relaxed">
                  <span className="font-semibold">{pair.right.title}</span> — {pair.right.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleStartTransformation} 
            className="bg-deep-purple hover:bg-vibrant-purple text-white px-12 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Start Your Transformational Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
