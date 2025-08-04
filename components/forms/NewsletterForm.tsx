'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import { validateEmail } from '@/lib/utils';

interface NewsletterFormProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: 'inline' | 'centered' | 'minimal';
  showGDPR?: boolean;
  onSubmit?: (email: string, gdprConsent?: boolean) => Promise<void>;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  title = "Stay Updated",
  subtitle = "Subscribe to our newsletter for the latest insights and updates.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  variant = 'inline',
  showGDPR = true,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (showGDPR && !gdprConsent) {
      setError('Please consent to receiving our newsletter');
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email, gdprConsent);
      } else {
        // Default submission (replace with your actual API call)
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Newsletter subscription:', { email, gdprConsent });
      }

      setIsSubscribed(true);
      setEmail('');
      setGdprConsent(false);
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <motion.div
        className={`text-center ${variant === 'centered' ? 'py-8' : 'p-6 bg-green-50 rounded-lg border border-green-200'}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-gray-600 text-sm">
          Thank you for subscribing. Check your email for confirmation.
        </p>
        {variant !== 'minimal' && (
          <button
            onClick={() => setIsSubscribed(false)}
            className="mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Subscribe another email
          </button>
        )}
      </motion.div>
    );
  }

  if (variant === 'centered') {
    return (
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{subtitle}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={`form-input text-center ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>

          {showGDPR && (
            <label className="flex items-start space-x-3 text-left">
              <input
                type="checkbox"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">
                I agree to receive newsletters and consent to the processing of my personal data.
              </span>
            </label>
          )}

          {error && (
            <p className="text-sm text-red-600 flex items-center justify-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            icon={Mail}
            iconPosition="right"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </Button>
        </motion.form>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={`form-input ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {error && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="primary"
          loading={isSubmitting}
          icon={Mail}
          iconPosition="right"
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </Button>
      </motion.form>
    );
  }

  // Default inline variant
  return (
    <div className="max-w-lg mx-auto">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={`form-input ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            icon={Mail}
            iconPosition="right"
            className="sm:w-auto"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </Button>
        </div>

        {showGDPR && (
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <span className="text-sm text-gray-600">
              I agree to receive newsletters and marketing communications. You can unsubscribe at any time.
            </span>
          </label>
        )}

        {error && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default NewsletterForm;