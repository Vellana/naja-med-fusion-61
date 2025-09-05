import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["2911 District Ave", "Fairfax, VA 22031"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(571) 430-3650"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@naja.com", "events@naja.com"]
    }
  ];

  const hours = [
    { day: "Monday - Tuesday", time: "Closed" },
    { day: "Wednesday - Thursday", time: "5:00 PM - 10:00 PM" },
    { day: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
    { day: "Sunday", time: "4:00 PM - 9:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4 font-cinzel">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience NAJA in the heart of the city. We look forward to welcoming you to our Mediterranean fusion sanctuary, blending flavors from the Levant with American innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="animate-fade-in-left">
              <Card className="overflow-hidden shadow-elegant hover-lift">
                <div className="aspect-video bg-gradient-elegant relative">
                  {/* Map placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-2 font-cinzel">Find Us Here</h3>
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                    </div>
                  </div>
                  
                  {/* Overlay with address */}
                  <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-navy-foreground p-4">
                    <div className="flex items-center">
                      <Navigation className="h-5 w-5 mr-2" />
                      <span className="font-semibold">2911 District Ave, Fairfax, VA 22031</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button className="w-full bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map and Special Note Only */}
            <div className="space-y-8 animate-fade-in-right">

              {/* Special Note */}
              <Card className="bg-gradient-elegant border-gold/20 shadow-soft">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium mb-2">Reservation Recommended</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To ensure the best dining experience and table availability, we highly recommend making a reservation, 
                    especially for weekend dining and special events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;