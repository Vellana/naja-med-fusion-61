import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-navy-foreground mb-6 elegant-text-shadow">
            Experience
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              NAJA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where Mediterranean traditions meet American innovation in every carefully crafted dish
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-lift group px-8 py-4 text-lg"
            >
              Reserve Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
            >
              View Menu
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;