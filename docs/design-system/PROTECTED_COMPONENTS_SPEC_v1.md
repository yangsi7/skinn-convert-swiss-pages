# Protected Components Specification
Version: 1.0
Status: APPROVED - PENDING IMPLEMENTATION
Date: 2025-01-22

## Overview

This specification defines the content and behavior for SKIIN's four protected components. These components are marked as protected due to regulatory requirements, clinical accuracy needs, and marketing standardization. Any modifications require explicit CEO approval.

## Component Specifications

### 1. HeartBalanceRing Component

**Purpose**: Visual representation of overall cardiac health status
**Location**: Patient dashboard, summary reports

#### Content Specifications

**English**:
```
Title: "Your Heart Health Score"
Subtitle: "Real-time cardiac health visualization"
Score Label: "Overall Score"
Range: 0-100 (displayed as circular progress)
Status Messages:
  - 90-100: "Excellent cardiac health"
  - 70-89: "Good cardiac health"
  - 50-69: "Moderate - attention advised"
  - <50: "Consult your physician"
Disclaimer: "CE certified medical device. Results reviewed by qualified cardiologists."
```

**German**:
```
Title: "Ihr Herzgesundheits-Score"
Subtitle: "Echtzeit-Visualisierung der Herzgesundheit"
Score Label: "Gesamtbewertung"
Status Messages:
  - 90-100: "Ausgezeichnete Herzgesundheit"
  - 70-89: "Gute Herzgesundheit"
  - 50-69: "Mässig - Aufmerksamkeit empfohlen"
  - <50: "Konsultieren Sie Ihren Arzt"
Disclaimer: "CE-zertifiziertes Medizinprodukt. Ergebnisse von qualifizierten Kardiologen überprüft."
```

**French**:
```
Title: "Votre Score de Santé Cardiaque"
Subtitle: "Visualisation en temps réel de la santé cardiaque"
Score Label: "Score Global"
Status Messages:
  - 90-100: "Excellente santé cardiaque"
  - 70-89: "Bonne santé cardiaque"
  - 50-69: "Modéré - attention conseillée"
  - <50: "Consultez votre médecin"
Disclaimer: "Dispositif médical certifié CE. Résultats examinés par des cardiologues qualifiés."
```

**Italian**:
```
Title: "Il Tuo Punteggio di Salute Cardiaca"
Subtitle: "Visualizzazione in tempo reale della salute cardiaca"
Score Label: "Punteggio Complessivo"
Status Messages:
  - 90-100: "Eccellente salute cardiaca"
  - 70-89: "Buona salute cardiaca"
  - 50-69: "Moderato - attenzione consigliata"
  - <50: "Consulti il suo medico"
Disclaimer: "Dispositivo medico certificato CE. Risultati esaminati da cardiologi qualificati."
```

#### Visual Requirements
- Circular progress indicator with gradient (green to yellow to red)
- Animated transitions when score updates
- Pulsing effect synchronized with heartbeat data
- Accessible color scheme for color-blind users

### 2. ContributingFactorCards Component

**Purpose**: Display lifestyle factors affecting cardiac health
**Location**: Detailed results page, patient education section

#### Content Specifications

**Card 1: Physical Activity**
- **EN**: Title: "Physical Activity" | Description: "Movement patterns affect heart rhythm stability"
- **DE**: Title: "Körperliche Aktivität" | Description: "Bewegungsmuster beeinflussen die Herzrhythmusstabilität"
- **FR**: Title: "Activité Physique" | Description: "Les habitudes de mouvement affectent la stabilité du rythme cardiaque"
- **IT**: Title: "Attività Fisica" | Description: "I modelli di movimento influenzano la stabilità del ritmo cardiaco"

**Card 2: Sleep Quality**
- **EN**: Title: "Sleep Quality" | Description: "Restorative sleep impacts cardiac recovery"
- **DE**: Title: "Schlafqualität" | Description: "Erholsamer Schlaf beeinflusst die kardiale Erholung"
- **FR**: Title: "Qualité du Sommeil" | Description: "Le sommeil réparateur influence la récupération cardiaque"
- **IT**: Title: "Qualità del Sonno" | Description: "Il sonno ristoratore influisce sul recupero cardiaco"

**Card 3: Stress Levels**
- **EN**: Title: "Stress Management" | Description: "Emotional wellbeing influences your heart health"
- **DE**: Title: "Stressbewältigung" | Description: "Emotionales Wohlbefinden beeinflusst Ihre Herzgesundheit"
- **FR**: Title: "Gestion du Stress" | Description: "Le bien-être émotionnel influence votre santé cardiaque"
- **IT**: Title: "Gestione dello Stress" | Description: "Il benessere emotivo influenza la salute del cuore"

**Card 4: Nutrition**
- **EN**: Title: "Nutrition" | Description: "Dietary choices affect cardiovascular health"
- **DE**: Title: "Ernährung" | Description: "Ernährungsgewohnheiten beeinflussen die Herz-Kreislauf-Gesundheit"
- **FR**: Title: "Nutrition" | Description: "Les choix alimentaires affectent la santé cardiovasculaire"
- **IT**: Title: "Nutrizione" | Description: "Le scelte alimentari influenzano la salute cardiovascolare"

**Card 5: Medication Adherence**
- **EN**: Title: "Medication" | Description: "Track adherence and monitor effects on heart rhythm"
- **DE**: Title: "Medikation" | Description: "Therapietreue verfolgen und Auswirkungen auf den Herzrhythmus überwachen"
- **FR**: Title: "Médication" | Description: "Suivre l'observance et surveiller les effets sur le rythme cardiaque"
- **IT**: Title: "Medicazione" | Description: "Monitorare l'aderenza e gli effetti sul ritmo cardiaco"

**Footer Note (all languages)**:
- **EN**: "Content validated by the Swiss Society of Cardiology"
- **DE**: "Inhalt validiert durch die Schweizerische Gesellschaft für Kardiologie"
- **FR**: "Contenu validé par la Société Suisse de Cardiologie"
- **IT**: "Contenuto convalidato dalla Società Svizzera di Cardiologia"

#### Visual Requirements
- Card-based layout with icons for each factor
- Progress indicators showing positive/negative impact
- Interactive hover states with detailed information
- Consistent iconography across all languages

### 3. TabNavigation Component

**Purpose**: Primary navigation for result sections
**Location**: Results dashboard, report views

#### Content Specifications

**Tab Labels**:
| English | German | French | Italian |
|---------|---------|---------|----------|
| Overview | Überblick | Aperçu | Panoramica |
| Details | Details | Détails | Dettagli |
| Insights | Einblicke | Analyses | Analisi |
| Trends | Trends | Tendances | Tendenze |
| Export | Exportieren | Exporter | Esporta |

#### Technical Requirements
- Each tab must include `data-analytics-tab="{tab-name}"` attribute
- Active state must be clearly indicated
- Keyboard navigation support required
- Tab order must remain consistent across languages

### 4. TodayTab Component

**Purpose**: Display current cardiac risk assessment
**Location**: Patient dashboard, daily summary view

#### Content Specifications

**Risk Level Display**:

**Low Risk**:
- **EN**: "Your heart rhythm is stable" | Icon: Green checkmark
- **DE**: "Ihr Herzrhythmus ist stabil" | Icon: Green checkmark
- **FR**: "Votre rythme cardiaque est stable" | Icon: Green checkmark
- **IT**: "Il suo ritmo cardiaco è stabile" | Icon: Green checkmark

**Moderate Risk**:
- **EN**: "Minor variations detected - continue monitoring" | Icon: Yellow alert
- **DE**: "Geringe Abweichungen festgestellt - Überwachung fortsetzen" | Icon: Yellow alert
- **FR**: "Variations mineures détectées - continuer la surveillance" | Icon: Yellow alert
- **IT**: "Rilevate variazioni minori - continuare il monitoraggio" | Icon: Yellow alert

**High Risk**:
- **EN**: "Significant changes detected - consult your physician" | Icon: Red warning
- **DE**: "Signifikante Veränderungen festgestellt - konsultieren Sie Ihren Arzt" | Icon: Red warning
- **FR**: "Changements significatifs détectés - consultez votre médecin" | Icon: Red warning
- **IT**: "Cambiamenti significativi rilevati - consulti il suo medico" | Icon: Red warning

**Algorithm Notice** (footer, all risk levels):
- **EN**: "Risk assessment powered by Myant Health Analytics. Algorithm licensed and validated for Swiss healthcare standards."
- **DE**: "Risikobewertung unterstützt durch Myant Health Analytics. Algorithmus lizenziert und für Schweizer Gesundheitsstandards validiert."
- **FR**: "Évaluation des risques alimentée par Myant Health Analytics. Algorithme sous licence et validé selon les normes suisses de santé."
- **IT**: "Valutazione del rischio fornita da Myant Health Analytics. Algoritmo concesso in licenza e convalidato per gli standard sanitari svizzeri."

#### Visual Requirements
- Clear color coding (green/yellow/red) with accessible patterns
- Prominent display of risk level
- Historical trend indicator (last 7 days)
- Action button linking to appropriate next steps

## Implementation Guidelines

### Regulatory Compliance
1. All text must be reviewed by medical advisory board before implementation
2. Translations must be certified by medical translators
3. Any changes require documented approval process
4. Version control must track all modifications

### Technical Implementation
1. Components must be isolated in `/src/components/protected/`
2. Text content should be in translation files, not hardcoded
3. Components should emit analytics events for usage tracking
4. Accessibility standards (WCAG 2.1 AA) must be met

### Design Consistency
1. Follow established design system colors and typography
2. Maintain consistent spacing and layout across languages
3. Ensure responsive behavior on all device sizes
4. Test with actual patient data visualizations

## Approval Requirements

Any modifications to these components require:
1. Written proposal documenting the change
2. Medical advisory board review (for clinical content)
3. Legal review (for regulatory compliance)
4. CEO approval via signed document
5. Update to this specification with version increment

## Version History

| Version | Date | Changes | Approved By |
|---------|------|---------|-------------|
| 1.0 | 2025-01-22 | Initial specification | Pending |

---

*This document is controlled. The master version is maintained in the SKIIN documentation repository.*