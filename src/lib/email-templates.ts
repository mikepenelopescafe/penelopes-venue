// Email templates for Penelope's Venue
// These templates use the site's branding and design system

export interface ContactFormData {
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

// Base email template with shared styles and branding
const createBaseTemplate = (content: string, title: string): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${title} - Penelope's Venue</title>
  <style>
    /* Reset and base styles */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* Typography - Using similar fonts to the website */
    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #f4f1ed;
      margin: 0;
      padding: 0;
      background-color: #1f2a25;
    }

    /* Custom font for headings (fallback to serif) */
    .heading-font {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-weight: 400;
      letter-spacing: -0.025em;
    }

    /* Color palette matching the site */
    .bg-primary { background-color: #2a4035; }
    .bg-accent { background-color: #d6b67e; }
    .bg-dark { background-color: #1f2a25; }
    .text-primary { color: #2a4035; }
    .text-accent { color: #d6b67e; }
    .text-light { color: #f4f1ed; }
    .text-muted { color: #c4aa76; }
    .border-accent { border-color: #d6b67e; }

    /* Layout */
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #232f2a;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .header {
      background: linear-gradient(135deg, #2a4035 0%, #23332c 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }

    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(214, 182, 126, 0.1) 0%, transparent 70%);
    }

    .content {
      padding: 40px 30px;
    }

    .footer {
      background-color: #1a2320;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #d6b67e;
    }

    /* Components */
    .logo {
      max-width: 200px;
      height: auto;
      margin-bottom: 20px;
    }

    .btn {
      display: inline-block;
      padding: 14px 28px;
      background-color: #d6b67e;
      color: #2a4035;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      transition: all 0.3s ease;
      border: 2px solid #d6b67e;
      margin: 0 8px 8px 0;
      box-sizing: border-box;
    }

    .btn:hover {
      background-color: #c4aa76;
      border-color: #c4aa76;
    }

    .section {
      margin-bottom: 30px;
    }

    .section-title {
      font-family: 'Georgia', serif;
      font-size: 24px;
      font-weight: 400;
      color: #d6b67e;
      margin-bottom: 15px;
      margin-top: 0;
    }

    .info-box {
      background-color: #1a2320;
      border: 1px solid #d6b67e;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }

    .info-box.urgent {
      background-color: #2a4035;
      border-color: #d6b67e;
      border-left: 4px solid #d6b67e;
    }

    .label {
      font-weight: 600;
      color: #d6b67e;
      display: inline-block;
      min-width: 120px;
    }

    .value {
      color: #f4f1ed;
    }

    .divider {
      height: 1px;
      background-color: #d6b67e;
      margin: 30px 0;
      opacity: 0.3;
    }

    /* Button container for better mobile layout */
    .btn-container {
      text-align: center;
      margin: 30px 0;
    }

    .btn-container .btn {
      display: block;
      width: 100%;
      max-width: 280px;
      margin: 0 auto 12px auto;
      box-sizing: border-box;
    }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .container { margin: 10px; }
      .header, .content, .footer { padding: 20px; }
      .logo { max-width: 150px; }
      .section-title { font-size: 20px; }

      /* Mobile button layout */
      .btn-container .btn {
        display: block;
        width: 100%;
        max-width: 280px;
        margin: 0 auto 12px auto;
        padding: 16px 24px;
        font-size: 16px;
      }

      /* Ensure buttons don't bleed on mobile */
      .btn {
        display: block;
        width: 100%;
        max-width: 280px;
        margin: 0 auto 8px auto;
        padding: 16px 24px;
        font-size: 16px;
        box-sizing: border-box;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .bg-dark { background-color: #1a2320; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header with Logo -->
    <div class="header">
      <img src="https://penelopes.cafe/logo-sm.png" alt="Penelope's Venue" class="logo" style="width: 200px; height: auto;" />
      <h1 class="heading-font" style="color: #f4f1ed; font-size: 28px; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
        ${title}
      </h1>
    </div>

    <!-- Main Content -->
    <div class="content">
      ${content}
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="margin-bottom: 20px;">
        <strong style="color: #d6b67e;">Penelope's Venue</strong><br>
        <span style="color: #c4aa76; font-size: 14px;">Your premier destination for elegant weddings and unforgettable events</span>
      </div>

      <div style="margin-bottom: 15px;">
        <a href="tel:+17206392406" style="color: #d6b67e; text-decoration: none; margin: 0 10px;">📞 (720) 639-2406</a>
        <a href="mailto:events@penelopes.cafe" style="color: #d6b67e; text-decoration: none; margin: 0 10px;">✉️ events@penelopes.cafe</a>
      </div>

      <div style="color: #888; font-size: 12px; margin-top: 20px;">
        <a href="https://penelopesvenue.com" style="color: #c4aa76; text-decoration: none;">Visit our website</a> |
        <a href="https://penelopesvenue.com/gallery" style="color: #c4aa76; text-decoration: none;">View our gallery</a> |
        <a href="https://penelopesvenue.com/services" style="color: #c4aa76; text-decoration: none;">Our services</a>
      </div>

      <div style="color: #666; font-size: 11px; margin-top: 15px;">
        © 2024 Penelope's Venue. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;
};

// Booking inquiry email template
export const createBookingEmailTemplate = (data: ContactFormData): { subject: string; html: string } => {
  const subject = `🎉 New Event Booking Inquiry - ${data.name}`;

  const content = `
    <div class="info-box urgent">
      <strong style="color: #d6b67e; font-size: 18px;">⚡ URGENT: Please respond within 24 hours</strong><br>
      <span style="color: #f4f1ed; font-size: 14px;">This is a booking inquiry that requires immediate attention.</span>
    </div>

    <div class="section">
      <h2 class="section-title">👤 Contact Information</h2>
      <div style="line-height: 1.8;">
        <div><span class="label">Name:</span> <span class="value">${data.name}</span></div>
        <div><span class="label">Email:</span> <span class="value"><a href="mailto:${data.email}" style="color: #d6b67e; text-decoration: none;">${data.email}</a></span></div>
        <div><span class="label">Phone:</span> <span class="value"><a href="tel:${data.phone}" style="color: #d6b67e; text-decoration: none;">${data.phone}</a></span></div>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">🎊 Event Details</h2>
      <div class="info-box">
        <div style="line-height: 1.8;">
          <div><span class="label">Event Type:</span> <span class="value">${data.eventType || 'Not specified'}</span></div>
          <div><span class="label">Guest Count:</span> <span class="value">${data.guestCount || 'Not specified'}</span></div>
          <div><span class="label">Preferred Date:</span> <span class="value">${data.datePreference || 'Not specified'}</span></div>
          <div><span class="label">Budget Range:</span> <span class="value">${data.budgetRange || 'Not specified'}</span></div>
        </div>
      </div>
    </div>

    ${data.specialRequirements ? `
    <div class="section">
      <h2 class="section-title">💫 Special Requirements</h2>
      <div class="info-box">
        <div style="color: #f4f1ed; line-height: 1.6;">
          ${data.specialRequirements.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>
    ` : ''}

    <div class="divider"></div>

    <div class="btn-container">
      <a href="mailto:${data.email}" class="btn">📧 Reply to Customer</a>
      <a href="tel:${data.phone}" class="btn">📞 Call Customer</a>
    </div>

    <div style="margin-top: 30px; padding: 20px; background-color: #1a2320; border-radius: 8px; border-left: 4px solid #d6b67e;">
      <strong style="color: #d6b67e;">💡 Next Steps:</strong>
      <ul style="color: #f4f1ed; margin: 10px 0 0 20px; padding: 0;">
        <li>Contact the customer within 24 hours</li>
        <li>Discuss their vision and requirements</li>
        <li>Provide a personalized quote and availability</li>
        <li>Schedule a venue tour if appropriate</li>
      </ul>
    </div>
  `;

  return {
    subject,
    html: createBaseTemplate(content, 'New Event Booking Inquiry')
  };
};

// General inquiry email template
export const createGeneralEmailTemplate = (data: ContactFormData): { subject: string; html: string } => {
  const subject = `💬 General Inquiry - ${data.subject || 'No Subject'} - ${data.name}`;

  const content = `
    <div class="section">
      <h2 class="section-title">👤 Contact Information</h2>
      <div style="line-height: 1.8;">
        <div><span class="label">Name:</span> <span class="value">${data.name}</span></div>
        <div><span class="label">Email:</span> <span class="value"><a href="mailto:${data.email}" style="color: #d6b67e; text-decoration: none;">${data.email}</a></span></div>
        <div><span class="label">Phone:</span> <span class="value"><a href="tel:${data.phone}" style="color: #d6b67e; text-decoration: none;">${data.phone}</a></span></div>
        ${data.subject ? `<div><span class="label">Subject:</span> <span class="value">${data.subject}</span></div>` : ''}
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">💬 Message</h2>
      <div class="info-box">
        <div style="color: #f4f1ed; line-height: 1.6; font-style: italic;">
          ${data.message ? `"${data.message.replace(/\n/g, '<br>')}"` : 'No message provided'}
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="btn-container">
      <a href="mailto:${data.email}" class="btn">📧 Reply to Customer</a>
    </div>

    <div style="margin-top: 30px; padding: 20px; background-color: #1a2320; border-radius: 8px;">
      <strong style="color: #d6b67e;">⏰ Response Timeline:</strong>
      <p style="color: #f4f1ed; margin: 10px 0;">
        General inquiries should be addressed within 4 hours during business hours (Monday-Friday, 9 AM - 6 PM MST).
      </p>
    </div>
  `;

  return {
    subject,
    html: createBaseTemplate(content, 'General Inquiry')
  };
};

// Customer confirmation email template
export const createConfirmationEmailTemplate = (data: ContactFormData): { subject: string; html: string } => {
  const isBooking = data.formType === 'booking';
  const subject = isBooking
    ? "We've Received Your Event Inquiry - Penelope's Venue"
    : "Thank You for Contacting Penelope's Venue";

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 class="section-title" style="text-align: center;">Thank You, ${data.name}!</h2>
      <p style="color: #f4f1ed; font-size: 18px; margin: 20px 0;">
        We've received your ${isBooking ? 'event inquiry' : 'message'} and appreciate you reaching out to us.
      </p>
    </div>

    ${isBooking ? `
    <div class="info-box urgent">
      <strong style="color: #d6b67e; font-size: 18px;">What's Next?</strong><br>
      <span style="color: #f4f1ed;">
        A member of our team will contact you within 24 hours to discuss your event vision and provide a personalized quote.
        We're excited to help make your special day unforgettable!
      </span>
    </div>

    <div class="section">
      <h3 style="color: #d6b67e; font-family: 'Georgia', serif; font-size: 20px; margin-bottom: 15px;">Your Event Details Summary:</h3>
      <div class="info-box">
        <div style="line-height: 1.8;">
          <div><span class="label">Event Type:</span> <span class="value">${data.eventType || 'To be discussed'}</span></div>
          <div><span class="label">Guest Count:</span> <span class="value">${data.guestCount || 'To be discussed'}</span></div>
          <div><span class="label">Preferred Date:</span> <span class="value">${data.datePreference || 'To be discussed'}</span></div>
          <div><span class="label">Budget Range:</span> <span class="value">${data.budgetRange || 'To be discussed'}</span></div>
        </div>
      </div>
    </div>

    <div class="info-box" style="margin-top: 20px;">
      <strong style="color: #d6b67e;">Why Choose Penelope's Venue?</strong><br>
      <span style="color: #f4f1ed;">
        ${data.eventType === 'wedding' ? "Our garden venue has hosted hundreds of beautiful weddings, each one unique and magical with our signature garden package." :
          data.eventType === 'corporate' ? "Perfect for team building, product launches, and corporate celebrations with modern amenities and professional service." :
          data.eventType === 'birthday' ? "Create unforgettable birthday memories in our elegant garden setting, perfect for celebrations of all sizes." :
          data.eventType === 'anniversary' ? "Celebrate your milestone in our romantic outdoor space with stunning natural beauty and timeless charm." :
          data.eventType === 'graduation' ? "Honor achievements in our beautiful, inspiring environment surrounded by gardens and historic architecture." :
          "Our versatile venue adapts to any vision you have in mind, from intimate gatherings to grand celebrations."}
      </span>
    </div>
    ` : `
    <div class="info-box">
      <strong style="color: #d6b67e; font-size: 18px;">Response Time</strong><br>
      <span style="color: #f4f1ed;">
        We'll respond to your inquiry within 4 hours during business hours (Monday-Friday, 9 AM - 6 PM MST).
      </span>
    </div>
    `}

    <div class="section">
      <h3 style="color: #d6b67e; font-family: 'Georgia', serif; font-size: 20px; margin-bottom: 15px;">Need Immediate Assistance?</h3>
      <div class="btn-container">
        <a href="tel:+17206392406" class="btn">Call Us Now</a>
        <a href="mailto:events@penelopes.cafe" class="btn">Email Us</a>
      </div>
    </div>

    <div class="divider"></div>

    <div style="text-align: center; margin-top: 30px;">
      <p style="color: #f4f1ed; margin-bottom: 20px;">
        <strong style="color: #d6b67e;">Explore Penelope's Venue:</strong>
      </p>
      <div style="margin: 20px 0;">
        <a href="https://penelopesvenue.com/gallery" style="color: #d6b67e; text-decoration: none; margin: 0 15px; font-weight: 600;">Gallery</a> |
        <a href="https://penelopesvenue.com/services" style="color: #d6b67e; text-decoration: none; margin: 0 15px; font-weight: 600;">Services</a> |
        <a href="https://penelopesvenue.com/contact" style="color: #d6b67e; text-decoration: none; margin: 0 15px; font-weight: 600;">Contact</a>
      </div>
    </div>

    <div style="margin-top: 30px; padding: 20px; background-color: #1a2320; border-radius: 8px; text-align: center;">
      <strong style="color: #d6b67e;">We can't wait to work with you!</strong>
      <p style="color: #f4f1ed; margin: 10px 0 0 0; font-style: italic;">
        Creating magical moments is what we do best.
      </p>
    </div>
  `;

  return {
    subject,
    html: createBaseTemplate(content, isBooking ? 'Event Inquiry Received' : 'Message Received')
  };
};
