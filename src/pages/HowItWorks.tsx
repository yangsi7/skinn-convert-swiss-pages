import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Smartphone, Cloud, FileText, UserCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function HowItWorks() {
  const translations = useTranslation('howItWorks');
  const { language } = useLanguage();

  const getEvidenceLink = () => {
    switch (language) {
      case 'de': return '/de/evidenz';
      case 'fr': return '/fr/preuves';
      default: return '/evidence';
    }
  };

  const stepIcons = [
    <UserCheck className="w-8 h-8 text-primary" />,
    <Smartphone className="w-8 h-8 text-primary" />,
    <Activity className="w-8 h-8 text-primary" />,
    <Cloud className="w-8 h-8 text-primary" />,
    <FileText className="w-8 h-8 text-primary" />,
    <Shield className="w-8 h-8 text-primary" />
  ];

  return (
    <>
      <Helmet>
        <title>{translations.title} | SKIIN Switzerland</title>
        <meta name="description" content={translations.hero.subtitle} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {translations.hero.headline}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {translations.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground">
                {translations.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {translations.steps.title}
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Step 1 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[0]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step1.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step1.description}
                      </p>
                      {translations.steps.step1.note && (
                        <p className="text-sm text-muted-foreground italic">
                          {translations.steps.step1.note}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[1]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step2.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step2.description}
                      </p>
                      <div className="space-y-3 text-muted-foreground">
                        <p>{translations.steps.step2.setup}</p>
                        <p>{translations.steps.step2.operation}</p>
                        <p className="text-sm italic">{translations.steps.step2.charging}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[2]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step3.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step3.description}
                      </p>
                      <div className="space-y-3 text-muted-foreground">
                        <p>{translations.steps.step3.recording}</p>
                        <p>{translations.steps.step3.dataSync}</p>
                        <p className="text-sm italic">{translations.steps.step3.dataVolume}</p>
                        <p>{translations.steps.step3.symptoms}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[3]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step4.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step4.description}
                      </p>
                      <div className="space-y-3 text-muted-foreground">
                        <p>{translations.steps.step4.detection}</p>
                        <p>{translations.steps.step4.analysis}</p>
                        <p className="text-sm italic">{translations.steps.step4.alerts}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[4]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step5.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step5.description}
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• {translations.steps.step5.includes.summary}</li>
                        <li>• {translations.steps.step5.includes.trends}</li>
                        <li>• {translations.steps.step5.includes.events}</li>
                        <li>• {translations.steps.step5.includes.strips}</li>
                        <li>• {translations.steps.step5.includes.symptoms}</li>
                        <li>• {translations.steps.step5.includes.interpretation}</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        {translations.steps.step5.format}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 6 */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{stepIcons[5]}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        {translations.steps.step6.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {translations.steps.step6.description}
                      </p>
                      <div className="space-y-3 text-muted-foreground">
                        <p>{translations.steps.step6.support}</p>
                        <p className="text-sm italic">{translations.steps.step6.reuse}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold">{translations.security.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                {translations.security.description}
              </p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{translations.summary.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {translations.summary.description}
              </p>
              <p className="text-lg text-muted-foreground">
                {translations.summary.evidenceLink}{' '}
                <Link to={getEvidenceLink()} className="text-primary hover:underline font-semibold">
                  {translations.summary.evidenceLinkText}
                </Link>{' '}
                {translations.summary.evidenceLinkSuffix}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HowItWorks;