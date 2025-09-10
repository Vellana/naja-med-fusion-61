import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users } from 'lucide-react';
import interiorImage from '@/assets/restaurant-interior.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mediterranean Soul",
      description: "Honoring centuries-old recipes and techniques passed down through generations"
    },
    {
      icon: Globe,
      title: "American Innovation", 
      description: "Embracing bold creativity and modern culinary techniques"
    },
    {
      icon: Users,
      title: "Fusion Excellence",
      description: "Creating harmonious marriages of flavors that celebrate both traditions"
    }
  ];

  return (
    <section id="about" className="py-32 bg-cream relative">
      {/* Subtle Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Bold Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-montserrat font-black text-foreground mb-8 leading-tight">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-lato font-light">
              Behind NAJA is Tariq Alaeddin, a visionary who masterfully blends his Mediterranean heritage with American culture.
            </p>
          </div>

          {/* Story Content - Clean Layout */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-8">
                The Visionary Behind NAJA
              </h3>
              <div className="space-y-6 text-lg font-lato leading-relaxed text-foreground/90">
                <p>
                  Tariq Alaeddin envisioned NAJA as more than a restaurant—it's a cultural bridge between two worlds. 
                  Born from his deep Mediterranean heritage and shaped by his American experience.
                </p>
                <p>
                  Drawing from childhood memories of family gatherings around tables laden with traditional mezze and 
                  the innovative spirit of American dining culture, Tariq created NAJA as a place where these two 
                  rich traditions could coexist and enhance each other.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="image-hover-zoom rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={interiorImage} 
                  alt="NAJA Restaurant Interior" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Grid - Minimalist Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-cream border-0 shadow-soft hover-lift animate-fade-in-up p-8 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-6">
                  <value.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-lato">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default About;