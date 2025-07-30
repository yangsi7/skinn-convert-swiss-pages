
export const homeTranslations = {
  hero: {
    badge: "MDR Klasse IIa Zertifiziert • Swissmedic Registriert",
    // Copy Variants for Testing
    variants: {
      // Default - New user-specified copy
      default: {
        badge: "Ihre Gesundheit ist wichtig — für mehr als nur Sie",
        headline: "Die meisten Herzprobleme sind still",
        subheadline: "Screenen Sie intelligenter, leben Sie länger",
        aboveCta: "Erkennen Sie stille Herzprobleme, bevor sie kostbare Momente stehlen. Schützen Sie sich und die Menschen, die Sie lieben.",
        eligibilityText: "Nehmen Sie sich 5 Minuten Zeit, um Ihre Eignung zu prüfen",
        ctaPrimary: "Starten Sie Ihren kostenlosen Herzcheck",
        ctaSecondary: "Fragen? Lesen Sie unsere FAQ →"
      },
      // Original - Legacy dual-split copy
      original: {
        badge: "Zertifiziertes Medizinprodukt • Myant-Technologie",
        headline: "Länger leben, jünger bleiben.",
        subheadline: "Intelligenter screenen, von zu Hause",
        aboveCta: "Erkennen Sie stille Herzprobleme, bevor sie kostbare Momente stehlen. Schützen Sie sich und die Menschen, die Sie lieben.",
        eligibilityText: "Nehmen Sie sich 5 Minuten Zeit, um Ihre Eignung zu prüfen",
        ctaPrimary: "Starten Sie Ihren kostenlosen Herzcheck",
        ctaSecondary: "Fragen? Lesen Sie unsere FAQ →"
      },
      // Legacy variants for backward compatibility
      variantA: {
        headline: "Herzkrankheiten sind der häufigste Killer — Wann war Ihr letzter Herzcheck?",
        subheadline: "70% der Herzrhythmusstörungen zeigen keine Symptome. Unentdeckt können sie Schlaganfälle oder Herzversagen verursachen. Jetzt können Sie Ihr Herz sicher und einfach von zu Hause aus untersuchen lassen.",
        emotionalSubheadline: "Langlebigkeit bedeutet mehr Geburtstage — für Sie und für die Menschen, die Sie am meisten lieben. Beginnen Sie noch heute, Ihr Herz zu schützen."
      },
      variantB: {
        headline: "Länger leben. Intelligenter screenen. Von zu Hause aus.",
        subheadline: "Herkömmliche Herzmonitore sind unbequem und verpassen bis zu 91% der unregelmäßigen Rhythmen. SKIINs weiches Kleidungsstück überwacht kontinuierlich für 10 Tage — und erfasst, was andere verpassen.",
        emotionalSubheadline: "Fügen Sie Jahre zu Ihrem Leben hinzu und Leben zu Ihren Jahren. Komfortable Herzuntersuchung ist endlich da."
      },
      variantC: {
        headline: "Ihr Herz. Ihre Familie. Ihre Kontrolle.",
        subheadline: "Jede unentdeckte Herzrhythmusstörung ist ein Risiko für Sie — und eine Sorge für die Menschen, die Sie lieben. Übernehmen Sie die Kontrolle mit komfortabler, umfassender Herzuntersuchung von zu Hause aus.",
        emotionalSubheadline: "Denn Ihr Herz schlägt für mehr als nur Sie. Schützen Sie es für sich selbst und für die Menschen, die Sie brauchen."
      }
    },
    // A/B Test Varianten for backward compatibility
    variantA: {
      headline: "Herzkrankheiten sind der häufigste Killer — Wann war Ihr letzter Herzcheck?",
      subheadline: "70% der Herzrhythmusstörungen zeigen keine Symptome. Unentdeckt können sie Schlaganfälle oder Herzversagen verursachen. Jetzt können Sie Ihr Herz sicher und einfach von zu Hause aus untersuchen lassen.",
      emotionalSubheadline: "Langlebigkeit bedeutet mehr Geburtstage — für Sie und für die Menschen, die Sie am meisten lieben. Beginnen Sie noch heute, Ihr Herz zu schützen."
    },
    variantB: {
      headline: "Länger leben. Intelligenter screenen. Von zu Hause aus.",
      subheadline: "Herkömmliche Herzmonitore sind unbequem und verpassen bis zu 91% der unregelmäßigen Rhythmen. SKIINs weiches Kleidungsstück überwacht kontinuierlich für 10 Tage — und erfasst, was andere verpassen.",
      emotionalSubheadline: "Fügen Sie Jahre zu Ihrem Leben hinzu und Leben zu Ihren Jahren. Komfortable Herzuntersuchung ist endlich da."
    },
    variantC: {
      headline: "Ihr Herz. Ihre Familie. Ihre Kontrolle.",
      subheadline: "Jede unentdeckte Herzrhythmusstörung ist ein Risiko für Sie — und eine Sorge für die Menschen, die Sie lieben. Übernehmen Sie die Kontrolle mit komfortabler, umfassender Herzuntersuchung von zu Hause aus.",
      emotionalSubheadline: "Denn Ihr Herz schlägt für mehr als nur Sie. Schützen Sie es für sich selbst und für die Menschen, die Sie brauchen."
    },
    // Gemeinsame CTAs für alle Varianten
    cta: {
      primary: "Starten Sie Ihre kostenlose Einschätzung",
      secondary: "Versicherungsdeckung prüfen",
      tertiary: "Fragen? Lesen Sie unsere FAQ →"
    },
    // Wertversprechen aktualisiert auf 10 Tage
    valueProps: {
      comfort: "Keine Kabel, keine Pflaster – 10 Tage komfortables Tragen",
      insurance: "Von der Grundversicherung abgedeckt",
      lifestyle: "Lifestyle-gerecht – arbeiten, duschen, schlafen"
    },
    // Legacy keys for compatibility
    title: "Kontinuierliche Herzüberwachung",
    titleHighlight: "Ohne Kompromisse beim Komfort",
    description: "SKIIN Smart Kleidung revolutioniert die Art und Weise, wie wir die Herzgesundheit überwachen und verwalten, und bietet EKG in klinischer Qualität ohne Kabel, Klebestoffe oder Unbehagen.",
    buttons: {
      forPatients: "Für Patienten",
      forPhysicians: "Für Ärzte"
    },
    certification: "Zertifiziertes Medizinprodukt, klinisch getestet und validiert",
    testimonial: {
      quote: "Endlich eine Herzüberwachung, die meine Patienten tatsächlich tragen wollen!",
      author: "Dr. Sarah Klein, Kardiologin"
    }
  },
  // v7.2 Evidence-based Statistics
  statistics: {
    title: "Klinische Evidenz zeigt, dass erweiterte Überwachung funktioniert",
    subtitle: "Stille Herzerkrankungen sind häufiger als Sie denken – und erweiterte Überwachung erfasst, was kürzere Tests verpassen.",
    cards: [
      {
        value: "70%",
        label: "der Vorhofflimmern-Episoden treten ohne Symptome auf",
        footnote: "Stilles Vorhofflimmern kann zu Schlaganfällen führen, wenn es unentdeckt bleibt"
      },
      {
        value: "20-30%",
        label: "der ischämischen Schlaganfälle werden auf Vorhofflimmern zurückgeführt",
        footnote: "Früherkennung kann lebensbedrohliche Ereignisse verhindern"
      },
      {
        value: "66% vs 9%",
        label: "Erkennungsrate mit erweiterter Überwachung vs. 24-Stunden-Holter",
        footnote: "10-Tage-Überwachung erfasst 7x mehr Arrhythmien"
      }
    ],
    footnote: "Klinische Evidenz zeigt, dass erweiterte Überwachung signifikant mehr Arrhythmien erkennt als traditionelle 24-Stunden-Tests",
    evidenceLink: "Klinische Evidenz ansehen"
  },
  // v7.2 Product Section - 8 Benefits
  productSection: {
    title: "Warum SKIIN bei der Herzüberwachung führt",
    subtitle: "Acht Wege, wie SKIIN die Herzgesundheitsüberwachung für bessere Ergebnisse transformiert",
    benefits: [
      {
        title: "Erweiterte Herzuntersuchung für tieferen Einblick",
        description: "Ersetzen Sie kurze 24-48-Stunden-Tests durch erweiterte Überwachung (typischerweise 10 Tage), um schwer fassbare Arrhythmien zu erfassen."
      },
      {
        title: "Verkürzte Wartezeiten & frühere Erkennung",
        description: "Schneller Versand und Same-Day-Setup bedeuten, dass Sie schnell mit der Überwachung beginnen."
      },
      {
        title: "Schnelle, nahtlose Überweisungen",
        description: "Unser digitaler Workflow verbindet Sie, Ihren Hausarzt und Spezialisten ohne komplizierte Logistik."
      },
      {
        title: "Komfortables textilbasiertes SKIIN-Band",
        description: "Ein weiches, klebefreies Band wird direkt zu Ihnen nach Hause geliefert."
      },
      {
        title: "KI-gestützte Präzision",
        description: "Daten werden von fortschrittlicher Software verarbeitet, die auf Millionen von EKGs trainiert wurde."
      },
      {
        title: "Schnelle Bearbeitungszeit",
        description: "Die meisten Ergebnisse werden innerhalb von 24-48 Stunden nach Studienabschluss zurückgegeben."
      },
      {
        title: "Bewährte Technologie",
        description: "Tausende von Studien wurden mit der SKIIN-Plattform abgeschlossen."
      },
      {
        title: "Health Canada lizenziert",
        description: "Zusätzlich zur MDR Klasse IIa Zertifizierung und Swissmedic-Registrierung."
      }
    ],
    closing: "Daten fließen sicher von der SKIIN-App zu unserer ISO/IEC 27001-zertifizierten Cloud."
  },
  // v7.2 Numbers Section - Key Metrics
  numbersSection: {
    title: "SKIIN in Zahlen",
    subtitle: "Bewährte Technologie liefert echte Ergebnisse für die Herzversorgung",
    metrics: [
      {
        value: "95%",
        label: "Erkennungsgenauigkeit",
        description: "Unsere KI-Algorithmen erkennen Arrhythmien mit klinischer Präzision"
      },
      {
        value: "10 Tage",
        label: "Kontinuierliche Überwachung",
        description: "Erweiterte Überwachung erfasst unregelmäßige Rhythmen, die 24-Stunden-Tests verpassen"
      },
      {
        value: "100%",
        label: "Versicherungsschutz",
        description: "Vollständig von der Schweizer Grundversicherung abgedeckt bei ärztlicher Verordnung"
      },
      {
        value: "24/7",
        label: "Echtzeit-Analyse",
        description: "Kontinuierliche Datenübertragung ermöglicht rechtzeitige Intervention bei Bedarf"
      }
    ]
  },
  // v7.2 Clinically Proven Technology Section
  clinicallyProvenTech: {
    title: "Klinisch bewiesene Technologie",
    subtitle: "Gestützt auf rigorose klinische Studien und von führenden Kardiologen vertraut",
    trustMarkers: [
      {
        title: "98,6% Genauigkeitsrate",
        description: "Klinische Validierung zeigt, dass SKIIN die Genauigkeit traditioneller Holter-Monitore erreicht"
      },
      {
        title: "Veröffentlichte Forschung",
        description: "Unsere Technologie wurde in mehreren begutachteten Studien validiert"
      },
      {
        title: "MDR Klasse IIa & CE zertifiziert",
        description: "SKIIN erfüllt die höchsten europäischen Medizinprodukte-Standards"
      },
      {
        title: "Von Kardiologen empfohlen",
        description: "Empfohlen von führenden Schweizer Kardiologen und Elektrophysiologen"
      }
    ],
    cta: "Klinische Evidenz ansehen"
  },
  // v7.2 Care360 Section - Technology Overview
  care360Section: {
    title: "Revolutionäre Myant Care360 Technologie",
    subtitle: "Erleben Sie die Zukunft der Herzgesundheitsüberwachung",
    description: "Unser bahnbrechendes 360°-Überwachungssystem kombiniert kontinuierliche Datenerfassung mit KI-gestützter Analyse.",
    features: [
      "10-tägige kontinuierliche Überwachung mit klinischem EKG",
      "Echtzeit-KI-Analyse von Herzrhythmusmustern",
      "Schweizer Kardiologen-Validierung aller Befunde",
      "Medizinische Genauigkeit in einem komfortablen Kleidungsstück",
      "Nahtlose Datenübertragung an Ihr Gesundheitsteam",
      "Umfassende Berichte mit umsetzbaren Erkenntnissen",
      "Integration in bestehende Gesundheitsworkflows"
    ],
    cta: "Mehr über unsere Technologie erfahren"
  },
  // v7.2 Tech Carousel - Data Flow
  techCarousel: {
    title: "Vom Sensor zur Lösung",
    subtitle: "Sehen Sie, wie SKIIN Ihre Herzdaten in umsetzbare Erkenntnisse verwandelt",
    steps: [
      {
        title: "Kontinuierliche Erfassung",
        description: "In weiches Textil eingebettete medizinische EKG-Sensoren überwachen kontinuierlich Ihren Herzrhythmus",
        icon: "sensor"
      },
      {
        title: "SKIIN App",
        description: "Daten übertragen sich sicher über Bluetooth auf Ihr Smartphone zur Echtzeitüberwachung",
        icon: "app"
      },
      {
        title: "Sichere Cloud",
        description: "ISO/IEC 27001-zertifizierte Infrastruktur gewährleistet, dass Ihre Daten geschützt und konform sind",
        icon: "cloud"
      },
      {
        title: "KI-Analyse",
        description: "Fortschrittliche Algorithmen, die auf Millionen von EKGs trainiert wurden, erkennen Unregelmäßigkeiten mit 95% Genauigkeit",
        icon: "ai"
      },
      {
        title: "Kardiologen-Review",
        description: "Schweizer Kardiologen validieren Befunde und erstellen personalisierte Empfehlungen",
        icon: "report"
      }
    ]
  },
  // Home-2 Spezifischer Inhalt
  home2: {
    hero: {
      badge: "Zertifiziert vom Bundesamt für Gesundheit (BAG)",
      title: "Länger jünger leben.",
      subtitle: "Revolutionäre Herzgesundheit durch KI-gestützte 10-Tage-Überwachung",
      cta: "Jetzt beginnen",
      bookAssessment: "Beratung buchen"
    },
    stats: {
      title: "Warum Früherkennung entscheidend ist",
      subtitle: "Herzkrankheiten sind weltweit die häufigste Todesursache. Früherkennung rettet Leben.",
      items: [
        { number: "70%", text: "der Herzrhythmusstörungen bleiben unbemerkt" },
        { number: "30%", text: "der Menschen mit Vorhofflimmern erleiden einen Schlaganfall" },
        { number: "50%", text: "mehr Herzrhythmusstörungen durch 10-Tage-Monitoring erkannt" }
      ]
    },
    clinicalEvidence: {
      title: "Klinisch bewiesene Technologie",
      subtitle: "Gestützt auf rigorose klinische Studien und begutachtete Forschung",
      items: [
        {
          title: "98,6% Genauigkeitsrate",
          description: "Klinische Validierung zeigt, dass SKIIN die Genauigkeit traditioneller Holter-Monitore erreicht bei überlegenem Komfort"
        },
        {
          title: "Veröffentlichte Forschung",
          description: "Unsere Technologie wurde in mehreren begutachteten Studien und klinischen Versuchen validiert"
        },
        {
          title: "FDA & CE Zertifiziert",
          description: "SKIIN erfüllt die höchsten Medizingeräte-Standards für Sicherheit und Wirksamkeit"
        },
        {
          title: "Von Kardiologen empfohlen",
          description: "Empfohlen von führenden Schweizer Kardiologen und Elektrophysiologen"
        }
      ]
    },
    features: {
      title: "KI-gemessen, von Kardiologen ausgewertet",
      subtitle: "Vollständig von der Schweizer Krankenversicherung abgedeckt",
      items: [
        {
          title: "Komfortables Monitoring",
          description: "Führen Sie ein Holter-EKG bequem von zu Hause aus mit unserem SKIIN-Gerät durch"
        },
        {
          title: "KI-Analyse",
          description: "Fortschrittliche KI-Algorithmen analysieren kontinuierlich Ihre Herzrhythmusdaten"
        },
        {
          title: "Kardiologie-Expertise",
          description: "Schweizer Kardiologen bewerten Ihre Ergebnisse und erstellen detaillierte Berichte"
        },
        {
          title: "Versicherungsschutz",
          description: "Anerkannt und vollständig von Schweizer Versicherungsanbietern abgedeckt"
        }
      ]
    },
    technology: {
      title: "Revolutionäre Myant Care360 Technologie",
      subtitle: "Erleben Sie die Zukunft der Herzgesundheitsüberwachung",
      description: "Unser bahnbrechendes 360°-Überwachungssystem kombiniert kontinuierliche Datenerfassung mit KI-gestützter Analyse für beispiellose Herzpflege.",
      features: [
        "10-tägige kontinuierliche Überwachung",
        "Echtzeit-KI-Analyse",
        "Schweizer Kardiologen-Validierung",
        "Medizinische Genauigkeit",
        "Nahtlose Datenübertragung"
      ]
    },
    patientJourney: {
      title: "Ihre Herzgesundheits-Reise",
      subtitle: "Von der Bewertung bis zur Beruhigung in 5 einfachen Schritten",
      steps: [
        { 
          number: "1", 
          title: "Bewertung abschließen", 
          description: "Füllen Sie unser umfassendes Selbstauskunfts-Formular aus, um zu bestimmen, ob SKIIN für Sie geeignet ist",
          duration: "5 Minuten"
        },
        { 
          number: "2", 
          title: "Gerät erhalten", 
          description: "Wir liefern das SKIIN Holter-EKG-Kit direkt vor Ihre Haustür mit detaillierten Anweisungen",
          duration: "24-48 Stunden"
        },
        { 
          number: "3", 
          title: "Monitoring beginnen", 
          description: "Tragen Sie das komfortable SKIIN-Gerät 14 Tage lang, während Sie Ihr normales Leben führen",
          duration: "14 Tage"
        },
        { 
          number: "4", 
          title: "Datenanalyse", 
          description: "Unsere KI-Systeme und Schweizer Kardiologen analysieren Ihre umfassenden Herzdaten",
          duration: "3-5 Tage"
        },
        { 
          number: "5", 
          title: "Ergebnisse erhalten", 
          description: "Erhalten Sie einen detaillierten Herzgesundheitsbericht mit personalisierten Empfehlungen",
          duration: "Am selben Tag"
        }
      ]
    },
    insurance: {
      title: "Umfassende Versicherungsabdeckung",
      subtitle: "SKIIN wird von der Schweizer Krankenversicherung anerkannt und abgedeckt, wenn medizinisch verschrieben",
      description: "Navigieren Sie selbstbewusst durch das Schweizer Gesundheitssystem. Unser Team hilft dabei, eine ordnungsgemäße Abdeckung für Ihre Herzüberwachungsbedürfnisse sicherzustellen.",
      benefits: [
        "Von der Grundversicherung abgedeckt, wenn verschrieben",
        "Keine Eigenkosten für qualifizierte Patienten",
        "Erstattungsunterstützung inbegriffen",
        "Direktabrechnung verfügbar"
      ]
    },
    riskAssessment: {
      title: "Kennen Sie Ihr Herzrisiko",
      subtitle: "Das Verstehen Ihres kardiovaskulären Risikos kann Ihr Leben retten",
      risks: [
        {
          title: "Stilles Vorhofflimmern",
          description: "Oft asymptomatisch, aber erhöht das Schlaganfallrisiko um das 5-fache",
          prevalence: "Betrifft 1 von 4 Erwachsenen über 40"
        },
        {
          title: "Herzrhythmusstörungen",
          description: "Unregelmäßige Herzschläge, die lebensbedrohlich sein können, wenn sie unentdeckt bleiben",
          prevalence: "2,7 Millionen Amerikaner leben mit Vorhofflimmern"
        },
        {
          title: "Herzkrankheitsprävention",
          description: "Früherkennung ermöglicht präventive Behandlung und Lebensstiländerungen",
          prevalence: "Weltweit häufigste Todesursache"
        }
      ]
    },
    cta: {
      title: "Beginnen Sie noch heute Ihre Herzgesundheits-Reise",
      subtitle: "Schließen Sie sich Tausenden von Schweizer Patienten an, die bereits von fortgeschrittener Herzüberwachung profitieren",
      description: "Übernehmen Sie die Kontrolle über Ihre Herzgesundheit mit der komfortabelsten und umfassendsten verfügbaren Überwachungslösung.",
      primaryButton: "Jetzt beginnen",
      secondaryButton: "Kostenlose Beratung buchen"
    }
  },
  features: {
    title: "Ein neuer Standard in der Herzüberwachung",
    subtitle: "SKIIN kombiniert bahnbrechende Textiltechnologie mit klinischem Fachwissen, um eine unvergleichliche Herzversorgung zu bieten",
    items: [
      {
        title: "Kontinuierliches EKG",
        description: "EKG-Überwachung in klinischer Qualität für bis zu 14 Tage ohne Unterbrechung"
      },
      {
        title: "Komfortables Design",
        description: "Weicher, atmungsaktiver Stoff mit unsichtbaren Sensoren – keine Kabel oder Klebestoffe"
      },
      {
        title: "Arrhythmie-Erkennung",
        description: "Fortschrittliche Algorithmen zur Erkennung und Warnung vor unregelmäßigen Herzschlägen"
      },
      {
        title: "Echtzeit-Analyse",
        description: "Sofortige Datenübertragung an Ärzte für rechtzeitige Intervention"
      },
      {
        title: "Alltagstauglichkeit",
        description: "Waschbar, wiederverwendbar und für den Alltag konzipiert"
      },
      {
        title: "Arztverbindung",
        description: "Nahtlos in klinische Arbeitsabläufe und EHR-Systeme integriert"
      }
    ]
  },
  howItWorks: {
    tagline: "Einfacher Prozess",
    title: "Wie SKIIN funktioniert",
    subtitle: "So konzipiert, dass es sich nahtlos in Ihr Leben einfügt und gleichzeitig eine Herzüberwachung in klinischer Qualität bietet",
    steps: [
      {
        number: "01",
        title: "Verschreibung",
        description: "Ihr Arzt verschreibt SKIIN zur kontinuierlichen Herzüberwachung"
      },
      {
        number: "02",
        title: "Lieferung",
        description: "Erhalten Sie Ihr SKIIN Smart Kleidungs-Kit direkt bei Ihnen zu Hause"
      },
      {
        number: "03",
        title: "Tragen",
        description: "Tragen Sie einfach die bequeme Kleidung als Teil Ihrer täglichen Routine"
      },
      {
        number: "04",
        title: "Überwachen",
        description: "Ihr Herzrhythmus wird kontinuierlich überwacht und analysiert"
      },
      {
        number: "05",
        title: "Verbinden",
        description: "Daten werden in Echtzeit sicher mit Ihrem Arzt geteilt"
      },
      {
        number: "06",
        title: "Ergebnisse",
        description: "Erhalten Sie personalisierte Einblicke und Behandlungsempfehlungen"
      }
    ],
    cta: "Mehr über den Prozess erfahren"
  },
  testimonials: {
    tagline: "Erfahrungsberichte",
    title: "Vertrauen von Ärzten und Patienten",
    subtitle: "Hören Sie von Gesundheitsdienstleistern und Patienten, die die Vorteile von SKIIN erlebt haben",
    items: [
      {
        quote: "SKIIN hat die Art und Weise verändert, wie ich meine Patienten mit Arrhythmien überwache. Die kontinuierlichen Daten geben mir Vertrauen in meine Diagnosen, und die Patienten tragen es tatsächlich weiter.",
        name: "Dr. Michael Rodriguez",
        title: "Kardiologe, Schweizer Herzzentrum"
      },
      {
        quote: "Als jemand, der regelmäßige Herzüberwachung benötigt, hat SKIIN mein Leben verändert. Ich vergesse, dass ich ein medizinisches Gerät trage - es ist wie normale Unterwäsche, hält mich aber mit meinem Arzt verbunden.",
        name: "Maria Schmidt",
        title: "Patientin mit Vorhofflimmern"
      },
      {
        quote: "Die Qualität der Daten, die wir von SKIIN-Kleidungsstücken erhalten, ist außergewöhnlich. Die kontinuierliche Überwachung hat uns geholfen, Muster zu erkennen, die bei herkömmlicher Holter-Überwachung übersehen worden wären.",
        name: "Dr. Sophia Levine",
        title: "Elektrophysiologin"
      }
    ]
  },
  comparison: {
    tagline: "Vergleich",
    title: "Wie SKIIN sich vergleicht",
    subtitle: "Sehen Sie, wie SKIIN Smart Kleidung im Vergleich zu herkömmlichen Herzüberwachungslösungen abschneidet",
    columns: {
      feature: "Funktion",
      skiin: "SKIIN",
      skiinSubtitle: "Smart Kleidung",
      holter: "Holter Monitor",
      holterSubtitle: "Traditionell",
      event: "Event Monitor",
      eventSubtitle: "Patch-basiert"
    },
    features: [
      "Kontinuierliche Überwachung",
      "14-Tage-Tragezeit",
      "Keine Klebestoffe oder Kabel",
      "Waschbar & Wiederverwendbar",
      "Echtzeit-Datenübertragung",
      "KI-gestützte Arrhythmie-Erkennung",
      "Patientenkomfort für langfristiges Tragen"
    ]
  },
  cta: {
    title: "Bereit, die Herzüberwachung zu transformieren?",
    description: "Ob Sie ein Gesundheitsdienstleister sind, der eine bessere Herzversorgung anbieten möchte, oder ein Patient, der eine komfortablere Überwachungslösung sucht, SKIIN ist für Sie bereit.",
    buttons: {
      requestInfo: "Informationen anfordern",
      scheduleDemo: "Demo vereinbaren"
    },
    statistic: "97% Patientenzufriedenheitsrate"
  },
  problemSolution: {
    title: "Die stille Triade: Drei versteckte Bedrohungen für Ihr Herz",
    problem: {
      title: "Das Problem",
      description: "Viele Herzerkrankungen verstecken sich leise. Bis zu 70% der Arrhythmien haben keine Symptome. Ein einzelner 24-Stunden-Test bietet nur eine kurze Momentaufnahme und lässt Sie warten und sich sorgen. Traditionelle Monitore sind unbequem und stören das tägliche Leben."
    },
    solution: {
      title: "Die Lösung",
      description: "SKIIN bietet kontinuierliche Herzgesundheitsüberwachung von zu Hause aus. Unsere 10-Tage-Herzuntersuchung erfasst unregelmäßige Rhythmen, die 24-Stunden-Tests verpassen. Das weiche, kabellose Kleidungsstück fühlt sich wie eine zweite Haut an – wasserabweisend, waschbar und für Duschen abnehmbar."
    },
    silentTriad: {
      title: "Die stille Triade",
      items: [
        {
          title: "Arrhythmie-Erkennung",
          icon: "ecg",
          description: "Kontinuierliche EKG-Überwachung erfasst unregelmäßige Herzrhythmen, die sporadisch auftreten"
        },
        {
          title: "Blutdrucküberwachung",
          icon: "blood-pressure",
          description: "ABPM enthüllt maskierte Hypertonie und gefährliche nächtliche Muster"
        },
        {
          title: "Schlafanalyse",
          icon: "sleep",
          description: "Identifiziert Schlafapnoe, die das Arrhythmierisiko von 53% auf 92% erhöht"
        }
      ]
    },
    cta: "Starten Sie Ihre kostenlose Einschätzung",
    problems: {
      title: "Probleme mit traditionellem Holter",
      items: [
        {
          title: "Unbequeme Kabel und Pflaster",
          description: "Sperrige Kabel und irritierende Klebepflaster stören das tägliche Leben"
        },
        {
          title: "Kurze Überwachungsdauer", 
          description: "24-48 Stunden verpassen oft intermittierende Arrhythmien"
        },
        {
          title: "Unterbrechungen des Lebensstils",
          description: "Kein Duschen, Sport oder normale Aktivitäten möglich"
        }
      ]
    },
    solutions: {
      title: "SKIIN Lösungen",
      items: [
        {
          title: "Textilkomfort ohne Kabel",
          description: "Weiches Stoffband mit unsichtbaren Sensoren - diskret und komfortabel"
        },
        {
          title: "14-tägige kontinuierliche Überwachung",
          description: "Höhere Erkennungsrate für seltene Herzrhythmusstörungen"
        },
        {
          title: "Normal weiterleben",
          description: "Arbeiten, schlafen, duschen - SKIIN passt sich Ihrem Leben an"
        }
      ]
    }
  },
  insurance: {
    title: "Abdeckung durch Ihre Krankenversicherung",
    subtitle: "SKIIN wird von der Grundversicherung übernommen, wenn es medizinisch verschrieben wird",
    models: [
      {
        title: "Hausarztmodell",
        description: "Konsultieren Sie Ihren Hausarzt für eine SKIIN-Überweisung. Bei medizinischer Verschreibung wird es von der Grundversicherung übernommen.",
        icon: "👨‍⚕️"
      },
      {
        title: "HMO-Modell", 
        description: "Besuchen Sie zuerst Ihre HMO-Praxis zur Evaluation. Bei Genehmigung wird SKIIN vollständig übernommen.",
        icon: "🏥"
      },
      {
        title: "Telmed-Modell",
        description: "Rufen Sie zuerst Ihre Telemedizin-Hotline an. Nach Genehmigung durch den Tele-Arzt wird SKIIN übernommen.",
        icon: "📞"
      },
      {
        title: "Selbstzahler",
        description: "Für präventive Vorsorgeuntersuchungen ohne Symptome. Transparente Preisgestaltung verfügbar.",
        icon: "💳"
      }
    ],
    cta: "Abdeckung prüfen"
  },
  faq: {
    tagline: "FAQ",
    title: "Häufig gestellte Fragen",
    subtitle: "Finden Sie Antworten auf häufig gestellte Fragen zu SKIIN Smart Kleidung",
    items: [
      {
        question: "Wie genau sind die EKG-Daten von SKIIN?",
        answer: "SKIIN Smart Kleidung liefert EKG-Daten in klinischer Qualität mit einer Genauigkeit, die mit herkömmlichen Holter-Monitoren vergleichbar ist. Unsere Technologie wurde in klinischen Studien validiert und erfüllt die Anforderungen an Medizinprodukte."
      },
      {
        question: "Wie lange können Patienten SKIIN-Kleidung tragen?",
        answer: "SKIIN Smart Kleidung kann bis zu 14 aufeinanderfolgende Tage getragen werden und bietet eine erweiterte Herzüberwachung. Die Kleidungsstücke sind bequem genug für Tag- und Nachtgebrauch und ermöglichen eine wirklich kontinuierliche Überwachung."
      },
      {
        question: "Werden SKIIN-Kleidungsstücke von der Versicherung übernommen?",
        answer: "Viele Versicherungsanbieter und Gesundheitssysteme decken SKIIN als Herzüberwachungslösung ab. Die Abdeckung variiert je nach Land und Anbieter. Wir können Ihnen helfen, die Abdeckung für Ihre spezifische Situation über unser Erstattungsteam zu überprüfen."
      },
      {
        question: "Wie erhalten Patienten SKIIN Smart Kleidung?",
        answer: "SKIIN Smart Kleidung erfordert ein Rezept von einem Gesundheitsdienstleister. Nach der Verschreibung wird das SKIIN-Kit direkt zum Patienten nach Hause geliefert, mit einfachen Anweisungen zur Verwendung und Pflege."
      },
      {
        question: "Kann SKIIN alle Arten von Arrhythmien erkennen?",
        answer: "SKIIN ist darauf ausgelegt, eine breite Palette von Herzrhythmusstörungen zu erkennen, einschließlich Vorhofflimmern, Bradykardie, Tachykardie und andere. Unsere KI-Algorithmen analysieren kontinuierlich die EKG-Daten, um unregelmäßige Muster zu identifizieren und Gesundheitsdienstleister bei Bedarf zu alarmieren."
      },
      {
        question: "Wie werden Patientendaten geschützt?",
        answer: "SKIIN nimmt die Datensicherheit ernst. Alle Patientendaten werden sowohl während der Übertragung als auch im Ruhezustand verschlüsselt. Unsere Systeme entsprechen der DSGVO, HIPAA und anderen regionalen Datenschutzbestimmungen, um die Privatsphäre der Patienten zu gewährleisten."
      }
    ]
  },
  contact: {
    tagline: "Kontakt aufnehmen",
    title: "Kontaktieren Sie uns",
    description: "Haben Sie Fragen zu SKIIN oder möchten Sie erfahren, wie es Ihnen oder Ihrer Praxis nutzen kann? Füllen Sie das Formular aus und unser Team wird sich in Kürze bei Ihnen melden.",
    contactInfo: {
      email: {
        title: "E-Mail",
        content: "info@myant-health.com"
      },
      phone: {
        title: "Telefon",
        content: "+41 44 123 45 67"
      },
      address: {
        title: "Adresse",
        content: "Bahnhofstrasse 100, 8001 Zürich, Schweiz"
      }
    },
    form: {
      name: "Name",
      namePlaceholder: "Ihr vollständiger Name",
      email: "E-Mail",
      emailPlaceholder: "ihre.email@beispiel.com",
      phone: "Telefonnummer",
      phonePlaceholder: "+41 XX XXX XX XX",
      role: "Ich bin ein(e):",
      rolePlaceholder: "Wählen Sie Ihre Rolle",
      roleOptions: {
        patient: "Patient",
        physician: "Arzt",
        healthcareAdmin: "Gesundheitsadministrator",
        other: "Andere"
      },
      message: "Nachricht",
      messagePlaceholder: "Wie können wir Ihnen helfen?",
      consent: "Ich stimme zu, dass SKIIN meine Daten verarbeitet, um mich bezüglich meiner Anfrage zu kontaktieren. Siehe unsere",
      privacyPolicy: "Datenschutzrichtlinie",
      submit: "Nachricht senden",
      submitting: "Wird gesendet...",
      successTitle: "Anfrage eingereicht",
      successDescription: "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
    }
  },
  footer: {
    tagline: "Bahnbrechende kleidungsbasierte kontinuierliche Herzüberwachung für bessere Gesundheitsergebnisse.",
    sections: {
      patients: {
        title: "Für Patienten",
        links: {
          main: "SKIIN Smart Kleidung",
          testimonials: "Patientenberichte",
          faq: "FAQ",
          support: "Support erhalten"
        }
      },
      physicians: {
        title: "Für Ärzte",
        links: {
          main: "Klinische Lösungen",
          research: "Klinische Studien",
          resources: "Ressourcen",
          support: "Gesundheitsdienstleister-Support",
          requestDemo: "Demo anfragen"
        }
      },
      company: {
        title: "Unternehmen",
        links: {
          about: "Über uns",
          team: "Unser Team",
          careers: "Karriere",
          contact: "Kontakt",
          support: "Technischer Support"
        }
      }
    },
    legal: {
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
      rights: "Alle Rechte vorbehalten."
    }
  }
};
