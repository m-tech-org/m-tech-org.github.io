/**
 * EmailJS Configuration
 * 
 * To set up EmailJS:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with the following variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{subject}} - Email subject
 *    - {{message}} - Email message content
 * 4. Get your Public Key from Account > API Keys
 * 5. Store the configuration in environment variables
 */

export const emailjsConfig = {
  // EmailJS Public Key (from Account > API Keys)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // EmailJS Service ID (from Email Services)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // EmailJS Template ID (from Email Templates)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  
  // Receiver email address (where you want to receive contact form submissions)
  receiverEmail: import.meta.env.VITE_RECEIVER_EMAIL || 'info@m-tech.com',
};

/**
 * Validates that all required EmailJS configuration is present
 */
export function isEmailJsConfigured(): boolean {
  return !!(
    emailjsConfig.publicKey &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId
  );
}
