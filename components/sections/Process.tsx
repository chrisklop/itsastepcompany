'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: 'timeline' | 'cards' | 'numbered';
}

const Process: React.FC<ProcessProps> = ({
  title = "How We Work",
  subtitle = "Our proven process ensures exceptional results every time",
  steps,
  variant = 'timeline',
}) => {
  const getIcon = (iconName: string): LucideIcon => {
    return (Icons as any)[iconName] || Icons.Circle;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  if (variant === 'timeline') {
    return (
      <section className="section-padding bg-gray-50">
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

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>

              {steps.map((step, index) => {
                const Icon = getIcon(step.icon);
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={step.id}
                    className={`relative flex items-center mb-12 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    variants={itemVariants}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 z-10"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md ml-12 md:ml-0">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary-600">Step {step.id}</span>
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
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

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = getIcon(step.icon);
              
              return (
                <motion.div
                  key={step.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-primary-600 block mb-2">Step {step.id}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    );
  }

  // Numbered variant
  return (
    <section className="section-padding bg-gray-50">
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

        {/* Numbered Steps */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = getIcon(step.icon);
              
              return (
                <motion.div
                  key={step.id}
                  className="flex items-start space-x-6"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <Icon className="w-6 h-6 text-primary-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;