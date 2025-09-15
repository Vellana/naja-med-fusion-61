import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const CateringPage = () => {
  // --- FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xeolwarz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Inquiry sent! We will be in touch shortly.");
        setFormData({ fullName: '', email: '', phone: '', eventDate: '', eventType: '', guestCount: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- END FORM STATE ---

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
                <CardHeader><CardTitle className="font-montserrat font-bold text-2xl text-accent">Intimate Gatherings</CardTitle><CardDescription>Perfect for 10-30 guests</CardDescription></CardHeader>
                <CardContent><p className="text-muted-foreground">A personalized menu for your special family dinner or small celebration.</p></CardContent>
              </Card>
              <Card className="text-center hover-lift bg-gray-50/50 shadow-lg border">
                <CardHeader><CardTitle className="font-montserrat font-bold text-2xl text-accent">Corporate Events</CardTitle><CardDescription>Impress your clients and colleagues</CardDescription></CardHeader>
                <CardContent><p className="text-muted-foreground">Professional and delicious catering solutions for any business occasion.</p></CardContent>
              </Card>
              <Card className="text-center hover-lift bg-gray-50/50 shadow-lg border">
                <CardHeader><CardTitle className="font-montserrat font-bold text-2xl text-accent">Grand Celebrations</CardTitle><CardDescription>Weddings, galas, and more</CardDescription></CardHeader>
                <CardContent><p className="text-muted-foreground">Make your most important moments unforgettable with a stunning culinary experience.</p></CardContent>
              </Card>
            </div>
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary font-montserrat mb-6">Plan Your Event</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                    <Input name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} required />
                    <Input name="eventDate" placeholder="Event Date" type="date" value={formData.eventDate} onChange={handleChange} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="eventType" placeholder="Event Type (e.g., Wedding)" value={formData.eventType} onChange={handleChange} required />
                    <Input name="guestCount" placeholder="Estimated Guest Count" type="number" value={formData.guestCount} onChange={handleChange} required />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Tell us more about your event..." className="min-h-[150px]" value={formData.message} onChange={handleChange} required />
                  </div>
                  <div className="text-center pt-2">
                    <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg px-10 py-6" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
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