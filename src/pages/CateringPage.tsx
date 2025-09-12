import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Import the background images
import cateringPlatterImg from '@/assets/catering-platter-top-down.png';
import cateringGuestsImg from '@/assets/catering-event-guests.png';

const CateringPage = () => {
  return (
    <div className="bg-background">
      {/* --- PARALLAX BACKGROUND CONTAINER --- */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cateringGuestsImg})` }}
        ></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${cateringPlatterImg})`,
            maskImage: 'linear-gradient(to right, black 45%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 45%, transparent 60%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-navy/75"></div>
      </div>

      {/* --- SCROLLING CONTENT --- */}
      <div className="relative z-10">
        <Header />
        <main>
          {/* Top "border" - Pattern Removed */}
          <div className="h-48"></div>

          {/* Main Content Card with Glass Effect */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-lg">
              <div className="p-8 md:p-12">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
                    Exceptional Catering
                  </h1>
                  {/* Text color updated for brightness */}
                  <p className="text-xl text-secondary max-w-3xl mx-auto font-lato">
                    Bring the unforgettable flavors of NAJA's Mediterranean fusion to your next event.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  <Card className="text-center hover-lift bg-background/50 backdrop-blur-md shadow-lg border border-accent/10">
                    <CardHeader>
                      <CardTitle className="font-montserrat font-bold text-2xl text-accent">Intimate Gatherings</CardTitle>
                      <CardDescription>Perfect for 10-30 guests</CardDescription>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground">A personalized menu for your special family dinner or small celebration.</p></CardContent>
                  </Card>
                  <Card className="text-center hover-lift bg-background/50 backdrop-blur-md shadow-lg border border-accent/10">
                    <CardHeader>
                      <CardTitle className="font-montserrat font-bold text-2xl text-accent">Corporate Events</CardTitle>
                      <CardDescription>Impress your clients and colleagues</CardDescription>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground">Professional and delicious catering solutions for any business occasion.</p></CardContent>
                  </Card>
                  <Card className="text-center hover-lift bg-background/50 backdrop-blur-md shadow-lg border border-accent/10">
                    <CardHeader>
                      <CardTitle className="font-montserrat font-bold text-2xl text-accent">Grand Celebrations</CardTitle>
                      <CardDescription>Weddings, galas, and more</CardDescription>
                    </CardHeader>
                    <CardContent><p className="text-muted-foreground">Make your most important moments unforgettable with a stunning culinary experience.</p></CardContent>
                  </Card>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary font-montserrat">Plan Your Event</h2>
                    {/* Text color updated for brightness */}
                    <p className="text-lg text-secondary mt-2">Fill out the form below to start the conversation.</p>
                  </div>
                  <Card className="p-8 shadow-lg bg-background/95">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input placeholder="Full Name" />
                        <Input placeholder="Email Address" type="email" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input placeholder="Phone Number" type="tel" />
                        <Input placeholder="Event Date" type="date" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input placeholder="Event Type (e.g., Wedding, Corporate)" />
                        <Input placeholder="Estimated Guest Count" type="number" />
                      </div>
                      <div>
                        <Textarea placeholder="Tell us more about your event..." className="min-h-[150px]" />
                      </div>
                      <div className="text-center pt-4">
                        <Button size="lg" className="bg-[#0a7a0d] text-white hover:bg-[#064e08] w-full sm:w-auto text-lg px-10 py-6">
                          Submit Inquiry
                        </Button>
                      </div>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom "border" - Pattern Removed */}
          <div className="h-48"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CateringPage;