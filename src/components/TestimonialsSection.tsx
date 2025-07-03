
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Working with Nagham has been life-changing. Her gentle yet powerful approach helped me release years of anxiety and find peace I never thought possible. I finally feel safe in my own body.",
      rating: 5,
      color: "purple-light"
    },
    {
      name: "Michael R.",
      text: "Nagham's unique combination of therapy and energy work created profound shifts in my life. I've overcome limiting beliefs that held me back for decades. Her space feels incredibly safe and healing.",
      rating: 5,
      color: "sage-light"
    },
    {
      name: "Elena K.",
      text: "The Access Bars session was incredible - I felt like years of mental clutter just melted away. Nagham has such a warm, intuitive presence that makes you feel completely held and supported.",
      rating: 5,
      color: "purple-very-light"
    },
    {
      name: "David L.",
      text: "After just a few sessions, I noticed dramatic changes in my relationships and self-confidence. Nagham's integrative approach addresses both the logical and intuitive aspects of healing beautifully.",
      rating: 5,
      color: "purple-medium"
    },
    {
      name: "Jessica T.",
      text: "The past life regression session provided insights that completely reframed my understanding of current challenges. Nagham creates such a sacred, safe space for deep healing work.",
      rating: 5,
      color: "sage-dark"
    },
    {
      name: "Robert H.",
      text: "I was skeptical about energy healing, but Nagham's scientific background and gentle approach made me feel comfortable. The results speak for themselves - I feel more centered and clear than ever.",
      rating: 5,
      color: "cream"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      "purple-light": "from-purple-light/50 to-purple-light/70 border-purple-light",
      "sage-light": "from-sage-light/30 to-sage-light/50 border-sage-light",
      "purple-very-light": "from-purple-very-light/70 to-purple-very-light/90 border-purple-light",
      "purple-medium": "from-purple-medium/20 to-purple-medium/40 border-purple-medium",
      "sage-dark": "from-sage-dark/30 to-sage-dark/50 border-sage-dark",
      "cream": "from-cream/70 to-cream/90 border-purple-light"
    };
    return colors[color as keyof typeof colors] || colors["purple-light"];
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-purple-medium max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have experienced deep healing and transformation.
          </p>
          <div className="w-24 h-1 bg-purple-medium mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-gradient-to-br ${getColorClasses(testimonial.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-medium mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-purple-medium fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-purple-dark mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-purple-dark">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-very-light to-sage-light/30 rounded-2xl p-8 border-2 border-purple-light max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-dark mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-purple-medium mb-6 text-lg">
              Join hundreds of others who have found peace, clarity, and freedom through our work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-medium hover:bg-purple-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Your Session
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-medium text-purple-dark hover:bg-purple-very-light px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
