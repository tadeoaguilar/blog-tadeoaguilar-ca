'use client';

import { FC, useState } from 'react';
import { Button } from './Button';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  projectType: string;
}

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would integrate with your preferred form handling service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'cloud-architecture', label: 'Cloud Architecture' },
    { value: 'enterprise-architecture', label: 'Enterprise Architecture' },
    { value: 'software-architecture', label: 'Software Architecture' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-gradient-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white placeholder-text-gradient-light focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-gradient-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white placeholder-text-gradient-light focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent"
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      {/* Company and Project Type Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-gradient-white mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white placeholder-text-gradient-light focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-text-gradient-white mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent"
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-gradient-dark-start text-text-gradient-white">
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-gradient-white mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white placeholder-text-gradient-light focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent"
          placeholder="Brief description of your project"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-gradient-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/30 rounded-lg text-text-gradient-white placeholder-text-gradient-light focus:outline-none focus:ring-2 focus:ring-gradient-purple-start focus:border-transparent resize-vertical"
          placeholder="Tell me about your project requirements, goals, and timeline..."
        />
      </div>

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <p className="text-green-400 text-sm">
            Thank you for your message! I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            There was an error sending your message. Please try again or contact me directly.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
        <p className="text-xs text-text-gradient-light mt-2 text-center">
          * Required fields
        </p>
      </div>
    </form>
  );
};