import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users } from 'lucide-react';
import interiorImage from '@/assets/restaurant-interior.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mediterranean Soul",
      description: "Honoring centuries-old recipes and techniques passed down through generations of Mediterranean families"
    },
    {
      icon: Globe,
      title: "American Innovation", 
      description: "Embracing bold creativity and modern culinary techniques that define contemporary American cuisine"
    },
    {
      icon: Users,
      title: "Fusion Excellence",
      description: "Creating harmonious marriages of flavors that celebrate both culinary traditions as one"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-elegant relative">
      {/* Section Divider Pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 section-divider-pattern" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 section-divider pb-4 font-cinzel">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Behind NAJA is Tariq Alaeddin, a visionary who masterfully blends his Mediterranean heritage with American culture, 
              creating an entirely new dining experience that honors both traditions.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-in-left">
              <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-cinzel text-center">
              The Visionary Behind NAJA
            </h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Tariq Alaeddin envisioned NAJA as more than a restaurant—it's a cultural bridge between two worlds. 
                  Born from his deep Mediterranean heritage and shaped by his American experience, Tariq saw an opportunity 
                  to create something entirely new in the culinary landscape.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Drawing from childhood memories of family gatherings around tables laden with traditional mezze and 
                  the innovative spirit of American dining culture, Tariq created NAJA as a place where these two 
                  rich traditions could coexist and enhance each other.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  His vision goes beyond fusion cuisine—it's about creating a space where cultures connect, where 
                  the warmth of Mediterranean hospitality meets American creativity, and where every guest becomes 
                  part of this beautiful culinary story.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <img 
                  src={interiorImage} 
                  alt="NAJA Restaurant Interior" 
                  className="rounded-2xl shadow-elegant hover-lift w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-navy-foreground">
                  <div className="text-3xl font-bold">2019</div>
                  <div className="text-lg">Founded with Vision</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up shadow-soft hero-pattern-small relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute inset-0 bg-card/95"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-cinzel">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Section Divider Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 section-divider-pattern transform rotate-180" />
    </section>
  );
};

export default About;