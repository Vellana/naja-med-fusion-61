// src/components/OfferingsCarousel.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { offeringsData } from '@/data/offeringsData';
import { Link } from 'react-router-dom';

// Import all necessary images
import menuImage from '@/assets/dish-1.jpg';
import cateringImage from '@/assets/catering-platter-top-down.png';
import eventsImage from '@/assets/catering-event-guests.png';

const imageMap: { [key: string]: string } = {
  '@/assets/dish-1.jpg': menuImage,
  '@/assets/catering-platter-top-down.png': cateringImage,
  '@/assets/catering-event-guests.png': eventsImage,
};

const OfferingsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offeringsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {offeringsData.map((offering) => (
            <div key={offering.title} className="w-full flex-shrink-0 relative aspect-video md:aspect-[2.5/1]">
              <img 
                src={imageMap[offering.imagePath]}
                alt={offering.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white container mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat drop-shadow-lg">{offering.title}</h2>
                  <p className="text-lg mt-4 max-w-lg mx-auto drop-shadow-md">{offering.description}</p>
                  <Link to={offering.link}>
                    <Button size="lg" className="mt-8 bg-action hover:bg-action/90 text-white text-lg px-8 py-6">
                      {offering.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {offeringsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsCarousel;