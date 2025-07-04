
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Portrait Photo */}
          <div className="flex justify-center items-center lg:justify-center">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/8e92d398-8495-4988-a303-5fb8be016750.png" 
                  alt="Nagham Rasbieh - Professional Therapist and Healer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-deep-purple">
              About me
            </h2>

            {/* Subtitle with roles/titles */}
            <h3 className="text-xl md:text-2xl font-semibold text-vibrant-purple">
              Therapist | Subconscious Guide | Energy Healer
            </h3>

            {/* Italic tagline */}
            <p className="text-lg text-deep-purple italic">
              Helping you reconnect with your truth and find peace from the inside out.
            </p>

            {/* Descriptive paragraphs */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-semibold text-deep-purple">Nagham Rasbieh</span>, a certified subconscious healing practitioner blending science-backed tools and spiritual depth. My approach is gentle, rooted in emotional safety, and designed to bring real results in fewer sessions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I work with children, teens, mothers, and adults using NLP, hypnotherapy, energy work, and consciousness-based healing. My goal is to help you reconnect with your truth, regulate your nervous system, and experience peace from the inside out.
              </p>
            </div>

            {/* My Approach Subheading */}
            <h4 className="text-2xl font-bold text-deep-purple mt-8">
              My Approach
            </h4>

            {/* Bullet list */}
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Blend scientific tools like NLP, hypnotherapy, and CBT with intuitive healing methods
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Create emotionally safe spaces for healing and transformation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Focus on nervous system regulation and inner peace
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">
                  Tailor each session to your unique needs and healing journey
                </span>
              </li>
            </ul>

            {/* Call-to-action Button */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-deep-purple hover:bg-deep-purple/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
