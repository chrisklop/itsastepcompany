'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { getInitials } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'carousel' | 'grid' | 'single';
  autoplay?: boolean;
}

const avatarColors = [
  'bg-accent-500',
  'bg-gray-800',
  'bg-gray-600',
  'bg-accent-600',
  'bg-gray-700',
  'bg-accent-700',
];

function Avatar({ name, index }: { name: string; index: number }) {
  const initials = getInitials(name);
  const color = avatarColors[index % avatarColors.length];
  return (
    <div className={`w-full h-full ${color} rounded-full flex items-center justify-center`}>
      <span className="text-white font-semibold text-sm">{initials}</span>
    </div>
  );
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied clients",
  testimonials,
  variant = 'carousel',
  autoplay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoplay && variant === 'carousel' && testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, variant, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-accent-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (variant === 'carousel') {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-gray-200" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Avatar name={testimonials[currentIndex].name} index={currentIndex} />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-base">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-accent-500 text-sm font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-gray-900 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'grid') {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Avatar name={testimonial.name} index={index} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Single variant
  const featuredTestimonial = testimonials[0];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Quote className="w-12 h-12 text-gray-600 mx-auto mb-8" />

          <div className="flex justify-center mb-6">
            {renderStars(featuredTestimonial.rating)}
          </div>

          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8 font-medium">
            &ldquo;{featuredTestimonial.content}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Avatar name={featuredTestimonial.name} index={0} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-xl">
                {featuredTestimonial.name}
              </div>
              <div className="text-accent-500 font-medium">
                {featuredTestimonial.role}
              </div>
              <div className="text-gray-400">
                {featuredTestimonial.company}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
