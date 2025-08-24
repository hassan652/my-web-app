import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Youtube, MessageSquare, Twitter, Linkedin } from "lucide-react";
import hassanLogo from "@/assets/hassan-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  
  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com/@hassanai", label: "YouTube" },
    { icon: MessageSquare, href: "https://discord.gg/hassanai", label: "Discord" },
    { icon: Twitter, href: "https://twitter.com/hassanai", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/hassanai", label: "LinkedIn" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img 
              src={hassanLogo} 
              alt="Hassan AI Logo" 
              className="w-10 h-10 rounded-lg shadow-soft"
            />
            <span className="text-xl font-bold text-primary">
              Hassan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-smooth hover:text-primary ${
                  isActive(item.path) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-smooth hover-lift"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
              </a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary-hover ml-4">
              Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium transition-smooth ${
                    isActive(item.path) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
              
              <Button size="sm" className="bg-primary hover:bg-primary-hover w-full mt-4">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;