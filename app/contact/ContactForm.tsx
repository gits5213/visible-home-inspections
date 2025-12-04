'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    'property-address': '',
    'inspection-type': '',
    'preferred-date': '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // For static export, we'll use Resend API directly
      // Note: In production, consider using a serverless function or form service for better security
      const emailContent = `
New Inspection Request from Visible Home Inspections Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Inspection Details:
- Property Address: ${formData['property-address'] || 'Not provided'}
- Inspection Type: ${formData['inspection-type'] || 'Not specified'}
- Preferred Date & Time: ${formData['preferred-date'] || 'Not specified'}

Message:
${formData.message || 'No additional message provided'}

---
This email was sent from the contact form on visiblehomeinspections.com
      `.trim();

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'info@visiblehomeinspections.com',
          replyTo: formData.email,
          subject: `New Inspection Request from ${formData.name}`,
          text: emailContent,
          html: `
            <h2>New Inspection Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Property Address:</strong> ${formData['property-address'] || 'Not provided'}</p>
            <p><strong>Inspection Type:</strong> ${formData['inspection-type'] || 'Not specified'}</p>
            <p><strong>Preferred Date & Time:</strong> ${formData['preferred-date'] || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message || 'No additional message provided'}</p>
            <hr>
            <p><small>This email was sent from the contact form on visiblehomeinspections.com</small></p>
          `,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your request has been submitted successfully. We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          'property-address': '',
          'inspection-type': '',
          'preferred-date': '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Failed to submit form. Please try again or call us directly at (917) 561-6554.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit form. Please try again or call us directly at (917) 561-6554.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {submitMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {submitMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="property-address" className="block text-sm font-medium text-gray-700 mb-1">
          Property Address
        </label>
        <input
          type="text"
          id="property-address"
          name="property-address"
          value={formData['property-address']}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="inspection-type" className="block text-sm font-medium text-gray-700 mb-1">
          Inspection Type
        </label>
        <select
          id="inspection-type"
          name="inspection-type"
          value={formData['inspection-type']}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select type...</option>
          <option value="buyer">Buyer's Home Inspection</option>
          <option value="pre-listing">Pre-Listing Inspection</option>
          <option value="condo">Condo / Co-op Inspection</option>
          <option value="new-construction">New Construction / 11-Month Warranty</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Date & Time
        </label>
        <input
          type="text"
          id="preferred-date"
          name="preferred-date"
          value={formData['preferred-date']}
          onChange={handleChange}
          placeholder="e.g., Next Saturday, 10 AM"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your inspection needs..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields. We'll respond within 24 hours.
      </p>
    </form>
  );
}

