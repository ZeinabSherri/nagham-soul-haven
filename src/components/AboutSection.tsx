
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Brain, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            Therapist | Subconscious Guide | Energy Healer
          </h2>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in delay-300">
            <p className="text-lg text-purple-dark leading-relaxed hover:text-purple-medium transition-colors duration-300">
              I believe healing happens when we feel truly safe to explore the depths of our inner world. 
              My approach blends evidence-based therapeutic techniques with energy healing modalities, 
              creating a unique space where science meets spirituality.
            </p>
            
            <p className="text-lg text-purple-dark leading-relaxed hover:text-purple-medium transition-colors duration-300">
              Through NLP, hypnotherapy, CBT, Reiki, Access Bars, and meditation, I guide you through 
              a personalized healing journey that honors both your logical mind and intuitive wisdom.
            </p>

            <p className="text-lg text-purple-dark leading-relaxed hover:text-purple-medium transition-colors duration-300">
              Every session is tailored to your unique needs, whether you're seeking to release trauma, 
              overcome limiting beliefs, or simply find more peace and clarity in your daily life.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 animate-fade-in delay-500 hover:scale-105 transition-transform duration-300">
                <Brain className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">NLP & Hypnotherapy</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-600 hover:scale-105 transition-transform duration-300">
                <Heart className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Reiki & Energy Healing</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-700 hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">Access Bars</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-800 hover:scale-105 transition-transform duration-300">
                <Leaf className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Meditation & Mindfulness</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in delay-400">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/lovable-uploads/8e92d398-8495-4988-a303-5fb8be016750.png" 
                  alt="Nagham Rasbieh - Professional Therapist and Healer" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-purple-dark text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
