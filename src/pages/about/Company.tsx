import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Users, Award } from 'lucide-react';

const Company = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Company & Mission</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming cardiac care in Switzerland by uniting Swiss-quality medical standards 
              with cutting-edge textile sensor technology
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-myant-green mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <Badge variant="outline" className="text-lg px-4 py-2">Precision Comfort</Badge>
              </div>
              <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                SKIIN is committed to delivering clinical-grade accuracy in heart monitoring without 
                compromising patient comfort and autonomy. We recognize that Swiss healthcare values 
                privacy, quality, and informed decision-making, so we have tailored our service to 
                uphold these values at every step.
              </p>
            </CardContent>
          </Card>

          {/* Who We Are */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6">
                  SKIIN is a wearable health technology platform originally developed by Myant Inc., 
                  a leader in textile computing. In Switzerland, SKIIN is operated by a dedicated 
                  local team of professionals in medicine, technology, and customer care.
                </p>
                <p className="text-lg mb-6">
                  We have established a Swiss presence – including an office in Zürich – to ensure 
                  that our service integrates smoothly into the local healthcare system and to offer 
                  support in all national languages.
                </p>
                <p className="text-lg">
                  Our on-the-ground team and partnerships in Switzerland demonstrate our commitment 
                  to being "glocal": global innovation with local understanding.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-myant-green mx-auto mb-2" />
                    <h3 className="font-semibold">Local Team</h3>
                    <p className="text-sm text-muted-foreground">Swiss-based professionals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Heart className="h-8 w-8 text-myant-green mx-auto mb-2" />
                    <h3 className="font-semibold">Medical Focus</h3>
                    <p className="text-sm text-muted-foreground">Healthcare integration</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-8 w-8 text-myant-green mx-auto mb-2" />
                    <h3 className="font-semibold">Multilingual</h3>
                    <p className="text-sm text-muted-foreground">DE, FR, EN support</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-myant-green mx-auto mb-2" />
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Textile computing leader</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <Card className="mb-16 bg-myant-lightgreen/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  We envision a future where long waits and uncomfortable medical tests are replaced 
                  by seamless, patient-friendly solutions that empower individuals and support 
                  healthcare providers. By enabling early detection of silent cardiac conditions 
                  (like intermittent arrhythmias) and making monitoring accessible from home, we 
                  aim to reduce preventable cardiac events.
                </p>
                <p className="text-lg mb-6">
                  This vision is informed by Switzerland's reputation for precision and reliability – 
                  traits we embed in our product – and by the need to ease patient anxiety with an 
                  approachable, empathetic experience.
                </p>
                <p className="text-lg">
                  We also aim to support physicians with trustworthy data and easy workflows, 
                  strengthening the doctor-patient relationship through better insights.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quality and Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Quality & Compliance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-myant-green mb-4" />
                  <h3 className="font-semibold mb-3">Medical Device Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    CE-marked and registered for medical use in Switzerland (conforming to 
                    Swissmedic requirements). ISO 13485 certified for medical devices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-myant-green mb-4" />
                  <h3 className="font-semibold mb-3">Data Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with GDPR and Swiss Data Protection Act. Encrypted data 
                    handling with robust security measures and access controls.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-myant-green mb-4" />
                  <h3 className="font-semibold mb-3">Cultural Respect</h3>
                  <p className="text-sm text-muted-foreground">
                    Patient materials available in formal German (Sie) and French (vous) 
                    to respect cultural norms and Swiss healthcare expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Commitment */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg max-w-4xl mx-auto">
              SKIIN Switzerland aims not just to introduce a product, but to build trust and 
              credibility in the community. We collaborate with Swiss healthcare providers and 
              incorporate feedback from local cardiologists and GPs in an ongoing process of 
              improvement. By combining a startup's innovation with Switzerland's medical 
              excellence, we strive to set a new standard for heart monitoring that is both 
              high-tech and profoundly human-centered.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Company;