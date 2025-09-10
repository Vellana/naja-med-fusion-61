import { Button } from '@/components/ui/button';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const AboutTeaser = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in-left">
            <div className="image-hover-zoom rounded-xl overflow-hidden shadow-lg">
              <img 
                src={restaurantInterior}
                alt="NAJA restaurant interior and team" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-primary mb-6 leading-tight">
              Fresh Ingredients,
              <br />
              <span className="text-accent">Rich Tradition</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-lato">
              At NAJA, we blend time-honored Mediterranean recipes with the bold flavors 
              America loves. Every dish tells a story of cultural fusion, crafted with the 
              finest ingredients and served with passion.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-lato">
              Our chefs bring generations of Mediterranean culinary expertise to create 
              an authentic yet innovative dining experience that celebrates both traditions.
            </p>
            
            <Button size="lg" variant="secondary" className="px-10 py-4">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;