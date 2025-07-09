import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">
            About me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Portrait Photo */}
          <div className="flex justify-center items-center lg:justify-center animate-fade-in delay-300">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img src="/lovable-uploads/db5706f5-c5c7-4f16-a926-bffed5e0fae7.png" alt="Nagham Rasbieh - Professional Therapist and Healer" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 animate-fade-in delay-500">
            {/* Subtitle with roles/titles */}
            <h3 className="text-xl md:text-2xl font-semibold text-vibrant-purple animate-fade-in delay-700">Mental Health Therapist | Consciousness Advisor | Energy Healer
          </h3>

            {/* Italic tagline */}
            <p className="text-lg text-deep-purple italic animate-fade-in delay-1000">Helping you reconnect with your truth and find peace from the inside out.</p>

            {/* Descriptive paragraphs */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1200">
                I'm <span className="font-semibold text-deep-purple">Nagham Rasbieh</span>,an internationally certified Master Coach and therapist, specializing in conscious and unconscious transformation.
I integrate neuroscience-based coaching, clinical hypnotherapy, NLP, consciousness work, and energy healing to support children, teens, mothers, and adults on their healing journey.

My goal is simple: to help you reconnect with your truth, regulate your nervous system, and experience deep peace from the inside out.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1400">
                I work with children, teens, mothers, and adults using NLP, hypnotherapy, energy work, and consciousness-based healing. My goal is to help you reconnect with your truth, regulate your nervous system, and experience peace from the inside out.
              </p>

              {/* Clinical Hypnotherapist Recognition */}
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1500">
                I'm officially a <span className="font-semibold text-deep-purple">Clinical Hypnotherapist</span>, recognized by both:
              </p>
              <ul className="space-y-2 ml-4 animate-fade-in delay-1500">
                <li className="text-lg text-gray-700">• The American Board of Hypnotherapy (ABH)</li>
                <li className="text-lg text-gray-700">• The Lebanese Syndicate of Hypnotherapists (LSH)</li>
                <li className="text-lg text-gray-700">• The International Certification Board of Coaches & Hypnotists</li>
              </ul>
            </div>

            {/* My Approach Subheading */}
            <h4 className="text-2xl font-bold text-deep-purple mt-8 animate-fade-in delay-1600">
              My Approach
            </h4>

            {/* Bullet list */}
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 animate-fade-in delay-1800">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Blend scientific tools like NLP, hypnotherapy, and CBT with intuitive healing methods
                </span>
              </li>
              <li className="flex items-start space-x-3 animate-fade-in delay-2000">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Create emotionally safe spaces for healing and transformation
                </span>
              </li>
              <li className="flex items-start space-x-3 animate-fade-in delay-2200">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Focus on nervous system regulation and inner peace
                </span>
              </li>
              <li className="flex items-start space-x-3 animate-fade-in delay-2400">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Tailor each session to your unique needs and healing journey
                </span>
              </li>
            </ul>

            {/* Call-to-action Button */}
            <div className="pt-6 animate-fade-in delay-2600">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-deep-purple hover:bg-deep-purple/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;