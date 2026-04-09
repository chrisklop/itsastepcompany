import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import {
  SITE_CONFIG,
  FEATURES,
  PRODUCTS,
  PROCESS_STEPS,
  TESTIMONIALS
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: SITE_CONFIG.description,
  openGraph: {
    title: `Home | ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Step Up."
        subtitle="Introducing the 2026 Lineup"
        description="Handcrafted vertical mobility solutions for the modern climber. Starting at $13."
        primaryCTA={{
          text: "Explore the Collection",
          href: "/products"
        }}
        secondaryCTA={{
          text: "Watch the Film",
          href: "#about-preview"
        }}
        variant="light"
        overlay={false}
      />

      {/* Features Section */}
      <Features
        title="Why It's A Step Company"
        subtitle="Three pillars of vertical excellence"
        features={FEATURES}
        columns={3}
        variant="minimal"
      />

      {/* About Preview Section */}
      <section id="about-preview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium tracking-widest uppercase text-accent-500 mb-6">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-apple-tight">
              Defying Gravity Since 2025
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl mx-auto">
              What started as a joke between two EMTs on a 12-hour shift has become the nation&apos;s most
              improbable woman-owned ladder company. With over 0 OSHA violations on record (because we&apos;ve never been
              inspected), we&apos;ve served customers across all 50 states and several countries we&apos;re not
              legally allowed to name.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">14k+</div>
                <div className="text-sm text-gray-500">Ladders Discussed*</div>
                <div className="text-xs text-gray-400 mt-1">*Not all were sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-sm text-gray-500">OSHA Inspections</div>
                <div className="text-xs text-gray-400 mt-1">They haven&apos;t found us</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">$13</div>
                <div className="text-sm text-gray-500">Starting Price</div>
                <div className="text-xs text-gray-400 mt-1">Tax-deductible</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">200ft</div>
                <div className="text-sm text-gray-500">Max Height</div>
                <div className="text-xs text-gray-400 mt-1">We won&apos;t ask why</div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/about"
                className="inline-flex items-center text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors duration-200"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Order Banner */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom text-center">
          <p className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-4">
            Ready to Order?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-apple-tight">
            Call Tiffany.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Our Head of Engineering answers every call personally.
            She loves talking about ladders. She will not stop. You&apos;ve been warned.
          </p>
          <a
            href="tel:+12066357392"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent-500 text-white text-2xl font-bold rounded-full hover:bg-accent-600 transition-colors duration-200"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            (206) 635-7392
          </a>
          <p className="text-gray-500 text-xs mt-4">Hours: Between shifts. Tiffany is always available. Tiffany never sleeps.</p>
        </div>
      </section>

      {/* Products Section */}
      <Services
        title="The Collection"
        subtitle="Engineered to exceed your expectations. Not necessarily safety standards."
        services={PRODUCTS}
        showFeatures={true}
        variant="grid"
      />

      {/* Process Section */}
      <Process
        title="From Dream to Climb"
        subtitle="Four simple steps to vertical freedom"
        steps={PROCESS_STEPS}
        variant="cards"
      />

      {/* Testimonials Section */}
      <Testimonials
        title="Real Reviews From Real Climbers"
        subtitle="We couldn't make these up. Actually, we could. But we didn't. Mostly."
        testimonials={TESTIMONIALS}
        variant="carousel"
        autoplay={true}
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Ascend?"
        subtitle="Your Journey Starts Here"
        description="Join over 14,000 customers who chose vertical freedom. Your first consultation is free. Your first ladder is $13. Your first climb is on you."
        primaryCTA={{
          text: "Call (206) 635-7392",
          href: "tel:+12066357392"
        }}
        secondaryCTA={{
          text: "Build Your Ladder Online",
          href: "/build"
        }}
        variant="gradient"
      />
    </>
  );
}
