import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { siteConfig } from '@/data/siteConfig';
import { toast } from 'sonner';

const darkMapStyle = [ { elementType: "geometry", stylers: [{ color: "#242f3e" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] }, { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] }, { featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] }, { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] }, { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] }, { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }, { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] }, { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] } ];
const lightMapStyle = [ { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] } ];

const ContactPage = () => {
  const { isLoaded } = useJsApiLoader({ id: 'google-map-script-contact', googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY });
  const containerStyle = { width: '100%', height: '100%' };
  const center = siteConfig.mapCoordinates;
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 18 || currentHour < 6;
  const activeMapStyle = isNight ? darkMapStyle : lightMapStyle;

  // --- FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // IMPORTANT: Make sure this is the correct endpoint for your CONTACT form
    const contactFormEndpoint = 'https://formspree.io/f/mnnbypbe'; // e.g., 'https://formspree.io/f/mnnbypbe'
    
    try {
      const response = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- END FORM STATE ---

  return (
    <div className="bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
              Whether you're planning a visit, a special event, or have a question, we'd love to hear from you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary font-montserrat mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                    <Input name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message..." className="min-h-[150px]" value={formData.message} onChange={handleChange} required />
                  </div>
                  <div className="text-left">
                    <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden shadow-lg aspect-video">
                {isLoaded ? (
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} options={{ styles: activeMapStyle, streetViewControl: false, mapTypeControl: false, fullscreenControl: false, zoomControl: true }}>
                    <MarkerF position={center} />
                  </GoogleMap>
                ) : ( <div className="flex items-center justify-center h-full bg-gray-200"><p className="text-muted-foreground">Loading Map...</p></div> )}
              </Card>

              <Card className="p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Address</h3>
                      <p className="text-muted-foreground">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <p className="text-muted-foreground">{siteConfig.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Hours</h3>
                      <p className="text-muted-foreground">Wed-Sun: 5PM - 11PM</p>
                      <p className="text-accent/80">Mon-Tue: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;