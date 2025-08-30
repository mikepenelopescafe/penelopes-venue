import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';

interface ContactFormProps {
  formType: 'booking' | 'general';
}

interface FormData {
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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  guestCount?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({ formType }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    ...(formType === 'booking' ? {
      eventType: '',
      guestCount: '',
      datePreference: '',
      budgetRange: '',
      specialRequirements: '',
    } : {
      subject: '',
      message: '',
    })
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (formType === 'booking') {
      if (!formData.eventType) {
        newErrors.eventType = 'Please select an event type';
      }
      if (!formData.guestCount) {
        newErrors.guestCount = 'Please select guest count';
      }
    } else {
      if (!formData.subject) {
        newErrors.subject = 'Please select a subject';
      }
      if (!formData.message?.trim()) {
        newErrors.message = 'Message is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType,
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          ...(formType === 'booking' ? {
            eventType: '',
            guestCount: '',
            datePreference: '',
            budgetRange: '',
            specialRequirements: '',
          } : {
            subject: '',
            message: '',
          })
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={errors.phone ? 'border-destructive' : ''}
            placeholder="(303) 555-0123"
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        {formType === 'booking' ? (
          <>
            {/* Event Type and Guest Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-foreground">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                  <SelectTrigger className={errors.eventType ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday Celebration</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="graduation">Graduation Party</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.eventType && <p className="text-sm text-destructive">{errors.eventType}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Expected Guest Count *</Label>
                <Select value={formData.guestCount} onValueChange={(value) => handleInputChange('guestCount', value)}>
                  <SelectTrigger className={errors.guestCount ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-60">50-60 guests</SelectItem>
                    <SelectItem value="60-70">60-70 guests</SelectItem>
                    <SelectItem value="70-80">70-80 guests</SelectItem>
                    <SelectItem value="80-90">80-90 guests</SelectItem>
                    <SelectItem value="90-100">90-100 guests</SelectItem>
                  </SelectContent>
                </Select>
                {errors.guestCount && <p className="text-sm text-destructive">{errors.guestCount}</p>}
              </div>
            </div>

            {/* Date Preference and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="datePreference" className="text-foreground">Preferred Date Range</Label>
                <Input
                  id="datePreference"
                  type="text"
                  value={formData.datePreference}
                  onChange={(e) => handleInputChange('datePreference', e.target.value)}
                  placeholder="e.g., June 2024, Summer 2024"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Budget Range</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="5000-7500">$300 - $1,000</SelectItem>
                  <SelectItem value="5000-7500">$1,000 - $2,500</SelectItem>
                  <SelectItem value="5000-7500">$2,500 - $5,000</SelectItem>
                    <SelectItem value="5000-7500">$5,000 - $7,500</SelectItem>
                    <SelectItem value="7500-10000">$7,500 - $10,000</SelectItem>
                    <SelectItem value="10000-15000">$10,000+</SelectItem>
                    <SelectItem value="discuss">Prefer to discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Special Requirements */}
            <div className="space-y-2">
              <Label htmlFor="specialRequirements" className="text-foreground">Special Requirements or Questions</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Tell us about your vision, dietary requirements, entertainment preferences, or any special accommodations needed..."
                rows={4}
              />
            </div>
          </>
        ) : (
          <>
            {/* Subject */}
            <div className="space-y-2">
              <Label className="text-foreground">Subject *</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger className={errors.subject ? 'border-destructive' : ''}>
                  <SelectValue placeholder="What can we help you with?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="media">Media & Press Inquiry</SelectItem>
                  <SelectItem value="vendor">Vendor Partnership</SelectItem>
                  <SelectItem value="business">Business Opportunity</SelectItem>
                  <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                  <SelectItem value="other">Other Inquiry</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={errors.message ? 'border-destructive' : ''}
                placeholder="Please provide details about your inquiry..."
                rows={6}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>
          </>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
        >
          {isSubmitting ? 'Sending...' : formType === 'booking' ? 'Request Event Quote' : 'Send Message'}
        </Button>
      </form>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">
            {formType === 'booking'
              ? "Thank you! We've received your event inquiry and will contact you within 24 hours to discuss your vision and provide a personalized quote."
              : "Thank you for your message! We'll respond to your inquiry within 4 hours during business hours."
            }
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">
            Sorry, there was an error sending your message. Please try again or contact us directly at (303) 555-0123.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
