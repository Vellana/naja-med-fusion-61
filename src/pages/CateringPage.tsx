import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CateringPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
              Exceptional Catering
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
              Bring the unforgettable flavors of NAJA's Mediterranean fusion to your next event.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary font-montserrat">Our Offerings</h2>
              <Card className="text-center hover-lift bg-gray-50/50 shadow-lg border">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-accent">Intimate Gatherings</CardTitle>
                  <CardDescription>Perfect for 10-30 guests</CardDescription>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">A personalized menu for your special family dinner or small celebration.</p></CardContent>
              </Card>
              <Card className="text-center hover-lift bg-gray-50/50 shadow-lg border">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-accent">Corporate Events</CardTitle>
                  <CardDescription>Impress your clients and colleagues</CardDescription>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">Professional and delicious catering solutions for any business occasion.</p></CardContent>
              </Card>
              <Card className="text-center hover-lift bg-gray-50/50 shadow-lg border">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-accent">Grand Celebrations</CardTitle>
                  <CardDescription>Weddings, galas, and more</CardDescription>
                </CardHeader>
                <CardContent><p className="text-muted-foreground">Make your most important moments unforgettable with a stunning culinary experience.</p></CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary font-montserrat mb-6">Plan Your Event</h2>
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
                  <div className="text-center pt-2">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg px-10 py-6">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CateringPage;