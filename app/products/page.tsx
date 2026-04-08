import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import PricingCards from '@/components/sections/PricingCards';
import Card from '@/components/common/Card';
import {
  SITE_CONFIG,
  PRODUCTS,
  PROCESS_STEPS,
  TESTIMONIALS,
  FAQ_ITEMS,
  PRICING_TIERS
} from '@/lib/constants';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: `Browse the complete ladder collection from ${SITE_CONFIG.name}. From classic A-frames to the legendary Flex Seal Ladder. All $13.`,
  openGraph: {
    title: `Products | ${SITE_CONFIG.name}`,
    description: `Browse the complete ladder collection from ${SITE_CONFIG.name}. Every ladder $13.`,
    url: `${SITE_CONFIG.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="The Collection."
        subtitle="2026 Product Lineup"
        description="Six ladders. One price. Zero OSHA involvement."
        primaryCTA={{
          text: "Browse Products",
          href: "#products"
        }}
        secondaryCTA={{
          text: "Build Your Own",
          href: "/build"
        }}
        variant="light"
        overlay={false}
      />

      {/* Products List */}
      <div id="products">
        <Services
          title="Every Ladder We Make"
          subtitle="Each one $13. Each one a statement."
          services={PRODUCTS}
          showFeatures={true}
          variant="list"
        />
      </div>

      {/* Pricing */}
      <PricingCards tiers={PRICING_TIERS} />

      {/* Process */}
      <Process
        title="How to Get Your Ladder"
        subtitle="A process as straightforward as our ladders are tall"
        steps={PROCESS_STEPS}
        variant="cards"
      />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Questions we get asked. And some we wish people wouldn&apos;t.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <Card key={faq.id} padding="lg" className="border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        title="What Climbers Are Saying"
        subtitle="Real reviews from real people. Probably."
        testimonials={TESTIMONIALS}
        variant="grid"
      />

      <CTA
        title="Ready to Get Started?"
        subtitle="Your Ladder Awaits"
        description="Join thousands of satisfied climbers. Build your custom ladder today for the low, low price of $13."
        primaryCTA={{
          text: "Build Your Ladder",
          href: "/build"
        }}
        secondaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        variant="gradient"
      />
    </>
  );
}
