import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 parallax-bg" style={{
        backgroundImage: `url(${heroImage})`
      }} />
      
      {/* Large Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern-large" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          {/* Main Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/018b221c-9c10-4dfe-ac56-c8bf8167258b.png" 
              alt="NAJA Mediterranean Restaurant" 
              className="block h-96 w-auto mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Bold Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-cream mb-8 leading-tight elegant-text-shadow">
            Experience
            <br />
            <span className="text-gold">Mediterranean</span>
            <br />
            Excellence
          </h1>
          
          {/* Mission Statement */}
          <p className="text-xl md:text-2xl lg:text-3xl text-cream/90 mb-12 max-w-4xl mx-auto leading-relaxed font-lato font-light">
            Where Mediterranean traditions meet American innovation in every carefully crafted dish
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" variant="gold" className="px-12 py-6 text-xl">
              <a href="https://www.opentable.com/r/kirby-club-fairfax" target="_blank" rel="noopener noreferrer">
                Reserve Now
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;