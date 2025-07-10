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
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple text-left">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Portrait Photo */}
          <div className="flex justify-center items-center lg:justify-center animate-fade-in delay-300">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img alt="Nagham Rasbieh - Professional Therapist and Healer" src="/lovable-uploads/74954204-958f-485c-bdec-7479a258e6c8.jpg" className="w-full h-full object-center object-contain" />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 animate-fade-in delay-500">
            {/* Subtitle with roles/titles */}
            <h3 className="text-xl md:text-2xl font-semibold text-vibrant-purple animate-fade-in delay-700">Mental Health Therapist | Consciousness Advisor | Energy Healer
          </h3>

            {/* Italic tagline */}
            <p className="text-lg text-deep-purple italic animate-fade-in delay-1000">Helping you reconnect with your truth and find peace from the inside out.</p>

            {/* Descriptive paragraphs */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1200">
                I'm <span className="font-semibold text-deep-purple">Nagham Rasbieh</span>, an Internationally Certified Master Coach and Therapist, specializing in conscious and unconscious transformation.
I integrate neuroscience-based coaching, clinical hypnotherapy,Neuro-Linguistic Programming (NLP), consciousness work, and energy healing to support children, teens, mothers, and adults on their healing journey.</p>
 <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1200">My Goal is simple: to help you reconnect with your truth, regulate your nervous system, and experience deep peace from the inside out.</p>
              
              

              {/* Clinical Hypnotherapist Recognition */}
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-1500">
                I'm officially a <span className="font-semibold text-deep-purple">Clinical Hypnotherapist</span>, recognized by:
              </p>
              <ul className="space-y-2 ml-4 animate-fade-in delay-1500">
                <li className="text-lg text-gray-700 font-bold">• The American Board of Hypnotherapy (ABH)</li>
                <li className="text-lg text-gray-700 font-bold">• The International Certification Board of Coaches & Hypnotists(ICBCH)</li>
                <li className="text-lg text-gray-700 font-bold">• The Lebanese Syndicate of Hypnotherapists (LSH)</li>
                
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
                <span className="text-lg text-gray-700"> Blend evidence-based practices like NLP, hypnotherapy, and CBT with intuitive and consciousness-driven healing</span>
              </li>
              <li className="flex items-start space-x-3 animate-fade-in delay-2000">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Create a safe space where real change happens
              </span>
              </li>
              <li className="flex items-start space-x-3 animate-fade-in delay-2200">
                <Check className="w-5 h-5 text-vibrant-purple mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">Calm the nervous system to restore inner peace</span>
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