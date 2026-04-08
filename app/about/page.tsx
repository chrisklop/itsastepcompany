import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Card from '@/components/common/Card';
import {
  SITE_CONFIG,
  TEAM_MEMBERS
} from '@/lib/constants';
import { Target, Eye, Heart, Accessibility, DollarSign, HelpCircle, Lightbulb } from 'lucide-react';
import { getInitials } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn more about ${SITE_CONFIG.name} - a father-daughter ladder nonprofit that probably holds your weight.`,
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description: `Learn more about ${SITE_CONFIG.name} - a father-daughter ladder nonprofit that probably holds your weight.`,
    url: `${SITE_CONFIG.url}/about`,
  },
};

const avatarColors = [
  'bg-gray-900',
  'bg-accent-500',
  'bg-gray-600',
  'bg-accent-600',
];

export default function AboutPage() {
  const values = [
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Ladders for every body. Our Wide Boy line proves that inclusion goes up."
    },
    {
      icon: DollarSign,
      title: "Affordability",
      description: "$13. That's it. We don't believe in surge pricing for gravity."
    },
    {
      icon: HelpCircle,
      title: "No Questions Asked",
      description: "200-foot ladder? Sure. Glass? Absolutely. Why? None of our business."
    },
    {
      icon: Lightbulb,
      title: "Transparency",
      description: "We are very open about the fact that we have no idea what we're doing."
    }
  ];

  const achievements = [
    {
      number: '14,000+',
      label: "Ladders Discussed",
      footnote: "Not all were sold. Some were imagined."
    },
    {
      number: '0',
      label: "OSHA Inspections",
      footnote: "They haven't found us yet."
    },
    {
      number: '1',
      label: "Lawsuit",
      footnote: "Pending. Unrelated to ladders."
    },
    {
      number: '$13',
      label: "Price Per Ladder",
      footnote: "Before tax. Tax-deductible. You get it back."
    }
  ];

  return (
    <>
      <Hero
        title="A Family Business. Sort Of."
        subtitle="Our Story"
        description="What started as a bit between a father and daughter became a registered business entity. We're as surprised as you are."
        primaryCTA={{
          text: "Meet Our Team",
          href: "#team"
        }}
        variant="light"
        overlay={false}
      />

      {/* Company Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium tracking-widest uppercase text-accent-500 mb-6 text-center">
              Founded on a Dare
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10 text-center tracking-apple-tight">
              The Improbable Origin Story
            </h2>
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
              <p>
                In 2019, Chris and his daughter Caroline made an offhand joke to coworkers about running
                a ladder company. The coworkers didn&apos;t believe them. That was their first mistake.
              </p>
              <p>
                Rather than admit the joke, they doubled down. And then tripled down. A website was built.
                Business cards were discussed. An LLC was filed. It&apos;s A Step Company was no longer
                theoretical. It was, technically, a real business.
              </p>
              <p>
                Today, we operate as a registered 501(c)(3) nonprofit, which means every ladder you buy
                is tax-deductible and we are legally not allowed to make a profit. This has not been difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The guiding principles that keep us climbing. Metaphorically and literally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <Card hover padding="lg" className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                To provide affordable vertical mobility solutions to anyone who needs to be
                higher than they currently are, no questions asked.
              </p>
            </Card>

            <Card hover padding="lg" className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                A world where no one is more than $13 away from reaching something on a high shelf.
              </p>
            </Card>

            <Card hover padding="lg" className="text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Every ladder we build comes with hope, questionable structural integrity,
                and a $13 price tag that defies both economics and common sense.
              </p>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The talented individuals behind your $13 ladder. All four of them. Kind of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={member.id} hover padding="lg" className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className={`w-full h-full ${avatarColors[index % avatarColors.length]} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-apple-tight">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Metrics that reflect our commitment to doing... something.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium text-gray-300 mb-2">
                  {achievement.label}
                </div>
                <p className="text-sm text-gray-500">
                  {achievement.footnote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Work With Us?"
        subtitle="Join the Movement"
        description="Become part of the growing family of people who own ladders that cost $13. You deserve this."
        primaryCTA={{
          text: "Build Your Ladder",
          href: "/build"
        }}
        secondaryCTA={{
          text: "View Products",
          href: "/products"
        }}
        variant="minimal"
      />
    </>
  );
}
