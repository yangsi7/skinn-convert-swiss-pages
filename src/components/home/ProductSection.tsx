import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ProductBenefit } from './ProductBenefit';
import { 
  Clock, 
  Zap, 
  Share2, 
  Heart, 
  Brain, 
  Timer, 
  Award, 
  Shield 
} from 'lucide-react';

/**
 * v7.2 Product Section - 8 Benefits
 * Displays SKIIN's key benefits in a responsive grid
 */
export function ProductSection() {
  const t = useTranslation('home');
  const product = t.productSection;
  
  // Icon mapping for each benefit
  const benefitIcons = [
    Clock,    // Extended monitoring
    Zap,      // Fast start
    Share2,   // Seamless referrals
    Heart,    // Comfortable band
    Brain,    // AI-powered
    Timer,    // Fast turnaround
    Award,    // Proven technology
    Shield    // Health Canada licensed
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/5 to-background" data-testid="product-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {product.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {product.subtitle}
          </p>
        </div>

        {/* Benefits Grid - 2x4 on desktop, responsive on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {product.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <ProductBenefit
                key={index}
                icon={Icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground italic">
            {product.closing}
          </p>
        </div>

        {/* Visual Assets Integration - Product Images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="/assets/images/product/skiin-your-second-skin.png" 
              alt="SKIIN - Your Second Skin"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              data-testid="product-image-second-skin"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Soft as Your Second Skin</p>
                <p className="text-xs opacity-90 mt-1">Medical-grade comfort</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="/assets/images/product/wear-skiin-man-band-insert-pod.png" 
              alt="Easy to use - Insert pod into SKIIN band"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              data-testid="product-image-easy-setup"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Simple Setup</p>
                <p className="text-xs opacity-90 mt-1">Insert pod and start monitoring</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="/assets/images/product/smart-textile-knitting-electrodes.jpg" 
              alt="Smart textile technology with knitted electrodes"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              data-testid="product-image-technology"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Swiss Precision Technology</p>
                <p className="text-xs opacity-90 mt-1">Knitted electrode innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Preview Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative max-w-md">
            <img 
              src="/assets/images/app-live-ecg.png" 
              alt="SKIIN App showing live ECG monitoring"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
              data-testid="product-image-app"
            />
            <div className="absolute -bottom-4 -right-4 bg-medical-teal text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Real-time ECG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}