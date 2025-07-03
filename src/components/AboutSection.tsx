
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Brain, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            Therapist | Subconscious Guide | Energy Healer
          </h2>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-purple-dark leading-relaxed">
              I believe healing happens when we feel truly safe to explore the depths of our inner world. 
              My approach blends evidence-based therapeutic techniques with energy healing modalities, 
              creating a unique space where science meets spirituality.
            </p>
            
            <p className="text-lg text-purple-dark leading-relaxed">
              Through NLP, hypnotherapy, CBT, Reiki, Access Bars, and meditation, I guide you through 
              a personalized healing journey that honors both your logical mind and intuitive wisdom.
            </p>

            <p className="text-lg text-purple-dark leading-relaxed">
              Every session is tailored to your unique needs, whether you're seeking to release trauma, 
              overcome limiting beliefs, or simply find more peace and clarity in your daily life.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">NLP & Hypnotherapy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Reiki & Energy Healing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-purple-medium" />
                <span className="text-purple-dark font-medium">Access Bars</span>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-sage-dark" />
                <span className="text-purple-dark font-medium">Meditation & Mindfulness</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-gradient-to-br from-purple-very-light to-purple-light border-purple-light shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-light to-sage-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-6xl">🌸</div>
                </div>
                <h3 className="text-2xl font-bold text-purple-dark mb-2">Nagham Rasbieh</h3>
                <p className="text-purple-medium mb-4">Certified Healing Practitioner</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-purple-light text-purple-dark border-purple-medium">
                    Licensed Therapist
                  </Badge>
                  <Badge variant="secondary" className="bg-sage-light text-sage-dark border-sage-dark">
                    Energy Healer
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-very-light text-purple-dark border-purple-medium">
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
