
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import MyantLogo from "@/components/ui/MyantLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "For Patients", path: "/patients" },
    { label: "For Physicians", path: "/physicians" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Clinical Evidence", path: "/evidence" },
    { label: "About Us", path: "/about" },
    { label: "Support", path: "https://skiin-support.netlify.app/", external: true },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <span className="sr-only">Myant Health</span>
            <MyantLogo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.external ? (
                <a 
                  key={item.path} 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <div className="flex border rounded-full px-1 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-2 py-1 rounded-full text-sm ${
                    language === lang.code
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setLanguage(lang.code as 'en' | 'de' | 'fr')}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-myant-green hover:bg-myant-darkgreen">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              item.external ? (
                <a 
                  key={item.path} 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground text-lg py-2 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground text-lg py-2 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-4">
              <div className="flex border rounded-full px-1 py-1 self-start mb-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`px-3 py-1 rounded-full text-sm ${
                      language === lang.code
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setLanguage(lang.code as 'en' | 'de' | 'fr')}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button className="w-full" size="lg">
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
