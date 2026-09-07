/* ============================================
   ChoreDigital Communication LLP – Site Data
   ============================================ */

export const siteData = {
  // ---- Company Info ----
  company: {
    name: 'ChoreDigital',
    fullName: 'ChoreDigital Communication LLP',
    tagline: 'Creative Digital Innovators',
    description: 'Empowering Brands through Cutting-Edge Web & Digital Solutions. With a legacy spanning 13+ years, ChoreDigital stands as a trusted web development and digital solutions company in India.',
    phone: '+91- 7276831928',
    whatsapp: '+91- 98608 67066',
    email: 'support@chorevirtual.com',
    accountsEmail: 'accounts@chorevirtual.com',
    address: '606 Ijmima, Opp Interface off Link Road Malad (W) Mumbai 40064',
    founded: 2014,
  },

  // ---- Navigation ----
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Portfolios', path: '/portfolio' },
    {
      label: 'Our Services',
      path: '/services',
      dropdown: [
        { label: 'Website Design & Development', path: '/website-design' },
        { label: 'Mobile App Development', path: '/mobile-app-development' },
        { label: 'Digital Marketing', path: '/digital-marketing' },
        { label: 'Product Development', path: '/product-development' },
      ],
    },
    {
      label: 'VA Services',
      path: '/va-services',
      dropdown: [
        { label: 'Email Management', path: '/email-management' },
        { label: 'Data Entry', path: '/data-entry' },
        { label: 'Customer Support', path: '/customer-support' },
        { label: 'Document Management', path: '/document-management' },
        { label: 'Research Work', path: '/research-work' },
      ],
    },
    { label: 'Technology', path: '/technology' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact Us', path: '/contact' },
  ],

  // ---- Hero Section ----
  hero: {
    badge: 'Creative Digital Innovators',
    title: 'Empowering Brands through',
    titleHighlight: 'Cutting-Edge Web & Digital Solutions',
    description: 'With a legacy spanning 13+ years, ChoreDigital stands as a trusted web development and digital solutions company in India. Driven by innovation and excellence, we deliver high-performing, user-centric web and mobile solutions on time and within budget.',
    stats: [
      { number: '13+', label: 'Years Experience' },
      { number: '500+', label: 'Projects Delivered' },
      { number: '99%', label: 'Client Satisfaction' },
    ],
  },

  // ---- Featured Services ----
  services: [
    {
      icon: 'fas fa-laptop-code',
      title: 'Website Design & Development',
      description: 'A premier website development company dedicated to creating digital solutions that drive business growth. Responsive, user-friendly, and high-performing online platforms.',
      link: '/website-design',
      subServices: ['Custom Web Design', 'E-commerce Solutions', 'Website Maintenance & AMC', 'CMS Development']
    },
    {
      icon: 'fas fa-mobile-screen-button',
      title: 'Mobile App Development',
      description: 'High-performance, feature-rich apps for Android and iOS. Native applications and cross-platform solutions powered by React Native and Flutter.',
      link: '/mobile-app-development',
      subServices: ['Native App Development', 'Flutter App Development', 'Swift & iOS Development', 'React Native Apps']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing',
      description: 'Results-driven digital marketing for B2B businesses with a strong focus on SEO, Google AdWords, and content marketing to enhance online visibility.',
      link: '/digital-marketing',
      subServices: ['Google AdWords Marketing', 'Social Media Marketing', 'SEO Services & Audits', 'Content Writing']
    },
    {
      icon: 'fas fa-cubes',
      title: 'Product Development',
      description: 'High-performance products designed to streamline operations and enhance productivity, including OTS, Online Billing, and CCM.',
      link: '/product-development',
      subServices: ['OTS (Order Tracking System)', 'Online Billing for Manufacturing', 'CCM (Customer Communication)', 'Custom Enterprise SaaS']
    },
  ],

  // ---- VA Services (Virtual Assistant) ----
  vaServices: [
    {
      icon: 'fas fa-envelope-open-text',
      title: 'Email Management',
      description: 'Business email setup, inbox organization, spam filter configuration, daily backups, and 24/7 support.',
      link: '/email-management',
    },
    {
      icon: 'fas fa-database',
      title: 'Data Entry',
      description: 'Accurate online & offline data input, CRM management, database cleaning, and confidential processing.',
      link: '/data-entry',
    },
    {
      icon: 'fas fa-headset',
      title: 'Customer Support',
      description: 'Multichannel live chat, ticket resolution, phone support, and customer query management.',
      link: '/customer-support',
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Document Management',
      description: 'Document indexing, archiving, digitization, PDF conversion, and secure cloud filing systems.',
      link: '/document-management',
    },
    {
      icon: 'fas fa-magnifying-glass-chart',
      title: 'Research Work',
      description: 'Market research, competitor analysis, lead generation research, and comprehensive data collection.',
      link: '/research-work',
    },
  ],

  // ---- Technologies & Tools ----
  technologies: [
    { name: 'React', category: 'Frontend', icon: 'fab fa-react' },
    { name: 'React Native', category: 'Mobile', icon: 'fab fa-react' },
    { name: 'Flutter', category: 'Mobile', icon: 'fas fa-mobile-alt' },
    { name: 'Swift / iOS', category: 'Mobile', icon: 'fab fa-apple' },
    { name: 'HTML5 & CSS3', category: 'Frontend', icon: 'fab fa-html5' },
    { name: 'Angular', category: 'Frontend', icon: 'fab fa-angular' },
    { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'PHP (Laravel)', category: 'Backend', icon: 'fab fa-php' },
    { name: 'CodeIgniter', category: 'Backend', icon: 'fas fa-code' },
    { name: 'MySQL', category: 'Database', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'Database', icon: 'fas fa-leaf' },
  ],

  // ---- About Section ----
  about: {
    subtitle: 'We Are ChoreDigital',
    title: 'More Than Just a Website Design Company',
    description: 'Since 2014, ChoreDigital Communication LLP has earned the trust of SMEs and large international enterprises. We seamlessly blend strategic vision, advanced technology, and deep industry insight into every project we deliver.',
    features: [
      'Personalized Website Development',
      'Native & Cross-Platform Mobile Apps',
      'B2B Performance Digital Marketing',
      'Custom Product Engineering (OTS, Billing)',
      'Reliable Website Maintenance & Support',
      'Agile & Transparent Process',
    ],
    yearsExperience: 13,
  },

  // ---- Counter Stats ----
  counters: [
    { icon: 'fas fa-calendar-check', number: 13, suffix: '+ Years', label: 'Legacy of Excellence' },
    { icon: 'fas fa-project-diagram', number: 500, suffix: '+', label: 'Projects Completed' },
    { icon: 'fas fa-users', number: 200, suffix: '+', label: 'Global Clients' },
    { icon: 'fas fa-trophy', number: 99, suffix: '%', label: 'Client Retention' },
  ],

  // ---- Features / Why ChoreDigital ----
  features: [
    {
      icon: 'fas fa-clock',
      title: 'On Time & On Budget',
      description: 'Every project is delivered within committed timelines and aligned with your budget.',
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Latest Technologies',
      description: 'Expert developers versed in React, Flutter, Node.js, Laravel, and modern cloud stacks.',
    },
    {
      icon: 'fas fa-comments',
      title: 'Seamless Communication',
      description: 'Dedicated project managers maintain clear, transparent communication at every stage.',
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'Warranty & Support',
      description: 'Post-deployment support, ongoing maintenance, and prompt bug resolution.',
    },
  ],

  // ---- Portfolio ----
  portfolio: [
    {
      image: '/images/portfolio_ots.png',
      title: 'OTS - Order Tracking System',
      category: 'product',
      categoryLabel: 'Product Development',
      description: 'Enterprise order workflow and supply chain tracking system.',
    },
    {
      image: '/images/portfolio_billing.png',
      title: 'Online Billing for Manufacturing',
      category: 'product',
      categoryLabel: 'Product Development',
      description: 'Automated invoice generation & inventory sync portal.',
    },
    {
      image: '/images/portfolio_ecommerce.png',
      title: 'E-Commerce Marketplace',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'High-converting responsive online store platform.',
    },
    {
      image: '/images/portfolio_mobileapp.png',
      title: 'Cross-Platform React Native App',
      category: 'mobile',
      categoryLabel: 'Mobile Development',
      description: 'Fast, secure mobile application for iOS & Android.',
    },
  ],

  portfolioFilters: [
    { label: 'All', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Product Solutions', value: 'product' },
  ],

  // ---- Testimonials ----
  testimonials: [
    {
      text: 'ChoreDigital delivered our e-commerce platform on time and beyond expectations. Their attention to UX and performance optimization drove a 45% increase in conversions.',
      author: 'Global Retail Enterprise',
      position: 'Mumbai, India',
      rating: 5,
      avatar: 'CD',
    },
    {
      text: 'Their mobile app development team built our React Native app flawlessly. The app runs smoothly on both iOS and Android with a single codebase.',
      author: 'Manufacturing Industry Leader',
      position: 'International Client',
      rating: 5,
      avatar: 'ML',
    },
  ],

  // ---- Team ----
  team: [
    {
      name: 'Skilled Web Engineers',
      position: 'Frontend & Full-Stack Team',
      image: '/images/team_web.png',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Mobile App Architects',
      position: 'React Native & Flutter Specialists',
      image: '/images/team_mobile.png',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Digital Marketing Strategists',
      position: 'SEO & Performance Experts',
      image: '/images/team_marketing.png',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
  ],

  // ---- Pricing ----
  pricing: [
    {
      icon: 'fas fa-paper-plane',
      name: 'Startup Package',
      price: 299,
      period: '/project',
      popular: false,
      features: [
        { text: 'Responsive Website Design', enabled: true },
        { text: '5 Custom Web Pages', enabled: true },
        { text: 'Basic SEO Setup', enabled: true },
        { text: 'Mobile Friendly Layout', enabled: true },
        { text: 'Annual Maintenance Contract', enabled: false },
      ],
    },
    {
      icon: 'fas fa-rocket',
      name: 'Enterprise Web & App',
      price: 799,
      period: '/project',
      popular: true,
      features: [
        { text: 'Custom Web Application Development', enabled: true },
        { text: 'React & Node.js Architecture', enabled: true },
        { text: 'Mobile App (Android & iOS)', enabled: true },
        { text: 'Advanced SEO & Analytics Integration', enabled: true },
        { text: 'Dedicated Account Manager', enabled: true },
      ],
    },
    {
      icon: 'fas fa-building',
      name: 'Digital Marketing & AMC',
      price: 499,
      period: '/month',
      popular: false,
      features: [
        { text: 'Full SEO Audit & Keyword Strategy', enabled: true },
        { text: 'Google AdWords & Social Media Ads', enabled: true },
        { text: 'Content Marketing & Writing', enabled: true },
        { text: 'Monthly Website Maintenance (AMC)', enabled: true },
        { text: '24/7 Priority Support', enabled: true },
      ],
    },
  ],

  // ---- Blog Posts ----
  blogPosts: [
    {
      image: '/images/hero-tech.jpg',
      date: { day: '15', month: 'Aug' },
      author: 'ChoreDigital Team',
      category: 'SEO & Insights',
      title: 'How AI is Affecting SEO: Things You Need to Know',
      excerpt: 'Artificial Intelligence is transforming search engine optimization. Learn how human-centered content and E-E-A-T drive organic rankings.',
      link: '/blog-details',
    },
    {
      image: '/images/portfolio_ots.png',
      date: { day: '12', month: 'Aug' },
      author: 'ChoreDigital Team',
      category: 'Web Application',
      title: 'Why Custom Web Applications Drive B2B Growth',
      excerpt: 'Explore how personalized portals, Order Tracking Systems (OTS), and manufacturing billing tools streamline operations.',
      link: '/blog-details',
    },
    {
      image: '/images/portfolio_mobileapp.png',
      date: { day: '08', month: 'Aug' },
      author: 'ChoreDigital Team',
      category: 'Mobile Apps',
      title: 'React Native vs Native iOS & Android Development',
      excerpt: 'A comprehensive guide to choosing between single-codebase cross-platform frameworks and native Swift/Kotlin apps.',
      link: '/blog-details',
    },
  ],

  // ---- Process / Development Workflow ----
  process: [
    {
      step: 1,
      title: 'Discovery',
      description: 'In-depth research studying your audience, market, competitors, and brand goals to craft a targeted strategy.',
      image: '/images/process_discovery.png',
    },
    {
      step: 2,
      title: 'Prototype',
      description: 'User flow maps, wireframes, and prototypes defining navigation, structure, and interactive functionality.',
      image: '/images/process_prototype.png',
    },
    {
      step: 3,
      title: 'Design',
      description: 'Bringing your brand to life with modern UI/UX principles, custom typography, visuals, and colors.',
      image: '/images/process_design.png',
    },
    {
      step: 4,
      title: 'Development',
      description: 'Transforming designs into fast, scalable applications using React, React Native, Node.js, and PHP.',
      image: '/images/process_development.png',
    },
    {
      step: 5,
      title: 'Testing',
      description: 'Rigorous QA testing for speed, security, Core Web Vitals, and responsiveness across all devices.',
      image: '/images/process_testing.png',
    },
    {
      step: 6,
      title: 'Maintenance',
      description: 'Ongoing support, server monitoring, security audits, and flexible Annual Maintenance Contracts (AMC).',
      image: '/images/process_maintenance.png',
    },
  ],

  // ---- FAQ ----
  faq: [
    {
      question: 'What Makes ChoreDigital One of the Best Digital Marketing & Web Agencies?',
      answer: 'A certified and skilled team, integrated strategies, creative content, measurable outcomes, and transparent collaboration — all working together to drive impactful digital growth.',
    },
    {
      question: 'Do you serve clients looking for a Social Media Marketing Company?',
      answer: 'Yes. At ChoreDigital, we offer comprehensive social media marketing services to clients across the globe — helping brands build engagement, visibility, and meaningful connections on every major platform.',
    },
    {
      question: 'Are ecommerce digital marketing and development services included?',
      answer: 'Yes. We provide complete ecommerce development and digital marketing solutions — from custom online stores to targeted paid ad campaigns and conversion tracking.',
    },
    {
      question: 'How do your pricing models work?',
      answer: 'We offer flexible pricing options — including project-based, retainer (AMC), and performance-based models — tailored to fit your project scope and business goals.',
    },
  ],

  // ---- Clients ----
  clients: [
    { name: 'Technology Sector', logo: null },
    { name: 'Manufacturing Sector', logo: null },
    { name: 'Banking & Finance', logo: null },
    { name: 'Real Estate Enterprises', logo: null },
    { name: 'Retail & E-Commerce', logo: null },
  ],

  // ---- Social Links ----
  socialLinks: [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
  ],

  // ---- Footer ----
  footer: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Testimonials', path: '/#testimonials' },
      { label: 'Team', path: '/#team' },
    ],
    serviceLinks: [
      { label: 'Website Design & Development', path: '/website-design' },
      { label: 'Mobile App Development', path: '/mobile-app-development' },
      { label: 'Digital Marketing', path: '/digital-marketing' },
      { label: 'Product Development (OTS, Billing)', path: '/product-development' },
      { label: 'VA Services', path: '/va-services' },
      { label: 'Data Entry Services', path: '/data-entry' },
      { label: 'Customer Support', path: '/customer-support' },
      { label: 'Email Management', path: '/email-management' },
      { label: 'Document Management', path: '/document-management' },
      { label: 'Research Work', path: '/research-work' },
    ],
  },
};
