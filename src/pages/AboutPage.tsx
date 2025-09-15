import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Handshake } from 'lucide-react';
import aboutImage from '@/assets/restaurant-interior.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We are committed to sourcing the finest local and seasonal ingredients to ensure every dish is vibrant and flavorful."
    },
    {
      icon: Handshake,
      title: "Cultural Fusion",
      description: "Our menu is a celebration of heritage and innovation, blending timeless Mediterranean recipes with a contemporary American spirit."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of food to bring people together, creating a warm, inviting space for shared moments and memories."
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
              A journey of flavor, family, and the fusion of two cultures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={aboutImage} alt="Visionary behind NAJA" className="w-full h-full object-cover" />
            </div>
            <div className="font-lato text-lg text-muted-foreground leading-relaxed space-y-6">
              <h2 className="text-3xl font-bold text-primary font-montserrat mb-4">The Vision of Tariq Alaeddin</h2>
              <p>
                NAJA is the realization of a lifelong passion for our visionary, Tariq Alaeddin. Raised with the rich culinary traditions of the Mediterranean, Tariq developed a deep respect for the simple, powerful flavors passed down through generations. His journey led him to America, where he was inspired by the nation's dynamic culture and innovative spirit.
              </p>
              <p>
                Rather than simply recreating the dishes of his heritage, Tariq envisioned a new dialogue between two worlds. NAJA was born from this vision: a place where the warmth of Mediterranean hospitality meets the creative energy of American culture. It is not just a restaurant; it's a story told on a plate, where every ingredient honors its roots while embracing a bold, new identity.
              </p>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary font-montserrat mb-12">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map(value => (
                <div key={value.title}>
                  <Card className="p-8 h-full border-0 shadow-lg">
                    <value.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Card className="inline-block p-8 bg-secondary/50 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Experience the Story Yourself</h3>
              <p className="text-muted-foreground mb-6">Join us for a memorable dining experience.</p>
              <a href="https://www.opentable.com/r/naja-mediterranean-fairfax" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary-foreground text-lg px-10 py-6">
                  Book a Table
                </Button>
              </a>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;