import { supabase } from '@/lib/supabase';
import type { AuthError } from '@supabase/supabase-js';

export class AuthService {
  private static instance: AuthService;
  
  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  /**
   * Send OTP to email using secure edge function with rate limiting
   */
  async sendOTP(email: string): Promise<{
    success: boolean;
    error?: string;
    retryAfter?: number;
  }> {
    try {
      // Get client information for security tracking
      const clientIP = await this.getClientIP();
      const userAgent = navigator.userAgent;

      // Call the secure OTP handler edge function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/otp-security-handler`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          email,
          action: 'send',
          clientIP,
          userAgent
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error types with user-friendly messages
        if (response.status === 429) {
          return { 
            success: false, 
            error: data.error || 'Too many attempts. Please try again later.',
            retryAfter: data.retry_after
          };
        }
        
        if (response.status === 400) {
          return { 
            success: false, 
            error: data.error || 'Invalid email address'
          };
        }

        console.error('Error sending OTP:', data);
        return { 
          success: false, 
          error: this.getHumanReadableError(data.error || 'Failed to send verification code')
        };
      }

      return { success: true };
    } catch (error) {
      console.error('Network error sending OTP:', error);
      
      // Handle offline/network errors
      if (!navigator.onLine) {
        return { 
          success: false, 
          error: 'No internet connection. Please check your network and try again.'
        };
      }
      
      return { 
        success: false, 
        error: 'Network error. Please check your connection and try again.'
      };
    }
  }

  /**
   * Verify OTP code from email
   */
  async verifyOTP(email: string, token: string): Promise<{
    success: boolean;
    session?: any;
    user?: any;
    error?: string;
  }> {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email'
      });

      if (error) {
        console.error('Error verifying OTP:', error);
        return { success: false, error: error.message };
      }

      return {
        success: true,
        session: data.session,
        user: data.user
      };
    } catch (error) {
      console.error('Unexpected error verifying OTP:', error);
      return { success: false, error: 'Failed to verify code' };
    }
  }

  /**
   * Get current session
   */
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error getting session:', error);
      return null;
    }
    
    return session;
  }

  /**
   * Get current user
   */
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Error getting user:', error);
      return null;
    }
    
    return user;
  }

  /**
   * Sign out user
   */
  async signOut(): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Error signing out:', error);
        return { success: false, error: error.message };
      }
      
      return { success: true };
    } catch (error) {
      console.error('Unexpected error signing out:', error);
      return { success: false, error: 'Failed to sign out' };
    }
  }

  /**
   * Update user metadata
   */
  async updateUserMetadata(metadata: Record<string, any>): Promise<{
    success: boolean;
    user?: any;
    error?: string;
  }> {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: metadata
      });

      if (error) {
        console.error('Error updating user metadata:', error);
        return { success: false, error: error.message };
      }

      return {
        success: true,
        user: data.user
      };
    } catch (error) {
      console.error('Unexpected error updating metadata:', error);
      return { success: false, error: 'Failed to update user data' };
    }
  }

  /**
   * Get client IP address for security tracking
   */
  private async getClientIP(): Promise<string> {
    try {
      // Try to get IP from WebRTC first (most accurate)
      const ip = await this.getIPFromWebRTC();
      if (ip && ip !== 'unknown') return ip;
      
      // Fallback to external service
      const response = await fetch('https://api.ipify.org?format=json', {
        method: 'GET',
        timeout: 3000
      } as any);
      const data = await response.json();
      return data.ip || 'unknown';
    } catch (error) {
      console.warn('Could not determine client IP:', error);
      return 'unknown';
    }
  }

  /**
   * Get IP from WebRTC (most accurate method)
   */
  private getIPFromWebRTC(): Promise<string> {
    return new Promise((resolve) => {
      try {
        const RTCPeerConnection = window.RTCPeerConnection || 
                                  (window as any).webkitRTCPeerConnection || 
                                  (window as any).mozRTCPeerConnection;
        
        if (!RTCPeerConnection) {
          resolve('unknown');
          return;
        }

        const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
        
        pc.createDataChannel('');
        pc.onicecandidate = (ice) => {
          if (ice && ice.candidate) {
            const candidate = ice.candidate.candidate;
            const match = candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/);
            if (match) {
              resolve(match[1]);
              pc.close();
              return;
            }
          }
        };
        
        pc.createOffer().then(offer => pc.setLocalDescription(offer));
        
        // Timeout after 3 seconds
        setTimeout(() => {
          pc.close();
          resolve('unknown');
        }, 3000);
      } catch (error) {
        resolve('unknown');
      }
    });
  }

  /**
   * Convert technical error messages to user-friendly ones
   */
  private getHumanReadableError(error: string): string {
    const errorMap: Record<string, string> = {
      'Invalid email': 'Please enter a valid email address.',
      'User not found': 'No account found with this email address.',
      'Invalid credentials': 'The verification code is incorrect or has expired.',
      'Email not confirmed': 'Please check your email and click the verification link.',
      'Too many requests': 'Too many attempts. Please wait a few minutes before trying again.',
      'Network error': 'Connection problem. Please check your internet and try again.',
      'Timeout': 'Request timed out. Please try again.',
      'Rate limit exceeded': 'Too many attempts. Please wait before trying again.',
      'Invalid token': 'The verification code is invalid or has expired.',
      'Expired token': 'The verification code has expired. Please request a new one.',
      'Token already used': 'This verification code has already been used. Please request a new one.'
    };

    // Check for exact matches first
    if (errorMap[error]) {
      return errorMap[error];
    }

    // Check for partial matches
    for (const [key, message] of Object.entries(errorMap)) {
      if (error.toLowerCase().includes(key.toLowerCase())) {
        return message;
      }
    }

    // Default fallback with helpful guidance
    if (error.toLowerCase().includes('email')) {
      return 'There was an issue with your email address. Please check it and try again.';
    }
    
    if (error.toLowerCase().includes('network') || error.toLowerCase().includes('connection')) {
      return 'Network error. Please check your internet connection and try again.';
    }

    // Generic fallback
    return 'Something went wrong. Please try again or contact support if the problem persists.';
  }
}

export const authService = AuthService.getInstance();