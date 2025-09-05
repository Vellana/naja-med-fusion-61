import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const MenuHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dishes = [
    {
      id: 1,
      name: "Mediterranean Lamb",
      description: "Slow-braised lamb shoulder with herbs de Provence, roasted vegetables, and pomegranate molasses glaze",
      price: "$32",
      image: dish1,
      rating: 5,
      category: "Signature Entrees"
    },
    {
      id: 2,
      name: "Seared Branzino",
      description: "Fresh Mediterranean sea bass with lemon-herb crust, quinoa tabbouleh, and tahini drizzle",
      price: "$28",
      image: dish2,
      rating: 5,
      category: "Fresh Seafood"
    },
    {
      id: 3,
      name: "Mezze Tower",
      description: "Artisanal selection of hummus, baba ganoush, falafel, dolmas, and house-made pita",
      price: "$18",
      image: dish3,
      rating: 5,
      category: "Mediterranean Classics"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  return (
    <section id="menu" className="py-20 bg-navy text-navy-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-divider pb-4 font-cinzel">
              Menu Highlights
            </h2>
            <p className="text-xl text-navy-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Discover our signature dishes that perfectly capture the essence of Mediterranean fusion cuisine
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {dishes.map((dish) => (
                  <div key={dish.id} className="w-full flex-shrink-0">
                    <Card className="bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative overflow-hidden md:order-1">
                            <img 
                              src={dish.image} 
                              alt={dish.name}
                              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-gradient-gold text-navy px-3 py-1 rounded-full text-sm font-medium">
                                {dish.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-8 md:p-12 flex flex-col justify-center md:order-2">
                            <div className="flex items-center mb-4">
                              {[...Array(dish.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-gold fill-current" />
                              ))}
                            </div>
                            
                            <h3 className="text-3xl font-bold text-foreground mb-4 font-cinzel">{dish.name}</h3>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{dish.description}</p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-3xl font-bold text-gold">{dish.price}</span>
                              <Button className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-gold">
                                Order Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {dishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-gold' : 'bg-gold/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* View Full Menu CTA */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-navy hover:bg-gold/90 shadow-gold px-8 py-4 text-lg font-semibold"
              >
                View Full Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;