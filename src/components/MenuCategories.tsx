import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Wine, Coffee, Star } from 'lucide-react';

const MenuCategories = () => {
  const categories = [
    {
      id: 1,
      icon: Utensils,
      title: "Mediterranean Plates",
      description: "Traditional favorites reimagined with modern flair - from handcrafted mezze to grilled seafood with Mediterranean herbs and American smoking techniques.",
      highlights: ["Signature Mezze Tower", "Grilled Branzino", "Lamb Souvlaki"],
      color: "bg-gradient-primary"
    },
    {
      id: 2,
      icon: Star,
      title: "American Classics with a Twist",
      description: "Beloved American dishes elevated with Mediterranean ingredients - think truffle mac & cheese with feta, or BBQ ribs with pomegranate molasses glaze.",
      highlights: ["Mediterranean Burger", "Feta Mac & Cheese", "Pomegranate BBQ Ribs"],
      color: "bg-gradient-gold"
    },
    {
      id: 3,
      icon: Wine,
      title: "Signature Cocktails",
      description: "Artisanal cocktails that blend Mediterranean botanicals with American spirits - featuring house-made syrups, fresh herbs, and unexpected flavor combinations.",
      highlights: ["Mediterranean Mule", "Santorini Sunset", "Brooklyn Olive"],
      color: "bg-gradient-navy"
    },
    {
      id: 4,
      icon: Coffee,
      title: "Brunch & Bakery",
      description: "Weekend brunch featuring Mediterranean-inspired pastries, American-style pancakes with baklava crumble, and artisanal coffee blends.",
      highlights: ["Baklava Pancakes", "Mediterranean Benedict", "Spanakopita Quiche"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-navy text-navy-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern-large opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-divider pb-4 font-cinzel">
              Menu Highlights
            </h2>
            <p className="text-xl text-navy-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated selections that showcase the beautiful fusion of 
              Mediterranean tradition and American innovation
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <Card 
                key={category.id} 
                className="bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant hover-lift animate-fade-in-up hero-pattern-small relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-card/98"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${category.color} rounded-full`}>
                      <category.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground font-cinzel">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {category.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Featured Dishes:</h4>
                    <div className="space-y-2">
                      {category.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Menu CTA */}
          <div className="text-center">
            <Card className="inline-block bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cinzel">Ready to Experience NAJA?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Discover our complete menu featuring seasonal specialties and chef's recommendations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-gold text-navy hover:bg-gold/90 shadow-gold px-8 py-4 text-lg font-semibold"
                  >
                    View Full Menu
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 text-lg font-semibold"
                  >
                    <a href="https://www.opentable.com/r/kirby-club-fairfax" target="_blank" rel="noopener noreferrer">
                      Make Reservation
                    </a>
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

export default MenuCategories;