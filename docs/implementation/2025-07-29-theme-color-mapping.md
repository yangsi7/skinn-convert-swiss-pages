# Theme Color Mapping Guide
VERSION: 1.0
DATE: 2025-07-29
PURPOSE: Map hardcoded colors to theme-aware CSS variables

## Color Mapping Rules

### Direct Color Replacements

| Hardcoded Color | Theme Variable | Usage Context |
|----------------|----------------|---------------|
| `medical-teal` | `accent` | Primary accent color for highlights |
| `text-medical-teal` | `text-accent` | Text using accent color |
| `bg-medical-teal` | `bg-accent` | Background using accent color |
| `border-medical-teal` | `border-accent` | Border using accent color |
| `text-red-600` | `text-destructive` | Error/warning text |
| `text-orange-600` | `text-destructive/80` | Secondary warning |
| `text-blue-600` | `text-primary` | Primary action text |
| `bg-blue-600` | `bg-primary` | Primary action background |
| `bg-gray-50` | `bg-secondary/5` | Subtle backgrounds |
| `bg-teal-50` | `bg-accent/5` | Subtle accent backgrounds |
| `text-yellow-500` | `text-yellow-500` | Keep for star ratings only |

### Component-Specific Fixes

1. **StatisticsCard.tsx**
   - `hover:border-medical-teal` → `hover:border-accent`
   - `text-medical-teal` → `text-accent`
   - `text-medical-teal/70` → `text-accent/70`

2. **RiskCardsSection.tsx**
   - `text-red-600` → `text-destructive`
   - `text-orange-600` → `text-destructive/80`
   - Keep `text-medical-teal` for consistency icon

3. **TestimonialsSlider.tsx**
   - `text-medical-teal` → `text-accent`
   - `bg-medical-teal/10` → `bg-accent/10`
   - `text-yellow-500` → Keep for star ratings

4. **Button.tsx**
   - `border-medical-teal/20` → `border-accent/20`

### CSS Variable Usage

For dynamic color application, use CSS variables directly:

```tsx
// Instead of:
className="text-medical-teal"

// Use:
className="text-accent"

// Or for custom properties:
style={{ color: 'var(--accent)' }}
```

### Gradient Updates

Replace hardcoded gradients with theme-aware gradients:

```tsx
// Instead of:
className="bg-gradient-to-br from-medical-teal/10 to-blue-600/10"

// Use:
className="bg-gradient-subtle" // Defined in CSS
```

## Implementation Priority

1. **High Priority (P1)**
   - All `medical-teal` references (34 files)
   - Button component variants
   - CTA components with hardcoded colors

2. **Medium Priority (P2)**
   - Risk cards with text colors
   - Background colors in sections
   - Border colors

3. **Low Priority (P3)**
   - Shadow colors (if any)
   - Hover state colors
   - Focus ring colors

## Testing Requirements

After each component update:
1. Test in all 5 themes
2. Verify color contrast ratios
3. Check hover/focus states
4. Validate responsive behavior

## Notes

- Always use Tailwind's theme-aware classes when possible
- For custom colors, use CSS variables defined in index.css
- Maintain consistency across similar components
- Document any exceptions (e.g., star ratings keeping yellow)