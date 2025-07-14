import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Laptop, Building2, Users, FileText, Shield, Activity } from 'lucide-react';

/**
 * Partners page - Different user types: GP, Cardiologist, Telmed, Corporate
 * Based on new architecture with subsections for various healthcare providers
 */
const Partners = () => {
  const t = useTranslation('partners');
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('gp');

  return (
    <>
      <Helmet>
        <title>{t.pageTitle || 'Partners - SKIIN Healthcare Providers'}</title>
        <meta name="description" content={t.pageDescription || 'Partner with SKIIN for advanced cardiac monitoring solutions. For GPs, cardiologists, telemedicine, and corporate health.'} />
      </Helmet>
      
      <Navbar />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A73E8] to-[#1557B0] text-white py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.heroTitle || 'Partner with SKIIN'}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {t.heroSubtitle || 'Elevate your cardiac care with advanced monitoring solutions'}
              </p>
            </div>
          </div>
        </section>

        {/* Partners Tabs Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                  <TabsTrigger value="gp">General Practitioners</TabsTrigger>
                  <TabsTrigger value="cardiologist">Cardiologists</TabsTrigger>
                  <TabsTrigger value="telmed">Telemedicine</TabsTrigger>
                  <TabsTrigger value="corporate">Corporate Health</TabsTrigger>
                </TabsList>

                {/* General Practitioners Tab */}
                <TabsContent value="gp" className="space-y-8">
                  <div className="text-center mb-12">
                    <Stethoscope className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      For General Practitioners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Enhance your diagnostic capabilities with SKIIN's extended monitoring. Provide better cardiac care without referring every patient to specialists.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">In-Practice Benefits</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-[#1A73E8] mr-2">✓</span>
                            <span>Perform extended cardiac monitoring in your practice</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#1A73E8] mr-2">✓</span>
                            <span>Reduce unnecessary specialist referrals</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#1A73E8] mr-2">✓</span>
                            <span>Increase diagnostic confidence with 14-day data</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#1A73E8] mr-2">✓</span>
                            <span>Simple integration with existing workflow</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Financial Advantages</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-[#0BB5A2] mr-2">✓</span>
                            <span>Reimbursable through Swiss insurance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#0BB5A2] mr-2">✓</span>
                            <span>Additional revenue stream for your practice</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#0BB5A2] mr-2">✓</span>
                            <span>No upfront equipment investment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#0BB5A2] mr-2">✓</span>
                            <span>Service-based model with full support</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Getting Started is Easy</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                        <h4 className="font-semibold mb-2">Sign Up</h4>
                        <p className="text-sm text-gray-600">Register your practice and receive training materials</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                        <h4 className="font-semibold mb-2">Prescribe</h4>
                        <p className="text-sm text-gray-600">Order SKIIN monitoring for appropriate patients</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#1A73E8] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                        <h4 className="font-semibold mb-2">Review</h4>
                        <p className="text-sm text-gray-600">Receive comprehensive reports for diagnosis</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Cardiologists Tab */}
                <TabsContent value="cardiologist" className="space-y-8">
                  <div className="text-center mb-12">
                    <Heart className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      For Cardiologists
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Advanced cardiac monitoring that matches your expertise. Get deeper insights with extended data and AI-powered analysis.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <Activity className="w-12 h-12 text-[#1A73E8] mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Clinical Excellence</h3>
                        <p className="text-gray-600 text-sm">
                          99.5% signal reliability with clinical-grade 3-lead ECG. Full disclosure data available for detailed analysis.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <FileText className="w-12 h-12 text-[#1A73E8] mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Comprehensive Reports</h3>
                        <p className="text-gray-600 text-sm">
                          AI-assisted analysis with expert review. Detailed arrhythmia burden calculations and event correlation.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <Shield className="w-12 h-12 text-[#1A73E8] mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Research Ready</h3>
                        <p className="text-gray-600 text-sm">
                          Export data for research. Participate in clinical trials with extended monitoring capabilities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-6">Clinical Applications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Diagnostic Uses:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Cryptogenic stroke evaluation</li>
                          <li>• Post-ablation monitoring</li>
                          <li>• Drug efficacy assessment</li>
                          <li>• Pre-operative cardiac screening</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Patient Populations:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Paroxysmal AFib suspects</li>
                          <li>• Post-MI patients</li>
                          <li>• Syncope evaluation</li>
                          <li>• High-risk screening</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Telemedicine Tab */}
                <TabsContent value="telmed" className="space-y-8">
                  <div className="text-center mb-12">
                    <Laptop className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      For Telemedicine Providers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Perfect for remote cardiac care. SKIIN enables comprehensive monitoring without in-person visits.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Remote Monitoring Excellence</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Laptop className="w-5 h-5 text-[#1A73E8] mr-3 flex-shrink-0 mt-0.5" />
                          <span>Fully digital workflow from prescription to report</span>
                        </li>
                        <li className="flex items-start">
                          <Laptop className="w-5 h-5 text-[#1A73E8] mr-3 flex-shrink-0 mt-0.5" />
                          <span>Direct-to-patient device shipping</span>
                        </li>
                        <li className="flex items-start">
                          <Laptop className="w-5 h-5 text-[#1A73E8] mr-3 flex-shrink-0 mt-0.5" />
                          <span>Real-time data monitoring capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <Laptop className="w-5 h-5 text-[#1A73E8] mr-3 flex-shrink-0 mt-0.5" />
                          <span>Integrated video consultation support</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Platform Integration</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 flex-shrink-0 mt-0.5" />
                          <span>API integration with major telehealth platforms</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 flex-shrink-0 mt-0.5" />
                          <span>HIPAA and Swiss data protection compliant</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 flex-shrink-0 mt-0.5" />
                          <span>White-label options available</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-5 h-5 text-[#0BB5A2] mr-3 flex-shrink-0 mt-0.5" />
                          <span>Automated patient onboarding</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Card className="border-[#1A73E8] border-2">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-semibold mb-4">Expand Your Service Offering</h3>
                      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Add comprehensive cardiac monitoring to your telehealth services. No physical infrastructure required - we handle device logistics while you focus on patient care.
                      </p>
                      <Button size="lg" className="bg-[#1A73E8] hover:bg-[#1557B0]">
                        Schedule Integration Demo
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Corporate Health Tab */}
                <TabsContent value="corporate" className="space-y-8">
                  <div className="text-center mb-12">
                    <Building2 className="w-16 h-16 text-[#1A73E8] mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      For Corporate Health Programs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Proactive cardiac screening for employee wellness programs. Reduce healthcare costs through early detection.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="text-center p-6">
                      <Users className="w-12 h-12 text-[#1A73E8] mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Executive Screening</h4>
                      <p className="text-sm text-gray-600">Comprehensive cardiac assessment for leadership teams</p>
                    </Card>
                    <Card className="text-center p-6">
                      <Heart className="w-12 h-12 text-[#1A73E8] mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Risk Assessment</h4>
                      <p className="text-sm text-gray-600">Identify at-risk employees before symptoms appear</p>
                    </Card>
                    <Card className="text-center p-6">
                      <FileText className="w-12 h-12 text-[#1A73E8] mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Wellness Integration</h4>
                      <p className="text-sm text-gray-600">Seamless addition to existing health programs</p>
                    </Card>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-6">Corporate Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3">For Your Company:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>✓ Reduce absenteeism from cardiac events</li>
                          <li>✓ Lower healthcare premiums through prevention</li>
                          <li>✓ Demonstrate commitment to employee health</li>
                          <li>✓ Data-driven wellness program decisions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">For Your Employees:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>✓ Convenient health screening at work</li>
                          <li>✓ Early detection of heart issues</li>
                          <li>✓ Peace of mind for families</li>
                          <li>✓ Personalized health insights</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Volume Pricing Available</h3>
                    <p className="text-gray-600 mb-6">Special rates for companies screening 50+ employees annually</p>
                    <Button size="lg" variant="outline" className="border-[#1A73E8] text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white">
                      Request Corporate Pricing
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-[#1A73E8] to-[#1557B0] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner with SKIIN?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join healthcare providers across Switzerland who are revolutionizing cardiac care with SKIIN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#1A73E8] hover:bg-gray-100"
                asChild
              >
                <Link to={language === 'en' ? '/contact' : `/${language}/contact`}>
                  Get Started Today
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1A73E8]"
                asChild
              >
                <Link to={language === 'en' ? '/evidence' : `/${language}/evidence`}>
                  View Clinical Evidence
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Partners;