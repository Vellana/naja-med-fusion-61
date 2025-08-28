import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter. You'll receive the latest updates from NAJA.",
      });
      setEmail('');
      // Reset subscription state after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-navy text-navy-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern-small opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Newsletter Section */}
            <div className="animate-fade-in-left">
              <Card className="bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                      <Mail className="h-8 w-8 text-navy" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Stay Connected</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Subscribe to our newsletter for exclusive Mediterranean-American culinary updates, seasonal menu previews, and special event invitations
                </p>
                  </div>

                  {!isSubscribed ? (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background/50 border-border focus:border-primary"
                        required
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                      >
                        Subscribe to Newsletter
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">Thank You!</h4>
                      <p className="text-muted-foreground">You've successfully subscribed to our newsletter.</p>
                    </div>
                  )}

                  {/* Newsletter Benefits */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">What you'll receive:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[
                        "Exclusive Mediterranean-American fusion recipes",
                        "First access to seasonal menu items",
                        "Chef's wine and cocktail pairings",
                        "Priority booking for special events"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Section */}
            <div className="animate-fade-in-right">
              <Card className="bg-card/95 backdrop-blur-sm border-gold/20 shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Have questions or special requests? We'd love to hear from you
                    </p>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => handleContactChange('name', e.target.value)}
                        className="bg-background/50 border-border focus:border-primary"
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => handleContactChange('email', e.target.value)}
                        className="bg-background/50 border-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <Input
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={(e) => handleContactChange('subject', e.target.value)}
                      className="bg-background/50 border-border focus:border-primary"
                    />
                    
                    <Textarea
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => handleContactChange('message', e.target.value)}
                      className="bg-background/50 border-border focus:border-primary min-h-32 resize-none"
                      required
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-gold text-navy hover:bg-gold/90 shadow-gold"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;