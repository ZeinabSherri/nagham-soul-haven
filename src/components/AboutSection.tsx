
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Brain, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Therapist | Subconscious Guide | Energy Healer
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-amber-800 leading-relaxed">
              I believe healing happens when we feel truly safe to explore the depths of our inner world. 
              My approach blends evidence-based therapeutic techniques with energy healing modalities, 
              creating a unique space where science meets spirituality.
            </p>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Through NLP, hypnotherapy, CBT, Reiki, Access Bars, and meditation, I guide you through 
              a personalized healing journey that honors both your logical mind and intuitive wisdom.
            </p>

            <p className="text-lg text-amber-800 leading-relaxed">
              Every session is tailored to your unique needs, whether you're seeking to release trauma, 
              overcome limiting beliefs, or simply find more peace and clarity in your daily life.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-rose-500" />
                <span className="text-amber-900 font-medium">NLP & Hypnotherapy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-green-600" />
                <span className="text-amber-900 font-medium">Reiki & Energy Healing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <span className="text-amber-900 font-medium">Access Bars</span>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-green-700" />
                <span className="text-amber-900 font-medium">Meditation & Mindfulness</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-gradient-to-br from-amber-50 to-rose-50 border-amber-200 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">🌸</div>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Nagham Rasbieh</h3>
                <p className="text-amber-700 mb-4">Certified Healing Practitioner</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-rose-100 text-rose-800 border-rose-200">
                    Licensed Therapist
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Energy Healer
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                    Certified NLP Practitioner
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
