import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Card from '@/components/common/Card';
import { 
  SITE_CONFIG, 
  SERVICES, 
  PROCESS_STEPS, 
  TESTIMONIALS, 
  FAQ_ITEMS 
} from '@/lib/constants';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Discover the comprehensive range of professional services offered by ${SITE_CONFIG.name}. From consulting to development, we provide expert solutions tailored to your business needs.`,
  openGraph: {
    title: `Our Services | ${SITE_CONFIG.name}`,
    description: `Discover the comprehensive range of professional services offered by ${SITE_CONFIG.name}. From consulting to development, we provide expert solutions tailored to your business needs.`,
    url: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  const serviceFeatures = [
    {
      id: 1,
      title: "Tailored Solutions",
      description: "Every service is customized to meet your specific business requirements and goals.",
      icon: "Target"
    },
    {
      id: 2,
      title: "Expert Team",
      description: "Our experienced professionals bring deep industry knowledge to every project.",
      icon: "Users"
    },
    {
      id: 3,
      title: "Proven Results",
      description: "Track record of successful implementations across various industries and scales.",
      icon: "TrendingUp"
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "Comprehensive support and maintenance to ensure long-term success.",
      icon: "Shield"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Services"
        subtitle="Excellence in Every Solution"
        description="Comprehensive services designed to drive your business forward. From strategic consulting to technical implementation, we deliver results that exceed expectations."
        primaryCTA={{
          text: "Explore Services",
          href: "#services-overview"
        }}
        secondaryCTA={{
          text: "Get Consultation",
          href: "/contact"
        }}
        backgroundImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services Overview */}
      <section id="services-overview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services is designed to address every aspect of your business needs, 
              from strategic planning to technical execution and ongoing support.
            </p>
          </div>

          {/* Service Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceFeatures.map((feature, index) => (
              <div key={feature.id} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <Services
        title="Our Core Services"
        subtitle="Comprehensive solutions for every business challenge"
        services={SERVICES}
        showFeatures={true}
        variant="list"
      />

      {/* Service Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organized by expertise areas to help you find exactly what you need for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy & Consulting */}
            <Card hover padding="lg">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Strategy & Consulting
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategic guidance to help your business make informed decisions and achieve sustainable growth.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Business Strategy Development
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Market Research & Analysis
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Digital Transformation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Process Optimization
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Card>

            {/* Technology & Development */}
            <Card hover padding="lg">
              <div className="mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Technology & Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom software solutions and digital platforms built to scale with your business.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Web Application Development
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Mobile App Development
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Cloud Solutions & Migration
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  API Integration & Development
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Card>

            {/* Design & User Experience */}
            <Card hover padding="lg">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Design & User Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, functional designs that create memorable experiences for your users.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  UI/UX Design
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Brand Identity Design
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Website Design
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Marketing Materials
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process
        title="Our Service Delivery Process"
        subtitle="A proven methodology that ensures exceptional results every time"
        steps={PROCESS_STEPS}
        variant="cards"
      />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and how we work with clients.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {FAQ_ITEMS.map((faq) => (
                <Card key={faq.id} padding="lg" className="border">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
        title="What Our Clients Say"
        subtitle="Success stories from businesses we've helped transform"
        testimonials={TESTIMONIALS}
        variant="grid"
      />

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        subtitle="Transform Your Business Today"
        description="Join hundreds of satisfied clients who have achieved remarkable results with our professional services. Let's discuss how we can help you reach your goals."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
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