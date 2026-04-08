'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingCardsProps {
  tiers: PricingTier[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ tiers }) => {
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
            Pricing That Makes No Sense
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            And we&apos;re okay with that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 ${
                tier.highlighted
                  ? 'bg-gray-900 text-white ring-2 ring-accent-500 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${
                  tier.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.name}
                </h3>
                <div className={`text-6xl font-bold mb-2 ${
                  tier.highlighted ? 'text-accent-500' : 'text-gray-900'
                }`}>
                  {tier.price}
                </div>
                <p className={`text-sm ${
                  tier.highlighted ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                      tier.highlighted ? 'text-accent-500' : 'text-accent-500'
                    }`} />
                    <span className={`text-sm ${
                      tier.highlighted ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/build"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                  tier.highlighted
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                Build This Ladder
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-gray-400 mt-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          * It&apos;s A Step Company is a 501(c)(3) nonprofit. All purchases are tax-deductible.
          Yes, all three tiers are the same price. No, we cannot explain this to our accountant either.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingCards;
