import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured. Using fallback mode.');
        // Fallback: Just show success message without actually sending
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours. (Demo mode - EmailJS not configured)'
        });
        setFormData({ name: '', email: '', company: '', message: '' });
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
        to_email: 'buildwith@integratedsystems.ai', // Your email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly at buildwith@integratedsystems.ai'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-4 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base hover:border-primary-500/50 hologram-effect"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-accent-400 transition-colors">
            Company (Optional)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 sm:py-4 bg-black/40 border border-accent-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all text-base hover:border-accent-500/50 hologram-effect"
            placeholder="Your Company Name"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-primary-400 transition-colors">
            Message *
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
              placeholder="Tell us about your project..."
            />
          </div>
        </div>

        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-start gap-3 glassmorphism ${
              status.type === 'success' 
                ? 'border-green-500/50 bg-green-500/10 text-green-300' 
                : 'border-red-500/50 bg-red-500/10 text-red-300'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 animate-bounce-slow" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm">{status.message}</p>
          </motion.div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 glow-cyan group relative overflow-hidden"
          size="lg"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Transmitting Data...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </span>
          {/* Animated background on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </Button>
      </form>
    </div>
  );
};

export default EnhancedContactForm;
