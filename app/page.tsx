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
  SERVICES, 
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
        title="Excellence in Every Solution"
        subtitle="Professional Services"
        description="We deliver exceptional results through innovative solutions, expert guidance, and unwavering commitment to your success."
        primaryCTA={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Watch Our Story",
          href: "#about-preview"
        }}
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80"
      />

      {/* Features Section */}
      <Features
        title="Why Choose Us"
        subtitle="The advantages that set us apart from the competition"
        features={FEATURES}
        columns={3}
      />

      {/* About Preview Section */}
      <section id="about-preview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Success Since {new Date().getFullYear() - SITE_CONFIG.stats.yearsInBusiness}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over {SITE_CONFIG.stats.yearsInBusiness} years of experience, we've helped {SITE_CONFIG.stats.clientsServed}+ companies achieve their goals through innovative solutions and strategic thinking.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Proven track record of success</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Expert team of professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Customized solutions for every client</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {SITE_CONFIG.stats.clientsServed}+
                    </div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {SITE_CONFIG.stats.projectsCompleted}+
                    </div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services
        title="Our Services"
        subtitle="Comprehensive solutions designed to drive your business forward"
        services={SERVICES}
        showFeatures={true}
        variant="grid"
      />

      {/* Process Section */}
      <Process
        title="How We Work"
        subtitle="Our proven process ensures exceptional results every time"
        steps={PROCESS_STEPS}
        variant="timeline"
      />

      {/* Testimonials Section */}
      <Testimonials
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from our satisfied clients"
        testimonials={TESTIMONIALS}
        variant="carousel"
        autoplay={true}
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        subtitle="Let's Get Started"
        description="Join hundreds of satisfied clients who have achieved remarkable results with our expert guidance and innovative solutions."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
        variant="gradient"
      />
    </>
  );
}