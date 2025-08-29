import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Award, Phone } from 'lucide-react';

const Catering = () => {
  const services = [
    {
      icon: Users,
      title: "Corporate Events",
      description: "Impress your clients and colleagues with sophisticated Mediterranean American cuisine tailored for business gatherings.",
      features: ["Custom menu planning", "Professional service staff", "Flexible presentation options", "Dietary accommodations"]
    },
    {
      icon: Calendar,
      title: "Private Celebrations",
      description: "Create unforgettable memories with personalized catering for weddings, anniversaries, and special occasions.",
      features: ["Bespoke menu creation", "Elegant presentation", "Full-service planning", "Venue coordination"]
    },
    {
      icon: Award,
      title: "Luxury Experiences",
      description: "Elevate your event with our premium catering services featuring our signature Mediterranean American fusion.",
      features: ["Chef-curated selections", "Premium ingredients", "Artisanal presentation", "Sommelier wine pairings"]
    }
  ];

  return (
    <section id="catering" className="py-20 bg-gradient-navy text-navy-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern-small opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-divider pb-4 font-cinzel">
              Catering & Private Events
            </h2>
            <p className="text-xl text-navy-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Bring the NAJA experience to your special occasion with our comprehensive catering services 
              and private event planning
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/95 backdrop-blur-sm border-gold/20 hover-lift shadow-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground font-cinzel">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Package Showcase */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-left space-y-8">
              <h3 className="text-4xl font-light text-navy-foreground mb-8 font-cinzel">Signature Catering Experiences</h3>
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold to-accent rounded-full"></div>
                  <h4 className="text-2xl font-semibold text-navy-foreground mb-3 font-cinzel">Mediterranean Heritage</h4>
                  <p className="text-navy-foreground/90 leading-relaxed mb-3">Traditional Mediterranean mezze, wood-fired specialties, and artisanal desserts reimagined with contemporary American techniques</p>
                  <p className="text-gold font-semibold text-lg">From $48 per guest</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
                  <h4 className="text-2xl font-semibold text-navy-foreground mb-3 font-cinzel">American Innovation</h4>
                  <p className="text-navy-foreground/90 leading-relaxed mb-3">Bold Mediterranean-American fusion showcasing our signature dishes that bridge cultures and celebrate creativity</p>
                  <p className="text-gold font-semibold text-lg">From $62 per guest</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-gold rounded-full"></div>
                  <h4 className="text-2xl font-semibold text-navy-foreground mb-3 font-cinzel">Luxury Collection</h4>
                  <p className="text-navy-foreground/90 leading-relaxed mb-3">Premium Mediterranean ingredients meet American culinary artistry with sommelier wine pairings and chef presentation</p>
                  <p className="text-gold font-semibold text-lg">From $85 per guest</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              {/* Elegant package cards with subtle patterns */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Corporate', icon: Users, image: '/src/assets/dish-1.jpg' },
                  { title: 'Celebrations', icon: Calendar, image: '/src/assets/dish-2.jpg' },
                  { title: 'Luxury Events', icon: Award, image: '/src/assets/dish-3.jpg' },
                  { title: 'Private Dining', icon: Users, image: '/src/assets/hero-food.jpg' }
                ].map((item, idx) => (
                  <Card key={idx} className="aspect-square bg-card/90 backdrop-blur-sm border-gold/20 hover-lift shadow-elegant overflow-hidden relative group">
                    {/* Background pattern */}
                    <div className="absolute inset-0 card-pattern opacity-50" />
                    {/* Image overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <CardContent className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-gold" />
                      </div>
                      <h5 className="text-lg font-semibold text-foreground">{item.title}</h5>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="inline-block bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cinzel">Ready to Plan Your Event?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let our event specialists create a memorable experience tailored to your vision and budget
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-gold text-navy hover:bg-gold/90 shadow-gold">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;