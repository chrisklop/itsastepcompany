'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

interface CTAProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  variant?: 'default' | 'gradient' | 'minimal' | 'contact';
  backgroundImage?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  backgroundImage,
}) => {
  const handleCTAClick = (cta: { href?: string; onClick?: () => void }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  };

  const bgClass = variant === 'minimal' ? 'bg-gray-50' : 'bg-primary-600';
  const textClass = variant === 'minimal' ? 'text-gray-900' : 'text-white';
  const subtextClass = variant === 'minimal' ? 'text-gray-600' : 'text-white/90';

  return (
    <section className={`section-padding relative overflow-hidden ${bgClass}`}>
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle && (
            <p className={`text-sm font-semibold tracking-wide uppercase mb-4 ${variant === 'minimal' ? 'text-primary-600' : 'text-white/80'}`}>
              {subtitle}
            </p>
          )}

          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${textClass}`}>
            {title}
          </h2>

          {description && (
            <p className={`text-xl leading-relaxed mb-8 max-w-2xl mx-auto ${subtextClass}`}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => handleCTAClick(primaryCTA)}
              className={variant === 'minimal' ? '' : 'bg-white text-primary-600 hover:bg-gray-100'}
            >
              {primaryCTA.text}
            </Button>

            {secondaryCTA && (
              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleCTAClick(secondaryCTA)}
                className={
                  variant === 'minimal'
                    ? 'text-gray-700 border-gray-300 hover:bg-gray-100'
                    : 'text-white border-white hover:bg-white hover:text-primary-600'
                }
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;