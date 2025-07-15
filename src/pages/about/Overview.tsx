import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, BookOpen, Shield, Phone, ArrowRight } from 'lucide-react';

const AboutOverview = () => {
  const aboutSections = [
    {
      icon: Heart,
      title: "Company & Mission",
      description: "Our commitment to transforming cardiac care with Swiss-quality standards and cutting-edge technology",
      link: "/about/company",
      highlights: ["Precision Comfort", "Swiss Quality", "Patient-Centered"]
    },
    {
      icon: Users,
      title: "Our Team & Medical Advisors",
      description: "Multidisciplinary experts and Swiss medical professionals ensuring clinical excellence",
      link: "/about/medical-board",
      highlights: ["Medical Advisory Board", "Swiss Cardiologists", "Tech Innovation"]
    },
    {
      icon: BookOpen,
      title: "Blog & Resources",
      description: "Educational content, heart health insights, and the latest in cardiac monitoring science",
      link: "/about/blog",
      highlights: ["Heart Health Education", "Patient Stories", "Research Updates"]
    },
    {
      icon: Award,
      title: "Patient Stories & Testimonials",
      description: "Real experiences from patients and endorsements from Swiss healthcare professionals",
      link: "/about/testimonials",
      highlights: ["Patient Success Stories", "Physician Endorsements", "Real Impact"]
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Our commitment to transparency, data protection, and regulatory compliance",
      link: "/about/compliance",
      highlights: ["GDPR Compliance", "Medical Device Certified", "Swiss Law"]
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Multilingual support team ready to help patients, doctors, and partners",
      link: "/about/contact",
      highlights: ["24/7 Support", "Multilingual", "Swiss Office"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom section-padding">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SKIIN</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transforming cardiac care in Switzerland through innovation, excellence, and 
              unwavering commitment to patient wellbeing
            </p>
            <Badge variant="outline" className="text-lg px-6 py-2">
              Swiss Quality • Global Innovation • Local Understanding
            </Badge>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 bg-gradient-to-r from-myant-lightgreen/20 to-myant-green/10">
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 text-myant-green mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                SKIIN is committed to transforming cardiac care in Switzerland by uniting 
                Swiss-quality medical standards with cutting-edge textile sensor technology. 
                We deliver clinical-grade accuracy in heart monitoring without compromising 
                patient comfort and autonomy.
              </p>
            </CardContent>
          </Card>

          {/* About Sections Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Story</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutSections.map((section, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <section.icon className="h-8 w-8 text-myant-green" />
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{section.description}</p>
                    <div className="space-y-3 mb-4">
                      {section.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-myant-green rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={section.link}>
                      <Button variant="outline" className="w-full group-hover:bg-myant-green group-hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">SKIIN at a Glance</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-myant-green mb-2">CE</div>
                  <p className="text-sm text-muted-foreground">Medical Device Certified</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-myant-green mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Languages Supported</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-myant-green mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Patients Monitored</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-myant-green mb-2">14</div>
                  <p className="text-sm text-muted-foreground">Days Continuous Monitoring</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card className="mb-16 bg-secondary/30">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-myant-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Recognition & Awards</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SKIIN's innovative technology was recognized at the CES 2025 Digital Health Awards, 
                winning "Best Health Device" for our pioneering approach to textile-based cardiac monitoring.
              </p>
              <Badge variant="outline" className="text-lg px-6 py-2">
                CES 2025 Digital Health Award Winner
              </Badge>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-myant-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Patient-Centered</h3>
                  <p className="text-sm text-muted-foreground">
                    Every decision we make prioritizes patient comfort, privacy, and empowerment
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-myant-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Swiss Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Precision, reliability, and quality standards that reflect Swiss healthcare values
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-myant-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">Local Partnership</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep integration with Swiss healthcare providers and local medical expertise
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're a patient interested in heart monitoring, a healthcare professional 
              looking to integrate SKIIN, or a potential partner, we're here to help.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/about/contact">
                <Button size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/about/blog">
                <Button variant="outline" size="lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutOverview;