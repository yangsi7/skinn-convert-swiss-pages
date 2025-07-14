
import { useLanguage } from '@/contexts/LanguageContext';
import { homeTranslations as enHomeTranslations } from '@/translations/home/en';
import { homeTranslations as deHomeTranslations } from '@/translations/home/de';
import { homeTranslations as frHomeTranslations } from '@/translations/home/fr';
import { physiciansContent as enPhysiciansTranslations } from '@/translations/physicians/en';
import { physiciansContent as dePhysiciansTranslations } from '@/translations/physicians/de';
import { physiciansContent as frPhysiciansTranslations } from '@/translations/physicians/fr';
import { solutionsTranslations as enSolutionsTranslations } from '@/translations/solutions/en';
import { solutionsTranslations as deSolutionsTranslations } from '@/translations/solutions/de';
import { solutionsTranslations as frSolutionsTranslations } from '@/translations/solutions/fr';
import { partnersTranslations as enPartnersTranslations } from '@/translations/partners/en';
import { partnersTranslations as dePartnersTranslations } from '@/translations/partners/de';
import { partnersTranslations as frPartnersTranslations } from '@/translations/partners/fr';

/**
 * Hook for handling translations in the application
 * 
 * Can be used in two ways:
 * 1. With direct content objects: useTranslation(enContent, deContent, frContent)
 * 2. With predefined section: useTranslation('home') or useTranslation('physicians')
 * 
 * @returns The translated content based on the current language
 */
export function useTranslation<T>(
  enContent: T, 
  deContent: T, 
  frContent: T
): T;

export function useTranslation(section: 'home'): typeof enHomeTranslations;
export function useTranslation(section: 'physicians'): typeof enPhysiciansTranslations;
export function useTranslation(section: 'solutions'): typeof enSolutionsTranslations;
export function useTranslation(section: 'partners'): typeof enPartnersTranslations;

export function useTranslation<T>(
  enContentOrSection: T | string,
  deContent?: T,
  frContent?: T
): any {
  const { language } = useLanguage();
  
  // Handle section-based translations
  if (typeof enContentOrSection === 'string') {
    const section = enContentOrSection;
    
    switch (section) {
      case 'home':
        switch (language) {
          case 'de': return deHomeTranslations;
          case 'fr': return frHomeTranslations;
          default: return enHomeTranslations;
        }
      case 'physicians':
        switch (language) {
          case 'de': return dePhysiciansTranslations;
          case 'fr': return frPhysiciansTranslations;
          default: return enPhysiciansTranslations;
        }
      case 'solutions':
        switch (language) {
          case 'de': return deSolutionsTranslations;
          case 'fr': return frSolutionsTranslations;
          default: return enSolutionsTranslations;
        }
      case 'partners':
        switch (language) {
          case 'de': return dePartnersTranslations;
          case 'fr': return frPartnersTranslations;
          default: return enPartnersTranslations;
        }
      default:
        console.warn(`Translation section "${section}" not found`);
        return null;
    }
  }
  
  // Handle direct content translations
  switch (language) {
    case 'de':
      return deContent as T;
    case 'fr':
      return frContent as T;
    default:
      return enContentOrSection as T;
  }
}
