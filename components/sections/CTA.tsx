'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
}) => {
  const handleCTAClick = (cta: { href?: string; onClick?: () => void }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  };

  const isMinimal = variant === 'minimal';
  const bgClass = isMinimal ? 'bg-gray-50' : 'bg-gray-900';
  const textClass = isMinimal ? 'text-gray-900' : 'text-white';
  const subtextClass = isMinimal ? 'text-gray-500' : 'text-gray-300';

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
            <p className={`text-sm font-medium tracking-widest uppercase mb-4 ${isMinimal ? 'text-accent-500' : 'text-accent-500'}`}>
              {subtitle}
            </p>
          )}

          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-apple-tight ${textClass}`}>
            {title}
          </h2>

          {description && (
            <p className={`text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${subtextClass}`}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCTAClick(primaryCTA)}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 ${
                isMinimal
                  ? 'bg-gray-900 text-white hover:bg-black'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5" />
            </button>

            {secondaryCTA && (
              <button
                onClick={() => handleCTAClick(secondaryCTA)}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 border-2 ${
                  isMinimal
                    ? 'border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
              >
                {secondaryCTA.text}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
