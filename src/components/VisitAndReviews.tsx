import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import Testimonials from './Testimonials';
import PromotionalSlideshow from './PromotionalSlideshow';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { siteConfig } from '@/data/siteConfig'; // Import our new config file

const VisitAndReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  // --- GOOGLE MAPS SETUP ---
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  // The map center now comes from our single source of truth
  const center = siteConfig.mapCoordinates;
  // --- END GOOGLE MAPS SETUP ---

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
            <Card className="overflow-hidden shadow-lg aspect-video">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                  options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                >
                  <MarkerF position={center} />
                </GoogleMap>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200">
                  <p className="text-muted-foreground">Loading Map...</p>
                </div>
              )}
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