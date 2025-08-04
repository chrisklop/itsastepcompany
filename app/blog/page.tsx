import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Card from '@/components/common/Card';
import { 
  SITE_CONFIG, 
  BLOG_POSTS 
} from '@/lib/constants';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  Search,
  TrendingUp,
  BookOpen,
  Lightbulb
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Stay updated with the latest insights, trends, and expertise from ${SITE_CONFIG.name}. Read our blog for industry knowledge, best practices, and thought leadership.`,
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description: `Stay updated with the latest insights, trends, and expertise from ${SITE_CONFIG.name}. Read our blog for industry knowledge, best practices, and thought leadership.`,
    url: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  const categories = [
    { name: 'All Posts', count: BLOG_POSTS.length, active: true },
    { name: 'Strategy', count: 1, active: false },
    { name: 'Technology', count: 1, active: false },
    { name: 'Design', count: 1, active: false },
    { name: 'Business', count: 0, active: false }
  ];

  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  const blogFeatures = [
    {
      icon: BookOpen,
      title: "Expert Insights",
      description: "In-depth articles from our team of industry experts"
    },
    {
      icon: TrendingUp,
      title: "Latest Trends",
      description: "Stay ahead with the latest industry trends and developments"
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Practical tips and strategies you can implement today"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Insights & Expertise"
        subtitle="Our Blog"
        description="Stay informed with the latest industry insights, expert analysis, and practical advice from our team of professionals. Discover trends, best practices, and innovative solutions."
        primaryCTA={{
          text: "Browse Articles",
          href: "#blog-posts"
        }}
        secondaryCTA={{
          text: "Subscribe to Updates",
          href: "#newsletter"
        }}
        backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
      />

      {/* Blog Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Read Our Blog?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our blog is your go-to resource for industry knowledge, practical insights, and expert perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600">
                Our most recent and popular content
              </p>
            </div>

            <Card className="overflow-hidden" hover>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                      <Tag className="w-3 h-3 mr-1" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(featuredPost.date)}
                        </p>
                      </div>
                    </div>
                    
                    <a
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors duration-200 ${
                        category.active
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-sm ${
                        category.active ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        ({category.count})
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {BLOG_POSTS.slice(0, 3).map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Articles ({BLOG_POSTS.length})
                </h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Sort by Date</option>
                  <option>Sort by Title</option>
                  <option>Sort by Category</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map((post) => (
                  <Card key={post.id} className="overflow-hidden" hover>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
                          </div>
                        </div>
                        
                        <a
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600 rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and never miss the latest insights, trends, and expert advice.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-primary-200 mt-3">
                Unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Work With Us?"
        subtitle="Let's Discuss Your Project"
        description="Have questions about our services or ready to start your next project? Our team of experts is here to help you achieve your goals."
        primaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Services",
          href: "/services"
        }}
        variant="minimal"
      />
    </>
  );
}