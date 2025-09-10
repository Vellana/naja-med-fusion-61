import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-background flex items-center py-20 overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Left Column - Text Content */}
        <div className="animate-fade-in-left">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-primary mb-6 leading-tight">
            Authentic Mediterranean.
            <br />
            <span className="text-accent">Modern Taste.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed font-lato font-light">
            Experience the vibrant flavors of NAJA, crafted with passion in every dish.
          </p>
          
          {/* Primary CTA */}
          <Button size="lg" className="px-8 py-4 text-lg font-bold">
            View Full Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Column - Hero Image */}
        <div className="animate-fade-in-right flex justify-center lg:justify-end">
          <div className="image-hover-zoom">
            <img 
              src={heroImage}
              alt="NAJA signature Mediterranean dish" 
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;