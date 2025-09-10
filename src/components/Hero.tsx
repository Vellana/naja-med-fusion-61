import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Using a background-removed PNG for a more premium, focused look
import signatureDish from "@/assets/images/menu/menu-item-2.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#F7F5EB] w-full overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#21529A] font-montserrat leading-tight tracking-tight">
              A Bold Fusion of
              <br />
              <span className="text-[#C7AC65]">Flavor & Tradition.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 font-lato">
              Welcome to NAJA. Where timeless Mediterranean recipes are reimagined with an innovative American spirit to create a truly unforgettable dining experience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-[#21529A] text-white hover:bg-[#1a417a] w-full sm:w-auto text-lg px-8 py-6">
                Explore The Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#C7AC65] text-[#C7AC65] hover:bg-[#C7AC65] hover:text-white w-full sm:w-auto text-lg px-8 py-6">
                Book a Table
              </Button>
            </div>
          </div>

          {/* Image Content - Positioned to break the grid */}
          <div className="hidden lg:flex justify-center items-center">
             {/* This div is a placeholder for the absolute positioned image on large screens */}
          </div>
        </div>

        {/* ABSOLUTELY POSITIONED IMAGE for a dynamic, layered effect on large screens */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-1/2 xl:w-3/5 h-full">
            <img 
              src={signatureDish}
              alt="Signature NAJA Dish" 
              className="absolute bottom-0 right-0 w-full h-auto object-contain max-w-4xl"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;