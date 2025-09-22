import type { APIRoute } from 'astro';
import {
  createBookingEmailTemplate,
  createGeneralEmailTemplate,
  createConfirmationEmailTemplate,
  type ContactFormData
} from '@/lib/email-templates';

// ContactFormData interface is imported from email-templates.ts

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
      const bookingTemplate = createBookingEmailTemplate(formData);
      emailSubject = bookingTemplate.subject;
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
      htmlContent = bookingTemplate.html;

      // Debug: Log the HTML content generation
      console.log('🎨 Generated booking HTML template, length:', htmlContent.length);
      console.log('🎨 Template includes logo reference:', htmlContent.includes('logo.svg'));
      console.log('🎨 Template includes brand colors:', htmlContent.includes('#2a4035'));
    } else {
      const generalTemplate = createGeneralEmailTemplate(formData);
      emailSubject = generalTemplate.subject;
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
      htmlContent = generalTemplate.html;
    }

    // Send email via Plunk (you'll need to configure this)
    const plunkApiKey = process.env.PLUNK_API_KEY || import.meta.env.PLUNK_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || import.meta.env.CONTACT_EMAIL || 'events@penelopes.cafe';

    if (plunkApiKey) {
      try {
        console.log('📧 Sending email with subject:', emailSubject);
        console.log('📧 HTML content length:', htmlContent.length);
        console.log('📧 HTML content preview:', htmlContent.substring(0, 200) + '...');

        // Use the correct Plunk API format - body is required
        const emailPayload = {
          to: contactEmail,
          subject: emailSubject,
          body: htmlContent, // Plunk expects 'body' parameter
        };

        const plunkResponse = await fetch('https://api.useplunk.com/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${plunkApiKey}`,
          },
          body: JSON.stringify(emailPayload),
        });

        console.log('📧 Plunk response status:', plunkResponse.status);

        if (!plunkResponse.ok) {
          const errorText = await plunkResponse.text();
          console.error('❌ Plunk email failed:', errorText);
          console.error('❌ Request payload keys:', Object.keys(emailPayload));
          console.error('❌ HTML content starts with:', htmlContent.substring(0, 100));

          // Fallback: Try with plain text if HTML fails
          console.log('🔄 Trying with plain text format...');
          const altPayload = {
            to: contactEmail,
            subject: emailSubject,
            body: emailContent, // Send plain text as body
          };

          try {
            const altResponse = await fetch('https://api.useplunk.com/v1/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plunkApiKey}`,
              },
              body: JSON.stringify(altPayload),
            });

            if (altResponse.ok) {
              console.log('✅ Email sent with alternative format');
            } else {
              console.error('❌ Alternative format also failed:', await altResponse.text());
            }
          } catch (altError) {
            console.error('❌ Alternative format error:', altError);
          }
        } else {
          console.log('✅ Email sent successfully');
        }
      } catch (emailError) {
        console.error('❌ Email sending error:', emailError);
        // Continue with success response but log the error
      }
    }

    // Send confirmation email to user (always enabled for better customer experience)
    if (plunkApiKey) {
      const confirmationTemplate = createConfirmationEmailTemplate(formData);
      const fromEmail = process.env.FROM_EMAIL || import.meta.env.FROM_EMAIL || contactEmail;

      try {
        await fetch('https://api.useplunk.com/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${plunkApiKey}`,
          },
          body: JSON.stringify({
            to: formData.email,
            subject: confirmationTemplate.subject,
            body: confirmationTemplate.html,
          }),
        });
      } catch (confirmationError) {
        console.error('Confirmation email error:', confirmationError);
      }
    }

    // Success response

		// Optional: Server-side GA4 Measurement Protocol fallback (disabled unless explicitly enabled)
		try {
			const mpEnabled = (process.env.GA_MP_FALLBACK_ENABLED === 'true') || (import.meta.env.GA_MP_FALLBACK_ENABLED === 'true');
			const measurementId = process.env.GA4_MEASUREMENT_ID || import.meta.env.GA4_MEASUREMENT_ID || process.env.PUBLIC_GA_MEASUREMENT_ID || import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
			const apiSecret = process.env.GA4_API_SECRET || import.meta.env.GA4_API_SECRET;

			if (mpEnabled && measurementId && apiSecret) {
				const isBooking = formData.formType === 'booking';
				const formParams = {
					form_id: isBooking ? 'booking_form' : 'general_form',
					form_name: isBooking ? 'Booking Inquiry' : 'General Inquiry',
					form_destination: request.headers.get('referer') || undefined,
				};

				const clientId = (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function')
					? globalThis.crypto.randomUUID()
					: Math.random().toString(36).slice(2) + Date.now().toString(36);

				const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`;
				const body = {
					client_id: clientId,
					non_personalized_ads: true,
					events: [
						{ name: 'form_submit', params: { ...formParams, engagement_time_msec: 1 } },
						{ name: 'generate_lead', params: { ...formParams, engagement_time_msec: 1 } },
					],
					user_properties: {
						form_type: { value: isBooking ? 'booking' : 'general' },
					},
				};

				await fetch(endpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'User-Agent': request.headers.get('user-agent') || 'penelopes-venue-api',
					},
					body: JSON.stringify(body),
				});
			}
		} catch (mpError) {
			console.error('GA Measurement Protocol error:', mpError);
		}

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
