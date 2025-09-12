import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuCategories from '@/components/MenuCategories';
import AboutTeaser from '@/components/AboutTeaser';
import CateringCTA from '@/components/CateringCTA';
import VisitAndReviews from '@/components/VisitAndReviews'; // Import our new component
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MenuCategories />
      <AboutTeaser />
      <CateringCTA />
      <VisitAndReviews /> 
      <Footer />
    </div>
  );
};

export default Index;