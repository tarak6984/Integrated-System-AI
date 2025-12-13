import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Briefcase, Phone, Building2, Clock, Upload, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import { contactFormLimiter } from '../../utils/rateLimiter';
import { sanitizeInput, validateEmail, validateLength, validatePhone } from '../../utils/sanitize';

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    industry: '',
    solutionType: '',
    message: '',
    timeframe: '',
    consent: false,
    website: '' // Honeypot field
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');

  const industries = [
    'Manufacturing',
    'Logistics & Supply Chain',
    'Healthcare',
    'Finance & Banking',
    'Agriculture',
    'Retail & E-commerce',
    'Technology',
    'Energy & Utilities',
    'Transportation',
    'Other'
  ];

  const solutionTypes = [
    'AI Agents',
    'Process Automation',
    'Decision-Support Systems',
    'Workflow/Operations Optimization',
    'Enterprise Integration',
    'R&D Collaboration',
    'Venture Building or Co-development',
    'General Inquiry'
  ];

  const timeframes = [
    'ASAP (Immediate)',
    'Within 1-3 months',
    'Within 3-6 months',
    'Exploratory only',
    'Not sure yet'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        setStatus({
          type: 'error',
          message: 'File size must be less than 5MB'
        });
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Honeypot check
    if (formData.website) {
      setIsSubmitting(false);
      return;
    }

    // Check rate limit
    if (!contactFormLimiter.canMakeRequest()) {
      const waitTime = Math.ceil(contactFormLimiter.getTimeUntilNextRequest() / 1000 / 60);
      setStatus({
        type: 'error',
        message: `Too many submissions. Please wait ${waitTime} minute(s) before trying again.`
      });
      setIsSubmitting(false);
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Validate phone if provided
    if (formData.phone && !validatePhone(formData.phone)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid phone number.'
      });
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (!validateLength(formData.message, 20, 2000)) {
      setStatus({
        type: 'error',
        message: 'Message must be between 20 and 2000 characters.'
      });
      setIsSubmitting(false);
      return;
    }

    // Check consent
    if (!formData.consent) {
      setStatus({
        type: 'error',
        message: 'Please agree to be contacted to proceed.'
      });
      setIsSubmitting(false);
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      company: sanitizeInput(formData.company),
      jobTitle: sanitizeInput(formData.jobTitle),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      industry: formData.industry,
      solutionType: formData.solutionType,
      message: sanitizeInput(formData.message),
      timeframe: formData.timeframe,
      fileName: fileName || 'No file attached'
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured. Using fallback mode.');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus({
          type: 'success',
          message: "Thank you! Your inquiry has been received. We'll get back to you within 24 hours. (Demo mode - EmailJS not configured)"
        });
        resetForm();
        return;
      }

      const templateParams = {
        from_name: sanitizedData.fullName,
        from_email: sanitizedData.email,
        company: sanitizedData.company || 'Not provided',
        job_title: sanitizedData.jobTitle || 'Not provided',
        phone: sanitizedData.phone || 'Not provided',
        industry: sanitizedData.industry || 'Not specified',
        solution_type: sanitizedData.solutionType || 'Not specified',
        message: sanitizedData.message,
        timeframe: sanitizedData.timeframe || 'Not specified',
        file_name: sanitizedData.fileName
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: 'success',
        message: "Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours."
      });
      resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly at buildwith@integrated-systems.ai'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      jobTitle: '',
      email: '',
      phone: '',
      industry: '',
      solutionType: '',
      message: '',
      timeframe: '',
      consent: false,
      website: ''
    });
    setFileName('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Status Message */}
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg flex items-start gap-3 ${status.type === 'success'
            ? 'bg-green-500/10 border border-green-500/30'
            : 'bg-red-500/10 border border-red-500/30'
            }`}
        >
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          )}
          <p className={`text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
            {status.message}
          </p>
        </motion.div>
      )}

      {/* Row 1: Full Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-accent-400 transition-colors">
            Company or Organization
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-400 transition-colors" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-accent-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-base hover:border-accent-500/50 hologram-effect"
              placeholder="Your Company Name"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Job Title & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Job Title or Role *
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
              placeholder="CTO, Operations Manager, etc."
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-accent-400 transition-colors">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-400 transition-colors" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-accent-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-base hover:border-accent-500/50 hologram-effect"
              placeholder="john@company.com"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Phone & Industry */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Phone Number (Optional)
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-accent-400 transition-colors">
            Industry or Sector *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 sm:py-4 bg-black/40 border border-accent-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-base hover:border-accent-500/50 hologram-effect"
          >
            <option value="" className="bg-dark-900">Select your industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-dark-900">
                {industry}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Solution Type & Timeframe */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Type of Solution *
          </label>
          <select
            name="solutionType"
            value={formData.solutionType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
          >
            <option value="" className="bg-dark-900">Select solution type</option>
            {solutionTypes.map((type) => (
              <option key={type} value={type} className="bg-dark-900">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-accent-400 transition-colors">
            Preferred Timeframe *
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-400 transition-colors pointer-events-none" />
            <select
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-accent-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-base hover:border-accent-500/50 hologram-effect appearance-none"
            >
              <option value="" className="bg-dark-900">Select timeframe</option>
              {timeframes.map((time) => (
                <option key={time} value={time} className="bg-dark-900">
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="group">
        <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
          Description of Your Needs *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none text-base hover:border-primary-500/50 hologram-effect"
            placeholder="Describe your pain points, current challenges, or project details..."
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Minimum 20 characters, maximum 2000 characters</p>
      </div>

      {/* File Upload */}
      <div className="group">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          File or Document Upload (Optional)
        </label>
        <div className="relative">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex items-center gap-3 px-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-gray-400 cursor-pointer hover:border-primary-500/50 transition-all hologram-effect"
          >
            <Upload className="w-5 h-5" />
            <span className="text-sm">{fileName || 'Upload workflow maps, process documents, or requirements (Max 5MB)'}</span>
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX, TXT, PNG, JPG (Max 5MB)</p>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      {/* GDPR Consent */}
      <div className="flex items-start gap-3 p-4 bg-black/20 border border-primary-500/20 rounded-lg">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-2 focus:ring-primary-500 bg-black/40"
          id="consent-checkbox"
        />
        <label htmlFor="consent-checkbox" className="text-sm text-gray-300 flex-1 cursor-pointer">
          <Shield className="w-4 h-4 inline mr-1 text-primary-400" />
          I agree to be contacted by Integrated Systems AI regarding my inquiry. By submitting this form, I consent to the processing of my personal data in accordance with the privacy policy. *
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Send Inquiry
          </span>
        )}
      </Button>
    </motion.form>
  );
};

export default EnhancedContactForm;
