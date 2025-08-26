import React, { useState } from 'react';
import { MinimalInput } from '@/components/ui/minimal-input';
import { MinimalCard } from '@/components/ui/minimal-card';
import { OTPVerification } from '../components/OTPVerification';
import { StageHeader } from '../components/StageHeader';
import { StageFooter } from '../components/StageFooter';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, CheckCircle } from 'lucide-react';
import { authService } from '@/services/authService';

interface ContactAccountStageProps {
  initialData?: {
    email?: string;
    dateOfBirth?: string;
    emailVerified?: boolean;
  };
  onStageComplete: (data: any) => void;
  onEmailVerified: (email: string, verified: boolean) => void;
}

export const ContactAccountStage: React.FC<ContactAccountStageProps> = ({
  initialData = {},
  onStageComplete,
  onEmailVerified,
}) => {
  const [email, setEmail] = useState(initialData.email || '');
  const [dob, setDob] = useState(initialData.dateOfBirth || '');
  const [emailVerified, setEmailVerified] = useState(initialData.emailVerified || false);
  const [ageError, setAgeError] = useState('');
  
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };
  
  const handleDobChange = (value: string) => {
    setDob(value);
    const age = calculateAge(value);
    if (age < 18) {
      setAgeError('You must be at least 18 years old');
    } else {
      setAgeError('');
    }
  };
  
  const handleSendOTP = async (email: string) => {
    /* ===== DEVELOPMENT BYPASS - TEMPORARY =====
     * TO REVERT: Remove lines 54-57 (the if block below)
     * REASON: OTP email service not configured in development
     * PRODUCTION: This bypass MUST be removed - the authService is correctly configured
     * TEST WITH: Use email containing 'test@' and OTP code '123456'
     * =========================================== */
    // Development bypass: Allow test emails to skip real OTP
    if (import.meta.env.DEV && email.includes('test@')) {
      console.log('Development mode: Bypassing OTP for test email');
      return;
    }
    
    // PRODUCTION CODE - Correctly configured, DO NOT modify
    const result = await authService.sendOTP(email);
    if (!result.success) {
      throw new Error(result.error || 'Failed to send OTP');
    }
  };
  
  const handleVerifyOTP = async (code: string) => {
    /* ===== DEVELOPMENT BYPASS - TEMPORARY =====
     * TO REVERT: Remove lines 72-75 (the if block below)
     * REASON: Allows testing without actual email delivery
     * PRODUCTION: This bypass MUST be removed - the authService verification works correctly
     * TEST WITH: Use OTP code '123456' for any test@ email
     * =========================================== */
    // Development bypass: Accept "123456" as valid OTP for test emails
    if (import.meta.env.DEV && email.includes('test@') && code === '123456') {
      console.log('Development mode: Accepting test OTP');
      return true;
    }
    
    // PRODUCTION CODE - Correctly configured, DO NOT modify
    const result = await authService.verifyOTP(email, code);
    return result.success;
  };
  
  const handleEmailVerified = () => {
    setEmailVerified(true);
    onEmailVerified(email, true);
  };
  
  const canProceed = email && dob && !ageError && emailVerified;
  
  const handleContinue = () => {
    if (canProceed) {
      onStageComplete({
        email,
        dateOfBirth: dob,
        emailVerified
      });
    }
  };
  
  return (
    <MinimalCard variant="soft" padding="lg">
      <StageHeader
        title="Contact & Account"
        description="We'll create a secure account to save your progress"
      />
      
      <div className="space-y-6">
        <MinimalInput
          id="email"
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
        />
        
        {email && !emailVerified && (
          <OTPVerification
            email={email}
            onVerified={handleEmailVerified}
            onSendOTP={handleSendOTP}
            onVerifyOTP={handleVerifyOTP}
          />
        )}
        
        {emailVerified && (
          <Alert className="bg-green-50 border-green-300">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertDescription className="text-green-800 font-ibm-plex-sans">
              Email verified successfully
            </AlertDescription>
          </Alert>
        )}
        
        <div className="relative">
          <MinimalInput
            id="dob"
            type="date"
            label="Date of Birth"
            value={dob}
            onChange={(e) => handleDobChange(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            error={ageError}
            required
          />
          <Calendar className="absolute right-4 top-11 h-5 w-5 text-[#475259] pointer-events-none" />
        </div>
      </div>
      
      <StageFooter
        onNext={handleContinue}
        nextDisabled={!canProceed}
        showSave={true}
        onSave={() => console.log('Save for later')}
      />
    </MinimalCard>
  );
};