
export const homeTranslations = {
  hero: {
    badge: "Certifié MDR Classe IIa • Enregistré Swissmedic",
    // Copy Variants for Testing
    variants: {
      // Default - New user-specified copy
      default: {
        badge: "Votre santé compte — pour plus que vous seul",
        headline: "La plupart des problèmes cardiaques sont silencieux",
        subheadline: "Dépistez plus intelligemment, vivez plus longtemps",
        aboveCta: "Détectez les problèmes cardiaques silencieux avant qu'ils ne volent des moments précieux. Protégez-vous et ceux qui vous aiment.",
        eligibilityText: "Prenez 5 minutes pour vérifier votre éligibilité",
        ctaPrimary: "Commencez votre bilan cardiaque gratuit",
        ctaSecondary: "Des questions ? Consultez notre FAQ →"
      },
      // Original - Legacy dual-split copy
      original: {
        badge: "Dispositif Médical Certifié • Technologie Myant",
        headline: "Vivez plus jeune, plus longtemps.",
        subheadline: "Dépistez plus intelligemment, depuis chez vous",
        aboveCta: "Détectez les problèmes cardiaques silencieux avant qu'ils ne volent des moments précieux. Protégez-vous et ceux qui vous aiment.",
        eligibilityText: "Prenez 5 minutes pour vérifier votre éligibilité",
        ctaPrimary: "Commencez votre bilan cardiaque gratuit",
        ctaSecondary: "Des questions ? Consultez notre FAQ →"
      },
      // Legacy variants for backward compatibility
      variantA: {
        headline: "Les Maladies Cardiaques Sont la Cause de Décès #1 — Quand Avez-Vous Fait Votre Dernier Contrôle Cardiaque ?",
        subheadline: "70% des arythmies ne montrent aucun symptôme. Non détectées, elles peuvent causer des AVC ou une insuffisance cardiaque. Maintenant vous pouvez examiner votre cœur — en toute sécurité, facilement, depuis chez vous.",
        emotionalSubheadline: "La longévité signifie plus d'anniversaires — pour vous, et pour ceux qui vous aiment le plus. Commencez à protéger votre cœur dès aujourd'hui."
      },
      variantB: {
        headline: "Vivez Plus Longtemps. Dépistez Plus Intelligemment. Depuis Chez Vous.",
        subheadline: "Les moniteurs cardiaques traditionnels sont inconfortables et ratent jusqu'à 91% des rythmes irréguliers. Le vêtement souple de SKIIN surveille en continu pendant 10 jours — capturant ce que les autres ratent.",
        emotionalSubheadline: "Ajoutez des années à votre vie, et de la vie à vos années. Le dépistage cardiaque confortable est enfin là."
      },
      variantC: {
        headline: "Votre Cœur. Votre Famille. Votre Contrôle.",
        subheadline: "Chaque arythmie non détectée est un risque pour vous — et une inquiétude pour ceux qui vous aiment. Prenez le contrôle avec un dépistage cardiaque confortable et complet depuis chez vous.",
        emotionalSubheadline: "Parce que votre cœur bat pour plus que vous seul. Protégez-le pour vous-même et pour ceux qui ont besoin de vous."
      }
    },
    // Variantes de test A/B for backward compatibility
    variantA: {
      headline: "Les Maladies Cardiaques Sont la Cause de Décès #1 — Quand Avez-Vous Fait Votre Dernier Contrôle Cardiaque ?",
      subheadline: "70% des arythmies ne montrent aucun symptôme. Non détectées, elles peuvent causer des AVC ou une insuffisance cardiaque. Maintenant vous pouvez examiner votre cœur — en toute sécurité, facilement, depuis chez vous.",
      emotionalSubheadline: "La longévité signifie plus d'anniversaires — pour vous, et pour ceux qui vous aiment le plus. Commencez à protéger votre cœur dès aujourd'hui."
    },
    variantB: {
      headline: "Vivez Plus Longtemps. Dépistez Plus Intelligemment. Depuis Chez Vous.",
      subheadline: "Les moniteurs cardiaques traditionnels sont inconfortables et ratent jusqu'à 91% des rythmes irréguliers. Le vêtement souple de SKIIN surveille en continu pendant 10 jours — capturant ce que les autres ratent.",
      emotionalSubheadline: "Ajoutez des années à votre vie, et de la vie à vos années. Le dépistage cardiaque confortable est enfin là."
    },
    variantC: {
      headline: "Votre Cœur. Votre Famille. Votre Contrôle.",
      subheadline: "Chaque arythmie non détectée est un risque pour vous — et une inquiétude pour ceux qui vous aiment. Prenez le contrôle avec un dépistage cardiaque confortable et complet depuis chez vous.",
      emotionalSubheadline: "Parce que votre cœur bat pour plus que vous seul. Protégez-le pour vous-même et pour ceux qui ont besoin de vous."
    },
    // CTAs communs pour toutes les variantes
    cta: {
      primary: "Commencez votre évaluation gratuite",
      secondary: "Vérifiez votre couverture d'assurance",
      tertiary: "Des questions ? Consultez notre FAQ →"
    },
    // Propositions de valeur mises à jour à 10 jours
    valueProps: {
      comfort: "Pas de fils, pas de patchs – 10 jours de port confortable",
      insurance: "Couvert par l'assurance de base",
      lifestyle: "Compatible avec le style de vie – travaillez, douchez-vous, dormez"
    },
    // Clés héritées pour la compatibilité
    title: "Surveillance Cardiaque Continue",
    titleHighlight: "Sans Compromettre le Confort",
    description: "Les vêtements intelligents SKIIN révolutionnent la façon dont nous surveillons et gérons la santé cardiaque, en fournissant un ECG de qualité clinique sans fils, adhésifs ou inconfort.",
    buttons: {
      forPatients: "Pour les Patients",
      forPhysicians: "Pour les Médecins"
    },
    certification: "Dispositif médical certifié, testé et validé cliniquement",
    testimonial: {
      quote: "Enfin, une surveillance cardiaque que mes patients veulent vraiment porter !",
      author: "Dr. Sarah Klein, Cardiologue"
    }
  },
  // v7.2 Evidence-based Statistics
  statistics: {
    title: "Les preuves cliniques montrent que la surveillance prolongée fonctionne",
    subtitle: "Les affections cardiaques silencieuses sont plus courantes que vous ne le pensez - et la surveillance prolongée détecte ce que les tests plus courts manquent.",
    cards: [
      {
        value: "70%",
        label: "des épisodes de fibrillation auriculaire surviennent sans symptômes",
        footnote: "La FA silencieuse peut entraîner des AVC si elle n'est pas détectée"
      },
      {
        value: "20-30%",
        label: "des AVC ischémiques sont attribués à la fibrillation auriculaire",
        footnote: "La détection précoce peut prévenir des événements mortels"
      },
      {
        value: "66% vs 9%",
        label: "Taux de détection avec surveillance prolongée vs Holter 24 heures",
        footnote: "La surveillance de 10 jours détecte 7x plus d'arythmies"
      }
    ],
    footnote: "Les preuves cliniques montrent que la surveillance prolongée détecte significativement plus d'arythmies que les tests traditionnels de 24 heures",
    evidenceLink: "Voir les preuves cliniques"
  },
  // v7.2 Product Section - 8 Benefits
  productSection: {
    title: "Pourquoi SKIIN est leader en surveillance cardiaque",
    subtitle: "Huit façons dont SKIIN transforme la surveillance de la santé cardiaque pour de meilleurs résultats",
    benefits: [
      {
        title: "Dépistage cardiaque prolongé pour une vision approfondie",
        description: "Remplacez les tests courts de 24-48 heures par une surveillance prolongée (généralement 10 jours) pour détecter les arythmies insaisissables."
      },
      {
        title: "Temps d'attente réduits et détection précoce",
        description: "Expédition rapide et configuration le jour même signifient que vous commencez rapidement la surveillance."
      },
      {
        title: "Références rapides et fluides",
        description: "Notre flux de travail numérique vous connecte, vous, votre médecin généraliste et les spécialistes sans logistique compliquée."
      },
      {
        title: "Bande textile SKIIN confortable",
        description: "Une bande douce et sans adhésif est livrée directement à votre domicile."
      },
      {
        title: "Précision alimentée par l'IA",
        description: "Les données sont traitées par un logiciel avancé formé sur des millions d'ECG."
      },
      {
        title: "Délai de traitement rapide",
        description: "La plupart des résultats sont retournés dans les 24-48 heures après la fin de l'étude."
      },
      {
        title: "Technologie éprouvée",
        description: "Des milliers d'études ont été réalisées en utilisant la plateforme SKIIN."
      },
      {
        title: "Licencié par Santé Canada",
        description: "En plus de la certification MDR Classe IIa et de l'enregistrement Swissmedic."
      }
    ],
    closing: "Les données circulent en toute sécurité de l'application SKIIN vers notre cloud certifié ISO/IEC 27001."
  },
  // v7.2 Numbers Section - Key Metrics
  numbersSection: {
    title: "SKIIN en chiffres",
    subtitle: "Technologie éprouvée offrant des résultats réels pour les soins cardiaques",
    metrics: [
      {
        value: "95%",
        label: "Précision de détection",
        description: "Nos algorithmes IA détectent les arythmies avec une précision clinique"
      },
      {
        value: "10 jours",
        label: "Surveillance continue",
        description: "La surveillance prolongée détecte les rythmes irréguliers que les tests de 24 heures manquent"
      },
      {
        value: "100%",
        label: "Couverture d'assurance",
        description: "Entièrement couvert par l'assurance de base suisse sur prescription médicale"
      },
      {
        value: "24/7",
        label: "Analyse en temps réel",
        description: "La transmission continue des données permet une intervention rapide si nécessaire"
      }
    ]
  },
  // v7.2 Clinically Proven Technology Section
  clinicallyProvenTech: {
    title: "Technologie cliniquement prouvée",
    subtitle: "Soutenue par des études cliniques rigoureuses et approuvée par les principaux cardiologues",
    trustMarkers: [
      {
        title: "Taux de précision de 98,6%",
        description: "La validation clinique montre que SKIIN égale la précision du moniteur Holter traditionnel"
      },
      {
        title: "Recherche publiée",
        description: "Notre technologie a été validée dans plusieurs études évaluées par des pairs"
      },
      {
        title: "Certifié MDR Classe IIa et CE",
        description: "SKIIN répond aux normes européennes les plus élevées pour les dispositifs médicaux"
      },
      {
        title: "Approuvé par les cardiologues",
        description: "Recommandé par les principaux cardiologues et électrophysiologistes suisses"
      }
    ],
    cta: "Voir les preuves cliniques"
  },
  // v7.2 Care360 Section - Technology Overview
  care360Section: {
    title: "Technologie révolutionnaire Myant Care360",
    subtitle: "Découvrez l'avenir de la surveillance de la santé cardiaque",
    description: "Notre système de surveillance 360° révolutionnaire combine la capture continue de données avec l'analyse alimentée par l'IA.",
    features: [
      "Surveillance continue de 10 jours avec ECG de qualité clinique",
      "Analyse IA en temps réel des modèles de rythme cardiaque",
      "Validation par des cardiologues suisses de toutes les découvertes",
      "Précision de qualité médicale dans un vêtement confortable",
      "Transmission transparente des données à votre équipe de soins",
      "Rapports complets avec des informations exploitables",
      "Intégration avec les flux de travail de santé existants"
    ],
    cta: "En savoir plus sur notre technologie"
  },
  // v7.2 Tech Carousel - Data Flow
  techCarousel: {
    title: "Du capteur à la solution",
    subtitle: "Découvrez comment SKIIN transforme vos données cardiaques en informations exploitables",
    steps: [
      {
        title: "Détection continue",
        description: "Les capteurs ECG de qualité médicale intégrés dans un textile doux surveillent continuellement votre rythme cardiaque",
        icon: "sensor"
      },
      {
        title: "Application SKIIN",
        description: "Les données sont transmises en toute sécurité via Bluetooth vers votre smartphone pour une surveillance en temps réel",
        icon: "app"
      },
      {
        title: "Cloud sécurisé",
        description: "L'infrastructure certifiée ISO/IEC 27001 garantit que vos données sont protégées et conformes",
        icon: "cloud"
      },
      {
        title: "Analyse IA",
        description: "Des algorithmes avancés formés sur des millions d'ECG détectent les irrégularités avec 95% de précision",
        icon: "ai"
      },
      {
        title: "Revue par cardiologue",
        description: "Les cardiologues suisses valident les résultats et créent des recommandations personnalisées",
        icon: "report"
      }
    ]
  },
  // Contenu spécifique à Home-2
  home2: {
    hero: {
      badge: "Certifié par l'Office fédéral de la santé publique (OFSP)",
      title: "Vivre plus longtemps, plus jeune.",
      subtitle: "Santé cardiaque révolutionnaire grâce à la surveillance IA de 10 jours",
      cta: "Commencer maintenant",
      bookAssessment: "Réserver une consultation"
    },
    stats: {
      title: "Pourquoi la détection précoce est cruciale",
      subtitle: "Les maladies cardiaques sont la première cause de décès dans le monde. La détection précoce sauve des vies.",
      items: [
        { number: "70%", text: "des troubles du rythme cardiaque passent inaperçus" },
        { number: "30%", text: "des personnes avec fibrillation auriculaire subissent un AVC" },
        { number: "50%", text: "plus de troubles détectés avec surveillance 10 jours" }
      ]
    },
    clinicalEvidence: {
      title: "Technologie cliniquement prouvée",
      subtitle: "Soutenue par des études cliniques rigoureuses et des recherches évaluées par les pairs",
      items: [
        {
          title: "98,6% de taux de précision",
          description: "La validation clinique montre que SKIIN égale la précision des moniteurs Holter traditionnels tout en offrant un confort supérieur"
        },
        {
          title: "Recherche publiée",
          description: "Notre technologie a été validée dans plusieurs études évaluées par les pairs et essais cliniques"
        },
        {
          title: "Certifié FDA & CE",
          description: "SKIIN répond aux plus hauts standards de dispositifs médicaux pour la sécurité et l'efficacité"
        },
        {
          title: "Approuvé par les cardiologues",
          description: "Recommandé par les principaux cardiologues et électrophysiologistes suisses"
        }
      ]
    },
    features: {
      title: "Mesuré par IA, évalué par des cardiologues",
      subtitle: "Entièrement couvert par l'assurance maladie suisse",
      items: [
        {
          title: "Surveillance confortable",
          description: "Effectuez un Holter-ECG confortablement depuis chez vous avec notre dispositif SKIIN"
        },
        {
          title: "Analyse IA",
          description: "Des algorithmes IA avancés analysent continuellement vos données de rythme cardiaque"
        },
        {
          title: "Expertise cardiologique",
          description: "Des cardiologues suisses évaluent vos résultats et créent des rapports détaillés"
        },
        {
          title: "Couverture d'assurance",
          description: "Reconnu et entièrement couvert par les fournisseurs d'assurance suisses"
        }
      ]
    },
    technology: {
      title: "Technologie révolutionnaire Myant Care360",
      subtitle: "Découvrez l'avenir de la surveillance de la santé cardiaque",
      description: "Notre système de surveillance 360° révolutionnaire combine la capture de données continue avec l'analyse alimentée par l'IA pour des soins cardiaques sans précédent.",
      features: [
        "Surveillance continue de 10 jours",
        "Analyse IA en temps réel",
        "Validation par cardiologues suisses",
        "Précision de niveau médical",
        "Transmission de données transparente"
      ]
    },
    patientJourney: {
      title: "Votre parcours de santé cardiaque",
      subtitle: "De l'évaluation à la tranquillité d'esprit en 5 étapes simples",
      steps: [
        { 
          number: "1", 
          title: "Terminer l'évaluation", 
          description: "Remplissez notre formulaire d'auto-référence complet pour déterminer si SKIIN vous convient",
          duration: "5 minutes"
        },
        { 
          number: "2", 
          title: "Recevoir votre dispositif", 
          description: "Nous livrons le kit Holter-ECG SKIIN directement à votre porte avec des instructions détaillées",
          duration: "24-48 heures"
        },
        { 
          number: "3", 
          title: "Commencer la surveillance", 
          description: "Portez le dispositif SKIIN confortable pendant 14 jours tout en vivant votre vie normale",
          duration: "14 jours"
        },
        { 
          number: "4", 
          title: "Analyse des données", 
          description: "Nos systèmes IA et cardiologues suisses analysent vos données cardiaques complètes",
          duration: "3-5 jours"
        },
        { 
          number: "5", 
          title: "Obtenir vos résultats", 
          description: "Recevez un rapport détaillé de santé cardiaque avec des recommandations personnalisées",
          duration: "Le jour même"
        }
      ]
    },
    insurance: {
      title: "Couverture d'assurance complète",
      subtitle: "SKIIN est reconnu et couvert par l'assurance maladie suisse lorsqu'il est prescrit médicalement",
      description: "Naviguez dans le système de santé suisse en toute confiance. Notre équipe aide à assurer une couverture appropriée pour vos besoins de surveillance cardiaque.",
      benefits: [
        "Couvert par l'assurance de base lorsque prescrit",
        "Aucun coût personnel pour les patients qualifiés",
        "Support de remboursement inclus",
        "Facturation directe disponible"
      ]
    },
    riskAssessment: {
      title: "Connaissez votre risque cardiaque",
      subtitle: "Comprendre votre risque cardiovasculaire peut sauver votre vie",
      risks: [
        {
          title: "Fibrillation auriculaire silencieuse",
          description: "Souvent asymptomatique mais augmente le risque d'AVC de 5 fois",
          prevalence: "Affecte 1 adulte sur 4 de plus de 40 ans"
        },
        {
          title: "Arythmies cardiaques",
          description: "Battements cardiaques irréguliers qui peuvent être mortels s'ils ne sont pas détectés",
          prevalence: "2,7 millions d'Américains vivent avec une fibrillation auriculaire"
        },
        {
          title: "Prévention des maladies cardiaques",
          description: "La détection précoce permet un traitement préventif et des changements de mode de vie",
          prevalence: "Première cause de décès dans le monde"
        }
      ]
    },
    cta: {
      title: "Commencez votre parcours de santé cardiaque aujourd'hui",
      subtitle: "Rejoignez des milliers de patients suisses qui bénéficient déjà d'une surveillance cardiaque avancée",
      description: "Prenez le contrôle de votre santé cardiaque avec la solution de surveillance la plus confortable et complète disponible.",
      primaryButton: "Commencer maintenant",
      secondaryButton: "Réserver une consultation gratuite"
    }
  },
  features: {
    title: "Une nouvelle norme en matière de surveillance cardiaque",
    subtitle: "SKIIN combine l'informatique textile révolutionnaire avec l'expertise clinique pour offrir des soins cardiaques sans précédent",
    items: [
      {
        title: "ECG continu",
        description: "Surveillance ECG de qualité clinique jusqu'à 14 jours sans interruption"
      },
      {
        title: "Conception confortable",
        description: "Tissu doux et respirant avec capteurs invisibles – pas de fils ni d'adhésifs"
      },
      {
        title: "Détection d'arythmie",
        description: "Algorithmes avancés pour détecter et alerter sur les battements cardiaques irréguliers"
      },
      {
        title: "Analyse en temps réel",
        description: "Transmission instantanée des données aux médecins pour une intervention rapide"
      },
      {
        title: "Utilisabilité quotidienne",
        description: "Lavable, réutilisable et conçu pour faire partie de la vie quotidienne"
      },
      {
        title: "Connecté aux médecins",
        description: "Intégré de manière transparente aux flux de travail cliniques et aux systèmes de DSE"
      }
    ]
  },
  howItWorks: {
    tagline: "Processus Simple",
    title: "Comment fonctionne SKIIN",
    subtitle: "Conçu pour s'intégrer parfaitement dans votre vie tout en fournissant une surveillance cardiaque de qualité clinique",
    steps: [
      {
        number: "01",
        title: "Prescription",
        description: "Votre prestataire de soins prescrit SKIIN pour une surveillance cardiaque continue"
      },
      {
        number: "02",
        title: "Livraison",
        description: "Recevez votre kit de vêtement intelligent SKIIN directement à votre domicile"
      },
      {
        number: "03",
        title: "Port",
        description: "Portez simplement le vêtement confortable dans le cadre de votre routine quotidienne"
      },
      {
        number: "04",
        title: "Surveillance",
        description: "Votre rythme cardiaque est surveillé et analysé en continu"
      },
      {
        number: "05",
        title: "Connexion",
        description: "Les données sont partagées en toute sécurité avec votre prestataire de soins en temps réel"
      },
      {
        number: "06",
        title: "Résultats",
        description: "Obtenez des informations personnalisées et des recommandations de traitement"
      }
    ],
    cta: "En savoir plus sur le processus"
  },
  testimonials: {
    tagline: "Témoignages",
    title: "Approuvé par les médecins et les patients",
    subtitle: "Écoutez les prestataires de soins et les patients qui ont expérimenté les avantages de SKIIN",
    items: [
      {
        quote: "SKIIN a transformé ma façon de surveiller mes patients atteints d'arythmies. Les données continues me donnent confiance dans mes diagnostics, et les patients continuent effectivement à le porter.",
        name: "Dr. Michael Rodriguez",
        title: "Cardiologue, Centre cardiaque suisse"
      },
      {
        quote: "En tant que personne nécessitant une surveillance cardiaque régulière, SKIIN a changé ma vie. J'oublie que je porte un dispositif médical - c'est comme des sous-vêtements normaux mais qui me maintiennent connecté à mon médecin.",
        name: "Maria Schmidt",
        title: "Patiente atteinte de fibrillation auriculaire"
      },
      {
        quote: "La qualité des données que nous recevons des vêtements SKIIN est exceptionnelle. La surveillance continue nous a aidés à détecter des schémas qui auraient été manqués avec la surveillance Holter traditionnelle.",
        name: "Dr. Sophia Levine",
        title: "Électrophysiologiste"
      }
    ]
  },
  comparison: {
    tagline: "Comparaison",
    title: "Comment SKIIN se compare",
    subtitle: "Voyez comment les vêtements intelligents SKIIN se comparent aux solutions traditionnelles de surveillance cardiaque",
    columns: {
      feature: "Fonctionnalité",
      skiin: "SKIIN",
      skiinSubtitle: "Vêtement Intelligent",
      holter: "Moniteur Holter",
      holterSubtitle: "Traditionnel",
      event: "Moniteur d'événements",
      eventSubtitle: "Basé sur patch"
    },
    features: [
      "Surveillance continue",
      "Période de port de 14 jours",
      "Pas d'adhésifs ni de fils",
      "Lavable et réutilisable",
      "Transmission de données en temps réel",
      "Détection d'arythmie alimentée par l'IA",
      "Confort du patient pour un port à long terme"
    ]
  },
  cta: {
    title: "Prêt à transformer la surveillance cardiaque ?",
    description: "Que vous soyez un prestataire de soins souhaitant offrir de meilleurs soins cardiaques ou un patient recherchant une solution de surveillance plus confortable, SKIIN est prêt pour vous.",
    buttons: {
      requestInfo: "Demander des informations",
      scheduleDemo: "Planifier une démo"
    },
    statistic: "97% de taux de satisfaction des patients"
  },
  problemSolution: {
    title: "La Triade Silencieuse : Trois Menaces Cachées pour Votre Cœur",
    problem: {
      title: "Le Problème",
      description: "De nombreuses affections cardiaques se cachent silencieusement. Jusqu'à 70% des arythmies ne présentent aucun symptôme. Un test unique de 24 heures n'offre qu'un bref aperçu, vous laissant attendre et vous inquiéter. Les moniteurs traditionnels sont inconfortables et perturbent la vie quotidienne."
    },
    solution: {
      title: "La Solution",
      description: "SKIIN offre une surveillance continue de la santé cardiaque depuis votre domicile. Notre Dépistage Cardiaque de 10 Jours capture les rythmes irréguliers que les tests de 24 heures manquent. Le vêtement doux et sans fil est comme une seconde peau - résistant à l'eau, lavable et amovible pour les douches. En combinant ECG, pression artérielle et analyse du sommeil, nous surveillons la Triade Silencieuse (arythmie, hypertension et apnée du sommeil) qui passe souvent inaperçue."
    },
    silentTriad: {
      title: "La Triade Silencieuse",
      items: [
        {
          title: "Détection d'Arythmie",
          icon: "ecg",
          description: "La surveillance ECG continue capture les rythmes cardiaques irréguliers qui apparaissent sporadiquement"
        },
        {
          title: "Surveillance de la Pression Artérielle",
          icon: "blood-pressure",
          description: "La MAPA révèle l'hypertension masquée et les schémas nocturnes dangereux"
        },
        {
          title: "Analyse du Sommeil",
          icon: "sleep",
          description: "Identifie l'apnée du sommeil qui augmente le risque d'arythmie de 53% à 92%"
        }
      ]
    },
    cta: "Commencez Votre Évaluation Gratuite",
    linkText: "En savoir plus sur le Dépistage SKIIN 3X™",
    comingSoon: "(Bientôt Disponible)",
    problems: {
      title: "Problèmes du Holter traditionnel",
      items: [
        {
          title: "Fils et patchs inconfortables",
          description: "Des fils encombrants et des patchs adhésifs irritants perturbent la vie quotidienne"
        },
        {
          title: "Durée de surveillance courte", 
          description: "24-48 heures manquent souvent les arythmies intermittentes"
        },
        {
          title: "Interruptions du mode de vie",
          description: "Pas de douche, sport ou activités normales possibles"
        }
      ]
    },
    solutions: {
      title: "Solutions SKIIN",
      items: [
        {
          title: "Confort textile sans fils",
          description: "Bande de tissu doux avec capteurs invisibles - discret et confortable"
        },
        {
          title: "Surveillance continue de 14 jours",
          description: "Taux de détection plus élevé pour les troubles du rythme cardiaque rares"
        },
        {
          title: "Continuer à vivre normalement",
          description: "Travailler, dormir, se doucher - SKIIN s'adapte à votre vie"
        }
      ]
    }
  },
  insurance: {
    title: "Couverture par votre assurance maladie",
    subtitle: "SKIIN est couvert par l'assurance de base lorsqu'il est prescrit médicalement",
    models: [
      {
        title: "Modèle Médecin de famille",
        description: "Consultez votre médecin de famille pour une référence SKIIN. Une fois prescrit médicalement, il est couvert par l'assurance de base.",
        icon: "👨‍⚕️"
      },
      {
        title: "Modèle HMO", 
        description: "Visitez d'abord votre cabinet HMO pour évaluation. Une fois approuvé, SKIIN est entièrement couvert.",
        icon: "🏥"
      },
      {
        title: "Modèle Telmed",
        description: "Appelez d'abord votre ligne d'assistance télémédecine. Une fois approuvé par le télé-médecin, SKIIN est couvert.",
        icon: "📞"
      },
      {
        title: "Auto-paiement",
        description: "Pour le dépistage préventif sans symptômes. Prix transparent disponible.",
        icon: "💳"
      }
    ],
    cta: "Vérifier la couverture"
  },
  faq: {
    tagline: "FAQ",
    title: "Questions fréquemment posées",
    subtitle: "Trouvez des réponses aux questions courantes sur les vêtements intelligents SKIIN",
    items: [
      {
        question: "Quelle est la précision des données ECG de SKIIN ?",
        answer: "Les vêtements intelligents SKIIN fournissent des données ECG de qualité clinique avec une précision comparable aux moniteurs Holter traditionnels. Notre technologie a été validée dans des études cliniques et répond aux exigences réglementaires des dispositifs médicaux."
      },
      {
        question: "Combien de temps les patients peuvent-ils porter les vêtements SKIIN ?",
        answer: "Les vêtements intelligents SKIIN peuvent être portés jusqu'à 14 jours consécutifs, offrant une surveillance cardiaque prolongée. Les vêtements sont conçus pour être suffisamment confortables pour être portés jour et nuit, permettant une surveillance véritablement continue."
      },
      {
        question: "Les vêtements SKIIN sont-ils couverts par l'assurance ?",
        answer: "De nombreux fournisseurs d'assurance et systèmes de santé couvrent SKIIN comme solution de surveillance cardiaque. La couverture varie selon le pays et le fournisseur. Nous pouvons vous aider à vérifier la couverture pour votre situation spécifique via notre équipe de support de remboursement."
      },
      {
        question: "Comment les patients obtiennent-ils les vêtements intelligents SKIIN ?",
        answer: "Les vêtements intelligents SKIIN nécessitent une prescription d'un professionnel de la santé. Une fois prescrit, le kit SKIIN est livré directement au domicile du patient avec des instructions simples d'utilisation et d'entretien."
      },
      {
        question: "SKIIN peut-il détecter tous les types d'arythmies ?",
        answer: "SKIIN est conçu pour détecter un large éventail d'arythmies cardiaques, y compris la fibrillation auriculaire, la bradycardie, la tachycardie et autres. Nos algorithmes d'IA analysent en continu les données ECG pour identifier les schémas irréguliers et alerter les prestataires de soins si nécessaire."
      },
      {
        question: "Comment les données des patients sont-elles protégées ?",
        answer: "SKIIN prend la sécurité des données au sérieux. Toutes les données des patients sont cryptées tant en transit qu'au repos. Nos systèmes sont conformes au RGPD, à l'HIPAA et à d'autres réglementations régionales de protection des données pour assurer la confidentialité des patients."
      }
    ]
  },
  contact: {
    tagline: "Nous contacter",
    title: "Contactez-nous",
    description: "Vous avez des questions sur SKIIN ou vous voulez savoir comment il peut bénéficier à vous ou à votre pratique ? Remplissez le formulaire et notre équipe vous contactera sous peu.",
    contactInfo: {
      email: {
        title: "Email",
        content: "info@myant-health.com"
      },
      phone: {
        title: "Téléphone",
        content: "+41 44 123 45 67"
      },
      address: {
        title: "Adresse",
        content: "Bahnhofstrasse 100, 8001 Zürich, Suisse"
      }
    },
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      phone: "Numéro de téléphone",
      phonePlaceholder: "+41 XX XXX XX XX",
      role: "Je suis un(e) :",
      rolePlaceholder: "Sélectionnez votre rôle",
      roleOptions: {
        patient: "Patient",
        physician: "Médecin",
        healthcareAdmin: "Administrateur de soins de santé",
        other: "Autre"
      },
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      consent: "Je consens à ce que SKIIN traite mes données pour me contacter concernant ma demande. Voir notre",
      privacyPolicy: "Politique de confidentialité",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      successTitle: "Demande soumise",
      successDescription: "Nous vous répondrons dans les 24 heures."
    }
  },
  footer: {
    tagline: "Pionnier de la surveillance cardiaque continue basée sur les vêtements pour de meilleurs résultats de santé.",
    sections: {
      patients: {
        title: "Pour les Patients",
        links: {
          main: "Vêtements Intelligents SKIIN",
          testimonials: "Témoignages de patients",
          faq: "FAQ",
          support: "Obtenir de l'aide"
        }
      },
      physicians: {
        title: "Pour les Médecins",
        links: {
          main: "Solutions Cliniques",
          research: "Études Cliniques",
          resources: "Ressources",
          support: "Support pour les professionnels de santé",
          requestDemo: "Demander une démo"
        }
      },
      company: {
        title: "Entreprise",
        links: {
          about: "À propos de nous",
          team: "Notre équipe",
          careers: "Carrières",
          contact: "Contact",
          support: "Support technique"
        }
      }
    },
    legal: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Politique des cookies",
      rights: "Tous droits réservés."
    }
  }
};
