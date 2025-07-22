
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
import { eligibilityEn } from '@/translations/eligibility/en';
import { eligibilityDe } from '@/translations/eligibility/de';
import { eligibilityFr } from '@/translations/eligibility/fr';
import { aboutTranslations as enAboutTranslations } from '@/translations/about/en';
import { aboutTranslations as deAboutTranslations } from '@/translations/about/de';
import { aboutTranslations as frAboutTranslations } from '@/translations/about/fr';
import { howItWorksTranslations as enHowItWorksTranslations } from '@/translations/howItWorks/en';
import { howItWorksTranslations as deHowItWorksTranslations } from '@/translations/howItWorks/de';
import { howItWorksTranslations as frHowItWorksTranslations } from '@/translations/howItWorks/fr';
import { uiTranslations as enUiTranslations } from '@/translations/ui/en';
import { uiTranslations as deUiTranslations } from '@/translations/ui/de';
import { uiTranslations as frUiTranslations } from '@/translations/ui/fr';
import { notFoundTranslations as enNotFoundTranslations } from '@/translations/notFound/en';
import { notFoundTranslations as deNotFoundTranslations } from '@/translations/notFound/de';
import { notFoundTranslations as frNotFoundTranslations } from '@/translations/notFound/fr';
import { legalTranslations as enLegalTranslations } from '@/translations/legal/en';
import { legalTranslations as deLegalTranslations } from '@/translations/legal/de';
import { legalTranslations as frLegalTranslations } from '@/translations/legal/fr';

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
export function useTranslation(section: 'home2'): typeof enHomeTranslations.home2;
export function useTranslation(section: 'physicians'): typeof enPhysiciansTranslations;
export function useTranslation(section: 'solutions'): typeof enSolutionsTranslations;
export function useTranslation(section: 'partners'): typeof enPartnersTranslations;
export function useTranslation(section: 'eligibility'): typeof eligibilityEn;
export function useTranslation(section: 'about'): typeof enAboutTranslations;
export function useTranslation(section: 'howItWorks'): typeof enHowItWorksTranslations;
export function useTranslation(section: 'ui'): typeof enUiTranslations;
export function useTranslation(section: 'notFound'): typeof enNotFoundTranslations;
export function useTranslation(section: 'legal'): typeof enLegalTranslations;

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
      case 'home2':
        switch (language) {
          case 'de': return deHomeTranslations.home2;
          case 'fr': return frHomeTranslations.home2;
          default: return enHomeTranslations.home2;
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
      case 'eligibility':
        switch (language) {
          case 'de': return eligibilityDe;
          case 'fr': return eligibilityFr;
          default: return eligibilityEn;
        }
      case 'about':
        switch (language) {
          case 'de': return deAboutTranslations;
          case 'fr': return frAboutTranslations;
          default: return enAboutTranslations;
        }
      case 'howItWorks':
        switch (language) {
          case 'de': return deHowItWorksTranslations;
          case 'fr': return frHowItWorksTranslations;
          default: return enHowItWorksTranslations;
        }
      case 'ui':
        switch (language) {
          case 'de': return deUiTranslations;
          case 'fr': return frUiTranslations;
          default: return enUiTranslations;
        }
      case 'notFound':
        switch (language) {
          case 'de': return deNotFoundTranslations;
          case 'fr': return frNotFoundTranslations;
          default: return enNotFoundTranslations;
        }
      case 'legal':
        switch (language) {
          case 'de': return deLegalTranslations;
          case 'fr': return frLegalTranslations;
          default: return enLegalTranslations;
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
