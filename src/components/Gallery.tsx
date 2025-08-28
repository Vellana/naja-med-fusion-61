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

  // Placeholder images - in a real app these would be loaded from a CMS or API
  const galleryItems = [
    { id: 1, category: 'food', title: 'Signature Mezze Platter', aspectRatio: 'aspect-square' },
    { id: 2, category: 'interior', title: 'Main Dining Room', aspectRatio: 'aspect-video' },
    { id: 3, category: 'food', title: 'Fresh Seafood Selection', aspectRatio: 'aspect-[4/5]' },
    { id: 4, category: 'events', title: 'Private Wine Tasting', aspectRatio: 'aspect-square' },
    { id: 5, category: 'food', title: 'Mediterranean Lamb', aspectRatio: 'aspect-video' },
    { id: 6, category: 'interior', title: 'Chef\'s Table', aspectRatio: 'aspect-[4/5]' },
    { id: 7, category: 'food', title: 'Artisanal Desserts', aspectRatio: 'aspect-square' },
    { id: 8, category: 'events', title: 'Wedding Reception', aspectRatio: 'aspect-video' },
    { id: 9, category: 'interior', title: 'Wine Cellar', aspectRatio: 'aspect-square' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take a visual journey through our culinary artistry, elegant spaces, and memorable moments
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover-lift shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${item.aspectRatio} bg-gradient-elegant relative overflow-hidden`}>
                  {/* Placeholder with camera icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground font-medium">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-navy-foreground">
                      <Plus className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
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