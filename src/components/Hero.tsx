import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 parallax-bg" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Large Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern-large" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="animate-fade-in-up">
          {/* Logo behind other content */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-5">
            <img 
              src="/lovable-uploads/11cd3668-92c0-4465-bf40-80761b6abb85.png" 
              alt="NAJA" 
              className="block h-[45rem] w-auto"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-navy-foreground mb-6 elegant-text-shadow relative z-20">
            <span className="font-cinzel font-normal">Experience</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-navy-foreground/95 mb-8 max-w-3xl mx-auto leading-relaxed font-light relative z-20">
            Where Mediterranean traditions meet American innovation in every carefully crafted dish
          </h2>
          
          <p className="text-lg md:text-xl text-navy-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed relative z-20">
            Discover the perfect fusion of time-honored Mediterranean flavors with bold American culinary creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
            <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-lift group px-10 py-5 text-xl font-semibold">
              <a href="https://www.opentable.com/r/kirby-club-fairfax" target="_blank" rel="noopener noreferrer">
                Reserve Now
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 px-10 py-5 text-xl font-semibold backdrop-blur-sm">
              View Menu
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;