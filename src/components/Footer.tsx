import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

// Using the correct public path for the light-colored logo
const footerLogo = '/lovable-uploads/7b85a113-8dbb-48bf-82e0-f4d04d632d56.png';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Catering', href: '/catering' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-navy text-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('@/assets/diamond-pattern-small.png')] bg-repeat opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          <div className="lg:col-span-2">
            <Link to="/">
              <img 
                src={footerLogo}
                alt="NAJA Mediterranean" 
                className="h-16 w-auto mb-6"
              />
            </Link>
            <p className="text-secondary/80 leading-relaxed max-w-sm font-lato text-base mb-6">
              Where Mediterranean heritage meets American innovation—creating exceptional culinary experiences.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-navy"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-montserrat">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-secondary/80 hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-montserrat">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-secondary/80">2911 District Ave<br/>Fairfax, VA 22031</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-secondary/80">(571) 430-3650</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-secondary/80">info@naja.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-secondary/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} NAJA Mediterranean Fusion. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary/50 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;