import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OfferingsCarousel from '@/components/OfferingsCarousel'; // Import our new carousel
import VisitAndReviews from '@/components/VisitAndReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <OfferingsCarousel />
      <VisitAndReviews /> 
      <Footer />
    </div>
  );
};

export default Index;