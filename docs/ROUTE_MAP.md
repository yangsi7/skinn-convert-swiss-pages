# Application Route Map

## Overview

This multilingual application supports three languages: English (en), German (de), and French (fr). The routing structure follows a URL-based language detection pattern where:

- English routes have no language prefix (e.g., `/about`)
- German routes use `/de/` prefix (e.g., `/de/ueber-uns`)
- French routes use `/fr/` prefix (e.g., `/fr/a-propos`)

## Language Detection Logic

The language is automatically detected based on the URL path:
- Paths starting with `/de` → German
- Paths starting with `/fr` → French
- All other paths → English

## Complete Route Structure

### 🏠 Home Pages

| English | German | French | Component |
|---------|---------|---------|-----------|
| `/` | `/de` | `/fr` | `Index.tsx` |
| `/home-2` | `/de/home-2` | `/fr/home-2` | `Home2.tsx` |

### 💊 Solutions

| English | German | French | Component |
|---------|---------|---------|-----------|
| `/solutions/14-day-holter` | `/de/loesungen/14-tage-holter` | `/fr/solutions/holter-14-jours` | `solutions/14DayHolter.tsx` |
| `/solutions/tritest` | `/de/loesungen/tritest` | `/fr/solutions/tritest` | `solutions/Tritest.tsx` |

### 🤝 Partners

| English | German | French | Component |
|---------|---------|---------|-----------|
| `/partners` | `/de/partner` | `/fr/partenaires` | `partners/Overview.tsx` |
| `/partners/general-practitioners` | `/de/partner/hausaerzte` | `/fr/partenaires/medecins-generalistes` | `partners/GeneralPractitioners.tsx` |
| `/partners/cardiologists` | `/de/partner/kardiologen` | `/fr/partenaires/cardiologues` | `partners/Cardiologists.tsx` |
| `/partners/telemedicine` | `/de/partner/telemedizin` | `/fr/partenaires/telemedecine` | `partners/Telemedicine.tsx` |
| `/partners/corporate` | `/de/partner/unternehmen` | `/fr/partenaires/entreprises` | `partners/Corporate.tsx` |

### 🔧 How It Works

| English | German | French | Component |
|---------|---------|---------|-----------|
| `/how-it-works` | `/de/wie-es-funktioniert` | `/fr/comment-ca-marche` | `how-it-works/Overview.tsx` |
| `/how-it-works/process` | `/de/wie-es-funktioniert/prozess` | `/fr/comment-ca-marche/processus` | `how-it-works/Process.tsx` |
| `/how-it-works/reimbursement` | `/de/wie-es-funktioniert/kostenerstattung` | `/fr/comment-ca-marche/remboursement` | `how-it-works/Reimbursement.tsx` |
| `/how-it-works/technology` | `/de/wie-es-funktioniert/technologie` | `/fr/comment-ca-marche/technologie` | `how-it-works/Technology.tsx` |
| `/how-it-works/evidence` | `/de/wie-es-funktioniert/evidenz` | `/fr/comment-ca-marche/evidence` | `how-it-works/Evidence.tsx` |
| `/how-it-works/faq` | `/de/wie-es-funktioniert/faq` | `/fr/comment-ca-marche/faq` | `how-it-works/FAQ.tsx` |

### ℹ️ About Us

| English | German | French | Component |
|---------|---------|---------|-----------|
| `/about` | `/de/ueber-uns` | `/fr/a-propos` | `about/Overview.tsx` |
| `/about/company` | `/de/ueber-uns/unternehmen` | `/fr/a-propos/entreprise` | `about/Company.tsx` |
| `/about/medical-board` | `/de/ueber-uns/beirat` | `/fr/a-propos/conseil-medical` | `about/MedicalBoard.tsx` |
| `/about/blog` | `/de/ueber-uns/blog` | `/fr/a-propos/blog` | `about/Blog.tsx` |
| `/about/testimonials` | `/de/ueber-uns/erfahrungsberichte` | `/fr/a-propos/temoignages` | `about/Testimonials.tsx` |
| `/about/compliance` | `/de/ueber-uns/compliance` | `/fr/a-propos/conformite` | `about/Compliance.tsx` |
| `/about/contact` | `/de/ueber-uns/kontakt` | `/fr/a-propos/contact` | `about/Contact.tsx` |

### 🚫 Error Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `*` (catch-all) | `NotFound.tsx` | 404 page for unmatched routes |

## Additional Pages (Not in Main Routes)

There's also a `Physicians.tsx` component in the pages directory that doesn't appear to be actively routed in the current implementation.

## Route Parameters

Currently, the application does not use any route parameters (e.g., `:id`).

## Protected Routes

The application does not implement any authentication or protected routes. All pages are publicly accessible.

## Redirect Rules

No explicit redirects are configured. The only navigation logic is:
- Language switching via the navbar updates the URL to the corresponding translated path
- The catch-all route (`*`) renders the NotFound component

## Navigation Implementation

The navigation is handled through:
1. **React Router DOM v6** - Main routing library
2. **Navbar Component** - Contains `getLocalizedPath()` function that maps routes between languages
3. **Language Context** - Manages the current language state
4. **routeTranslations.ts** - Contains a simplified route translation utility (though it appears to only handle a subset of routes)

## Key Technical Details

- All routes use the same component regardless of language
- Language content is handled within components using the LanguageContext
- The route structure is duplicated for each language in `routes/index.tsx`
- Navigation between languages preserves the current page context

## Future Considerations

1. The `routeTranslations.ts` utility only covers a subset of routes and could be expanded
2. Consider implementing a more DRY approach to route definitions to avoid duplication
3. Add breadcrumb support for better navigation context
4. Implement sitemap generation for SEO