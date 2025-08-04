'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/common/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  centered?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  centered = true,
}) => {
  const handleCTAClick = (cta: { href?: string; onClick?: () => void }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Default Gradient Background */}
      {!backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600" />
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-sm font-semibold text-primary-300 tracking-wide uppercase mb-4">
                {subtitle}
              </h2>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              
              {description && (
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {description}
                </p>
              )}
              
              <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
                {primaryCTA && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      size="lg"
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={() => handleCTAClick(primaryCTA)}
                      className="bg-white text-primary-600 hover:bg-gray-100"
                    >
                      {primaryCTA.text}
                    </Button>
                  </motion.div>
                )}
                
                {secondaryCTA && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button
                      size="lg"
                      variant="ghost"
                      icon={Play}
                      iconPosition="left"
                      onClick={() => handleCTAClick(secondaryCTA)}
                      className="text-white border-white hover:bg-white hover:text-primary-600"
                    >
                      {secondaryCTA.text}
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;