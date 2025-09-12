// src/components/VisitAndReviews.tsx
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import PromotionalSlideshow from './PromotionalSlideshow';
import Testimonials from './Testimonials';

const VisitAndReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-montserrat mb-4">
            Our Home, Your Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
            Experience our community, in the heart of the city.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-semibold">Interactive Map Coming Soon</p>
                </div>
              </div>
            </Card>
            <Card className="bg-secondary/50 border-accent/20">
              <CardContent className="p-6">
                <p className="text-primary font-semibold mb-2">Reservation Recommended</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To ensure the best dining experience, we highly recommend making a reservation, especially for weekend dining.
                </p>
                <a href="#reservations">
                  <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-primary-foreground">
                    Reserve Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Testimonials 
              currentSlide={currentSlide} 
              setCurrentSlide={setCurrentSlide} 
              totalSlides={totalSlides} 
            />
            <PromotionalSlideshow 
              currentSlide={currentSlide} 
            /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitAndReviews;