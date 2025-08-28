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
    <section className="py-24 bg-secondary/20 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 section-divider-pattern" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Newsletter Section */}
            <div className="animate-fade-in-left">
              <Card className="bg-card/80 backdrop-blur-sm border border-border/30 shadow-soft overflow-hidden">
                {/* Card pattern */}
                <div className="absolute inset-0 card-pattern opacity-20" />
                
                <CardContent className="p-10 relative z-10">
                  <div className="mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-light text-foreground mb-6">Join Our Culinary Journey</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      Discover Mediterranean traditions meeting American innovation—receive updates on seasonal menus, exclusive events, and culinary experiences
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
                  <div className="mt-10 pt-8 border-t border-border/30">
                    <h4 className="font-medium text-foreground mb-6">Mediterranean American Insider Access:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "Seasonal Mediterranean fusion menu previews",
                        "Chef's authentic recipes and American innovations", 
                        "Wine and cocktail pairing recommendations",
                        "Exclusive event invitations and culinary experiences"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0"></div>
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
              <Card className="bg-card/80 backdrop-blur-sm border border-border/30 shadow-soft overflow-hidden">
                {/* Card pattern */}
                <div className="absolute inset-0 card-pattern opacity-20" />
                
                <CardContent className="p-10 relative z-10">
                  <div className="mb-10">
                    <h3 className="text-3xl font-light text-foreground mb-6">Connect with NAJA</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      Questions about our Mediterranean American cuisine? Planning a special event? We'd love to hear from you
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