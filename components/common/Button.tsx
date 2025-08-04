'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      {
        // Variants
        'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500': variant === 'primary',
        'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500': variant === 'secondary',
        'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500': variant === 'accent',
        'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500': variant === 'outline',
        'text-gray-700 hover:bg-gray-100 focus:ring-gray-500': variant === 'ghost',
        
        // Sizes
        'px-3 py-2 text-sm gap-1.5': size === 'sm',
        'px-4 py-2.5 text-base gap-2': size === 'md',
        'px-6 py-3 text-lg gap-2.5': size === 'lg',
        
        // Full width
        'w-full': fullWidth,
      },
      className
    );

    const iconSize = size === 'sm' ? 16 : size === 'md' ? 18 : 20;

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...(props as any)}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;