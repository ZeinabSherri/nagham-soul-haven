
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const TestimonialsSection = () => {
  const testimonials = [{
    name: "Mark",
    text: "I tried years of therapy. One session with Nagham shifted something I didn't even know was stuck.",
    rating: 5,
    bgColor: "#c6d48a"
  }, {
    name: "Maya", 
    text: "I finally feel safe in my body after years of anxiety. Nagham gave me space to bring all my fears, and somehow, it felt okay to just be me.",
    rating: 5,
    bgColor: "#f7e3fc"
  }, {
    name: "Rana",
    text: "Her sessions helped me reconnect with myself in ways I didn't think were possible.",
    rating: 5,
    bgColor: "#d8c8f4"
  }];

  const handleBookSession = () => {
    const bookingSection = document.getElementById('services-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    console.log('TestimonialsSection: Scrolling to get in touch section');
    scrollToSection('get-in-touch-title');
  };

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left-aligned title with semantic ID */}
        <div className="mb-12 animate-fade-in">
          <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold text-deep-purple text-left scroll-margin-top">
            What Clients Say
          </h2>
          <p className="text-lg text-vibrant-purple mt-4 max-w-3xl animate-fade-in delay-200">
            Real stories from real people who have experienced deep healing and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group text-deep-purple"
              style={{
                backgroundColor: testimonial.bgColor,
                borderColor: testimonial.bgColor,
                animationDelay: `${400 + index * 200}ms`
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 mr-3 text-vibrant-purple transition-transform duration-300 group-hover:scale-110" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-current text-vibrant-purple transition-all duration-300 hover:scale-110" 
                        style={{
                          animationDelay: `${i * 100}ms`
                        }} 
                      />
                    ))}
                  </div>
                </div>
                <p className="mb-4 leading-relaxed italic text-sm text-deep-purple transition-all duration-300 group-hover:text-opacity-90">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-sm text-deep-purple transition-all duration-300">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-light-lavender-pink rounded-xl p-6 border-2 border-soft-lavender max-w-4xl mx-auto hover:shadow-lg transition-all duration-500">
            <h3 className="text-xl font-bold text-deep-purple mb-4 animate-fade-in delay-1200">Ready to Start Your Transformation?</h3>
            <p className="text-vibrant-purple mb-6 animate-fade-in delay-1400">Join hundreds of others who have found peace, clarity, and freedom through our work together.<br/>
            Curious what's possible for you?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBookSession} className="bg-vibrant-purple hover:bg-deep-purple text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in delay-1600">
                Book Your Session
              </button>
              <button onClick={handleServicesClick} className="border-2 border-vibrant-purple text-deep-purple hover:bg-light-lavender-pink px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-fade-in delay-1800">
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
