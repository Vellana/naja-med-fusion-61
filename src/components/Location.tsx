import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Mediterranean Avenue", "Downtown District", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-NAJA", "(555) 123-6252"]
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience NAJA in the heart of the city. We look forward to welcoming you to our Mediterranean American sanctuary
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
                      <h3 className="text-2xl font-bold text-foreground mb-2">Find Us Here</h3>
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                    </div>
                  </div>
                  
                  {/* Overlay with address */}
                  <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-navy-foreground p-4">
                    <div className="flex items-center">
                      <Navigation className="h-5 w-5 mr-2" />
                      <span className="font-semibold">123 Mediterranean Avenue, Downtown District</span>
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

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft hover-lift">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full mr-3">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pl-16">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-muted-foreground">{detail}</div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Hours */}
              <Card className="shadow-soft hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full mr-3">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-16">
                  <div className="space-y-2">
                    {hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className={`${schedule.time === 'Closed' ? 'text-muted-foreground' : 'text-primary font-medium'}`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

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