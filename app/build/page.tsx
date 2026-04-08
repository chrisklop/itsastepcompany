import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import LadderConfigurator from '@/components/sections/LadderConfigurator';

export const metadata: Metadata = {
  title: 'Build Your Ladder',
  description: `Design your perfect ladder with ${SITE_CONFIG.name}'s custom configurator. Any material. Any height. $13.`,
  openGraph: {
    title: `Build Your Ladder | ${SITE_CONFIG.name}`,
    description: `Design your perfect ladder. Any material. Any height. $13.`,
    url: `${SITE_CONFIG.url}/build`,
  },
};

export default function BuildPage() {
  return (
    <>
      {/* Spacer for fixed header */}
      <div className="h-14" />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent-500 mb-4">
            Custom Configurator
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-apple-display">
            Build Your Ladder.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The only limit is your imagination. And physics. Mostly physics.
          </p>
        </div>
      </section>

      {/* Configurator */}
      <LadderConfigurator />
    </>
  );
}
