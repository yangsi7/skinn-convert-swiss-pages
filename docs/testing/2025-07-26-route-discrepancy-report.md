# Route Discrepancy Report
**Date**: 2025-07-26
**Purpose**: Identify and document route inconsistencies between v7.2 spec and implementation
**Phase**: E.2 Navigation Testing

## Critical Finding: Route Mismatch

### 10-Day Heart Screening Routes

| Language | v7.2 Spec Says | Actual Route | Navbar Mapping |
|----------|----------------|--------------|----------------|
| German | `/de/loesungen/10-tage-herzscreening` | `/de/loesungen/10-tage-herzueberwachung` | 10-tage-herzueberwachung |
| French | `/fr/solutions/bilan-cardiaque-10-jours` | `/fr/solutions/depistage-cardiaque-10-jours` | depistage-cardiaque-10-jours |
| Italian | `/it/soluzioni/screening-cardiaco-10-giorni` | `/it/soluzioni/monitoraggio-cardiaco-10-giorni` | monitoraggio-cardiaco-10-giorni |

### Impact
- URLs in v7.2 copy specs don't match implemented routes
- SEO impact: Wrong URLs may be indexed
- User confusion: Marketing materials may have incorrect links
- Translation consistency: Different terminology used

## Additional Discrepancies

### Partners Routes
| Route Type | English | Italian Spec | Italian Actual |
|------------|---------|--------------|----------------|
| General Practitioners | /partners/general-practitioners | medici-di-base | medici-famiglia |
| Corporate | /partners/corporate | aziende | aziende-assicurazioni |

### How It Works Routes
| Route Type | English | Italian Spec | Italian Actual |
|------------|---------|--------------|----------------|
| Evidence | /how-it-works/evidence | prove | evidenze |
| Overview | /how-it-works/overview | panoramica | (missing - defaults to base) |

### About Routes
| Route Type | English | Italian Spec | Italian Actual |
|------------|---------|--------------|----------------|
| Medical Board | /about/medical-board | - | consiglio-medico |
| Contact | /about/contact | - | contatti (should be contatto) |

## Recommendations

### Priority 1: Fix Route Inconsistencies
1. **Decide on canonical URLs**:
   - Option A: Update routes to match v7.2 spec
   - Option B: Update v7.2 spec to match current routes
   - Option C: Implement redirects from spec URLs to actual URLs

2. **Update Components**:
   ```typescript
   // In routes/index.tsx - Update German route
   <Route path="/de/loesungen/10-tage-herzscreening" element={<Solutions10DayHeartScreening />} />
   
   // In Navbar.tsx - Update mapping
   '/solutions/10-day-heart-screening': { 
     de: '/de/loesungen/10-tage-herzscreening',  // Changed from herzueberwachung
     fr: '/fr/solutions/bilan-cardiaque-10-jours', // Changed from depistage
     it: '/it/soluzioni/screening-cardiaco-10-giorni' // Changed from monitoraggio
   }
   ```

3. **Implement Redirects**:
   ```typescript
   // Add redirect routes for old URLs
   <Route path="/de/loesungen/10-tage-herzueberwachung" 
          element={<Navigate to="/de/loesungen/10-tage-herzscreening" replace />} />
   ```

### Priority 2: Standardize Terminology
- **German**: "Herzscreening" vs "Herzüberwachung" (screening vs monitoring)
- **French**: "Bilan cardiaque" vs "Dépistage cardiaque" (cardiac assessment vs screening)
- **Italian**: "Screening cardiaco" vs "Monitoraggio cardiaco" (cardiac screening vs monitoring)

### Priority 3: Add Missing Routes
```typescript
// Add overview routes that are missing
<Route path="/how-it-works/overview" element={<HowItWorksOverview />} />
<Route path="/de/so-funktionierts/uebersicht" element={<HowItWorksOverview />} />
<Route path="/fr/comment-ca-marche/apercu" element={<HowItWorksOverview />} />
<Route path="/it/come-funziona/panoramica" element={<HowItWorksOverview />} />
```

## Testing Checklist After Fixes

- [ ] All v7.2 spec URLs resolve correctly
- [ ] Old URLs redirect to new ones
- [ ] Language switching preserves page correctly
- [ ] No 404 errors on documented routes
- [ ] Navbar mappings match route definitions
- [ ] URL structure consistent across languages

## File Updates Required

1. `/src/routes/index.tsx` - Update route definitions
2. `/src/components/layout/Navbar.tsx` - Update path mappings
3. `/src/utils/routeTranslations.ts` - Check if exists and update
4. Translation files - Ensure consistent terminology
5. Sitemap - Regenerate with correct URLs
6. Documentation - Update all references to routes