import emailjs from '@emailjs/browser';
import {emailjsConfig, isEmailJsConfigured} from "../config/emailjs.ts";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Sends a contact form email using EmailJS
 * 
 * @param formData - The contact form data to send
 * @returns Promise with success status and message
 */
export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  // Check if EmailJS is configured
  if (!isEmailJsConfigured()) {
    console.warn('EmailJS is not configured. Please set up environment variables.');
    return {
      success: false,
      message: 'Email service is not configured. Please contact us directly at ' + emailjsConfig.receiverEmail,
    };
  }

  try {
    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      company: formData.company,
      message: formData.message,
      to_email: emailjsConfig.receiverEmail,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.',
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly at ' + emailjsConfig.receiverEmail,
    };
  }
}

/**
 * Validates contact form data
 */
export function validateContactForm(formData: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Simple email validation
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
