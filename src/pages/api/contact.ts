import type { APIRoute } from 'astro';

interface ContactFormData {
  formType: 'booking' | 'general';
  name: string;
  email: string;
  phone: string;
  eventType?: string;
  guestCount?: string;
  datePreference?: string;
  budgetRange?: string;
  specialRequirements?: string;
  subject?: string;
  message?: string;
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields',
          details: 'Name, email, and phone are required'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({
          error: 'Invalid email format',
          details: 'Please provide a valid email address'
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Prepare email content based on form type
    let emailSubject: string;
    let emailContent: string;
    let htmlContent: string;

    if (formData.formType === 'booking') {
      emailSubject = `New Event Booking Inquiry - ${formData.name}`;
      emailContent = `
New Event Booking Inquiry Received

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Event Details:
- Event Type: ${formData.eventType || 'Not specified'}
- Guest Count: ${formData.guestCount || 'Not specified'}
- Preferred Date: ${formData.datePreference || 'Not specified'}
- Budget Range: ${formData.budgetRange || 'Not specified'}

Special Requirements:
${formData.specialRequirements || 'None specified'}

---
This inquiry was submitted through the Penelope's Venue contact form.
Please respond within 24 hours for booking inquiries.
      `.trim();

      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #2a4035; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: #2a4035; }
    .urgent { color: #d6b67e; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 New Event Booking Inquiry</h1>
    <p class="urgent">URGENT: Please respond within 24 hours</p>
  </div>

  <div class="content">
    <div class="section">
      <h2>Contact Information</h2>
      <p><span class="label">Name:</span> ${formData.name}</p>
      <p><span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a></p>
      <p><span class="label">Phone:</span> <a href="tel:${formData.phone}">${formData.phone}</a></p>
    </div>

    <div class="section">
      <h2>Event Details</h2>
      <p><span class="label">Event Type:</span> ${formData.eventType || 'Not specified'}</p>
      <p><span class="label">Guest Count:</span> ${formData.guestCount || 'Not specified'}</p>
      <p><span class="label">Preferred Date:</span> ${formData.datePreference || 'Not specified'}</p>
      <p><span class="label">Budget Range:</span> ${formData.budgetRange || 'Not specified'}</p>
    </div>

    ${formData.specialRequirements ? `
    <div class="section">
      <h2>Special Requirements</h2>
      <p>${formData.specialRequirements.replace(/\n/g, '<br>')}</p>
    </div>
    ` : ''}

    <div class="section" style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
      <p style="color: #666; font-size: 12px;">
        This inquiry was submitted through the Penelope's Venue contact form.<br>
        Priority: High - Booking inquiries require immediate attention.
      </p>
    </div>
  </div>
</body>
</html>
      `;
    } else {
      emailSubject = `General Inquiry - ${formData.subject} - ${formData.name}`;
      emailContent = `
General Inquiry Received

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Inquiry Details:
- Subject: ${formData.subject || 'Not specified'}

Message:
${formData.message || 'No message provided'}

---
This inquiry was submitted through the Penelope's Venue contact form.
Please respond within 4 hours during business hours.
      `.trim();

      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #2a4035; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: #2a4035; }
    .message { background: #f9f9f9; padding: 15px; border-left: 4px solid #d6b67e; }
  </style>
</head>
<body>
  <div class="header">
    <h1>💬 General Inquiry</h1>
    <p>Subject: ${formData.subject || 'Not specified'}</p>
  </div>

  <div class="content">
    <div class="section">
      <h2>Contact Information</h2>
      <p><span class="label">Name:</span> ${formData.name}</p>
      <p><span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a></p>
      <p><span class="label">Phone:</span> <a href="tel:${formData.phone}">${formData.phone}</a></p>
    </div>

    <div class="section">
      <h2>Message</h2>
      <div class="message">
        ${formData.message ? formData.message.replace(/\n/g, '<br>') : 'No message provided'}
      </div>
    </div>

    <div class="section" style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
      <p style="color: #666; font-size: 12px;">
        This inquiry was submitted through the Penelope's Venue contact form.<br>
        Priority: Normal - General inquiries should be addressed within 4 hours.
      </p>
    </div>
  </div>
</body>
</html>
      `;
    }

    // Send email via Plunk (you'll need to configure this)
    const plunkApiKey = import.meta.env.PLUNK_API_KEY;
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'events@penelopesvenue.com';

    if (plunkApiKey) {
      try {
        const plunkResponse = await fetch('https://api.useplunk.com/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${plunkApiKey}`,
          },
          body: JSON.stringify({
            to: contactEmail,
            subject: emailSubject,
            body: emailContent,
            html: htmlContent,
          }),
        });

        if (!plunkResponse.ok) {
          console.error('Plunk email failed:', await plunkResponse.text());
          // Continue with success response but log the error
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Continue with success response but log the error
      }
    }

    // Send confirmation email to user if enabled
    const sendConfirmation = import.meta.env.SEND_CONFIRMATION_EMAIL === 'true';

    if (sendConfirmation && plunkApiKey) {
      const confirmationSubject = formData.formType === 'booking'
        ? "We've Received Your Event Inquiry - Penelope's Venue"
        : "Thank You for Contacting Penelope's Venue";

      const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #2a4035; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .highlight { background: #d6b67e; color: #2a4035; padding: 15px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You for Contacting Penelope's Venue</h1>
  </div>

  <div class="content">
    <p>Dear ${formData.name},</p>

    <p>We've received your ${formData.formType === 'booking' ? 'event inquiry' : 'message'} and appreciate you reaching out to us.</p>

    ${formData.formType === 'booking' ? `
    <div class="highlight">
      <strong>What's Next?</strong><br>
      A member of our team will contact you within 24 hours to discuss your event vision and provide a personalized quote.
    </div>
    ` : `
    <div class="highlight">
      <strong>Response Time:</strong><br>
      We'll respond to your inquiry within 4 hours during business hours (Monday-Friday, 9 AM - 6 PM MST).
    </div>
    `}

    <p>If you need immediate assistance, please don't hesitate to call us at (303) 555-0123.</p>

    <p>Best regards,<br>
    The Penelope's Venue Team</p>
  </div>
</body>
</html>
      `;

      try {
        await fetch('https://api.useplunk.com/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${plunkApiKey}`,
          },
          body: JSON.stringify({
            to: formData.email,
            subject: confirmationSubject,
            html: confirmationHtml,
          }),
        });
      } catch (confirmationError) {
        console.error('Confirmation email error:', confirmationError);
      }
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: 'There was an error processing your request'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
