import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import Testimonials from './Testimonials';
import PromotionalSlideshow from './PromotionalSlideshow';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { siteConfig } from '@/data/siteConfig';

// --- MAP STYLES (RESTORED) ---
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
];

const lightMapStyle = [ { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] } ];
// --- END MAP STYLES ---

const VisitAndReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = { width: '100%', height: '100%' };
  const center = siteConfig.mapCoordinates;
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 18 || currentHour < 6;
  const activeMapStyle = isNight ? darkMapStyle : lightMapStyle;

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
          
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg aspect-video">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={17}
                  options={{
                    styles: activeMapStyle,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    zoomControl: true,
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
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">{siteConfig.address}</p>
                </div>
                <a href={`http://googleusercontent.com/maps.google.com/7${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary-foreground">
                    <Navigation className="mr-2 h-4 w-4"/>
                    Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-accent/20">
              <CardContent className="p-6">
                <p className="text-primary font-semibold mb-2">Reservation Recommended</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To ensure the best dining experience, we highly recommend making a reservation.
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