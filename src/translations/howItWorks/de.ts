export const deHowItWorksTranslations = {
  title: "Wie es funktioniert",
  hero: {
    headline: "Wie funktioniert SKIIN?",
    subtitle: "Vom intelligenten Kleidungsstück am Patienten bis zu den Daten auf Ihrem Bildschirm – erfahren Sie mehr über die Reise eines EKG-Signals durch den SKIIN Holter-Überwachungsdienst."
  },
  intro: "Es ist eine Kombination aus Hardware, Software und Service, die eine nahtlose Erfahrung gewährleistet.",
  steps: {
    title: "Schritt-für-Schritt-Anleitung",
    step1: {
      title: "1. Verschreibung & Anmeldung",
      description: "Es beginnt mit einer medizinischen Entscheidung – ein Arzt stellt fest, dass eine Langzeit-EKG-Überwachung erforderlich ist. Er wählt SKIIN anstelle eines herkömmlichen Holters. Die Patientendaten werden in unser sicheres System eingegeben und ein SKIIN-Kit wird zugewiesen. Dies kann bei einem Klinikbesuch oder über eine E-Health-Anfrage geschehen. Jedes Kit hat eine eindeutige ID, um die Daten sicher mit dem Patienten zu verknüpfen (keine persönlichen Daten werden auf dem Gerät selbst gespeichert, nur die ID).",
      note: "Wenn ein Patient über unsere Website kommt, verbinden wir ihn mit einem Partnerarzt, der die Überwachung autorisieren kann."
    },
    step2: {
      title: "2. Geräteeinrichtung",
      description: "Der Patient erhält das SKIIN-Gerät. Dies umfasst das textile Brustband und ein kleines aufsteckbares Sensormodul. Der Patient (mit Anleitung einer Krankenschwester oder über Anweisungen) lädt die SKIIN-App herunter (verfügbar für iOS/Android) und koppelt sie über Bluetooth mit dem Sensor.",
      setup: "Nach der Kopplung führt die App einen kurzen Test durch, um sicherzustellen, dass das EKG-Signal korrekt erfasst wird (der Patient wird möglicherweise gebeten, während der Kalibrierung eine Minute still zu sitzen).",
      operation: "Die App läuft dann im Hintergrund und erfordert keine weitere Interaktion, außer den Patienten zu benachrichtigen, wenn der Sensor außer Reichweite ist oder aufgeladen werden muss.",
      charging: "Aufladen: Der Akku des Sensors hält etwa 3 Tage bei einer Ladung – der Patient wird angewiesen, ihn alle paar Tage für 30 Minuten aufzuladen (die App benachrichtigt, wenn der Akku schwach ist, idealerweise zu einem günstigen Zeitpunkt). Dies gewährleistet eine kontinuierliche Datenerfassung."
    },
    step3: {
      title: "3. Überwachungszeitraum",
      description: "Für die nächsten 14 Tage (oder die vorgeschriebene Dauer) trägt der Patient das SKIIN-Kleidungsstück einfach Tag und Nacht. Er kann es kurz zum Duschen oder bei Bedarf abnehmen, sollte es aber so konstant wie möglich tragen. Das Kleidungsstück ist waschbar (wir liefern zwei Kleidungsstücke im Kit, damit eines gewaschen werden kann, während das andere getragen wird).",
      recording: "Der Sensor zeichnet kontinuierlich ein Drei-Kanal-EKG auf (ähnlich den Ableitungen I, II, III) und misst Bewegungen und Position (mit einem Beschleunigungsmesser und anderen Sensoren).",
      dataSync: "Die mobile App überträgt Daten sicher an die SKIIN-Cloud-Plattform, wann immer das Telefon mit dem Internet verbunden ist. Wenn das Telefon offline ist (z.B. außerhalb der Abdeckung), werden die Daten auf dem Sensor und Telefon gepuffert, bis die Verbindung wiederhergestellt ist.",
      dataVolume: "Datenvolumen: Über 14 Tage können riesige Datenmengen (~ Gigabyte an EKG-Signalen) aufgezeichnet werden – das SKIIN-System bewältigt dies durch effiziente Komprimierung und Segmentierung der Daten-Uploads. Der Patient muss sich um nichts davon kümmern – es ist alles automatisch.",
      symptoms: "Wenn der Patient ein bemerkenswertes Symptom verspürt (z.B. Herzklopfen oder Herzflattern), kann er einen \"Symptom markieren\"-Button in der App drücken und optional eingeben, was er gefühlt hat. Dies erstellt einen Zeitstempel für das Ereignis, der im Bericht des Klinikers erscheint."
    },
    step4: {
      title: "4. Cloud-Analyse",
      description: "Sobald die Daten unsere sichere Cloud erreichen, beginnt die Analyse fast in Echtzeit. SKIIN verwendet einen auf maschinellem Lernen basierenden Arrhythmie-Erkennungsalgorithmus, der auf großen EKG-Datensätzen verfeinert und validiert wurde, um die eingehenden Daten nach unregelmäßigen Mustern zu durchsuchen.",
      detection: "Dieser Algorithmus kann Episoden von Vorhofflimmern, Pausen, Tachykardien, ektopischen Schlägen und mehr identifizieren. Er ist darauf ausgelegt, Fehlalarme zu minimieren und gleichzeitig selbst kurze Episoden zu erfassen.",
      analysis: "Verdächtige Ereignisse werden markiert. Bei Langzeitstudien kann unser System auch Herzfrequenztrends, Tagesmuster und Aktivitätskorrelationen zusammenstellen (z.B. zeigen, ob eine Arrhythmie während des Trainings oder in Ruhe auftrat).",
      alerts: "Während der Überwachung kann das System bei Erkennung einer kritischen Arrhythmie (z.B. einer ventrikulären Tachykardie oder eines hochgradigen AV-Blocks) eine sofortige Warnung an das medizinische Team generieren (je nach konfigurierten Protokollen). Typischerweise wird eine Warnung von einem SKIIN-Herztechniker überprüft, der dann bei Bedarf den zuständigen Arzt kontaktiert. Dies stellt sicher, dass dringende Befunde nicht übersehen werden, falls sie früh im Überwachungszeitraum auftreten."
    },
    step5: {
      title: "5. Berichterstellung",
      description: "Nach Ende des Überwachungszeitraums wird ein umfassender Bericht finalisiert. Dieser Bericht enthält:",
      includes: {
        summary: "Eine Zusammenfassungsseite mit wichtigen Befunden (z.B. 'VHF erkannt: Ja – Gesamtdauer 3 Stunden, längste Episode 5 Min'; 'Max HF: 140 bpm; Min HF: 45 bpm'; 'Anzahl Pausen >2s: 2' usw.).",
        trends: "Tägliche Herzfrequenz-Trendgrafiken.",
        events: "Eine Tabelle aller signifikanten Ereignisse (mit Zeiten und Herzfrequenzen).",
        strips: "Beispiel-EKG-Streifen für repräsentative Ereignisse (mit Anmerkungen).",
        symptoms: "Alle vom Patienten notierten Symptome korreliert mit dem Herzrhythmus zu diesem Zeitpunkt.",
        interpretation: "Ein Interpretations- oder Schlussfolgerungsabschnitt (der von einem zertifizierten Herztechniker verfasst oder je nach Servicemodell vom Arzt ausgefüllt werden kann)."
      },
      format: "Das Berichtsformat ist so gestaltet, dass es den bekannten Holter-Berichten ähnelt, die Ärzte bereits kennen, nur mit mehr Daten. Er wird als PDF über unser sicheres Portal geliefert, und optional können die Rohdaten oder die annotierte vollständige Offenlegung abgerufen werden."
    },
    step6: {
      title: "6. Nachsorge",
      description: "Der Arzt bespricht den Bericht mit dem Patienten. Wenn Arrhythmien gefunden wurden, wird eine angemessene Behandlung oder weitere Diagnostik geplant. Wenn die Ergebnisse normal sind, hat der Patient Gewissheit.",
      support: "SKIINs Service endet nicht beim Bericht – wir sammeln Feedback von Ärzten und Patienten, um uns kontinuierlich zu verbessern. Wenn ein Arzt Hilfe bei der Interpretation benötigt oder eine zweite Meinung wünscht, steht unser medizinisches Beratungsteam zur Verfügung. Wir kümmern uns auch um die Desinfektion und das Zurücksetzen zurückgegebener Geräte und bereiten sie mit strengen Hygieneprotokollen für den nächsten Patienten vor.",
      reuse: "Da SKIIN-Geräte wiederverwendbare Hardware sind, werden sie nach jeder Verwendung gründlich gereinigt, überprüft, und der nächste Patient erhält ein frisches Kleidungsstück. Patienten behalten das Gerät nicht; es ist ein Service, kein Verbrauchergerät."
    }
  },
  security: {
    title: "Sicherheit & Datenschutz",
    description: "Während des gesamten Prozesses stehen Datensicherheit und Patientenschutz an erster Stelle. Alle Kommunikationen sind verschlüsselt (HIPAA/DSGVO-konforme Verschlüsselung). Nur autorisiertes Personal (Ihre behandelnden Ärzte und unsere Systemtechniker) kann die Rohdaten einsehen. Die Identität des Patienten ist geschützt – die Cloud-Analyse verwendet hauptsächlich Geräte-IDs; die Verknüpfung zu persönlichen Informationen wird sicher in unserer Datenbank aufbewahrt. Das System entspricht den Schweizer Datenschutzgesetzen und teilt keine Daten ohne Zustimmung mit Dritten."
  },
  summary: {
    title: "Zusammenfassung",
    description: "Kurz gesagt, modernisiert der SKIIN Holter-Überwachungsdienst einen bekannten Herztest durch den Einsatz von tragbarer Technologie und Cloud-KI-Analyse. Er bewahrt, was wichtig ist (genaue EKG-Messungen) und entfernt, was nicht wichtig ist (Patientenbeschwerden, begrenzte Daten). Das Ergebnis ist eine reibungslosere Erfahrung für Patienten und aussagekräftigere Informationen für Ärzte.",
    evidenceLink: "Neugierig, wie SKIIN in Studien und realen Fällen abgeschnitten hat? Schauen Sie sich",
    evidenceLinkText: "Evidenz",
    evidenceLinkSuffix: "für klinische Daten und Erfolgsgeschichten an."
  }
};