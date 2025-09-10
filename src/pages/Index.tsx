import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuCategories from '@/components/MenuCategories';
import AboutTeaser from '@/components/AboutTeaser';
import CateringCTA from '@/components/CateringCTA';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MenuCategories />
      <AboutTeaser />
      <CateringCTA />
      <Gallery />
      <Testimonials />
      <Location />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;