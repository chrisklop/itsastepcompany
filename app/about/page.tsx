import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Card from '@/components/common/Card';
import { 
  SITE_CONFIG, 
  TEAM_MEMBERS 
} from '@/lib/constants';
import { Target, Eye, Heart, Users, Award, Clock, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn more about ${SITE_CONFIG.name} - our mission, vision, values, and the expert team behind our success.`,
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description: `Learn more about ${SITE_CONFIG.name} - our mission, vision, values, and the expert team behind our success.`,
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const foundedYear = currentYear - SITE_CONFIG.stats.yearsInBusiness;

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional quality and exceeding expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, both within our team and with our clients."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges."
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: SITE_CONFIG.stats.clientsServed + '+',
      label: "Happy Clients",
      description: "Companies trust us with their most important projects"
    },
    {
      icon: Clock,
      number: SITE_CONFIG.stats.yearsInBusiness + '+',
      label: "Years Experience",
      description: "Proven track record of delivering results"
    },
    {
      icon: Target,
      number: SITE_CONFIG.stats.projectsCompleted + '+',
      label: "Projects Completed",
      description: "Successful implementations across industries"
    },
    {
      icon: Users,
      number: SITE_CONFIG.stats.teamMembers + '+',
      label: "Team Members",
      description: "Expert professionals dedicated to your success"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Our Company"
        subtitle="Our Story"
        description="Discover the passion, expertise, and dedication that drives our success and commitment to excellence."
        primaryCTA={{
          text: "Meet Our Team",
          href: "#team"
        }}
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        centered={true}
      />

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey Since {foundedYear}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in {foundedYear}, {SITE_CONFIG.name} began with a simple mission: to help businesses 
                  achieve their goals through innovative solutions and expert guidance. What started as a small 
                  team of passionate professionals has grown into a trusted partner for companies worldwide.
                </p>
                <p>
                  Over the years, we've evolved and adapted to meet the changing needs of our clients, 
                  always staying at the forefront of industry trends and technological advancements. 
                  Our commitment to excellence and client satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, we're proud to serve {SITE_CONFIG.stats.clientsServed}+ clients across various industries, 
                  having completed over {SITE_CONFIG.stats.projectsCompleted} successful projects. Our team of 
                  {SITE_CONFIG.stats.teamMembers}+ experts continues to deliver exceptional results that drive 
                  business growth and transformation.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Our company journey"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              
              {/* Timeline overlay */}
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{SITE_CONFIG.stats.yearsInBusiness}+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The guiding principles that shape our culture and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <Card hover padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative solutions and expert guidance that drive 
                sustainable growth and long-term success.
              </p>
            </Card>

            {/* Vision */}
            <Card hover padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of professional services, recognized for our expertise, 
                innovation, and unwavering commitment to client success.
              </p>
            </Card>

            {/* Values */}
            <Card hover padding="lg" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, integrity, collaboration, and innovation form the foundation of 
                everything we do and every relationship we build.
              </p>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind our success, bringing diverse expertise and 
              unwavering dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.id} hover padding="lg" className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{platform}</span>
                      {platform === 'linkedin' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                        </svg>
                      )}
                      {platform === 'twitter' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      )}
                      {platform === 'github' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold text-primary-100 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-primary-200 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Work With Us?"
        subtitle="Join Our Success Story"
        description="Become part of our growing family of satisfied clients and experience the difference our expertise can make for your business."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Services",
          href: "/services"
        }}
        variant="minimal"
      />
    </>
  );
}