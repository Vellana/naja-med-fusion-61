import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuHighlights from '@/components/MenuHighlights';
import Gallery from '@/components/Gallery';
import Catering from '@/components/Catering';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Catering />
      <Testimonials />
      <Location />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;