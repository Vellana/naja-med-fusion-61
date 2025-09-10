import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Wine, Coffee, Star } from 'lucide-react';

const MenuCategories = () => {
  const menuItems = [
    {
      id: 1,
      name: "Signature Mezze Tower",
      description: "Traditional favorites reimagined with modern flair",
      price: "$28",
      image: "/src/assets/dish-1.jpg",
      category: "Mediterranean Plates"
    },
    {
      id: 2,
      name: "Mediterranean Burger",
      description: "American classic with feta, olives, and herb aioli",
      price: "$24",
      image: "/src/assets/dish-2.jpg",
      category: "American Fusion"
    },
    {
      id: 3,
      name: "Grilled Branzino",
      description: "Whole fish with Mediterranean herbs and lemon",
      price: "$32",
      image: "/src/assets/dish-3.jpg",
      category: "Mediterranean Plates"
    },
    {
      id: 4,
      name: "Pomegranate BBQ Ribs",
      description: "Fall-off-the-bone ribs with pomegranate molasses glaze",
      price: "$26",
      image: "/src/assets/dish-1.jpg",
      category: "American Fusion"
    },
    {
      id: 5,
      name: "Baklava Pancakes",
      description: "Weekend brunch with honey, nuts, and phyllo crumble",
      price: "$18",
      image: "/src/assets/dish-2.jpg",
      category: "Brunch"
    },
    {
      id: 6,
      name: "Mediterranean Mule",
      description: "Artisanal cocktail with Mediterranean botanicals",
      price: "$14",
      image: "/src/assets/dish-3.jpg",
      category: "Cocktails"
    }
  ];

  return (
    <section id="menu" className="py-32 bg-navy text-navy-foreground relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Bold Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-8 leading-tight">
              Menu Highlights
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-navy-foreground/80 max-w-4xl mx-auto leading-relaxed font-lato font-light">
              Discover our signature dishes that perfectly capture the essence of Mediterranean fusion cuisine
            </p>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="bg-cream border-0 shadow-elegant hover-lift animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image with Hover Effect */}
                <div className="image-hover-zoom">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-montserrat font-bold text-foreground leading-tight">{item.name}</h3>
                    <span className="text-2xl font-montserrat font-black text-gold ml-4">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground font-lato leading-relaxed mb-4">{item.description}</p>
                  <div className="text-sm text-gold font-montserrat font-semibold">{item.category}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button size="lg" variant="gold" className="px-12 py-6 text-xl">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;