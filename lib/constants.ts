export const SITE_CONFIG = {
  name: "Your Company Name",
  description: "Professional services that drive results and exceed expectations",
  tagline: "Excellence in Every Solution",
  url: "https://yourcompany.com",
  ogImage: "/images/og-image.jpg",
  
  // Contact Information
  contact: {
    email: "hello@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Business Street",
      city: "City",
      state: "State",
      zip: "12345",
      country: "Country"
    }
  },
  
  // Business Hours
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  
  // Social Media Links
  social: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    youtube: "https://youtube.com/@yourcompany"
  },
  
  // Company Statistics
  stats: {
    yearsInBusiness: 15,
    clientsServed: 500,
    projectsCompleted: 1200,
    teamMembers: 25
  }
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/", dropdown: false },
  { name: "About", href: "/about", dropdown: false },
  { 
    name: "Services", 
    href: "/services", 
    dropdown: true,
    items: [
      { name: "Consulting", href: "/services#consulting" },
      { name: "Development", href: "/services#development" },
      { name: "Design", href: "/services#design" },
      { name: "Support", href: "/services#support" }
    ]
  },
  { name: "Blog", href: "/blog", dropdown: false },
  { name: "Careers", href: "/careers", dropdown: false },
  { name: "Contact", href: "/contact", dropdown: false }
];

export const FEATURES = [
  {
    id: 1,
    title: "Expert Team",
    description: "Our experienced professionals bring years of industry expertise to every project.",
    icon: "Users"
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Round-the-clock support ensures your business never stops moving forward.",
    icon: "Clock"
  },
  {
    id: 3,
    title: "Proven Results",
    description: "Track record of delivering successful outcomes for clients across industries.",
    icon: "TrendingUp"
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "Strategic Consulting",
    description: "Expert guidance to help your business make informed decisions and achieve growth.",
    icon: "Lightbulb",
    features: ["Business Analysis", "Market Research", "Strategic Planning", "ROI Optimization"]
  },
  {
    id: 2,
    title: "Digital Solutions",
    description: "Custom software and digital platforms tailored to your specific business needs.",
    icon: "Code",
    features: ["Web Development", "Mobile Apps", "Cloud Solutions", "System Integration"]
  },
  {
    id: 3,
    title: "Creative Design",
    description: "Compelling visual design that communicates your brand message effectively.",
    icon: "Palette",
    features: ["Brand Identity", "UI/UX Design", "Marketing Materials", "Website Design"]
  },
  {
    id: 4,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and quality results.",
    icon: "CheckCircle",
    features: ["Timeline Management", "Resource Planning", "Quality Assurance", "Risk Management"]
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Transform your data into actionable insights for better business decisions.",
    icon: "BarChart3",
    features: ["Data Visualization", "Performance Metrics", "Predictive Analysis", "Custom Reports"]
  },
  {
    id: 6,
    title: "Training & Support",
    description: "Comprehensive training and ongoing support to maximize your investment.",
    icon: "GraduationCap",
    features: ["User Training", "Documentation", "Technical Support", "Best Practices"]
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery",
    description: "We start by understanding your unique needs, goals, and challenges.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Strategy",
    description: "Develop a comprehensive plan tailored to your specific requirements.",
    icon: "Target"
  },
  {
    id: 3,
    title: "Implementation",
    description: "Execute the plan with precision, keeping you informed every step of the way.",
    icon: "Cog"
  },
  {
    id: 4,
    title: "Results",
    description: "Deliver measurable outcomes and provide ongoing support for continued success.",
    icon: "Trophy"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    role: "CEO",
    content: "Working with this team transformed our business. Their expertise and dedication exceeded our expectations.",
    rating: 5,
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Global Solutions LLC",
    role: "CTO",
    content: "Professional, reliable, and results-driven. They delivered exactly what we needed on time and within budget.",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Agency",
    role: "Creative Director",
    content: "The quality of work and attention to detail is outstanding. Our clients love the results we've achieved together.",
    rating: 5,
    image: "/images/testimonials/emily.jpg"
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO & Founder",
    bio: "With over 15 years of industry experience, John leads our team with vision and expertise.",
    image: "/images/team/john.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith"
    }
  },
  {
    id: 2,
    name: "Lisa Wang",
    role: "Head of Strategy",
    bio: "Lisa brings strategic thinking and analytical expertise to drive client success.",
    image: "/images/team/lisa.jpg",
    social: {
      linkedin: "https://linkedin.com/in/lisawang"
    }
  },
  {
    id: 3,
    name: "David Brown",
    role: "Lead Developer",
    bio: "David's technical expertise ensures our solutions are robust, scalable, and future-proof.",
    image: "/images/team/david.jpg",
    social: {
      linkedin: "https://linkedin.com/in/davidbrown",
      github: "https://github.com/davidbrown"
    }
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Design Director",
    bio: "Maria creates compelling visual experiences that engage and inspire audiences.",
    image: "/images/team/maria.jpg",
    social: {
      linkedin: "https://linkedin.com/in/mariagarcia",
      dribbble: "https://dribbble.com/mariagarcia"
    }
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Strategies for Digital Transformation Success",
    excerpt: "Learn the key strategies that leading companies use to successfully navigate digital transformation.",
    author: "John Smith",
    date: "2024-01-15",
    category: "Strategy",
    image: "/images/blog/digital-transformation.jpg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Remote Work: Trends and Technologies",
    excerpt: "Explore the technologies and trends shaping the future of remote work and distributed teams.",
    author: "Lisa Wang",
    date: "2024-01-10",
    category: "Technology",
    image: "/images/blog/remote-work.jpg",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "User Experience Design Best Practices for 2024",
    excerpt: "Discover the latest UX design trends and best practices for creating exceptional user experiences.",
    author: "Maria Garcia",
    date: "2024-01-05",
    category: "Design",
    image: "/images/blog/ux-design.jpg",
    readTime: "6 min read"
  }
];

export const JOB_OPENINGS = [
  {
    id: 1,
    title: "Senior Software Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our development team to build innovative solutions for our clients.",
    requirements: [
      "5+ years of software development experience",
      "Proficiency in modern web technologies",
      "Strong problem-solving skills",
      "Excellent communication abilities"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description: "Create exceptional user experiences that delight our clients and their customers.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in design tools (Figma, Adobe Creative Suite)",
      "Strong portfolio demonstrating design thinking",
      "Understanding of user-centered design principles"
    ]
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver successful projects on time and within budget.",
    requirements: [
      "PMP certification preferred",
      "3+ years of project management experience",
      "Strong organizational and leadership skills",
      "Experience with agile methodologies"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including strategic consulting, digital solutions, creative design, project management, data analytics, and training & support."
  },
  {
    id: 2,
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices, conduct regular quality reviews, and maintain open communication throughout the project lifecycle to ensure exceptional results."
  },
  {
    id: 3,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase and keep you updated on progress throughout."
  },
  {
    id: 4,
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive post-launch support including maintenance, updates, training, and technical assistance to ensure your continued success."
  }
];