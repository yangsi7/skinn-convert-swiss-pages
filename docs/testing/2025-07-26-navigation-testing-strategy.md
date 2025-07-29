# Navigation Testing Strategy (Without Puppeteer MCP)
**Created**: 2025-07-26
**Purpose**: Alternative approaches for testing navigation and language switching
**Phase**: E.1 Visual Testing Setup

## Overview

Since the puppeteer MCP tool is not available, this document outlines three alternative approaches for testing navigation, language switching, and visual consistency across the SKIIN Switzerland website.

## Approach 1: Local Puppeteer Script

### Setup
```bash
# Install puppeteer locally
npm install --save-dev puppeteer

# Run the visual testing script
node scripts/visual-testing-alternative.js
```

### What It Tests
- All 98 configured routes
- 4 viewport sizes (mobile, tablet, desktop, wide)
- Language switching functionality
- Mobile navigation menu
- Screenshot capture for visual regression

### Benefits
- Automated testing
- Consistent results
- Visual evidence
- Can be integrated into CI/CD

## Approach 2: Manual Browser Testing

### Tools Required
- Chrome DevTools (F12)
- Device Toolbar (Ctrl+Shift+M)
- Network tab for monitoring
- Console for error checking

### Testing Checklist

#### Navigation Testing
1. **Route Verification**
   - [ ] All English routes load correctly
   - [ ] All German routes load correctly
   - [ ] All French routes load correctly
   - [ ] All Italian routes load correctly
   - [ ] 404 page handles invalid routes
   - [ ] Redirects work (14-day → 10-day)

2. **Language Switching**
   ```
   Test Case: Switch from EN to DE on solutions page
   1. Navigate to /solutions/10-day-heart-screening
   2. Click language switcher
   3. Select "Deutsch"
   4. Verify URL changes to /de/loesungen/10-tage-herzscreening
   5. Verify content is in German
   6. Verify no mixed language content
   ```

3. **Mobile Navigation**
   - [ ] Hamburger menu opens/closes
   - [ ] Menu items are clickable
   - [ ] Submenu expansion works
   - [ ] Touch targets ≥ 44x44px
   - [ ] Z-index layering correct

### Key Routes to Test

#### English
- `/` - Homepage
- `/solutions/10-day-heart-screening` - Main product
- `/partners/general-practitioners` - Professional page
- `/how-it-works/overview` - Information page
- `/about/company` - About page

#### German
- `/de` - Startseite
- `/de/loesungen/10-tage-herzscreening` - Hauptprodukt
- `/de/partner/hausaerzte` - Fachseite
- `/de/so-funktionierts/uebersicht` - Informationsseite
- `/de/ueber-uns/unternehmen` - Über uns

#### French
- `/fr` - Accueil
- `/fr/solutions/bilan-cardiaque-10-jours` - Produit principal
- `/fr/partenaires/medecins-generalistes` - Page professionnelle
- `/fr/comment-ca-marche/apercu` - Page d'information
- `/fr/a-propos/entreprise` - À propos

#### Italian
- `/it` - Home
- `/it/soluzioni/screening-cardiaco-10-giorni` - Prodotto principale
- `/it/partner/medici-di-base` - Pagina professionale
- `/it/come-funziona/panoramica` - Pagina informativa
- `/it/chi-siamo/azienda` - Chi siamo

## Approach 3: React Testing Library

### Setup
```bash
# Already installed in the project
# Create test files in src/__tests__/
```

### Example Navigation Test
```typescript
// src/__tests__/navigation.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Navigation Tests', () => {
  test('renders homepage in English', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByText(/Heart disease is the #1 cause/i)).toBeInTheDocument();
  });
  
  test('renders homepage in German', () => {
    render(
      <MemoryRouter initialEntries={['/de']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByText(/Herzkrankheiten sind die häufigste/i)).toBeInTheDocument();
  });
});
```

### What to Test
1. Route rendering
2. Language context switching
3. Navigation component behavior
4. Protected route access
5. 404 handling

## Navigation Issues to Watch For

### Common Problems
1. **Language Switching Issues**
   - Current page not preserved
   - Mixed language content
   - Missing translations
   - Incorrect URL mapping

2. **Mobile Navigation Issues**
   - Menu not closing after navigation
   - Z-index conflicts
   - Touch targets too small
   - Scroll locking problems

3. **Route Issues**
   - 404s on valid routes
   - Incorrect redirects
   - Missing trailing slashes
   - Case sensitivity problems

### Performance Considerations
- Lazy loading of route components
- Bundle splitting by language
- Prefetching common routes
- Service worker caching

## Testing Priority

### P0 - Critical (Test First)
1. Homepage loads in all languages
2. Language switcher works
3. Main navigation links work
4. Mobile menu functions

### P1 - High Priority
1. All product pages load
2. Form pages accessible
3. Protected routes redirect properly
4. 404 page works

### P2 - Medium Priority
1. Breadcrumbs work
2. Footer links work
3. Sitemap accurate
4. Meta tags correct

### P3 - Low Priority
1. Animations smooth
2. Hover states work
3. Focus management
4. Print styles

## Automated Testing Script

See `/scripts/visual-testing-alternative.js` for a complete puppeteer script that can be run locally to test all routes and capture screenshots.

## Manual Testing Time Estimate

- Basic navigation test (all languages): 2 hours
- Complete route verification: 3 hours
- Mobile testing: 1 hour
- Visual regression check: 2 hours
- **Total**: 8 hours

## Next Steps

1. Run the local puppeteer script
2. Complete manual testing checklist
3. Write React Testing Library tests
4. Document any issues found
5. Create visual regression baseline
6. Set up CI/CD integration