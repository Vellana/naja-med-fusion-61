import { Button } from '@/components/ui/button';

const CateringCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-6 leading-tight">
            Bring NAJA To Your Next Event
          </h2>
          
          <p className="text-xl mb-10 leading-relaxed font-lato font-light opacity-90 max-w-2xl mx-auto">
            From intimate gatherings to corporate events, let us create an unforgettable 
            Mediterranean dining experience for your guests.
          </p>
          
          <Button size="lg" variant="secondary" className="px-12 py-6 text-lg font-bold">
            Explore Catering
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CateringCTA;