import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star, Heart, Sparkles } from 'lucide-react';
const ConsultingSection = () => {
  const handleStartTransformation = () => {
    window.open('https://calendly.com/hello-naghamthecoach/new-healing-session', '_blank');
  };
  return <section id="consulting" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">Why Work With Me?</h2>
          <p className="text-lg text-dark-olive mt-4 max-w-4xl">Because this isn’t cookie-cutter coaching or talk therapy. It’s deep, personal, and integrative.

        </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column - Key Points */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">Certified from ABH, ABNLP, TLT®, and ICBCH</span> — 
                Accredited credentials you can trust, backed by years of professional training.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">I blend CBT, hypnotherapy, and subconscious tools</span> Including Reiki, Access Bars®, Past Life Regression, and more.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">You'll feel safe, seen, and never judged</span> — 
                This is your sanctuary for healing and deep transformation.
              </p>
            </div>
          </div>

          {/* Right Column - Key Points */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">Fewer sessions, real shifts</span> — 
                A results-focused approach designed to create lasting change.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">Customized to you</span> — 
                I don’t follow scripts; I follow you.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-vibrant-purple rounded-full flex items-center justify-center mt-1">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-deep-purple leading-relaxed">
                <span className="font-semibold">We work on all levels</span> — 
                Mind, body, energy, and emotion for complete transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button onClick={handleStartTransformation} className="bg-deep-purple hover:bg-vibrant-purple text-white px-12 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            Start Your Transformation Journey
          </Button>
        </div>
      </div>
    </section>;
};
export default ConsultingSection;