import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/forms/ContactForm';
import Card from '@/components/common/Card';
import {
  SITE_CONFIG
} from '@/lib/constants';
import {
  Phone,
  Mail,
  Clock,
  Users,
  Calendar,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${SITE_CONFIG.name}. Free ladder consultations. Chris will answer. He always answers.`,
  openGraph: {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name}. Free ladder consultations.`,
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: SITE_CONFIG.contact.phone,
      description: "Karaline or Olyvia will answer. Probably.",
      action: `tel:${SITE_CONFIG.contact.phone}`,
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: SITE_CONFIG.contact.email,
      description: "Responses between shifts. Usually within 24 hours, because we're excited someone emailed.",
      action: `mailto:${SITE_CONFIG.contact.email}`,
      actionText: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Visit Us",
      details: "We don't have an office",
      description: "We're two EMTs. We don't have an office. If you want to meet, bring snacks to the ambulance bay.",
      action: "#contact-form",
      actionText: "Send Message"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "Between shifts" },
    { day: "Saturday", hours: "Maybe" },
    { day: "Sunday", hours: "Unlikely but not impossible" }
  ];

  return (
    <>
      <Hero
        title="Let's Talk Ladders."
        subtitle="Consultation Hotline"
        description="Whether you need help choosing a material, have questions about our 200-foot offerings, or just want to confirm we're real — we're here for you."
        primaryCTA={{
          text: "Start Conversation",
          href: "#contact-form"
        }}
        variant="light"
        overlay={false}
      />

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-apple-tight">
              Reach Out
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Choose your preferred method of ladder communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} hover padding="lg" className="text-center">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-accent-500 mb-2">
                    {method.details}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    {method.description}
                  </p>
                  <a
                    href={method.action}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-200"
                  >
                    {method.actionText}
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <ContactForm
            title="Send Us a Message"
            subtitle="Tell us about your ladder needs. No judgment. Seriously."
            services={[
              'I need a ladder',
              'I need a very tall ladder',
              'I need a ladder made of an unusual material',
              'I need to confirm this company is real',
              "I'm from OSHA",
              "I'm not from OSHA but I'm concerned",
              'Flex Seal Ladder inquiry',
              'Other'
            ]}
          />
        </div>
      </section>

      {/* Business Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900 text-sm">{schedule.day}</span>
                    <span className="text-gray-500 text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  Emergency Ladder Support
                </h4>
                <p className="text-sm text-gray-500">
                  If you are currently on one of our ladders and experiencing an emergency,
                  please call 911. We are not equipped to handle this. We sell ladders for $13.
                </p>
              </div>
            </div>

            {/* Response Expectations */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  What to Expect
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">24h</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Quick Response</h4>
                    <p className="text-sm text-gray-500">We respond to all inquiries within 24 hours. Usually faster.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Free Consultation</h4>
                    <p className="text-sm text-gray-500">Every consultation is free. The ladder is $13. The advice is priceless. Or worthless. Depends on who you ask.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Real Humans</h4>
                    <p className="text-sm text-gray-500">Tiffany answers. Every time. Tiffany is completely real and we resent the implication otherwise. She has 30 years of structural engineering experience and strong opinions about rung spacing, and if you&apos;re lucky, she will share all of them. You are very lucky.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
