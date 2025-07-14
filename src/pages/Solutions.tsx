import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Heart, Activity, Shield, Clock, FileText, Users, CheckCircle, AlertCircle, Home, Brain, Moon } from 'lucide-react';

/**
 * Solutions page - Different heart screening types and solutions
 * Swiss-specific medical-grade content with proper regulatory compliance
 */
const Solutions = () => {
  const t = useTranslation('solutions');
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('holter');

  return (
    <PageLayout>
      <Helmet>
        <title>{t.pageTitle || 'Solutions - SKIIN Heart Monitoring'}</title>
        <meta name="description" content={t.pageDescription || 'Explore SKIIN heart monitoring solutions for different screening needs'} />
      </Helmet>
      
      {/* Hero Section - Aerated Design */}
      <Section background="white" spacing="none">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                    Put your heart health first.
                    <br />
                    <span className="text-teal-600">Heart disease won't wait.</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Cardiovascular disease is still the #1 killer in the world. Take charge of your heart health.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 text-lg"
                    asChild
                  >
                    <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                      Take action now →
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-4 text-lg"
                    asChild
                  >
                    <Link to={language === 'en' ? '/evidence' : `/${language}/evidence`}>
                      Book assessment now →
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-navy-100 rounded-3xl p-12 relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-navy-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                      <Heart className="w-16 h-16 text-white" />
                    </div>
                    <div className="bg-white rounded-full px-6 py-3 shadow-lg inline-block">
                      <span className="text-navy-900 font-bold text-lg">100% Clinical Grade</span>
                    </div>
                  </div>
                  
                  {/* Floating elements for visual interest */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-teal-500 rounded-full opacity-60"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-navy-500 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-teal-400 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators - Floating */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-70">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-teal-600" />
                <span>CE Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span>Swissmedic Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Heart className="w-5 h-5 text-teal-600" />
                <span>Insurance Covered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-5 h-5 text-teal-600" />
                <span>94% Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Seamless Monitoring Description */}
      <Section background="gray" spacing="large">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
            SKIIN monitors your heart's rhythm with a seamless, <span className="text-teal-600">clinical-grade</span>
            <br />
            <span className="text-teal-600">14-day Holter ECG</span> in everyday clothing—no wires, no appointments,
            <br />
            just continuous <span className="text-teal-600">data for early heart health insights.</span>
          </h2>
        </div>
      </Section>

      {/* Feature Cards Section - Anywhere, Precise, Safe */}
      <Section spacing="large">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Anywhere Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-teal-50 to-teal-100">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-teal-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-navy-900">Anywhere.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Live your normal life while monitoring. Work, exercise, sleep - SKIIN adapts to your routine, 
                    not the other way around.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Precise Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-navy-50 to-navy-100">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-navy-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-navy-900">Precise.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clinical-grade accuracy with 99.5% signal reliability. Swiss cardiologists validate every 
                    finding for diagnostic confidence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Safe Card */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-navy-900">Safe.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    CE certified medical device. Swiss data protection. Swissmedic approved. 
                    Your health data stays secure and private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Early Detection CTA Section */}
      <Section background="white" spacing="large">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            Early detection is
            <br />
            <span className="text-teal-600">your best protection.</span>
          </h2>
          
          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-teal-400 to-navy-500 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-7xl lg:text-8xl font-bold mb-4">70%</div>
                <p className="text-xl lg:text-2xl">of arrhythmias show no symptoms</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white border-opacity-30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-navy-600 hover:bg-navy-700 text-white px-12 py-6 text-xl rounded-2xl"
              asChild
            >
              <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                Get Started Today →
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Get answers for early detection
            </p>
          </div>
        </div>
      </Section>

      {/* Solutions Tabs Section */}
      <Section background="gray" spacing="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SKIIN offers two comprehensive cardiac monitoring solutions - one available now, and an advanced triple-screening platform coming soon.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-16">
              <TabsTrigger value="holter" className="text-lg py-4">
                14-Day Holter ECG
                <Badge className="ml-2 bg-green-600 text-white text-xs">Available Now</Badge>
              </TabsTrigger>
              <TabsTrigger value="tritest" className="text-lg py-4">
                SKIIN 3X Screening™
                <Badge className="ml-2 bg-teal-600 text-white text-xs">Coming Q1 2026</Badge>
              </TabsTrigger>
            </TabsList>

                {/* 14-Day Holter ECG Solution Tab */}
                <TabsContent value="holter" className="space-y-12">
                  
                  {/* Problem Context */}
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-navy-900 mb-6">
                      14-Day Heart Screening Solution
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        <span className="font-semibold text-red-600">Most arrhythmias are silent and can be missed until it's too late.</span> 
                        Over 70% of dangerous heart rhythm disorders show no symptoms, often going undetected with short monitoring periods.
                      </p>
                      <p className="text-lg text-teal-600 font-medium">
                        Early detection made easy – a clinical-grade ECG you can wear at home before symptoms appear.
                      </p>
                    </div>
                  </div>

                  {/* Traditional vs SKIIN Comparison */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-center mb-8 text-navy-900">Why Choose SKIIN Over Traditional Holter?</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      
                      {/* Traditional Problems */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-red-600 mb-4">Traditional Holter Problems</h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-red-600 text-sm">✗</span>
                            </div>
                            <div>
                              <p className="font-medium">Short Duration Misses Arrhythmias</p>
                              <p className="text-sm text-gray-600">24-48 hours often miss intermittent issues</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-red-600 text-sm">✗</span>
                            </div>
                            <div>
                              <p className="font-medium">Uncomfortable Wires & Patches</p>
                              <p className="text-sm text-gray-600">Sticky electrodes irritate skin, wires tangle</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-red-600 text-sm">✗</span>
                            </div>
                            <div>
                              <p className="font-medium">Multiple Clinic Visits Required</p>
                              <p className="text-sm text-gray-600">Setup, pickup, and result discussions take time</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SKIIN Solutions */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-teal-600 mb-4">SKIIN's Solution</h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-teal-600" />
                            </div>
                            <div>
                              <p className="font-medium">14 Days = Higher Detection Rate</p>
                              <p className="text-sm text-gray-600">7x more arrhythmias detected vs 24h monitoring</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-teal-600" />
                            </div>
                            <div>
                              <p className="font-medium">Comfortable Smart Textile</p>
                              <p className="text-sm text-gray-600">No adhesives, no wires - just slip on like clothing</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-teal-600" />
                            </div>
                            <div>
                              <p className="font-medium">Everything Handled From Home</p>
                              <p className="text-sm text-gray-600">Device delivered, data uploads automatically, zero clinic visits</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features & Benefits */}
                  <div>
                    <h3 className="text-3xl font-bold text-center mb-12 text-navy-900">How SKIIN Works in Practice</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                          <Clock className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-navy-900">Continuous 14-Day ECG</h4>
                          <p className="text-gray-600 text-sm">
                            SKIIN captures heart rhythm data for up to two weeks - vastly longer than 24-48 hours of standard Holters.
                          </p>
                          <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                            <p className="text-xs text-teal-700 font-medium">
                              Benefit: Higher chance of detecting intermittent AFib or arrhythmias
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                          <Heart className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-navy-900">Comfortable Wearable Tech</h4>
                          <p className="text-gray-600 text-sm">
                            Soft chest band with dry electrodes. Wearable and washable - you might even forget you're wearing it.
                          </p>
                          <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                            <p className="text-xs text-teal-700 font-medium">
                              Benefit: Normal life - work, sleep, exercise with minimal disruption
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                          <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-navy-900">Clinically Accurate Data</h4>
                          <p className="text-gray-600 text-sm">
                            Hospital-grade ECG readings. CE-marked and Swissmedic approved as Class IIa medical device.
                          </p>
                          <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                            <p className="text-xs text-teal-700 font-medium">
                              Benefit: Results as reliable as traditional devices you can trust
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                          <Brain className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-navy-900">AI Analysis & Review</h4>
                          <p className="text-gray-600 text-sm">
                            Machine learning algorithms analyze ECG data, reviewed by board-certified Swiss cardiologists.
                          </p>
                          <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                            <p className="text-xs text-teal-700 font-medium">
                              Benefit: Comprehensive report with clear next steps for your doctor
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Why It Matters Section */}
                  <Card className="bg-gradient-to-br from-navy-50 to-teal-50 border-0">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-navy-900 text-center">Why Early Detection Matters</h3>
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-4xl font-bold text-red-600 mb-2">#1</div>
                          <p className="text-sm text-gray-700">Heart disease is the leading cause of death worldwide</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-red-600 mb-2">70%</div>
                          <p className="text-sm text-gray-700">Of heart attacks and strokes strike with no warning</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
                          <p className="text-sm text-gray-700">Detection of rhythm issues can save lives with early action</p>
                        </div>
                      </div>
                      <p className="text-center mt-6 text-gray-600 italic">
                        "You don't need to be a patient to protect your health. SKIIN brings hospital-grade insight into everyday life."
                      </p>
                    </CardContent>
                  </Card>

                  {/* Getting Started Process */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-navy-900 text-center">Getting Started with SKIIN is Simple</h3>
                    <div className="grid md:grid-cols-5 gap-4 text-center">
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">1</div>
                        <p className="text-sm font-medium">Talk to your doctor or complete our online eligibility form</p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">2</div>
                        <p className="text-sm font-medium">Receive SKIIN band at your home with setup instructions</p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">3</div>
                        <p className="text-sm font-medium">Wear for up to 14 days during normal daily activities</p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">4</div>
                        <p className="text-sm font-medium">Return device - we handle data analysis and reporting</p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">5</div>
                        <p className="text-sm font-medium">Discuss comprehensive results and next steps with your doctor</p>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Button 
                        size="lg" 
                        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
                        asChild
                      >
                        <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                          See Full Process Details →
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Insurance & Coverage */}
                  <Card className="border-teal-200 bg-teal-50">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <AlertCircle className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                          <h4 className="font-bold text-navy-900">Insurance Coverage in Switzerland</h4>
                          <p className="text-gray-700">
                            <span className="font-medium">Costs:</span> In most cases, 14-day Holter monitoring costs are covered by basic health insurance (Grundversicherung) when prescribed by a doctor. 
                            SKIIN uses standard TARMED billing codes (17.0210) for long-term ECG monitoring.
                          </p>
                          <p className="text-sm text-gray-600">
                            Always verify coverage with your insurance provider. We can assist with documentation for insurance claims.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Section */}
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-navy-900">Ready to Take Charge of Your Heart Health?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      SKIIN works with your doctor as part of a comprehensive care plan. Early detection gives you more treatment options and better outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-navy-600 hover:bg-navy-700 text-white"
                        asChild
                      >
                        <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                          Start Your Assessment
                        </Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                        asChild
                      >
                        <Link to={language === 'en' ? '/evidence' : `/${language}/evidence`}>
                          View Clinical Evidence
                        </Link>
                      </Button>
                    </div>
                  </div>

                </TabsContent>

                {/* SKIIN 3X Screening™ (Tritest) Tab */}
                <TabsContent value="tritest" className="space-y-12">
                  
                  {/* Header with Coming Soon Badge */}
                  <div className="text-center mb-12">
                    <Badge className="mb-6 bg-teal-600 text-white px-6 py-2 text-lg">Coming Q1 2026</Badge>
                    <h2 className="text-4xl font-bold text-navy-900 mb-6">
                      SKIIN 3X Screening™
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                      <span className="font-semibold text-teal-600">One system, three screenings.</span> The future of preventive cardiology - 
                      the only home-based wearable that screens for the top 3 silent killers of heart health in one go.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      (Currently in advanced development – expected to be available in Switzerland by early 2026, pending regulatory approvals)
                    </p>
                  </div>

                  {/* The Silent Triad Problem */}
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-red-900 text-center">The Silent Triad: Connected Risk Factors</h3>
                      <p className="text-gray-700 mb-6 text-center">
                        Cardiac, hypertensive, and sleep risk factors are interconnected, yet they are usually tested separately. 
                        SKIIN 3X breaks these silos with comprehensive assessment.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
                          <p className="text-sm text-gray-700">of heart disease patients have at least 2 of these conditions</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-red-600 mb-2">3x</div>
                          <p className="text-sm text-gray-700">higher cardiovascular risk when conditions occur together</p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
                          <p className="text-sm text-gray-700">better treatment outcomes with complete assessment</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Triple Technology Overview */}
                  <div>
                    <h3 className="text-3xl font-bold text-center mb-12 text-navy-900">Three Vital Screenings in One Wearable</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      
                      {/* Arrhythmia Detection */}
                      <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors hover:shadow-xl">
                        <CardContent className="p-8 text-center">
                          <div className="bg-teal-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-12 h-12 text-teal-600" />
                          </div>
                          <h4 className="text-xl font-bold mb-4 text-navy-900">Arrhythmia Detection</h4>
                          <p className="text-gray-600 mb-6">
                            14-day ECG for atrial fibrillation and other irregular rhythms (current SKIIN technology expanded)
                          </p>
                          <div className="space-y-2 text-sm text-gray-500">
                            <p>• Detect AFib and arrhythmias</p>
                            <p>• Monitor heart rate patterns</p>
                            <p>• Correlate with symptoms</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Hypertension Monitoring */}
                      <Card className="border-2 border-navy-200 hover:border-navy-400 transition-colors hover:shadow-xl">
                        <CardContent className="p-8 text-center">
                          <div className="bg-navy-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Activity className="w-12 h-12 text-navy-600" />
                          </div>
                          <h4 className="text-xl font-bold mb-4 text-navy-900">Hypertension Monitoring</h4>
                          <p className="text-gray-600 mb-6">
                            24-hour ambulatory blood pressure measurements across multiple days without cuff inflations
                          </p>
                          <div className="space-y-2 text-sm text-gray-500">
                            <p>• Detect masked hypertension</p>
                            <p>• Monitor night-time dipping</p>
                            <p>• Identify white coat syndrome</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Sleep Apnea Assessment */}
                      <Card className="border-2 border-gray-200 hover:border-gray-400 transition-colors hover:shadow-xl">
                        <CardContent className="p-8 text-center">
                          <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Moon className="w-12 h-12 text-gray-600" />
                          </div>
                          <h4 className="text-xl font-bold mb-4 text-navy-900">Sleep Apnea Risk Assessment</h4>
                          <p className="text-gray-600 mb-6">
                            Overnight respiratory and pulse-oximetry data to flag potential sleep apnea episodes
                          </p>
                          <div className="space-y-2 text-sm text-gray-500">
                            <p>• Detect sleep apnea events</p>
                            <p>• Monitor oxygen saturation</p>
                            <p>• Assess sleep quality metrics</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Value Proposition */}
                  <div className="bg-gradient-to-br from-navy-50 to-teal-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-navy-900 text-center">Why Triple Screening is Revolutionary</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      
                      {/* For Patients */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-teal-600">For Patients:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>One comprehensive test instead of three separate procedures</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>More proactive health management with complete picture</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>Earlier detection when treatment options are most effective</span>
                          </li>
                        </ul>
                      </div>

                      {/* For Healthcare Providers */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-navy-600">For Healthcare Providers:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-navy-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>More comprehensive data to inform diagnosis and treatment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-navy-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>Streamlined screening programs - one device, one monitoring period</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-navy-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span>Cost-effective approach to preventive cardiology</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sample Report Preview */}
                  <Card className="border-2 border-teal-400">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-navy-900 text-center">Your Complete Heart 360° Report</h3>
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <p className="text-gray-700 mb-4">
                          SKIIN 3X will provide a comprehensive report combining all three assessments:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="bg-white p-4 rounded">
                            <p className="font-medium text-teal-600">ECG Analysis</p>
                            <p className="text-gray-600">Heart rhythm summary + event detection</p>
                          </div>
                          <div className="bg-white p-4 rounded">
                            <p className="font-medium text-navy-600">BP Profile</p>
                            <p className="text-gray-600">24-hour pressure patterns + trends</p>
                          </div>
                          <div className="bg-white p-4 rounded">
                            <p className="font-medium text-gray-600">Sleep Analysis</p>
                            <p className="text-gray-600">Respiratory events + sleep quality</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button 
                          variant="outline"
                          className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                          asChild
                        >
                          <a 
                            href="/new_images/patient-report-tricorder (3) (1).html" 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Sample Report (Not Final - Coming Soon) →
                          </a>
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">
                          * Preview report format - final version will include all three screenings
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Innovation Message */}
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-navy-900">The Future of Preventive Cardiology</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      SKIIN 3X represents our evolution from a single-focus device to a comprehensive prevention platform. 
                      This innovation showcases that we're not just improving existing tests - we're reimagining how cardiac screening should work.
                    </p>
                    <p className="text-teal-600 font-medium italic">
                      "From Screening to Prevention: a platform that evolves with your health"
                    </p>
                  </div>

                  {/* Waitlist Signup */}
                  <Card className="bg-gradient-to-r from-teal-500 to-navy-600 text-white">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">Be Among the First</h3>
                      <p className="text-lg mb-6 opacity-90">
                        Join our early access list for SKIIN 3X Screening™ and receive priority access when it launches, 
                        plus exclusive updates on this groundbreaking technology.
                      </p>
                      <div className="space-y-4">
                        <Button 
                          size="lg"
                          className="bg-white text-navy-600 hover:bg-gray-100 px-8 py-4"
                          asChild
                        >
                          <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                            Join Early Access List →
                          </Link>
                        </Button>
                        <p className="text-sm opacity-80">
                          We'll notify you when SKIIN 3X becomes available in Switzerland
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQ for Tritest */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-navy-900">Frequently Asked About SKIIN 3X</h3>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <p className="font-medium text-navy-900 mb-2">Can I get the 3X screening now?</p>
                        <p className="text-gray-600 text-sm">
                          Not yet. The heart rhythm monitoring (14-day ECG) is available now. Blood pressure and sleep monitoring 
                          add-ons are coming Q1 2026. You can get started with heart monitoring and be first in line for the full 3X when it launches.
                        </p>
                      </div>
                      <div className="border-b border-gray-200 pb-4">
                        <p className="font-medium text-navy-900 mb-2">Will it be covered by insurance?</p>
                        <p className="text-gray-600 text-sm">
                          We're working with Swiss insurers to ensure coverage. Each component (ECG, BP, sleep) is typically covered when prescribed separately, 
                          so we expect similar coverage for the combined screening.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-navy-900 mb-2">How will this differ from current SKIIN?</p>
                        <p className="text-gray-600 text-sm">
                          Current SKIIN focuses exclusively on heart rhythm (ECG). SKIIN 3X will add continuous blood pressure monitoring 
                          and sleep apnea detection to provide a complete cardiovascular risk assessment in one wearable device.
                        </p>
                      </div>
                    </div>
                  </div>

                </TabsContent>

                {/* SKIIN 3X Screening Tab (Coming Soon) */}
                <TabsContent value="tritest" className="space-y-8">
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-teal-600 text-white px-4 py-1">Coming Q1 2026</Badge>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">
                      SKIIN 3X Screening™
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      One device, three vital tests – the future of preventive cardiology. Complete cardiovascular assessment in the comfort of your home.
                    </p>
                  </div>

                  {/* Triple Technology */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors">
                      <CardContent className="p-6">
                        <div className="bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                          <Heart className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Continuous ECG</h3>
                        <p className="text-gray-600 mb-4">
                          14-day arrhythmia detection (current SKIIN technology)
                        </p>
                        <ul className="text-sm space-y-1 text-gray-500">
                          <li>• Detect AFib</li>
                          <li>• Find arrhythmias</li>
                          <li>• Monitor heart rate</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors">
                      <CardContent className="p-6">
                        <div className="bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                          <Activity className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Ambulatory Blood Pressure</h3>
                        <p className="text-gray-600 mb-4">
                          24-hour BP patterns without cuff inflations
                        </p>
                        <ul className="text-sm space-y-1 text-gray-500">
                          <li>• Detect hypertension</li>
                          <li>• Night-time dipping</li>
                          <li>• White coat syndrome</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors">
                      <CardContent className="p-6">
                        <div className="bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                          <Moon className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Sleep Apnea Detection</h3>
                        <p className="text-gray-600 mb-4">
                          Nighttime breathing and oxygen analysis
                        </p>
                        <ul className="text-sm space-y-1 text-gray-500">
                          <li>• Detect sleep apnea</li>
                          <li>• Oxygen saturation</li>
                          <li>• Sleep quality metrics</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Why It Matters */}
                  <Card className="bg-gradient-to-br from-navy-50 to-teal-50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6 text-navy-900">Why Triple Screening Matters</h3>
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-navy-600 mb-2">75%</div>
                          <p className="text-sm text-gray-600">
                            of heart disease patients have at least 2 of these conditions
                          </p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-navy-600 mb-2">3x</div>
                          <p className="text-sm text-gray-600">
                            higher risk when conditions occur together
                          </p>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-navy-600 mb-2">90%</div>
                          <p className="text-sm text-gray-600">
                            better treatment outcomes with complete assessment
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Early Access */}
                  <Card className="border-2 border-teal-400">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-xl font-semibold mb-4">Be Among the First</h3>
                      <p className="text-gray-600 mb-6">
                        Join our early access list for SKIIN 3X Screening™ and receive priority access 
                        when it launches, plus exclusive updates on this groundbreaking technology.
                      </p>
                      <Button 
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                        asChild
                      >
                        <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                          Join Early Access List
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </Section>

          {/* 5 Simple Steps Section */}
          <Section background="white" spacing="large">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-100 to-navy-100 rounded-3xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      {/* SKIIN Device Visual */}
                      <div className="bg-navy-900 rounded-2xl p-6 mb-8">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="w-16 h-8 bg-gray-300 rounded-full"></div>
                          <div className="text-white font-bold text-xl">SKIIN</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          5 simple<br />steps
                        </h3>
                        <p className="text-lg text-navy-700">
                          to heart<br />health.
                        </p>
                      </div>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-navy-200 opacity-30"></div>
                  </div>
                </div>

                {/* Right Steps */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-navy-900 mb-8">How it works</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 animate-on-scroll opacity-0 animate-fade-up">
                      <div className="w-8 h-8 bg-navy-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-lg text-navy-900">Complete Form</h4>
                        <p className="text-gray-600">Fill out the self-referral form—no doctor's referral needed. Our team will confirm your eligibility.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 animate-on-scroll opacity-0 animate-fade-up" style={{animationDelay: '100ms'}}>
                      <div className="w-8 h-8 bg-navy-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-lg text-navy-900">Receive Band</h4>
                        <p className="text-gray-600">We'll deliver the SKIIN Holter Kit to your door with easy setup and support from our team.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 animate-on-scroll opacity-0 animate-fade-up" style={{animationDelay: '200ms'}}>
                      <div className="w-8 h-8 bg-navy-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-lg text-navy-900">Wear & Monitor</h4>
                        <p className="text-gray-600">Wear the smart textile band for up to 14 days. Forget wires - this wireless Holter ECG captures everything automatically.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 animate-on-scroll opacity-0 animate-fade-up" style={{animationDelay: '300ms'}}>
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-lg text-navy-900">Send it Back</h4>
                        <p className="text-gray-600">After 14 days, return the device using our prepaid shipping label.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 animate-on-scroll opacity-0 animate-fade-up" style={{animationDelay: '400ms'}}>
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-semibold text-lg text-navy-900">Get Results</h4>
                        <p className="text-gray-600">Receive comprehensive analysis from Swiss cardiologists within 48 hours. Take action on your heart health.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <Button 
                      size="lg" 
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
                      asChild
                    >
                      <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                        Start Your Assessment →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Call to Action Section */}
          <Section background="dark" spacing="default">
            <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Find the Right Solution for You
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you need extended monitoring, arrhythmia detection, or preventive screening, SKIIN has a solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-navy-600 hover:bg-gray-100"
                asChild
              >
                <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                  Get Started
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-600"
                asChild
              >
                <Link to={language === 'en' ? '/partners' : `/${language}/partners`}>
                  For Healthcare Providers
                </Link>
              </Button>
            </div>
            </div>
          </Section>
    </PageLayout>
  );
};

export default Solutions;