import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/forms/ContactForm';
import Card from '@/components/common/Card';
import { 
  SITE_CONFIG 
} from '@/lib/constants';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Users, 
  Calendar,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${SITE_CONFIG.name}. Contact our expert team for consultations, support, or to discuss your next project. We're here to help you succeed.`,
  openGraph: {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name}. Contact our expert team for consultations, support, or to discuss your next project. We're here to help you succeed.`,
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: SITE_CONFIG.contact.phone,
      description: "Call us during business hours",
      action: `tel:${SITE_CONFIG.contact.phone}`,
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: SITE_CONFIG.contact.email,
      description: "Send us an email anytime",
      action: `mailto:${SITE_CONFIG.contact.email}`,
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: `${SITE_CONFIG.contact.address.street}, ${SITE_CONFIG.contact.address.city}`,
      description: "Come visit our office",
      action: "#location",
      actionText: "Get Directions"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services or how we can help your business"
    },
    {
      icon: Users,
      title: "New Project",
      description: "Ready to start a new project and want to discuss requirements"
    },
    {
      icon: Calendar,
      title: "Consultation",
      description: "Schedule a free consultation to explore opportunities"
    },
    {
      icon: Globe,
      title: "Partnership",
      description: "Interested in partnering or collaboration opportunities"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Contact Our Team"
        description="Ready to start your next project? Have questions about our services? We'd love to hear from you. Reach out and let's discuss how we can help your business succeed."
        primaryCTA={{
          text: "Start Conversation",
          href: "#contact-form"
        }}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
        centered={true}
      />

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're here to help and respond promptly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} hover padding="lg" className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 mb-2">
                    {method.details}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>
                  <a
                    href={method.action}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    {method.actionText}
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Why Contact Us */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Get In Touch?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're here to help with a variety of needs. Here are some common reasons clients reach out to us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <ContactForm
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you within 24 hours during business days."
            services={['Strategic Consulting', 'Digital Solutions', 'Creative Design', 'Project Management', 'Data Analytics', 'Training & Support', 'Other']}
          />
        </div>
      </section>

      {/* Business Info & Hours */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Emergency Support
                </h4>
                <p className="text-sm text-gray-600">
                  For existing clients with urgent technical issues, emergency support is available 24/7. 
                  Additional charges may apply for after-hours support.
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div id="location">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Location
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    {SITE_CONFIG.contact.address.street}<br />
                    {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.zip}<br />
                    {SITE_CONFIG.contact.address.country}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
                  <p className="text-gray-600">
                    We're conveniently located in the heart of the business district with easy access to public transportation and ample parking available.
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">Map integration would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time & Expectations */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
              When you reach out to us, here's what you can expect from our team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">24h</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Quick Response
                </h3>
                <p className="text-primary-100">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Expert Consultation
                </h3>
                <p className="text-primary-100">
                  Speak directly with experienced professionals who understand your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Free Consultation
                </h3>
                <p className="text-primary-100">
                  Initial consultations are always free, with no obligation to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}