'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Card from '@/components/common/Card';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  showFeatures?: boolean;
  variant?: 'grid' | 'list';
}

const Services: React.FC<ServicesProps> = ({
  title = "Our Products",
  subtitle = "Engineered to exceed your expectations. Not necessarily safety standards.",
  services,
  showFeatures = true,
  variant = 'grid',
}) => {
  const getIcon = (iconName: string): LucideIcon => {
    return (Icons as any)[iconName] || Icons.Settings;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

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

        <motion.div
          className={variant === 'grid'
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
          }
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);

            return (
              <motion.div key={service.id} variants={itemVariants}>
                {variant === 'grid' ? (
                  <Card hover padding="lg" className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-gray-900" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 mb-6 leading-relaxed flex-grow text-sm">
                        {service.description}
                      </p>

                      {showFeatures && service.features.length > 0 && (
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <Icons.Check className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Link
                        href="/build"
                        className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-accent-500 transition-colors duration-200"
                      >
                        Configure This Ladder
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                ) : (
                  <Card padding="lg" className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-gray-900" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 mb-4 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      {showFeatures && service.features.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <Icons.Check className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}

                      <Link
                        href="/build"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-200"
                      >
                        Configure This Ladder
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16 p-8 bg-gray-50 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Don&apos;t See What You Need?
          </h3>
          <p className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
            We make ladders out of anything. Literally anything. Try us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black transition-colors duration-200"
          >
            <Icons.MessageCircle className="w-5 h-5" />
            Request a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
