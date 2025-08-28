import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every dish is crafted with love and dedication to our Mediterranean American heritage"
    },
    {
      icon: Globe,
      title: "Heritage", 
      description: "Celebrating the rich culinary traditions of the Mediterranean with American innovation"
    },
    {
      icon: Users,
      title: "Community",
      description: "Creating memorable experiences that bring people together around exceptional food"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Born from a passion for Mediterranean flavors and American culinary creativity, 
              NAJA represents the perfect fusion of tradition and innovation.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-left">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  NAJA was founded on the belief that great food transcends borders. Our culinary journey 
                  began with a simple vision: to honor the time-tested traditions of Mediterranean cuisine 
                  while embracing the bold, innovative spirit of American gastronomy.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Every ingredient is carefully sourced, every technique meticulously perfected, and 
                  every dish thoughtfully composed to create an experience that celebrates both heritage 
                  and innovation. Our kitchen is where ancient olive groves meet modern culinary artistry.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  From our signature mezze selections to our reimagined American classics with Mediterranean 
                  flair, NAJA offers a dining experience that honors the past while embracing the future 
                  of culinary excellence.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-square bg-gradient-primary rounded-2xl shadow-elegant hover-lift">
                  <div className="absolute inset-4 bg-secondary rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">2019</div>
                      <div className="text-lg text-muted-foreground">Founded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up shadow-soft" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;