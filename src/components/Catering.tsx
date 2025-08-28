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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-divider pb-4">
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
                  <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-navy-foreground mb-6">Signature Mediterranean-American Packages</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-xl font-semibold text-navy-foreground mb-2">The Mediterranean Heritage</h4>
                  <p className="text-navy-foreground/80">Authentic Mediterranean mezze, grilled specialties, and traditional desserts with modern presentation</p>
                  <p className="text-gold font-medium mt-2">Starting at $45 per person</p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-xl font-semibold text-navy-foreground mb-2">The American Fusion</h4>
                  <p className="text-navy-foreground/80">Innovative Mediterranean-American dishes that showcase our unique culinary creativity and bold flavor combinations</p>
                  <p className="text-gold font-medium mt-2">Starting at $55 per person</p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="text-xl font-semibold text-navy-foreground mb-2">The Premium Collection</h4>
                  <p className="text-navy-foreground/80">Luxury dining experience with premium ingredients and chef-curated wine pairings</p>
                  <p className="text-gold font-medium mt-2">Starting at $75 per person</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              {/* Placeholder for catering package images */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-elegant rounded-xl shadow-soft hover-lift flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-6 w-6 text-gold" />
                      </div>
                      <p className="text-sm text-muted-foreground">Package {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="inline-block bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Plan Your Event?</h3>
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