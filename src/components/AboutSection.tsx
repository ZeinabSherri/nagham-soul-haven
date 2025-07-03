
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
            About me
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-medium mb-4">
            Therapist | Subconscious Guide | Energy Healer
          </h3>
          <p className="text-lg text-purple-medium italic">
            Helping you reconnect with your truth and find peace from the inside out.
          </p>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center animate-scale-in delay-200">
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

          <div className="space-y-8 animate-fade-in delay-300">
            <div className="bg-purple-very-light rounded-2xl p-8 border-2 border-purple-light hover:shadow-lg transition-all duration-300">
              <p className="text-lg text-purple-dark leading-relaxed mb-6">
                I'm <span className="font-semibold text-purple-medium">Nagham Rasbieh</span>, a certified subconscious healing practitioner blending science-backed tools and spiritual depth. My approach is gentle, rooted in emotional safety, and designed to bring real results in fewer sessions.
              </p>
              <p className="text-lg text-purple-dark leading-relaxed mb-6">
                I work with children, teens, mothers, and adults using NLP, hypnotherapy, energy work, and consciousness-based healing. My goal is to help you reconnect with your truth, regulate your nervous system, and experience peace from the inside out.
              </p>
            </div>

            <div className="bg-sage-light rounded-2xl p-8 border-2 border-sage-dark hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-purple-dark mb-4">My Approach</h4>
              <p className="text-lg text-purple-dark leading-relaxed mb-4">
                I work with women, teens, children, and adults who are ready to stop repeating old patterns and start living with clarity, peace, and self-trust.
              </p>
              <p className="text-lg text-purple-dark leading-relaxed mb-4">
                I blend scientific tools like NLP, hypnotherapy, and CBT with intuitive healing methods like Reiki, Access Bars, laughter yoga, and meditation — all tailored to your needs.
              </p>
              <p className="text-lg text-purple-dark leading-relaxed font-medium italic">
                This work is sacred. I meet you where you are and we move together from there.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 animate-fade-in delay-500 hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-sm">
                <Brain className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">NLP & Hypnotherapy</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-600 hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-sm">
                <Heart className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Reiki & Energy Healing</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-700 hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-sm">
                <Sparkles className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">Access Bars</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in delay-800 hover:scale-105 transition-transform duration-300 bg-white p-4 rounded-xl shadow-sm">
                <Leaf className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Meditation & Mindfulness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
