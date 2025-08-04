'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

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
  title = "Our Services",
  subtitle = "Comprehensive solutions tailored to your needs",
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className={variant === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-8"
          }
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            
            return (
              <motion.div key={service.id} variants={itemVariants}>
                {variant === 'grid' ? (
                  <Card hover padding="lg" className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      {showFeatures && service.features.length > 0 && (
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <Icons.Check className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={ArrowRight}
                        iconPosition="right"
                        className="self-start text-primary-600 hover:bg-primary-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <Card padding="lg" className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      
                      {showFeatures && service.features.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <Icons.Check className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <Button
                        variant="primary"
                        icon={ArrowRight}
                        iconPosition="right"
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We create tailored solutions that perfectly match your unique requirements and business goals.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={Icons.MessageCircle}
            iconPosition="left"
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;