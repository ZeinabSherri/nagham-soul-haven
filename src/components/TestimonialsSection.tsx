
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
      "purple-light": "bg-purple-light border-purple-light text-purple-dark",
      "sage-light": "bg-sage-light border-sage-light text-purple-dark",
      "purple-very-light": "bg-purple-very-light border-purple-light text-purple-dark",
      "purple-medium": "bg-purple-medium border-purple-medium text-white",
      "sage-dark": "bg-sage-dark border-sage-dark text-white",
      "cream": "bg-cream border-purple-light text-purple-dark"
    };
    return colors[color as keyof typeof colors] || colors["purple-light"];
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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
            <Card 
              key={index} 
              className={`${getColorClasses(testimonial.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className={`w-8 h-8 mr-3 ${testimonial.color === 'purple-medium' || testimonial.color === 'sage-dark' ? 'text-white' : 'text-purple-medium'} transition-transform duration-300 group-hover:scale-110`} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 fill-current ${testimonial.color === 'purple-medium' || testimonial.color === 'sage-dark' ? 'text-white' : 'text-purple-medium'} transition-all duration-300 hover:scale-110`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <p className={`mb-4 leading-relaxed italic ${testimonial.color === 'purple-medium' || testimonial.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'} transition-all duration-300 group-hover:text-opacity-90`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold ${testimonial.color === 'purple-medium' || testimonial.color === 'sage-dark' ? 'text-white' : 'text-purple-dark'} transition-all duration-300`}>
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in delay-1000">
          <div className="bg-purple-very-light rounded-2xl p-8 border-2 border-purple-light max-w-4xl mx-auto hover:shadow-lg transition-all duration-500 hover:scale-105">
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
                className="border-2 border-purple-medium text-purple-dark hover:bg-purple-very-light px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
