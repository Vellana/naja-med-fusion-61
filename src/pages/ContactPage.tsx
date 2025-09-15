import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-montserrat mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
              Whether you're planning a visit, a special event, or have a question, we'd love to hear from you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-primary font-montserrat mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email Address" type="email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message..." className="min-h-[150px]" />
                  </div>
                  <div className="text-left">
                    <Button size="lg" className="bg-action text-white hover:bg-action/90 text-lg px-10 py-6">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Right Column: Information */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="font-semibold">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </Card>

              {/* Details Card */}
              <Card className="p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Address</h3>
                      <p className="text-muted-foreground">2911 District Ave<br/>Fairfax, VA 22031</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <p className="text-muted-foreground">(571) 430-3650</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <p className="text-muted-foreground">info@naja.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">Hours</h3>
                      <p className="text-muted-foreground">Wed-Thu: 5-10 PM</p>
                      <p className="text-muted-foreground">Fri-Sat: 5-11 PM</p>
                      <p className="text-muted-foreground">Sun: 4-9 PM</p>
                      <p className="text-accent/80">Mon-Tue: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;