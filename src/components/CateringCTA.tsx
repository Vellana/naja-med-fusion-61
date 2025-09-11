import { Button } from '@/components/ui/button';
import cateringBgImage from '@/assets/restaurant-interior.jpg';

const CateringCTA = () => {
  return (
    <section 
      id="catering"
      className="relative py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${cateringBgImage})` }}
    >
      {/* Overlay for readability and brand color */}
      <div className="absolute inset-0 bg-[#21529A] bg-opacity-90"></div>
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('@/assets/diamond-pattern-small.png')] bg-repeat opacity-5"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-4 drop-shadow-lg">
            Bring NAJA To Your Next Event
          </h2>
          <div className="w-20 h-1 bg-[#C7AC65] mx-auto mb-6"></div>
          <p className="text-xl mb-10 leading-relaxed font-lato max-w-2xl mx-auto text-gray-200">
            From intimate gatherings to corporate events, let us create an unforgettable 
            Mediterranean dining experience for your guests.
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#0a7a0d] text-white hover:bg-[#064e08] text-lg px-10 py-6 shadow-lg transform hover:scale-105 transition-transform"
          >
            Explore Catering
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CateringCTA;