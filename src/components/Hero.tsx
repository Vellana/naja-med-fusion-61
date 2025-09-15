import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white p-4"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat leading-tight tracking-tight drop-shadow-lg">
          A Bold Fusion of
          <br />
          <span className="text-accent">Flavor & Tradition.</span>
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto font-lato text-gray-200 drop-shadow-md">
          NAJA is a culinary dialogue between Mediterranean heritage and American innovation, founded on a passion for exceptional ingredients and shared experiences.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/menu">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg px-8 py-6">
              Explore The Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://www.opentable.com/r/naja-mediterranean-fairfax" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground w-full sm:w-auto text-lg px-8 py-6">
              Book a Table
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;