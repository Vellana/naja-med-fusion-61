import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { galleryImages } from '@/data/galleryData';

// --- Proper ES6 Imports for Assets ---
import dish1 from '@/assets/dish-1.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import dish2 from '@/assets/dish-2.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import dish3 from '@/assets/dish-3.jpg';
import heroFood from '@/assets/hero-food.jpg';
import promo1 from '@/assets/promo-1.png';
import promo2 from '@/assets/promo-2.png';
import promo3 from '@/assets/promo-3.png';

const imageMap: { [key: string]: string } = {
  '@/assets/dish-1.jpg': dish1,
  '@/assets/restaurant-interior.jpg': restaurantInterior,
  '@/assets/dish-2.jpg': dish2,
  '@/assets/hero-bg.jpg': heroBg,
  '@/assets/dish-3.jpg': dish3,
  '@/assets/hero-food.jpg': heroFood,
  '@/assets/promo-1.png': promo1,
  '@/assets/promo-2.png': promo2,
  '@/assets/promo-3.png': promo3,
};
// --- End Asset Imports ---

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Food' | 'Interior' | 'Events'>('All');
  const filters: ('All' | 'Food' | 'Interior' | 'Events')[] = ['All', 'Food', 'Interior', 'Events'];
  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <div className="bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">Our Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">A visual celebration of Mediterranean traditions meeting American innovation.</p>
          </div>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {filters.map(filter => (
              <Button key={filter} onClick={() => setActiveFilter(filter)} variant={activeFilter === filter ? 'default' : 'outline'}
                className={activeFilter === filter 
                  ? 'bg-accent text-accent-foreground' // Changed from bg-action to bg-accent
                  : 'border-accent text-accent hover:bg-accent hover:text-primary-foreground'
                }>
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div key={image.id} className="relative rounded-lg overflow-hidden shadow-lg group">
                <img 
                  src={imageMap[image.src]} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-10 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-lg font-bold font-montserrat drop-shadow-md">{image.title}</h3>
                    {image.description && <p className="text-sm font-lato opacity-90">{image.description}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;