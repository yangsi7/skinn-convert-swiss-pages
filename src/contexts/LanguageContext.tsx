
import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageType = 'en' | 'de' | 'fr';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  useEffect(() => {
    // Get language from localStorage or browser preferred language
    const savedLanguage = localStorage.getItem('myant-language');
    if (savedLanguage && ['en', 'de', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage as LanguageType);
    } else {
      // Get browser language
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'de', 'fr'].includes(browserLang)) {
        setLanguage(browserLang as LanguageType);
      }
    }
  }, []);

  const handleSetLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem('myant-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
