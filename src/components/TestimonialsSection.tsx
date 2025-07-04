
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [{
    name: "Zeinab",
    text: "I tried years of therapy. One session with Nagham shifted something I didn't even know was stuck.",
    rating: 5,
    color: "soft-lavender"
  }, {
    name: "Maya",
    text: "I finally feel safe in my body after years of anxiety. She held space for everything.",
    rating: 5,
    color: "light-olive"
  }, {
    name: "Rana",
    text: "Her sessions helped me reconnect with myself in ways I didn't think were possible.",
    rating: 5,
    color: "light-lavender-pink"
  }];

  const getColorClasses = (color: string) => {
    const colors = {
      "soft-lavender": "bg-soft-lavender border-soft-lavender text-deep-purple",
      "light-olive": "bg-light-olive border-light-olive text-deep-purple",
      "light-lavender-pink": "bg-light-lavender-pink border-light-lavender-pink text-deep-purple",
      "vibrant-purple": "bg-vibrant-purple border-vibrant-purple text-white",
      "dark-olive": "bg-dark-olive border-dark-olive text-white",
      "creamy-beige": "bg-creamy-beige border-creamy-beige text-deep-purple"
    };
    return colors[color as keyof typeof colors] || colors["soft-lavender"];
  };

  return <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-purple mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-vibrant-purple max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have experienced deep healing and transformation.
          </p>
          <div className="w-24 h-1 bg-vibrant-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className={`${getColorClasses(testimonial.color)} border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group`} style={{
          animationDelay: `${index * 200}ms`
        }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className={`w-8 h-8 mr-3 ${testimonial.color === 'vibrant-purple' || testimonial.color === 'dark-olive' ? 'text-white' : 'text-vibrant-purple'} transition-transform duration-300 group-hover:scale-110`} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className={`w-5 h-5 fill-current ${testimonial.color === 'vibrant-purple' || testimonial.color === 'dark-olive' ? 'text-white' : 'text-vibrant-purple'} transition-all duration-300 hover:scale-110`} style={{
                  animationDelay: `${i * 100}ms`
                }} />)}
                  </div>
                </div>
                <p className={`mb-4 leading-relaxed italic ${testimonial.color === 'vibrant-purple' || testimonial.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-all duration-300 group-hover:text-opacity-90`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold ${testimonial.color === 'vibrant-purple' || testimonial.color === 'dark-olive' ? 'text-white' : 'text-deep-purple'} transition-all duration-300`}>
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-16 text-center animate-fade-in delay-1000">
          <div className="bg-light-lavender-pink rounded-2xl p-8 border-2 border-soft-lavender max-w-4xl mx-auto hover:shadow-lg transition-all duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-deep-purple mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-vibrant-purple mb-6 text-lg">
              Join hundreds of others who have found peace, clarity, and freedom through our work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-vibrant-purple hover:bg-deep-purple text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Your Session
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-2 border-vibrant-purple text-deep-purple hover:bg-light-lavender-pink px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
