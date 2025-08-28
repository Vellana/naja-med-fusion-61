import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Local Food Critic",
      text: "NAJA has redefined Mediterranean American cuisine in our city. Every dish is a masterpiece that honors tradition while embracing innovation. The lamb is absolutely divine!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Corporate Executive",
      text: "We've hosted multiple business dinners at NAJA, and the experience is consistently exceptional. The ambiance, service, and food quality make it our go-to venue for important meetings.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Wedding Planner",
      text: "NAJA's catering transformed our clients' wedding reception into something truly magical. The attention to detail and flavor profiles were absolutely perfect. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      name: "David Chen",
      title: "Food Enthusiast",
      text: "As someone who's traveled extensively through the Mediterranean, I can say NAJA captures the authentic spirit while adding a unique American twist. The mezze tower is a work of art!",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover why NAJA has become the premier destination for Mediterranean American cuisine
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-card shadow-elegant hover-lift mx-auto max-w-3xl">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                        <Quote className="h-8 w-8 text-primary-foreground" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold fill-current" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="border-t border-border pt-6">
                        <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "4.9", label: "Average Rating" },
              { number: "50+", label: "Events Catered" },
              { number: "2019", label: "Established" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;