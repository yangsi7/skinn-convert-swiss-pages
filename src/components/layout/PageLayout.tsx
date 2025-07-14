import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Unified page layout component that includes Navbar and Footer
 * Handles overflow issues and provides consistent structure
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className={cn('page-content overflow-fix-x', className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;