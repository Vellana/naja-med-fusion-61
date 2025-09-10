import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from '@/assets/hero-food.jpg'; // Correctly importing the JPG from your src/assets folder

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center text-white p-4"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat leading-tight tracking-tight drop-shadow-lg">
          A Bold Fusion of
          <br />
          <span className="text-[#C7AC65]">Flavor & Tradition.</span>
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto font-lato drop-shadow-md">
          Welcome to NAJA. Where timeless Mediterranean recipes are reimagined with an innovative American spirit to create a truly unforgettable dining experience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#C7AC65] text-black hover:bg-yellow-500 w-full sm:w-auto text-lg px-8 py-6">
            Explore The Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto text-lg px-8 py-6">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;