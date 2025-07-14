
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import MyantLogo from "@/components/ui/MyantLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

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

  // Get localized paths based on the current path and target language
  const getLocalizedPath = (targetLang) => {
    const currentPath = location.pathname;
    
    // Root path is special case
    if (currentPath === '/' || currentPath === '/de' || currentPath === '/fr') {
      return targetLang === 'en' ? '/' : `/${targetLang}`;
    }
    
    // Route mapping for all pages
    const routeMap = {
      // Solutions pages (replaced For Patients)
      '/solutions': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
      '/de/losungen': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
      '/fr/solutions': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
      
      // Partners pages (replaced For Physicians)
      '/partners': { en: '/partners', de: '/de/partner', fr: '/fr/partenaires' },
      '/de/partner': { en: '/partners', de: '/de/partner', fr: '/fr/partenaires' },
      '/fr/partenaires': { en: '/partners', de: '/de/partner', fr: '/fr/partenaires' },
      
      // How It Works pages
      '/how-it-works': { en: '/how-it-works', de: '/de/wie-es-funktioniert', fr: '/fr/comment-ca-marche' },
      '/de/wie-es-funktioniert': { en: '/how-it-works', de: '/de/wie-es-funktioniert', fr: '/fr/comment-ca-marche' },
      '/fr/comment-ca-marche': { en: '/how-it-works', de: '/de/wie-es-funktioniert', fr: '/fr/comment-ca-marche' },
      
      // Evidence pages
      '/evidence': { en: '/evidence', de: '/de/evidenz', fr: '/fr/preuves' },
      '/de/evidenz': { en: '/evidence', de: '/de/evidenz', fr: '/fr/preuves' },
      '/fr/preuves': { en: '/evidence', de: '/de/evidenz', fr: '/fr/preuves' },
      
      // About pages
      '/about': { en: '/about', de: '/de/uber-uns', fr: '/fr/a-propos' },
      '/de/uber-uns': { en: '/about', de: '/de/uber-uns', fr: '/fr/a-propos' },
      '/fr/a-propos': { en: '/about', de: '/de/uber-uns', fr: '/fr/a-propos' },
      
      // FAQ pages
      '/faq': { en: '/faq', de: '/de/faq', fr: '/fr/faq' },
      '/de/faq': { en: '/faq', de: '/de/faq', fr: '/fr/faq' },
      '/fr/faq': { en: '/faq', de: '/de/faq', fr: '/fr/faq' },
      
      // Contact pages
      '/contact': { en: '/contact', de: '/de/kontakt', fr: '/fr/contact' },
      '/de/kontakt': { en: '/contact', de: '/de/kontakt', fr: '/fr/contact' },
      '/fr/contact': { en: '/contact', de: '/de/kontakt', fr: '/fr/contact' },
      
      // Legacy physicians page routing
      '/physicians': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
      '/de/arzt': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
      '/fr/medecin': { en: '/solutions', de: '/de/losungen', fr: '/fr/solutions' },
    };
    
    // Check if we have a mapping for current path
    if (routeMap[currentPath]) {
      return routeMap[currentPath][targetLang];
    }
    
    // Default fallback - just add language prefix
    return targetLang === 'en' ? currentPath.replace(/^\/de\/|^\/fr\//, '/') : `/${targetLang}${currentPath}`;
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    const newPath = getLocalizedPath(lang);
    navigate(newPath);
  };

  // Determine which navigation links to show based on language
  const getNavigationItems = () => {
    // Target architecture: Home, Solutions, Partners, How It Works, About Us
    const items = [
      { labelKey: "home", path: language === 'en' ? "/" : `/${language}` },
      { labelKey: "solutions", path: language === 'en' ? "/solutions" : language === 'de' ? "/de/losungen" : "/fr/solutions" },
      { labelKey: "partners", path: language === 'en' ? "/partners" : language === 'de' ? "/de/partner" : "/fr/partenaires" },
      { labelKey: "howItWorks", path: language === 'en' ? "/how-it-works" : language === 'de' ? "/de/wie-es-funktioniert" : "/fr/comment-ca-marche" },
      { labelKey: "about", path: language === 'en' ? "/about" : language === 'de' ? "/de/uber-uns" : "/fr/a-propos" },
    ];

    // Localized labels for each language
    const labels = {
      en: {
        home: "Home",
        solutions: "Solutions",
        partners: "Partners", 
        howItWorks: "How It Works",
        about: "About Us",
      },
      de: {
        home: "Startseite",
        solutions: "Lösungen",
        partners: "Partner",
        howItWorks: "Wie es funktioniert",
        about: "Über uns", 
      },
      fr: {
        home: "Accueil",
        solutions: "Solutions",
        partners: "Partenaires",
        howItWorks: "Comment ça marche",
        about: "À propos",
      }
    };

    // Return items with localized labels
    return items.map(item => ({
      ...item,
      label: labels[language][item.labelKey]
    }));
  };

  const navigationItems = getNavigationItems();

  const languages = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-fixed transition-all duration-300 ${
        isScrolled 
          ? "glass-effect shadow-medical py-3" 
          : "bg-transparent py-6"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to={language === 'en' ? '/' : `/${language}`} 
            className="flex items-center group" 
            onClick={closeMobileMenu}
          >
            <div className="relative mr-3">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 p-2.5 rounded-xl shadow-premium">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gradient">
              SKIIN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.external ? (
                <a 
                  key={item.path} 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative text-navy-700 hover:text-navy-900 font-medium transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-navy-800 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative text-navy-700 hover:text-navy-900 font-medium transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-navy-800 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center glass rounded-full px-1 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === lang.code
                      ? "bg-gradient-to-r from-navy-900 to-navy-800 text-white shadow-inner"
                      : "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Button 
              size="sm" 
              className="group bg-gradient-to-r from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white font-medium shadow-premium hover-lift px-6"
              asChild
            >
              <Link to={language === 'en' ? '/contact' : language === 'de' ? '/de/kontakt' : '/fr/contact'}>
                {language === 'en' ? 'Get Started' : language === 'de' ? 'Jetzt starten' : 'Commencer'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-navy-700 hover:text-navy-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-premium z-40 transform transition-transform ease-in-out duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              item.external ? (
                <a 
                  key={item.path} 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/90 hover:text-white text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white/90 hover:text-white text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-6 space-y-4">
              <div className="flex glass-dark rounded-full px-1 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === lang.code
                        ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-inner"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-medium shadow-medical" 
                size="lg"
                asChild
              >
                <Link to={language === 'en' ? '/contact' : language === 'de' ? '/de/kontakt' : '/fr/contact'}>
                  {language === 'en' ? 'Get Started' : language === 'de' ? 'Jetzt starten' : 'Commencer'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
