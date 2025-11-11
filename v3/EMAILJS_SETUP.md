# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions from your M-Tech website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use the following template structure:

### Template Content:

**Subject:**
```
New Contact Form Submission: {{subject}}
```

**Email Body:**
```html
<p><strong>New message from M-Tech contact form</strong></p>

<p><strong>From:</strong> {{from_name}}<br>
<strong>Email:</strong> {{from_email}}<br>
<strong>Subject:</strong> {{subject}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the M-Tech contact form.</em></p>
```

**To Email:**
```
{{to_email}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to **Account** > **General**
2. Find your **Public Key** under the API Keys section
3. Note down your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Configure Environment Variables

1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Fill in your EmailJS credentials in the `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_RECEIVER_EMAIL=your-email@example.com
```

3. Replace the placeholder values with your actual EmailJS credentials:
   - `VITE_EMAILJS_PUBLIC_KEY` - Your Public Key from Step 4
   - `VITE_EMAILJS_SERVICE_ID` - Your Service ID from Step 2
   - `VITE_EMAILJS_TEMPLATE_ID` - Your Template ID from Step 3
   - `VITE_RECEIVER_EMAIL` - The email address where you want to receive messages

## Step 6: Restart Your Development Server

After updating the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Visit the Contact page on your website
2. Fill out the contact form with test data
3. Click "Send Message"
4. Check your configured email address for the message

## Troubleshooting

### "Email service is not configured" error
- Make sure all environment variables are set in your `.env` file
- Restart your development server after updating `.env`
- Check that variable names match exactly (including `VITE_` prefix)

### Emails not being received
- Verify your EmailJS Service is properly connected
- Check your EmailJS dashboard for usage/quota limits
- Check spam/junk folder
- Verify the `to_email` field in your template matches your receiver email

### Form validation errors
- Ensure all required fields are filled out
- Name must be at least 2 characters
- Email must be valid format
- Subject must be at least 3 characters
- Message must be at least 10 characters

## EmailJS Free Tier Limits

The free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Limited support

For higher volumes, consider upgrading to a paid plan.

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Environment variables with `VITE_` prefix are exposed to the client
- EmailJS Public Key is safe to expose (it's meant to be public)
- For production, set these variables in your hosting platform's environment settings

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names from your `.env` file
3. Do not include the `.env` file in your deployment

### Example for Vercel:
1. Go to Project Settings > Environment Variables
2. Add each variable with its value
3. Redeploy your application

### Example for Netlify:
1. Go to Site Settings > Environment variables
2. Add each variable with its value
3. Trigger a new deploy

## Support

For EmailJS-specific issues, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
