'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const MATERIALS = [
  { id: 'wood', name: 'Wood', desc: 'Classic. Reliable. Flammable.' },
  { id: 'aluminum', name: 'Aluminum', desc: 'Light. Strong. Boring.' },
  { id: 'fiberglass', name: 'Fiberglass', desc: 'For electricians who like to live.' },
  { id: 'glass', name: 'Glass', desc: 'Transparent. Stunning. Terrifying.' },
  { id: 'styrofoam', name: 'Styrofoam', desc: 'Weight capacity: optimistic.' },
  { id: 'pvc', name: 'PVC', desc: 'Plumber chic.' },
  { id: 'flexseal', name: 'Flex Seal', desc: 'The meme. The legend. The ladder.' },
];

const STYLES = [
  { id: 'aframe', name: 'A-Frame', desc: 'The classic triangle of trust' },
  { id: 'straight', name: 'Straight / Extension', desc: 'For the committed climber' },
  { id: 'collapsible', name: 'Collapsible', desc: 'Now you see it. Now it\'s smaller.' },
];

const RUNGS = [
  { id: 'wood', name: 'Standard Wood', desc: 'Traditional and trustworthy' },
  { id: 'aluminum', name: 'Aluminum', desc: 'Sleek and modern' },
  { id: 'rubbergrip', name: 'Rubber-Grip', desc: 'For sweaty palms and existential dread' },
  { id: 'glass', name: 'Glass', desc: 'Pairs terribly with acrophobia' },
];

const COLORS = [
  { id: '#8B4513', name: 'Natural Wood' },
  { id: '#C0C0C0', name: 'Silver' },
  { id: '#1d1d1f', name: 'Midnight' },
  { id: '#FF6B00', name: 'Safety Orange' },
  { id: '#FF69B4', name: 'Millennial Pink' },
  { id: '#FFD700', name: 'Caution Gold' },
  { id: '#00FF00', name: 'Radioactive' },
  { id: '#FF0000', name: 'Fire Engine' },
];

function getHeightWarning(height: number, material: string): string | null {
  switch (material) {
    case 'glass':
      if (height >= 200) return "Maximum height. This is the tallest glass ladder in recorded human history. We checked. No one else was tracking this.";
      if (height >= 150) return "At this height, a glass ladder is classified as performance art in 11 states.";
      if (height >= 100) return "100 feet of glass. The view from the top will be incredible. Briefly.";
      if (height >= 40) return "Our engineers have formally asked us to stop offering glass ladders above 10 feet. We said no.";
      if (height >= 20) return "At this height, a glass ladder technically qualifies as abstract sculpture. Very functional sculpture.";
      return null;

    case 'styrofoam':
      if (height >= 200) return "Maximum height. 200 feet of styrofoam. This is either genius or a cry for help. We will not ask which.";
      if (height >= 150) return "This ladder could be relocated by a moderate breeze. That is not covered under warranty.";
      if (height >= 100) return "Your ladder weighs approximately 12 pounds. The weight capacity does not reflect this.";
      if (height >= 40) return "Our engineers have submitted their resignations. We have not accepted them.";
      if (height >= 20) return "Styrofoam does not appreciate wind. We are simply informing you.";
      return null;

    case 'flexseal':
      if (height >= 200) return "Maximum height. Phil Swift would weep at this. Whether from pride or horror, we cannot say. He has still not been contacted.";
      if (height >= 150) return "Legal has asked us to clarify that 'as seen on TV' does not apply above 150 feet. Flex Seal has not acknowledged this ladder exists.";
      if (height >= 100) return "At this height, this ladder required approximately 4,000 linear feet of Flex Seal Tape. We have our sources. Don't ask.";
      if (height >= 40) return "Phil Swift has still not been contacted. This ladder is 40 feet of pure, unendorsed belief.";
      if (height >= 20) return "Flex Seal Ladder note: Phil Swift is unaware of this product. We have chosen to keep it that way.";
      return null;

    case 'wood':
      if (height >= 200) return "Maximum height. This ladder is now taller than most of the trees it came from. Poetic, in a way.";
      if (height >= 150) return "150 feet of wood requires a permit, a prayer, and possibly a forestry license. We will help with none of these.";
      if (height >= 100) return "At this height, wood expands and contracts with the weather. Your ladder has feelings about humidity.";
      if (height >= 40) return "Our engineers would like you to reconsider. That is a significant amount of wood.";
      return null;

    case 'aluminum':
      if (height >= 200) return "Maximum height reached. We respect your ambition and your apparent immunity to physics.";
      if (height >= 150) return "At this height, wind load calculations become relevant. We have not done them. You probably should.";
      if (height >= 100) return "This much aluminum requires a building permit. It will also conduct lightning. Both things are true simultaneously.";
      if (height >= 40) return "Our engineers would like you to reconsider. They are being polite about it.";
      return null;

    case 'fiberglass':
      if (height >= 200) return "Maximum height. 200 feet of fiberglass. The safest possible terrible idea. We are proud of you.";
      if (height >= 150) return "Your electrician's association would be proud. We still cannot help with the permit.";
      if (height >= 100) return "100 feet of fiberglass. You are statistically the most responsible person to use this configurator.";
      if (height >= 40) return "Fiberglass at this height is actually sensible. We are deeply suspicious of you.";
      return null;

    case 'pvc':
      if (height >= 200) return "Maximum height. 200 feet of PVC. Home Depot didn't have enough. We found another source. Don't ask.";
      if (height >= 150) return "We called our PVC supplier about this order. They asked us not to use their name.";
      if (height >= 100) return "At this height, PVC flexes in direct sunlight. Your ladder will have opinions about the temperature.";
      if (height >= 40) return "Plumbers don't typically go this high. You are a pioneer. A reckless, pipe-shaped pioneer.";
      return null;

    default:
      if (height >= 200) return "Maximum height reached. We respect your ambition and fear your judgment.";
      if (height >= 150) return "At this height, we are legally required to inform you that wind exists.";
      if (height >= 100) return "You will need a permit. We will not help you get one.";
      if (height >= 40) return "Our engineers would like you to reconsider.";
      return null;
  }
}

function getSavings(height: number): string {
  const base = 13;
  const retail = height * 25 + 200;
  const savings = retail - base;
  return savings.toLocaleString();
}

const STEPS = ['Material', 'Height', 'Style', 'Color', 'Rungs', 'Review'];

export default function LadderConfigurator() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState({
    material: '',
    height: 6,
    style: '',
    color: '#C0C0C0',
    rungs: '',
  });

  const canProceed = () => {
    switch (step) {
      case 0: return config.material !== '';
      case 1: return config.height >= 2;
      case 2: return config.style !== '';
      case 3: return config.color !== '';
      case 4: return config.rungs !== '';
      case 5: return true;
      default: return false;
    }
  };

  const heightWarning = getHeightWarning(config.height, config.material);
  const savings = getSavings(config.height);

  const materialName = MATERIALS.find(m => m.id === config.material)?.name || '';
  const styleName = STYLES.find(s => s.id === config.style)?.name || '';
  const rungName = RUNGS.find(r => r.id === config.rungs)?.name || '';
  const colorName = COLORS.find(c => c.id === config.color)?.name || '';

  return (
    <section className="pb-20 md:pb-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-3">
              {STEPS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => i < step && setStep(i)}
                  className={`text-xs font-medium transition-colors ${
                    i === step ? 'text-gray-900' : i < step ? 'text-accent-500 cursor-pointer' : 'text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gray-900 rounded-full"
                animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Step Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 0: Material */}
                  {step === 0 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Choose Your Material</h2>
                      <p className="text-gray-500 mb-8">If it exists, we&apos;ll make a ladder out of it.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {MATERIALS.map((mat) => (
                          <button
                            key={mat.id}
                            onClick={() => setConfig({ ...config, material: mat.id })}
                            className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                              config.material === mat.id
                                ? 'border-gray-900 bg-gray-50'
                                : 'border-gray-100 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold text-gray-900 text-sm">{mat.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{mat.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Height */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Set Your Height</h2>
                      <p className="text-gray-500 mb-8">From 2 to 200 feet. We don&apos;t judge.</p>

                      <div className="text-center mb-8">
                        <div className="text-7xl font-bold text-gray-900 mb-2">{config.height}<span className="text-3xl text-gray-400">ft</span></div>
                      </div>

                      <input
                        type="range"
                        min="2"
                        max="200"
                        value={config.height}
                        onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>2ft</span>
                        <span>200ft</span>
                      </div>

                      <AnimatePresence>
                        {heightWarning && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-6 p-4 bg-accent-50 border border-accent-200 rounded-2xl flex items-start gap-3"
                          >
                            <AlertTriangle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">{heightWarning}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Step 2: Style */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Pick Your Style</h2>
                      <p className="text-gray-500 mb-8">How would you like to ascend?</p>
                      <div className="space-y-3">
                        {STYLES.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setConfig({ ...config, style: style.id })}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                              config.style === style.id
                                ? 'border-gray-900 bg-gray-50'
                                : 'border-gray-100 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold text-gray-900">{style.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{style.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Color */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Choose Your Color</h2>
                      <p className="text-gray-500 mb-8">Any color. We mean it. We once made a ladder in &apos;Millennial Pink&apos; for a wedding.</p>
                      <div className="grid grid-cols-4 gap-4">
                        {COLORS.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => setConfig({ ...config, color: color.id })}
                            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 ${
                              config.color === color.id
                                ? 'border-gray-900'
                                : 'border-transparent hover:border-gray-200'
                            }`}
                          >
                            <div
                              className="w-12 h-12 rounded-full border border-gray-200 shadow-sm"
                              style={{ backgroundColor: color.id }}
                            />
                            <span className="text-xs text-gray-600 text-center">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Rungs */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Select Your Rungs</h2>
                      <p className="text-gray-500 mb-8">The part you actually step on. Choose wisely.</p>
                      <div className="space-y-3">
                        {RUNGS.map((rung) => (
                          <button
                            key={rung.id}
                            onClick={() => setConfig({ ...config, rungs: rung.id })}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                              config.rungs === rung.id
                                ? 'border-gray-900 bg-gray-50'
                                : 'border-gray-100 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold text-gray-900">{rung.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{rung.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Review */}
                  {step === 5 && (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Review Your Ladder</h2>
                      <p className="text-gray-500 mb-8">Let&apos;s make sure this is what you want. Actually, we don&apos;t care. It&apos;s $13.</p>

                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">Material</span>
                          <span className="font-medium text-gray-900 text-sm">{materialName}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">Height</span>
                          <span className="font-medium text-gray-900 text-sm">{config.height} ft</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">Style</span>
                          <span className="font-medium text-gray-900 text-sm">{styleName}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">Color</span>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: config.color }} />
                            <span className="font-medium text-gray-900 text-sm">{colorName}</span>
                          </div>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">Rungs</span>
                          <span className="font-medium text-gray-900 text-sm">{rungName}</span>
                        </div>
                      </div>

                      <Link
                        href={`/contact?ladder=${encodeURIComponent(`${config.height}ft ${materialName} ${styleName} ladder in ${colorName} with ${rungName} rungs`)}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-black transition-colors duration-200"
                      >
                        Place Order — $13.00
                        <ArrowRight className="w-5 h-5" />
                      </Link>

                      <p className="text-xs text-gray-400 text-center mt-4">
                        * It&apos;s A Step Company is a 501(c)(3) nonprofit. All purchases are tax-deductible.
                        Delivery: 2-47 business days. No refunds, but honestly, it&apos;s $13.
                        OSHA compliance: pending. Liability: yours. Confidence: ours.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {step < 5 && (
                <div className="flex justify-between mt-10">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 ${
                      step === 0 ? 'invisible' : ''
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <button
                    onClick={() => canProceed() && setStep(step + 1)}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                      canProceed()
                        ? 'bg-gray-900 text-white hover:bg-black'
                        : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-20 bg-gray-50 rounded-3xl p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Your Ladder</h3>

                {/* Ladder Visual */}
                <div className="flex justify-center mb-6">
                  <div className="relative" style={{ height: `${Math.min(Math.max(config.height * 1.2, 60), 200)}px` }}>
                    {/* Ladder SVG */}
                    <svg viewBox="0 0 60 200" className="h-full w-auto" style={{ maxHeight: '200px' }}>
                      {/* Rails */}
                      <line x1="15" y1="5" x2="15" y2="195" stroke={config.color || '#C0C0C0'} strokeWidth="4" strokeLinecap="round" />
                      <line x1="45" y1="5" x2="45" y2="195" stroke={config.color || '#C0C0C0'} strokeWidth="4" strokeLinecap="round" />
                      {/* Rungs */}
                      {Array.from({ length: 8 }, (_, i) => (
                        <line key={i} x1="15" y1={25 + i * 22} x2="45" y2={25 + i * 22} stroke={config.color || '#C0C0C0'} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  {config.material && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Material</span>
                      <span className="text-gray-900 font-medium">{materialName}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Height</span>
                    <span className="text-gray-900 font-medium">{config.height}ft</span>
                  </div>
                  {config.style && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Style</span>
                      <span className="text-gray-900 font-medium">{styleName}</span>
                    </div>
                  )}
                  {config.color && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Color</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: config.color }} />
                        <span className="text-gray-900 font-medium">{colorName}</span>
                      </div>
                    </div>
                  )}
                  {config.rungs && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Rungs</span>
                      <span className="text-gray-900 font-medium">{rungName}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-500 text-sm">Total</span>
                    <span className="text-3xl font-bold text-gray-900">$13</span>
                  </div>
                  <div className="mt-2 bg-accent-50 rounded-xl px-3 py-2 text-center">
                    <span className="text-xs text-accent-600 font-medium">
                      You&apos;re saving ${savings} compared to retail
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
