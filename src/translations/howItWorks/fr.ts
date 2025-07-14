export const frHowItWorksTranslations = {
  title: "Comment ça fonctionne",
  hero: {
    headline: "Comment fonctionne SKIIN ?",
    subtitle: "Du vêtement intelligent sur le patient aux données sur votre écran, découvrez le parcours d'un signal ECG à travers le service de surveillance Holter SKIIN."
  },
  intro: "C'est une combinaison de matériel, de logiciel et de service qui garantit une expérience fluide.",
  steps: {
    title: "Guide étape par étape",
    step1: {
      title: "1. Prescription et inscription",
      description: "Tout commence par une décision médicale – un médecin détermine qu'une surveillance ECG à long terme est nécessaire. Il choisit SKIIN au lieu d'un Holter conventionnel. Les coordonnées du patient sont saisies dans notre système sécurisé et un kit SKIIN est attribué. Cela peut se faire lors d'une visite en clinique ou via une demande de santé en ligne. Chaque kit a un identifiant unique pour lier les données au patient en toute sécurité (aucune donnée personnelle n'est stockée sur l'appareil lui-même, seulement l'identifiant).",
      note: "Si un patient arrive via notre site web, nous le mettons en relation avec un médecin partenaire qui peut autoriser la surveillance."
    },
    step2: {
      title: "2. Configuration de l'appareil",
      description: "Le patient reçoit l'appareil SKIIN. Cela comprend la bande thoracique textile et un petit module capteur à clipser. Le patient (avec l'aide d'une infirmière ou via des instructions) télécharge l'application SKIIN (disponible pour iOS/Android) et l'appaire avec le capteur via Bluetooth.",
      setup: "Une fois appairé, l'application effectue un test rapide pour s'assurer que le signal ECG est correctement capturé (on peut demander au patient de rester immobile pendant une minute lors de la calibration).",
      operation: "L'application fonctionne ensuite en arrière-plan, ne nécessitant aucune autre interaction, sauf pour notifier le patient si le capteur est hors de portée ou a besoin d'être rechargé.",
      charging: "Recharge : La batterie du capteur dure environ 3 jours avec une charge – le patient est invité à la recharger pendant 30 minutes tous les quelques jours (l'application alertera lorsque la batterie est faible, idéalement à un moment pratique). Cela garantit une capture continue des données."
    },
    step3: {
      title: "3. Période de surveillance",
      description: "Pendant les 14 prochains jours (ou la durée prescrite), le patient porte simplement le vêtement SKIIN jour et nuit. Il peut l'enlever brièvement pour la douche ou au besoin, mais doit le porter aussi régulièrement que possible. Le vêtement est lavable (nous fournissons deux vêtements dans le kit pour qu'un puisse être lavé pendant que l'autre est porté).",
      recording: "Le capteur enregistre en continu un ECG à trois dérivations (couvrant des dérivations similaires à I, II, III) et mesure les mouvements et la position (à l'aide d'un accéléromètre et d'autres capteurs).",
      dataSync: "L'application mobile transmet en toute sécurité les données à la plateforme cloud SKIIN chaque fois que le téléphone est connecté à Internet. Si le téléphone est hors ligne (disons que le patient est hors couverture), les données sont mises en mémoire tampon sur le capteur et le téléphone jusqu'à ce que la connexion soit rétablie.",
      dataVolume: "Volume de données : Sur 14 jours, une énorme quantité de données (~ gigaoctets de signaux ECG) peut être enregistrée – le système SKIIN gère cela en compressant et en segmentant efficacement les téléchargements de données. Le patient n'a à se soucier de rien de tout cela – tout est automatique.",
      symptoms: "Si le patient ressent un symptôme notable (par exemple, des palpitations ou un battement thoracique), il peut appuyer sur un bouton \"Marquer le symptôme\" dans l'application et éventuellement taper ce qu'il a ressenti. Cela crée un horodatage pour l'événement, qui apparaîtra dans le rapport du clinicien."
    },
    step4: {
      title: "4. Analyse dans le cloud",
      description: "Une fois que les données atteignent notre cloud sécurisé, l'analyse commence presque en temps réel. SKIIN utilise un algorithme de détection d'arythmie basé sur l'apprentissage automatique, affiné et validé sur de grands ensembles de données ECG, pour analyser les données entrantes à la recherche de modèles irréguliers.",
      detection: "Cet algorithme peut identifier des épisodes de fibrillation auriculaire, des pauses, des tachycardies, des battements ectopiques, et plus encore. Il est conçu pour minimiser les fausses alarmes tout en détectant même de brefs épisodes.",
      analysis: "Les événements suspects sont signalés. Pour les études à long terme, notre système peut également compiler les tendances de la fréquence cardiaque, les schémas quotidiens et la corrélation d'activité (par exemple, montrer si une arythmie s'est produite pendant l'exercice ou au repos).",
      alerts: "Tout au long de la surveillance, si une arythmie critique est détectée (par exemple, une tachycardie ventriculaire ou un bloc AV de haut degré), le système peut générer une alerte immédiate à l'équipe médicale (selon les protocoles configurés). Généralement, une alerte serait examinée par un technicien cardiaque SKIIN qui contacte ensuite le médecin enregistré si nécessaire. Cela garantit que les résultats urgents ne sont pas manqués s'ils surviennent tôt dans la période de surveillance."
    },
    step5: {
      title: "5. Génération de rapport",
      description: "Après la fin de la période de surveillance, un rapport complet est finalisé. Ce rapport comprend :",
      includes: {
        summary: "Une page de résumé avec les principales conclusions (par exemple, 'FA détectée : Oui – durée totale 3 heures, épisode le plus long 5 min' ; 'FC max : 140 bpm ; FC min : 45 bpm' ; 'Nombre de pauses >2s : 2', etc.).",
        trends: "Graphiques de tendance de la fréquence cardiaque quotidienne.",
        events: "Un tableau de tous les événements significatifs (avec heures et fréquences cardiaques).",
        strips: "Exemples de bandes ECG pour les événements représentatifs (avec annotations).",
        symptoms: "Tous les symptômes notés par le patient corrélés avec le rythme cardiaque à ce moment-là.",
        interpretation: "Une section d'interprétation ou de conclusion (qui peut être rédigée par un technicien cardiaque certifié ou laissée au médecin pour remplir, selon le modèle de service)."
      },
      format: "Le format du rapport est conçu pour ressembler aux rapports Holter familiers que les médecins connaissent déjà, juste avec plus de données. Il est livré sous forme de PDF via notre portail sécurisé, et éventuellement, les données brutes ou la divulgation complète annotée peuvent être consultées."
    },
    step6: {
      title: "6. Suivi",
      description: "Le médecin examine le rapport avec le patient. Si des arythmies ont été trouvées, un traitement approprié ou des diagnostics supplémentaires sont planifiés. Si les résultats sont normaux, le patient a l'esprit tranquille.",
      support: "Le service de SKIIN ne s'arrête pas au rapport – nous recueillons les commentaires des médecins et des patients pour nous améliorer continuellement. Si un médecin a besoin d'aide pour interpréter quelque chose ou souhaite un deuxième avis, notre équipe consultative médicale est disponible. Nous gérons également la désinfection et la réinitialisation des appareils retournés, les préparant pour le prochain patient avec des protocoles d'hygiène stricts.",
      reuse: "Comme les appareils SKIIN sont du matériel réutilisable, après chaque utilisation, ils sont soigneusement nettoyés, vérifiés, et le patient suivant reçoit un vêtement frais. Les patients ne gardent pas l'appareil ; c'est un service, pas un gadget grand public."
    }
  },
  security: {
    title: "Sécurité et confidentialité",
    description: "Tout au long du processus, la sécurité des données et la confidentialité des patients sont primordiales. Toutes les communications sont cryptées (cryptage de niveau HIPAA/RGPD). Seul le personnel autorisé (vos médecins traitants et nos techniciens système) peut consulter les données brutes. L'identité du patient est protégée – l'analyse cloud utilise principalement des identifiants d'appareil ; le lien vers les informations personnelles est conservé en toute sécurité dans notre base de données. Le système est conforme aux lois suisses sur la protection des données et ne partage pas de données avec des tiers sans consentement."
  },
  summary: {
    title: "Résumé",
    description: "En bref, le service de surveillance Holter SKIIN modernise un test cardiaque bien connu en tirant parti de la technologie portable et de l'analyse IA dans le cloud. Il préserve ce qui compte (lectures ECG précises) et supprime ce qui ne compte pas (inconfort du patient, données limitées). Le résultat est une expérience plus fluide pour les patients et des informations plus exploitables pour les médecins.",
    evidenceLink: "Curieux de savoir comment SKIIN a performé dans les essais et les cas réels ? Consultez",
    evidenceLinkText: "Preuves",
    evidenceLinkSuffix: "pour les données cliniques et les histoires de réussite."
  }
};