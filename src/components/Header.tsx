import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const logoBlue = '/logo-blue.png';
const logoWhite = '/logo-white.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent';
  const navLinkClasses = isScrolled ? 'text-primary hover:text-accent' : 'text-white drop-shadow-md hover:text-gray-200';
  const currentLogo = isScrolled ? logoBlue : logoWhite;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Catering', href: '/catering' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src={currentLogo}
              alt="NAJA Mediterranean" 
              className="h-12 w-40 object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors duration-300 relative group font-montserrat font-medium text-base ${navLinkClasses}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="https://www.opentable.com/r/naja-mediterranean-fairfax" target="_blank" rel="noopener noreferrer">
              <Button size="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Order Online
              </Button>
            </a>
          </div>
          <button
            className={`md:hidden transition-colors ${navLinkClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-3 px-4 text-primary hover:text-accent hover:bg-black/5 rounded transition-all duration-300 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4 mt-2 border-t border-accent/20">
              <a href="https://www.opentable.com/r/naja-mediterranean-fairfax" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Order Online
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;