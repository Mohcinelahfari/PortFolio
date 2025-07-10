# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Subject:
\`\`\`
New Contact Form Submission from {{from_name}}
\`\`\`

### Content:
\`\`\`
Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
\`\`\`

4. Set the **To Email** to your email address
5. Set **From Name** to `{{from_name}}`
6. Set **Reply To** to `{{reply_to}}`
7. Save and copy the **Template ID**

## 4. Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## 5. Set Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
\`\`\`

## 6. Test the Form

1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Verify your email service setup
- **Template not working**: Check template variable names match
- **Rate limiting**: EmailJS free plan has monthly limits

## EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 1 email template
- Basic support

For production use, consider upgrading to a paid plan for higher limits and better support.
\`\`\`

Let me also remove the old server action since we're using EmailJS now:

```typescriptreact file="app/actions/contact.ts" isDeleted="true"
...deleted...
