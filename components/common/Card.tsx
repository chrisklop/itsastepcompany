'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  shadow = 'md',
  border = true,
  gradient = false,
}) => {
  const cardClasses = cn(
    'bg-white rounded-xl transition-all duration-300',
    {
      // Padding
      'p-0': padding === 'none',
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',
      
      // Shadow
      'shadow-none': shadow === 'none',
      'shadow-sm': shadow === 'sm',
      'shadow-md': shadow === 'md',
      'shadow-lg': shadow === 'lg',
      
      // Border
      'border border-gray-200': border,
      
      // Hover effects
      'hover:shadow-lg hover:-translate-y-1': hover,
      
      // Gradient
      'bg-gradient-to-br from-white to-gray-50': gradient,
    },
    className
  );

  if (hover) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
};

export default Card;