import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wine, Music, Calendar, Users } from 'lucide-react';

const Events = () => {
  const regularEvents = [
    {
      icon: Wine,
      title: "Wine Wednesdays",
      description: "Discover Mediterranean wines paired with our signature small plates every Wednesday evening.",
      time: "6:00 PM - 9:00 PM",
      frequency: "Weekly"
    },
    {
      icon: Music,
      title: "Live Music Fridays",
      description: "Enjoy live acoustic performances while experiencing our Mediterranean-American fusion cuisine.",
      time: "7:30 PM - 10:30 PM", 
      frequency: "Weekly"
    },
    {
      icon: Calendar,
      title: "Chef's Table Experience",
      description: "An intimate dining experience featuring seasonal Mediterranean specialties with American influences.",
      time: "7:00 PM - 10:00 PM",
      frequency: "Monthly"
    },
    {
      icon: Users,
      title: "Mediterranean Cooking Classes",
      description: "Learn the art of Mediterranean-American fusion cooking with our executive chef.",
      time: "2:00 PM - 5:00 PM",
      frequency: "Bi-weekly"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 card-pattern" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6 section-divider pb-4 font-cinzel">
              Regular Events & Experiences
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Join us for special events that celebrate the marriage of Mediterranean traditions and American creativity
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {regularEvents.map((event, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 hover-lift shadow-soft animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 card-pattern opacity-30" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">{event.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-gold/20 text-gold px-2 py-1 rounded-full font-medium">
                          {event.frequency}
                        </span>
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              View Full Events Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;