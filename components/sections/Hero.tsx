'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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
  variant?: 'dark' | 'light';
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
  variant = 'light',
}) => {
  const handleCTAClick = (cta: { href?: string; onClick?: () => void }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  };

  const isLight = variant === 'light';

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isLight ? 'bg-white' : ''}`}>
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

      {/* Default Background */}
      {!backgroundImage && !backgroundVideo && !isLight && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      )}

      {/* Overlay */}
      {overlay && (backgroundImage || backgroundVideo) && (
        <div className={`absolute inset-0 ${isLight ? 'bg-white/80' : 'bg-black/40'}`} />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className={`max-w-5xl ${centered ? 'mx-auto text-center' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className={`text-sm font-medium tracking-widest uppercase mb-6 ${
                isLight ? 'text-accent-500' : 'text-gray-300'
              }`}>
                {subtitle}
              </p>

              <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-none tracking-apple-display ${
                isLight ? 'text-gray-900' : 'text-white'
              }`}>
                {title}
              </h1>

              {description && (
                <p className={`text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto ${
                  isLight ? 'text-gray-500' : 'text-gray-300'
                }`}>
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
                    <button
                      onClick={() => handleCTAClick(primaryCTA)}
                      className={`inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 ${
                        isLight
                          ? 'bg-gray-900 text-white hover:bg-black'
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {primaryCTA.text}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {secondaryCTA && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <button
                      onClick={() => handleCTAClick(secondaryCTA)}
                      className={`inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 border-2 ${
                        isLight
                          ? 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                          : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                      }`}
                    >
                      <Play className="w-5 h-5" />
                      {secondaryCTA.text}
                    </button>
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
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          isLight ? 'border-gray-300' : 'border-white/50'
        }`}>
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              isLight ? 'bg-gray-400' : 'bg-white'
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
