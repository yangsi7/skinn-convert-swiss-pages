import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    
    // Handle the new route structure
    const pathMappings = {
      // Solutions
      '/solutions/14-day-holter': { de: '/de/loesungen/14-tage-holter', fr: '/fr/solutions/holter-14-jours' },
      '/solutions/tritest': { de: '/de/loesungen/tritest', fr: '/fr/solutions/tritest' },
      
      // Partners
      '/partners': { de: '/de/partner', fr: '/fr/partenaires' },
      '/partners/general-practitioners': { de: '/de/partner/hausaerzte', fr: '/fr/partenaires/medecins-generalistes' },
      '/partners/cardiologists': { de: '/de/partner/kardiologen', fr: '/fr/partenaires/cardiologues' },
      '/partners/telemedicine': { de: '/de/partner/telemedizin', fr: '/fr/partenaires/telemedecine' },
      '/partners/corporate': { de: '/de/partner/unternehmen', fr: '/fr/partenaires/entreprises' },
      
      // How It Works
      '/how-it-works': { de: '/de/wie-es-funktioniert', fr: '/fr/comment-ca-marche' },
      '/how-it-works/process': { de: '/de/wie-es-funktioniert/prozess', fr: '/fr/comment-ca-marche/processus' },
      '/how-it-works/reimbursement': { de: '/de/wie-es-funktioniert/kostenerstattung', fr: '/fr/comment-ca-marche/remboursement' },
      '/how-it-works/technology': { de: '/de/wie-es-funktioniert/technologie', fr: '/fr/comment-ca-marche/technologie' },
      '/how-it-works/evidence': { de: '/de/wie-es-funktioniert/evidenz', fr: '/fr/comment-ca-marche/evidence' },
      '/how-it-works/faq': { de: '/de/wie-es-funktioniert/faq', fr: '/fr/comment-ca-marche/faq' },
      
      // About
      '/about': { de: '/de/ueber-uns', fr: '/fr/a-propos' },
      '/about/company': { de: '/de/ueber-uns/unternehmen', fr: '/fr/a-propos/entreprise' },
      '/about/medical-board': { de: '/de/ueber-uns/beirat', fr: '/fr/a-propos/conseil-medical' },
      '/about/blog': { de: '/de/ueber-uns/blog', fr: '/fr/a-propos/blog' },
      '/about/testimonials': { de: '/de/ueber-uns/erfahrungsberichte', fr: '/fr/a-propos/temoignages' },
      '/about/compliance': { de: '/de/ueber-uns/compliance', fr: '/fr/a-propos/conformite' },
      '/about/contact': { de: '/de/ueber-uns/kontakt', fr: '/fr/a-propos/contact' }
    };
    
    // Find the mapping for current path
    const mapping = pathMappings[currentPath];
    if (mapping && mapping[targetLang]) {
      return mapping[targetLang];
    }
    
    // Default fallback
    return targetLang === 'en' ? currentPath.replace(/^\/de\/|^\/fr\//, '/') : `/${targetLang}${currentPath}`;
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    const newPath = getLocalizedPath(lang);
    navigate(newPath);
  };

  // Navigation structure based on new architecture
  const getNavigationItems = () => {
    const basePrefix = language === 'en' ? '' : `/${language}`;
    
    const labels = {
      en: {
        solutions: "Solutions",
        partners: "Partners", 
        howItWorks: "How It Works",
        about: "About Us"
      },
      de: {
        solutions: "Lösungen",
        partners: "Partner",
        howItWorks: "Wie es funktioniert", 
        about: "Über uns"
      },
      fr: {
        solutions: "Solutions",
        partners: "Partenaires",
        howItWorks: "Comment ça marche",
        about: "À propos"
      }
    };

    const solutionsItems = {
      en: [
        { label: "14-Day Holter ECG", path: "/solutions/14-day-holter" },
        { label: "SKIIN 3X Tritest", path: "/solutions/tritest" }
      ],
      de: [
        { label: "14-Tage Holter EKG", path: "/de/loesungen/14-tage-holter" },
        { label: "SKIIN 3X Tritest", path: "/de/loesungen/tritest" }
      ],
      fr: [
        { label: "Holter ECG 14 Jours", path: "/fr/solutions/holter-14-jours" },
        { label: "SKIIN 3X Tritest", path: "/fr/solutions/tritest" }
      ]
    };

    const partnersItems = {
      en: [
        { label: "General Practitioners", path: "/partners/general-practitioners" },
        { label: "Cardiologists", path: "/partners/cardiologists" },
        { label: "Telemedicine", path: "/partners/telemedicine" },
        { label: "Corporate/Insurers", path: "/partners/corporate" }
      ],
      de: [
        { label: "Hausärzte", path: "/de/partner/hausaerzte" },
        { label: "Kardiologen", path: "/de/partner/kardiologen" },
        { label: "Telemedizin", path: "/de/partner/telemedizin" },
        { label: "Unternehmen", path: "/de/partner/unternehmen" }
      ],
      fr: [
        { label: "Médecins Généralistes", path: "/fr/partenaires/medecins-generalistes" },
        { label: "Cardiologues", path: "/fr/partenaires/cardiologues" },
        { label: "Télémédecine", path: "/fr/partenaires/telemedecine" },
        { label: "Entreprises", path: "/fr/partenaires/entreprises" }
      ]
    };

    return {
      labels: labels[language],
      solutions: solutionsItems[language],
      partners: partnersItems[language],
      howItWorks: language === 'en' ? '/how-it-works' : language === 'de' ? '/de/wie-es-funktioniert' : '/fr/comment-ca-marche',
      about: language === 'en' ? '/about' : language === 'de' ? '/de/ueber-uns' : '/fr/a-propos'
    };
  };

  const nav = getNavigationItems();

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
          <Link to={language === 'en' ? '/' : `/${language}`} className="flex items-center" onClick={closeMobileMenu}>
            <span className="sr-only">SKIIN</span>
            <MyantLogo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                {nav.labels.solutions}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {nav.solutions.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                {nav.labels.partners}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {nav.partners.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* How It Works */}
            <Link
              to={nav.howItWorks}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {nav.labels.howItWorks}
            </Link>

            {/* About Us */}
            <Link
              to={nav.about}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {nav.labels.about}
            </Link>
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
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link to={language === 'en' ? '/about/contact' : language === 'de' ? '/de/ueber-uns/kontakt' : '/fr/a-propos/contact'}>
                {language === 'en' ? 'Contact Us' : language === 'de' ? 'Kontakt' : 'Contactez-nous'}
              </Link>
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
            {/* Mobile Solutions */}
            <div className="space-y-2">
              <div className="text-foreground text-lg py-2 font-medium">{nav.labels.solutions}</div>
              {nav.solutions.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-muted-foreground text-base py-1 pl-4 hover:text-primary block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Partners */}
            <div className="space-y-2">
              <div className="text-foreground text-lg py-2 font-medium">{nav.labels.partners}</div>
              {nav.partners.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-muted-foreground text-base py-1 pl-4 hover:text-primary block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to={nav.howItWorks}
              className="text-foreground text-lg py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {nav.labels.howItWorks}
            </Link>

            <Link
              to={nav.about}
              className="text-foreground text-lg py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {nav.labels.about}
            </Link>

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
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button className="w-full" size="lg" asChild onClick={closeMobileMenu}>
                <Link to={language === 'en' ? '/about/contact' : language === 'de' ? '/de/ueber-uns/kontakt' : '/fr/a-propos/contact'}>
                  {language === 'en' ? 'Contact Us' : language === 'de' ? 'Kontakt' : 'Contactez-nous'}
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