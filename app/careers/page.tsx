import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Card from '@/components/common/Card';
import { 
  SITE_CONFIG, 
  JOB_OPENINGS,
  TEAM_MEMBERS 
} from '@/lib/constants';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  Heart, 
  TrendingUp,
  Coffee,
  Award,
  BookOpen,
  Zap,
  Shield,
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: `Join the ${SITE_CONFIG.name} team. Explore exciting career opportunities, competitive benefits, and a collaborative work environment where you can grow and make an impact.`,
  openGraph: {
    title: `Careers | ${SITE_CONFIG.name}`,
    description: `Join the ${SITE_CONFIG.name} team. Explore exciting career opportunities, competitive benefits, and a collaborative work environment where you can grow and make an impact.`,
    url: `${SITE_CONFIG.url}/careers`,
  },
};

export default function CareersPage() {
  const companyValues = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous learning and professional development opportunities."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to support your lifestyle."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Encouraging creativity and new ideas to solve complex challenges."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Wellness programs"
      ]
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      items: [
        "Learning & development budget",
        "Conference and training opportunities",
        "Mentorship programs",
        "Career advancement paths"
      ]
    },
    {
      icon: Coffee,
      title: "Work Environment",
      items: [
        "Flexible working hours",
        "Remote work options",
        "Modern office space",
        "Team building activities"
      ]
    },
    {
      icon: Award,
      title: "Compensation",
      items: [
        "Competitive salary",
        "Performance bonuses",
        "Equity participation",
        "Retirement savings plan"
      ]
    }
  ];

  const workCulture = [
    {
      title: "Remote-First Approach",
      description: "Work from anywhere while staying connected with our global team.",
      icon: Home
    },
    {
      title: "Continuous Learning",
      description: "Access to courses, workshops, and resources to enhance your skills.",
      icon: BookOpen
    },
    {
      title: "Inclusive Environment",
      description: "Diverse team where everyone's voice is heard and valued.",
      icon: Users
    },
    {
      title: "Impact-Driven Work",
      description: "Meaningful projects that make a real difference for our clients.",
      icon: Zap
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Join Our Team"
        subtitle="Build Your Career With Us"
        description="Be part of a dynamic team that's shaping the future of business solutions. Discover exciting opportunities to grow, learn, and make a meaningful impact."
        primaryCTA={{
          text: "View Open Positions",
          href: "#job-openings"
        }}
        secondaryCTA={{
          text: "Learn About Culture",
          href: "#company-culture"
        }}
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      />

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a company - we're a community of passionate professionals dedicated to 
              excellence, innovation, and making a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="company-culture" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've built a culture that prioritizes growth, collaboration, and work-life balance. 
                Our team members are our greatest asset, and we invest in their success both professionally and personally.
              </p>

              <div className="space-y-6">
                {workCulture.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {SITE_CONFIG.stats.teamMembers}+
                    </div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      95%
                    </div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive benefits and perks designed to support your well-being, 
              growth, and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} padding="lg" className="h-full">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="job-openings" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our team and make a meaningful impact.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {JOB_OPENINGS.map((job) => (
              <Card key={job.id} hover padding="lg" className="border">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {job.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <a
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Openings Fallback */}
          {JOB_OPENINGS.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No Open Positions Currently
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always interested in 
                connecting with talented individuals. Feel free to send us your resume for future opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know some of the amazing people you'll be working with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <Card key={member.id} hover padding="lg" className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-12">
              We've designed a straightforward, respectful hiring process to help us get to know each other.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Apply Online
                </h3>
                <p className="text-primary-100 text-sm">
                  Submit your application and resume through our online portal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Initial Review
                </h3>
                <p className="text-primary-100 text-sm">
                  Our team reviews your application and reaches out if there's a fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Interview Process
                </h3>
                <p className="text-primary-100 text-sm">
                  Meet with team members to discuss your experience and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Welcome Aboard
                </h3>
                <p className="text-primary-100 text-sm">
                  Join our team and start making an impact from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Join Our Team?"
        subtitle="Start Your Journey With Us"
        description="Don't see the perfect position? We're always looking for talented individuals who share our passion for excellence. Send us your resume and let's talk about your future with us."
        primaryCTA={{
          text: "View Open Positions",
          href: "#job-openings"
        }}
        secondaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        variant="minimal"
      />
    </>
  );
}