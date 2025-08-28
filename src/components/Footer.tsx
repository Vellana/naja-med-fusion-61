import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import najaLogo from '@/assets/naja-logo-new.png';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Catering', href: '#catering' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-navy text-navy-foreground relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 card-pattern" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 animate-fade-in-up">
                <div className="flex items-center mb-8">
                  <img 
                    src="/lovable-uploads/a8ba7788-a198-4180-a269-982da8c9cdab.png"
                    alt="NAJA Mediterranean" 
                    className="h-16 w-auto filter brightness-0 invert"
                  />
                </div>
                <p className="text-navy-foreground/80 leading-relaxed max-w-lg font-light text-lg mb-8">
                  Where Mediterranean heritage meets American innovation—creating exceptional culinary experiences that honor tradition while embracing creativity.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-navy-foreground mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-navy-foreground/80 hover:text-gold transition-colors duration-300 relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-navy-foreground mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-navy-foreground/80 text-sm">
                      <div>123 Mediterranean Avenue</div>
                      <div>Downtown District</div>
                      <div>City, State 12345</div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                    <div className="text-navy-foreground/80 text-sm">
                      <div>(555) 123-NAJA</div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                    <div className="text-navy-foreground/80 text-sm">
                      <div>info@naja.com</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-navy-foreground/80 text-sm">
                      <div>Wed-Thu: 5-10 PM</div>
                      <div>Fri-Sat: 5-11 PM</div>
                      <div>Sun: 4-9 PM</div>
                      <div className="text-gold">Mon-Tue: Closed</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-navy-foreground/20">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-navy-foreground/60 text-sm">
                  © 2024 NAJA Mediterranean American. All rights reserved.
                </div>
                
                <div className="flex space-x-6 text-sm">
                  <a 
                    href="#" 
                    className="text-navy-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="#" 
                    className="text-navy-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                  <a 
                    href="#" 
                    className="text-navy-foreground/60 hover:text-gold transition-colors duration-300"
                  >
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;