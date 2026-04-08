'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import VideoShowcase from '@/components/sections/VideoShowcase';

export default function FlexSealPage() {
  const { scrollYProgress } = useScroll();
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <>
      {/* Hero - Full screen title */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-black relative"
        style={{ opacity: opacity1, scale: scale1 }}
      >
        <div className="text-center px-5">
          <motion.p
            className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Introducing
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-apple-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Flex Seal
            <br />
            Ladder.
          </motion.h1>
          <motion.p
            className="text-gray-500 text-xl md:text-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            It&apos;s exactly what it sounds like.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Video Section */}
      <VideoShowcase
        caption="100% Flex Seal. 0% OSHA Approval."
        darkBg={true}
      />

      {/* Specs Reveal */}
      <section className="py-32 md:py-48 bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-24">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-4">The Frame</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-apple-display">
                Flex Seal Tape.
              </h2>
              <p className="text-gray-500 text-xl mt-6 max-w-xl mx-auto">
                The structural foundation of our most innovative product. Strong enough to hold a ladder together.
                We think.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-4">The Rungs</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-apple-display">
                Flex Seal Liquid.
              </h2>
              <p className="text-gray-500 text-xl mt-6 max-w-xl mx-auto">
                Poured into the tape mold. Left to solidify. Became rungs. Science? Maybe. Magic? Also maybe.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-4">The Seal</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-apple-display">
                Flex Seal Paste.
              </h2>
              <p className="text-gray-500 text-xl mt-6 max-w-xl mx-auto">
                The final layer. Seals everything together. It&apos;s a lot of Flex Seal.
                Phil Swift has not endorsed this product. We have not asked.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-gray-600 text-sm font-medium tracking-widest uppercase mb-4">The Endorsement</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 tracking-apple-display">
                Phil Swift.
              </h2>
              <p className="text-gray-600 text-xl mt-6 max-w-xl mx-auto">
                Not Involved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-apple-tight">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            {[
              { label: 'Waterproof', detail: 'The ladder, not you.' },
              { label: 'Surprisingly Rigid', detail: 'Defies expectations and most physics.' },
              { label: 'Smells Interesting', detail: 'A complex bouquet of rubber and ambition.' },
              { label: 'One Size Fits All', detail: 'Because it\'s Flex Seal. It flexes.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{feature.label}</h3>
                <p className="text-gray-500">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-apple-display">
              $13.
            </h2>
            <p className="text-2xl text-gray-500 mb-10">Obviously.</p>
            <Link
              href="/build"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-black transition-colors duration-200"
            >
              Configure Yours
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
