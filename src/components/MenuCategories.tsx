import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Wine, Coffee, Star } from 'lucide-react';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const MenuCategories = () => {
  const menuItems = [
    {
      id: 1,
      name: "Signature Mezze Tower",
      description: "Traditional favorites reimagined with modern flair",
      price: "$28",
      image: dish1,
      category: "Mediterranean Plates"
    },
    {
      id: 2,
      name: "Mediterranean Burger",
      description: "American classic with feta, olives, and herb aioli",
      price: "$24",
      image: dish2,
      category: "American Fusion"
    },
    {
      id: 3,
      name: "Grilled Branzino",
      description: "Whole fish with Mediterranean herbs and lemon",
      price: "$32",
      image: dish3,
      category: "Mediterranean Plates"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-primary mb-6 leading-tight">
              Explore Our Favorites
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-lato font-light">
              Discover our signature dishes that perfectly capture the essence of Mediterranean fusion cuisine
            </p>
          </div>

          {/* Three-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {menuItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-card border-0 rounded-xl shadow-lg hover-lift animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image with Hover Effect */}
                <div className="image-hover-zoom">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-3 leading-tight">{item.name}</h3>
                  <p className="text-muted-foreground font-lato leading-relaxed mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground font-montserrat font-medium">{item.category}</span>
                    <span className="text-2xl font-montserrat font-black text-accent">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" variant="secondary" className="px-12 py-6 text-xl">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;