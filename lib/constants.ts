export const SITE_CONFIG = {
  name: "Ladder? I Hardly Knew Her",
  shortName: "LIHKH",
  description: "Handcrafted vertical mobility solutions for the modern climber. Starting at $13.",
  tagline: "Elevating Expectations. Literally.",
  url: "https://ladderiihardlyknewher.vercel.app",
  ogImage: "/images/og-image.jpg",

  contact: {
    email: "info@ladderiihardlyknewher.com",
    phone: "+1 (206) 635-7392",
    address: {
      street: "We work remotely",
      city: "Somewhere",
      state: "IN",
      zip: "46802",
      country: "United States"
    }
  },

  hours: {
    monday: "Between shifts",
    tuesday: "Between shifts",
    wednesday: "Between shifts",
    thursday: "Between shifts",
    friday: "Between shifts",
    saturday: "Maybe",
    sunday: "Unlikely but not impossible"
  },

  social: {
    facebook: "https://facebook.com/ladderhardlyknewher",
    twitter: "https://twitter.com/ladderhardly",
    linkedin: "https://linkedin.com/company/ladderhardlyknewher",
    instagram: "https://instagram.com/ladderhardlyknewher",
    youtube: "https://youtube.com/@ladderhardlyknewher"
  },

  stats: {
    yearsInBusiness: 7,
    clientsServed: 14000,
    projectsCompleted: 14000,
    teamMembers: 4
  }
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/", dropdown: false },
  {
    name: "Products",
    href: "/products",
    dropdown: true,
    items: [
      { name: "Standard Collection", href: "/products#standard" },
      { name: "Premium Collection", href: "/products#premium" },
      { name: "The Flex Seal Ladder", href: "/flex-seal" },
      { name: "Accessibility Line", href: "/products#accessibility" },
    ]
  },
  { name: "Build Your Ladder", href: "/build", dropdown: false },
  { name: "About", href: "/about", dropdown: false },
  { name: "Contact", href: "/contact", dropdown: false }
];

export const FEATURES = [
  {
    id: 1,
    title: "Any Material",
    description: "Wood. Glass. Styrofoam. PVC. Flex Seal. If it exists, we'll make a ladder out of it. If it doesn't exist, we'll still try.",
    icon: "Layers"
  },
  {
    id: 2,
    title: "Any Height",
    description: "From 2 feet to 200 feet. We don't ask questions. We don't judge. We just build. Our engineers have repeatedly asked us to stop at 40 feet. We said no.",
    icon: "ArrowUp"
  },
  {
    id: 3,
    title: "$13",
    description: "Every ladder starts at $13. How? We're a registered 501(c)(3) nonprofit. Your ladder is tax-deductible. You're welcome, America.",
    icon: "DollarSign"
  }
];

export const PRODUCTS = [
  {
    id: 1,
    title: "The Classic",
    description: "Our flagship A-frame ladder. Available in wood, aluminum, and for reasons our lawyers have asked us not to discuss, glass.",
    icon: "Home",
    features: ["A-Frame Design", "6-200ft Heights", "Pick Your Rungs", "Comes With Hope"]
  },
  {
    id: 2,
    title: "The Collapsible",
    description: "Goes from 20 feet to 2 feet in seconds. Reassembly time varies. Personal record: 4 minutes. Average: 45 minutes.",
    icon: "Minimize2",
    features: ["Telescoping Design", "Portable", "Mostly Re-Expandable", "Carry Bag Included"]
  },
  {
    id: 3,
    title: "The Flex Seal Ladder",
    description: "Frame made of Flex Seal Tape. Rungs filled with Flex Seal Liquid. Sealed with Flex Seal Paste. Phil Swift has not endorsed this product. We have not asked.",
    icon: "Droplets",
    features: ["100% Flex Seal", "Waterproof (the ladder, not you)", "Surprisingly Rigid", "Smells Interesting"]
  },
  {
    id: 4,
    title: "The IKEA",
    description: "DIY ladder kit. 47 pieces. 2 Allen wrenches. 0 English instructions. You will have 3 screws left over. This is normal. Probably.",
    icon: "Package",
    features: ["Self-Assembly", "Swedish Engineering*", "Instruction Manual (Swedish)", "Extra Screws (Normal)"]
  },
  {
    id: 5,
    title: "The Wide Boy",
    description: "4x6 lumber instead of 2x4. Twice the width. Twice the confidence. Built for every body, because ladders should be inclusive.",
    icon: "Accessibility",
    features: ["4x6 Construction", "500lb Capacity", "ADA Inspired*", "Extra Wide Rungs"]
  },
  {
    id: 6,
    title: "The Penitent",
    description: "Our tallest offering. 200 feet of pure ambition. Requires a building permit in most states. We will not help you get one.",
    icon: "Mountain",
    features: ["200ft Height", "Anchoring Kit Sold Separately", "Wind Advisory Card Included", "Liability Waiver Required"]
  }
];

// Keep SERVICES as alias for backward compat with Services component
export const SERVICES = PRODUCTS;

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Choose",
    description: "Select your material, height, color, and rung count using our state-of-the-art configurator. Or call us. We'll answer. Probably.",
    icon: "MousePointer"
  },
  {
    id: 2,
    title: "Pay",
    description: "It's $13. We accept all major credit cards, PayPal, Venmo, and 'interesting trades' on a case-by-case basis.",
    icon: "CreditCard"
  },
  {
    id: 3,
    title: "Wait",
    description: "Estimated delivery: 2-47 business days. We're working on it. The supply chain for styrofoam ladders is more complex than you'd think.",
    icon: "Clock"
  },
  {
    id: 4,
    title: "Climb",
    description: "Ascend with the confidence of someone who paid $13 for a ladder. We believe in you. Our insurance company does not.",
    icon: "ArrowUpCircle"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Doug M.",
    company: "Tallahassee, FL",
    role: "Homeowner",
    content: "I bought the 40-foot glass ladder as a joke. Turns out it actually holds my weight. My wife is less impressed. The neighbors can see everything. 4 stars because the glass fogs up in humidity.",
    rating: 4,
    image: ""
  },
  {
    id: 2,
    name: "Carlos R.",
    company: "El Paso, TX",
    role: "Verified Buyer",
    content: "La escalera de 30 pies fue perfecta para mi proyecto de paisajismo. Muy resistente. Mi vecino tambien quiere una. 5 estrellas.",
    rating: 5,
    image: ""
  },
  {
    id: 3,
    name: "Linda K.",
    company: "Portland, OR",
    role: "DIY Enthusiast",
    content: "I ordered the IKEA kit version. I now have a ladder, 3 leftover screws, and an existential crisis. The Swedish instructions were actually more helpful than I expected. I don't speak Swedish.",
    rating: 5,
    image: ""
  },
  {
    id: 4,
    name: "Steve",
    company: "Undisclosed",
    role: "Definitely Not A Burglar",
    content: "Very lightweight. Very quiet. Perfect for my... bird watching hobby. I watch birds. At night. Through windows. Incredible value at $13.",
    rating: 5,
    image: ""
  },
  {
    id: 5,
    name: "Patricia W.",
    company: "Sacramento, CA",
    role: "Building Inspector",
    content: "As a building inspector, I have a lot of questions about this company. As a customer, I have zero complaints. The Flex Seal ladder held up my entire Thanksgiving display. 5 stars, pending investigation.",
    rating: 5,
    image: ""
  },
  {
    id: 6,
    name: "Anonymous",
    company: "(Redacted)",
    role: "OSHA Employee",
    content: "I am legally required to tell you I did not purchase this ladder in my capacity as a federal employee. That said, it's in my garage and I use it every weekend. Please do not audit this review.",
    rating: 5,
    image: ""
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Karaline",
    role: "Co-Founder & CEO",
    bio: "EMT by day, ladder mogul by... also day. Karaline came up with the idea during a 12-hour shift and hasn't stopped talking about it since. Somehow convinced an entire friend group this is a real company.",
    image: "",
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Olyvia",
    role: "Co-Founder & COO",
    bio: "Also an EMT. Also somehow running a ladder company. Handles the operational side, which mostly means agreeing with Karaline and telling coworkers to check the website.",
    image: "",
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Gary",
    role: "Head of Engineering",
    bio: "Gary doesn't exist. But if he did, he'd have 30 years of structural engineering experience and strong opinions about rung spacing. We reference Gary in meetings to sound more credible.",
    image: "",
    social: {}
  },
  {
    id: 4,
    name: "The Flex Seal Ladder",
    role: "Chief Product Officer",
    bio: "Technically a product, not a person. But it's our most autonomous team member. It doesn't take PTO. It doesn't complain. It just seals.",
    image: "",
    social: {}
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Are these ladders OSHA compliant?",
    answer: "We are proud to announce that we have no relationship with OSHA whatsoever. They have not inspected us, certified us, or acknowledged our existence. We consider this a feature."
  },
  {
    id: 2,
    question: "How is every ladder $13?",
    answer: "We are a registered 501(c)(3) nonprofit organization. Our mission is to provide affordable vertical mobility solutions to all Americans. Your purchase is tax-deductible, and we are legally prohibited from making a profit. This arrangement works well for us because we weren't going to anyway."
  },
  {
    id: 3,
    question: "Can I really get a 200-foot ladder?",
    answer: "Yes. Should you? That is between you, your insurance provider, and God. We will build it. We will ship it. We will not ask why."
  },
  {
    id: 4,
    question: "What is the Flex Seal Ladder made of?",
    answer: "Flex Seal. The frame is Flex Seal Tape. The rungs are filled with Flex Seal Liquid. The joints are reinforced with Flex Seal Paste. It has not been tested by any regulatory body. It has been tested by us. Results were mixed but optimistic."
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer: "We have shipped ladders to 12 countries. We are legally allowed to discuss 9 of them."
  },
  {
    id: 6,
    question: "Can I visit your office?",
    answer: "We don't have an office. We're two EMTs who run a ladder company between shifts. If you'd like to meet, we're happy to schedule a call. One of us will answer. Probably."
  },
  {
    id: 7,
    question: "Is this a real company?",
    answer: "We are a registered LLC and 501(c)(3) nonprofit. We have a website. You are on it right now. What more do you want from us."
  },
  {
    id: 8,
    question: "Is this really a woman-owned business?",
    answer: "Yes. Founded, owned, and operated by two women who save lives for a living and sell ladders for fun. We are exactly as qualified as you think we are."
  }
];

export const PRICING_TIERS = [
  {
    id: 1,
    name: "The Ladder",
    price: "$13",
    description: "Our most popular option because it's our only option",
    features: [
      "Any material",
      "Any height up to 20ft",
      "Choice of color",
      "Standard rungs",
      "Free shipping (eventually)",
    ]
  },
  {
    id: 2,
    name: "The Big Ladder",
    price: "$13",
    description: "Same price. We know. It doesn't make sense to us either.",
    features: [
      "Any material",
      "Any height 20-100ft",
      "Choice of color",
      "Choice of rung material",
      "Free shipping (patience required)",
    ],
    highlighted: true
  },
  {
    id: 3,
    name: "The Unreasonable Ladder",
    price: "$13",
    description: "Our accountant has asked us to stop offering this.",
    features: [
      "Any material including Flex Seal",
      "Any height 100-200ft",
      "Custom color matching",
      "Premium rungs",
      "\"Shipping\" (air quotes)",
      "Liability waiver",
    ]
  }
];
