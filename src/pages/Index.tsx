import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OfferingsCarousel from '@/components/OfferingsCarousel';
import VisitAndReviews from '@/components/VisitAndReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    // FIX: overflow-x-hidden prevents horizontal scrolling on mobile
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <OfferingsCarousel />
      <VisitAndReviews /> 
      <Footer />
    </div>
  );
};

export default Index;