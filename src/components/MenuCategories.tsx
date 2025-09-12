import { Button } from '@/components/ui/button';
import { menuCategories } from '@/data/menuData';

// Import all necessary images at the top
import appetizerImage from '@/assets/dish-1.jpg';
import mainCourseImage from '@/assets/dish-2.jpg';
import dessertImage from '@/assets/dish-3.jpg';

// Create a mapping from the string path to the imported image
const imageMap: { [key: string]: string } = {
  '@/assets/dish-1.jpg': appetizerImage,
  '@/assets/dish-2.jpg': mainCourseImage,
  '@/assets/dish-3.jpg': dessertImage,
};

const MenuCategories = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-montserrat mb-4">
            A Taste of Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
            Each dish is a conversation between Mediterranean heritage and American innovation. Explore our categories to find your next favorite.
          </p>
        </div>

        {/* Categories Grid - Animation and Glow Removed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((category) => (
            <a 
              href="#menu"
              key={category.name}
              className="relative block rounded-lg overflow-hidden group shadow-lg hover-lift"
            >
              <img 
                src={imageMap[category.imagePath]}
                alt={category.name}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Text Overlay at the bottom */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-bold font-montserrat text-white drop-shadow-md">{category.name}</h3>
                <p className="mt-2 text-secondary drop-shadow-sm font-lato">{category.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-action text-white hover:bg-action/90 text-lg px-10 py-6">
            View The Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;