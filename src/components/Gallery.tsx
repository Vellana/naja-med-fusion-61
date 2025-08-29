import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Plus } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'interior', label: 'Interior' },
    { id: 'events', label: 'Events' }
  ];

  // Gallery images using existing assets with NAJA palette tinting
  const galleryItems = [
    { id: 1, category: 'food', title: 'Signature Mezze Platter', aspectRatio: 'aspect-square', image: '/src/assets/dish-1.jpg', tint: 'primary' },
    { id: 2, category: 'interior', title: 'Main Dining Room', aspectRatio: 'aspect-video', image: '/src/assets/restaurant-interior.jpg', tint: 'secondary' },
    { id: 3, category: 'food', title: 'Mediterranean Fusion Specialties', aspectRatio: 'aspect-[4/5]', image: '/src/assets/dish-2.jpg', tint: 'accent' },
    { id: 4, category: 'events', title: 'Private Wine Tasting', aspectRatio: 'aspect-square', image: '/src/assets/hero-food.jpg', tint: 'gold' },
    { id: 5, category: 'food', title: 'Chef\'s Signature Creations', aspectRatio: 'aspect-video', image: '/src/assets/dish-3.jpg', tint: 'primary' },
    { id: 6, category: 'interior', title: 'Elegant Dining Experience', aspectRatio: 'aspect-[4/5]', image: '/src/assets/hero-bg.jpg', tint: 'navy' },
    { id: 7, category: 'food', title: 'Mediterranean Artistry', aspectRatio: 'aspect-square', image: '/src/assets/dish-1.jpg', tint: 'gold' },
    { id: 8, category: 'events', title: 'Celebration Moments', aspectRatio: 'aspect-video', image: '/src/assets/restaurant-interior.jpg', tint: 'accent' },
    { id: 9, category: 'interior', title: 'NAJA Ambience', aspectRatio: 'aspect-square', image: '/src/assets/hero-bg.jpg', tint: 'secondary' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-32 bg-cream relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 section-divider-pattern" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 section-divider pb-6 font-cinzel">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              A visual celebration of Mediterranean traditions meeting American innovation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant" 
                  : "border-border hover:bg-secondary"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Mosaic Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {filteredItems.map((item, index) => (
              <div
                key={item.id} 
                className={`group overflow-hidden rounded-lg shadow-soft hover-lift animate-fade-in-up ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index % 3 === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${item.aspectRatio} relative overflow-hidden bg-gradient-elegant`}>
                  {/* Image with NAJA palette tinting */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${item.image}')`,
                      filter: 'sepia(20%) saturate(1.2) hue-rotate(200deg)',
                    }}
                  />
                  <div className={`absolute inset-0 bg-${item.tint}/20 mix-blend-overlay`} />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm md:text-base">{item.title}</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Plus className="h-8 w-8 mx-auto mb-3" />
                      <p className="text-lg font-light">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
            >
              Load More Images
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;