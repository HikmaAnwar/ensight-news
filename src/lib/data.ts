import { Article, SubscriptionPlan, Startup, Plan } from "./types";

export const getArticleBySlug = async (
  slug: string
): Promise<Article | null> => {
  const articles: Article[] = [
    {
      id: "1",
      slug: "ethiopia-financing-models-gerd",
      title:
        "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
      category: "Economy",
      author: "John Abebe",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/images/gerd-placeholder.png",
      description:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      content:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
    },
    {
      id: "2",
      slug: "ai-startups-2025",
      title: "AI Startups: The Next Big Thing in 2025",
      category: "Featured",
      author: "Sarah Tsegaye",
      date: "May 10, 2025",
      readTime: "4 min read",
      image: "/images/ai-startups.png",
      description:
        "Explore the rise of AI startups and their impact in 2025...",
      content: "Explore the rise of AI startups and their impact in 2025...",
    },
  ];
  return articles.find((a) => a.slug === slug) || null;
};

export const getPopularArticles = async (): Promise<Article[]> => {
  return [
    {
      slug: "ethiopia-financing-models-gerd",
      title:
        "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
      category: "Economy",
      author: "John Abebe",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/images/gerd-placeholder.png",
      description:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      content:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
    },
    {
      slug: "ai-startups-2025",
      title: "AI Startups: The Next Big Thing in 2025",
      category: "Featured",
      author: "Sarah Tsegaye",
      date: "May 10, 2025",
      readTime: "4 min read",
      image: "/images/ai-startups.png",
      description:
        "Explore the rise of AI startups and their impact in 2025...",
      content: "Explore the rise of AI startups and their impact in 2025...",
    },
  ];
};

export const articles = [
  {
    id: "1",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "Digital Transformation in Ethiopia: Progress and Potential",
    description: "Examining Ethiopia's journey towards a digital economy.",
    image: "/images/digital-transformation.jpg",
    href: "/tech-and-science/digital/transformation-progress",
    author: "Mesfin Belay",
    readTime: "9 min",
    slug: "digital-transformation-in-ethiopia-progress-and-potential",
    content: "",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "E-Commerce Boom in Ethiopia: Opportunities for Growth",
    description: "How e-commerce is reshaping Ethiopia's business landscape.",
    image: "/images/ecommerce-boom.jpg",
    href: "/tech-and-science/digital/ecommerce-growth",
    author: "Kalkidan Yohannes",
    readTime: "7 min",
    isPremium: true,
    slug: "e-commerce-boom-in-ethiopia-opportunities-for-growth",
    content: "",
  },
  {
    id: "3",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "Ethiopia's Innovation Ecosystem: Startups and Beyond",
    description:
      "A look at how Ethiopia is fostering innovation through startups and tech hubs.",
    image: "/images/innovation-ecosystem.jpg",
    href: "/tech-and-science/innovation/startup-ecosystem",
    author: "Tsegaye Girma",
    readTime: "7 min",
    slug: "ethiopias-innovation-ecosystem-startups-and-beyond",
    content: "",
  },
  {
    id: "4",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "The Role of AI in Ethiopia's Tech Revolution",
    description:
      "How artificial intelligence is shaping Ethiopia's technological advancements.",
    image: "/images/ai-revolution.jpg",
    href: "/tech-and-science/innovation/ai-revolution",
    author: "Aster Demissie",
    readTime: "8 min",
    isPremium: true,
    slug: "the-role-of-ai-in-ethiopias-tech-revolution",
    content: "",
  },
  {
    id: "5",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Scientific Research in Ethiopia: Building a Knowledge Economy",
    description:
      "How Ethiopia is investing in research to drive innovation and growth.",
    image: "/images/scientific-research.jpg",
    href: "/tech-and-science/research/knowledge-economy",
    author: "Getachew Tesfaye",
    readTime: "8 min",
    slug: "scientific-research-in-ethiopia-building-a-knowledge-economy",
    content: "",
  },
  {
    id: "6",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Collaborative Research in Ethiopia: Global Partnerships",
    description:
      "Exploring Ethiopia's role in international research collaborations.",
    image: "/images/global-research.jpg",
    href: "/tech-and-science/research/global-partnerships",
    author: "Saba Wolde",
    readTime: "6 min",
    isPremium: true,
    slug: "collaborative-research-in-ethiopia-global-partnerships",
    content: "",
  },
  {
    id: "7",
    category: "FINANCE | CAPITAL MARKETS",
    title: "Ethiopian Stock Exchange Sees Record Trading Volume",
    description:
      "The Ethiopian Stock Exchange has reported a record trading volume of 1 billion birr in the last quarter.",
    image: "/images/stock-exchange.jpg",
    href: "/finance/capital-markets/ethiopian-stock-exchange-record",
    author: "Amina Abdi",
    readTime: "5 min",
    slug: "ethiopian-stock-exchange-sees-record-trading-volume",
    content: "",
  },
  {
    id: "8",
    category: "FINANCE | CAPITAL MARKETS",
    title: "New Regulations for Foreign Investors in Ethiopian Capital Markets",
    description:
      "The Ethiopian government has introduced new regulations to attract foreign investors to the capital markets.",
    image: "/images/foreign-investors.jpg",
    href: "/finance/capital-markets/foreign-investors-regulations",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
    slug: "new-regulations-for-foreign-investors-in-ethiopian-capital-markets",
    content: "",
  },
  {
    id: "9",
    category: "FINANCE | BANKING",
    title: "Commercial Bank of Ethiopia Implements AI for Risk...",
    description:
      "How Ethiopia's largest bank is using artificial intelligence to streamline...",
    image: "/images/banking-atm.jpg",
    href: "/finance/banking/commercial-bank-ethiopia-ai",
    author: "Elias Mengistu",
    readTime: "9 min",
    slug: "commercial-bank-of-ethiopia-implements-ai-for-risk",
    content: "",
  },
  {
    id: "10",
    category: "FINANCE | BANKING",
    title: "Regional Banks Expand Branch Network Despite Digital Push",
    description:
      "Why physical banking locations remain crucial in Ethiopia’s developing finan...",
    image: "/images/banking-money.jpg",
    href: "/finance/banking/regional-banks-expansion",
    author: "Hiwot Bekele",
    readTime: "7 min",
    isPremium: true,
    slug: "regional-banks-expand-branch-network-despite-digital-push",
    content: "",
  },
  {
    id: "11",
    category: "FINANCE | FINTECH",
    title: "Ethiopia's Fintech Revolution: A Deep Dive",
    description:
      "Exploring the rapid growth of fintech in Ethiopia and its impact on the economy.",
    image: "/images/fintech.jpg",
    href: "/finance/fintech/ethiopia-fintech-revolution",
    author: "Liya Tesfaye",
    readTime: "8 min",
    slug: "ethiopias-fintech-revolution-a-deep-dive",
    content: "",
  },
  {
    id: "12",
    category: "FINANCE | FINTECH",
    title: "The Rise of Mobile Payments in Ethiopia",
    description:
      "How mobile payment solutions are transforming the financial landscape in Ethiopia.",
    image: "/images/mobile-payments.jpg",
    href: "/finance/fintech/mobile-payments-ethiopia",
    author: "Daniel Assefa",
    readTime: "6 min",
    slug: "the-rise-of-mobile-payments-in-ethiopia",
    content: "",
  },
  {
    id: "13",
    category: "FINANCE | INVESTMENT",
    title: "Ethiopia's Investment Landscape: Opportunities and Challenges",
    description:
      "An in-depth analysis of the current investment climate in Ethiopia.",
    image: "/images/investment.jpg",
    href: "/finance/investment/ethiopia-investment-landscape",
    author: "Amina Abdi",
    readTime: "8 min",
    slug: "ethiopias-investment-landscape-opportunities-and-challenges",
    content: "",
  },
  {
    id: "14",
    category: "FINANCE | INVESTMENT",
    title: "Foreign Direct Investment in Ethiopia: Trends and Insights",
    description:
      "A comprehensive overview of foreign direct investment trends in Ethiopia.",
    image: "/images/foreign-direct-investment.jpg",
    href: "/finance/investment/foreign-direct-investment-ethiopia",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
    slug: "foreign-direct-investment-in-ethiopia-trends-and-insights",
    content: "",
  },
  {
    id: "15",
    category: "ECONOMY | TRADE",
    title: "Ethiopia's Trade Agreements: Boosting Global Reach",
    description:
      "A look at how trade agreements are enhancing Ethiopia's global market presence.",
    image: "/images/trade-agreements.jpg",
    href: "/economy/trade/ethiopia-global-trade",
    author: "Dawit Kebede",
    readTime: "7 min",
    slug: "ethiopias-trade-agreements-boosting-global-reach",
    content: "",
  },
  {
    id: "16",
    category: "ECONOMY | TRADE",
    title: "Challenges in Ethiopia's Export Sector",
    description:
      "Examining the hurdles faced by Ethiopia's export industry and potential solutions.",
    image: "/images/export-challenges.jpg",
    href: "/economy/trade/export-challenges",
    author: "Liya Tadesse",
    readTime: "8 min",
    isPremium: true,
    slug: "challenges-in-ethiopias-export-sector",
    content: "",
  },
  {
    id: "17",
    category: "ECONOMY | POLICIES",
    title: "Ethiopia's Economic Policies: A New Era of Reform",
    description:
      "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    image: "/images/economic-policies.jpg",
    href: "/economy/policies/ethiopias-economic-policies-a-new-era-of-reform",
    author: "Yared Lemma",
    readTime: "9 min",
    slug: "ethiopias-economic-policies-a-new-era-of-reform",
    content: "",
  },
  {
    id: "18",
    category: "ECONOMY | POLICIES",
    title: "Impact of Monetary Policy on Ethiopia's Economy",
    description:
      "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
    image: "/images/monetary-policy.jpg",
    href: "/economy/policies/impact-of-monetary-policy-on-ethiopias-economy",
    author: "Selamawit Gebremedhin",
    readTime: "6 min",
    isPremium: true,
    slug: "impact-of-monetary-policy-on-ethiopias-economy",
    content: "",
  },
  {
    id: "19",
    category: "ECONOMY | JOBS",
    title: "Job Creation in Ethiopia: Opportunities and Challenges",
    description:
      "Exploring the dynamics of job creation in Ethiopia's evolving economy.",
    image: "/images/job-creation.jpg",
    href: "/economy/jobs/creation-opportunities",
    author: "Fitsum Abera",
    readTime: "8 min",
    slug: "job-creation-in-ethiopia-opportunities-and-challenges",
    content: "",
  },
  {
    id: "20",
    category: "ECONOMY | JOBS",
    title: "Youth Employment in Ethiopia: Strategies for Success",
    description:
      "Addressing the critical issue of youth unemployment in Ethiopia.",
    image: "/images/youth-employment.jpg",
    href: "/economy/jobs/youth-employment",
    author: "Rahel Teshome",
    readTime: "6 min",
    isPremium: true,
    slug: "youth-employment-in-ethiopia-strategies-for-success",
    content: "",
  },
  {
    id: "21",
    category: "ECONOMY | INFLATION",
    title: "Understanding Inflation Trends in Ethiopia",
    description:
      "A deep dive into the factors driving inflation in Ethiopia's economy.",
    image: "/images/inflation-trends.jpg",
    href: "/economy/inflation/trends",
    author: "Tewodros Alemayehu",
    readTime: "8 min",
    slug: "understanding-inflation-trends-in-ethiopia",
    content: "",
  },
  {
    id: "22",
    category: "ECONOMY | INFLATION",
    title: "Coping with Inflation: Strategies for Ethiopian Businesses",
    description:
      "Practical strategies for businesses to navigate inflationary pressures.",
    image: "/images/business-inflation.jpg",
    href: "/economy/inflation/business-strategies",
    author: "Hiwot Bekele",
    readTime: "6 min",
    isPremium: true,
    slug: "coping-with-inflation-strategies-for-ethiopian-businesses",
    content: "",
  },
  {
    id: "23",
    category: "ECONOMY | GROWTH",
    title: "Ethiopia's Economic Growth: Past and Future",
    description:
      "A review of Ethiopia's economic growth trajectory and future prospects.",
    image: "/images/economic-growth.jpg",
    href: "/economy/growth/past-future",
    author: "Elias Worku",
    readTime: "9 min",
    slug: "ethiopias-economic-growth-past-and-future",
    content: "",
  },
  {
    id: "24",
    category: "ECONOMY | GROWTH",
    title: "Sectoral Contributions to Ethiopia's GDP Growth",
    description:
      "Breaking down the key sectors driving Ethiopia's economic expansion.",
    image: "/images/gdp-growth.jpg",
    href: "/economy/growth/sectoral-contributions",
    author: "Zewditu Mengesha",
    readTime: "7 min",
    isPremium: true,
    slug: "sectoral-contributions-to-ethiopias-gdp-growth",
    content: "",
  },
  {
    id: "25",
    category: "ECONOMY | DEVELOPMENT",
    title: "Sustainable Development Goals in Ethiopia",
    description:
      "How Ethiopia is aligning with global sustainable development objectives.",
    image: "/images/sustainable-development.jpg",
    href: "/economy/development/sustainable-goals",
    author: "Mekonnen Hailu",
    readTime: "10 min",
    slug: "sustainable-development-goals-in-ethiopia",
    content: "",
  },
  {
    id: "26",
    category: "ECONOMY | DEVELOPMENT",
    title: "Urban Development in Ethiopia: Opportunities and Risks",
    description:
      "Analyzing the rapid urban growth in Ethiopia and its implications.",
    image: "/images/urban-development.jpg",
    href: "/economy/development/urban-growth",
    author: "Betelhem Assefa",
    readTime: "7 min",
    isPremium: true,
    slug: "urban-development-in-ethiopia-opportunities-and-risks",
    content: "",
  },
  {
    id: "27",
    category: "BUSINESS | MARKETS",
    title: "Ethiopia's Coffee Market: Trends and Opportunities",
    description:
      "An in-depth analysis of the coffee market in Ethiopia, exploring current trends and future opportunities.",
    image: "/images/news.jpg",
    href: "/business/markets/ethiopias-coffee-market-trends-and-opportunities",
    author: "Amina Tesfaye",
    readTime: "10 min",
    slug: "ethiopia-coffee-market-trends-opportunities",
    content: "",
  },
  {
    id: "28",
    category: "BUSINESS | MARKETS",
    title: "The Rise of E-commerce in Ethiopia",
    description:
      "Exploring the growth of e-commerce in Ethiopia and its impact on traditional retail.",
    image: "/images/news.jpg",
    href: "/business/markets/rise-ecommerce-ethiopia",
    author: "Samuel Abebe",
    readTime: "8 min",
    isPremium: true,
    slug: "the-rise-of-e-commerce-in-ethiopia",
    content: "",
  },
  {
    id: "29",
    category: "BUSINESS | POLICY & REGULATION",
    title: "Ethiopia's New Tax Law: Implications for Businesses",
    description:
      "A comprehensive overview of the new tax regulations and their impact on...",
    image: "/images/tax-law.jpg",
    href: "/business/policy-regulation/ethiopia-tax-law",
    author: "Amina Tesfaye",
    readTime: "8 min",
    slug: "ethiopias-new-tax-law-implications-for-businesses",
    content: "",
  },
  {
    id: "30",
    category: "BUSINESS | POLICY & REGULATION",
    title: "New Trade Agreements in East Africa: What You Need to Know",
    description:
      "An analysis of the recent trade agreements and their potential effects on...",
    image: "/images/trade-agreements.jpg",
    href: "/business/policy-regulation/east-africa-trade-agreements",
    author: "Samuel Abebe",
    readTime: "7 min",
    isPremium: true,
    slug: "new-trade-agreements-in-east-africa-what-you-need-to-know",
    content: "",
  },
  {
    id: "31",
    category: "BUSINESS | POLICY & REGULATION",
    title: "The Future of Digital Currency in Africa",
    description:
      "Exploring the rise of digital currencies and their implications for...",
    image: "/images/digital-currency.jpg",
    href: "/business/policy-regulation/digital-currency-africa",
    author: "Fatima Ibrahim",
    readTime: "6 min",
    slug: "the-future-of-digital-currency-in-africa",
    content: "",
  },
  {
    id: "32",
    category: "BUSINESS | STARTUPS",
    title: "PayStack Secures $200M to Expand Across Africa",
    description:
      "Fintech startup PayStack raises significant funding to fuel its growth...",
    image: "/images/paystack-startup.jpg",
    href: "/business/startups/paystack-expansion",
    author: "Sarah Johnson",
    readTime: "6 min",
    slug: "paystack-secures-200m-to-expand-across-africa",
    content: "",
  },
  {
    id: "33",
    category: "BUSINESS | STARTUPS",
    title: "Flutterwave Partners with Local Banks for Growth",
    description:
      "Flutterwave collaborates with regional banks to enhance payment solutions...",
    image: "/images/flutterwave-startup.jpg",
    href: "/business/startups/flutterwave-partnership",
    author: "Michael Okoro",
    readTime: "5 min",
    isPremium: true,
    slug: "flutterwave-partners-with-local-banks-for-growth",
    content: "",
  },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    title: "Free Access",
    description:
      "Stay informed with our publicly available articles and weekly highlights.",
    price: "Always Free",
    features: [
      "Read selected free articles weekly",
      "Access public topic pages",
      "Receive general newsletter (optional)",
      "Limited archive access",
    ],
    buttonText: "Continue Free",
    buttonLink: "#main-content",
  },
];

export const relatedArticles: Article[] = [
  {
    id: "1",
    category: "Technology",
    title: "The Future of AI",
    description: "Exploring advancements in artificial intelligence.",
    image: "/images/logo-red.png",
    author: "John Doe",
    readTime: "5 min",
    isPremium: true,
  },
  {
    id: "2",
    category: "Science",
    title: "Quantum Computing Basics",
    description: "An introduction to quantum computing concepts.",
    image: "/images/logo-red.png",
    author: "Jane Smith",
    readTime: "4 min",
  },
  {
    id: "3",
    category: "Innovation",
    title: "Next-Gen Robotics",
    description: "How robotics are transforming industries.",
    image: "/images/author-placeholder.jpg",
    author: "Alex Johnson",
    readTime: "6 min",
    isPremium: true,
  },
];

export const startups: Startup[] = [
  {
    id: "1",
    name: "PayStack",
    description: "Simplifying payments across Africa.",
    image: "/images/paystack-logo.png",
    href: "/business/startups/paystack",
  },
  {
    id: "2",
    name: "Flutterwave",
    description: "Seamless payment solutions for businesses.",
    image: "/images/flutterwave-logo.png",
    href: "/business/startups/flutterwave",
  },
  {
    id: "3",
    name: "Andela",
    description: "Connecting African tech talent globally.",
    image: "/images/andela-logo.png",
    href: "/business/startups/andela",
  },
  {
    id: "4",
    name: "Chipper Cash",
    description: "Cross-border money transfers made easy.",
    image: "/images/chipper-cash-logo.png",
    href: "/business/startups/chipper-cash",
  },
];

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0/month",
    description: "Get started with basic access to Ensight’s insights.",
    features: [
      "Access to weekly newsletters",
      "Limited article access",
      "Community forum access",
    ],
  },
  {
    name: "Standard",
    price: "$15/month",
    description: "Unlock more insights for professionals.",
    features: [
      "Full article access",
      "Weekly newsletters",
      "Exclusive reports",
      "Priority support",
    ],
    isHighlighted: true,
  },
  {
    name: "Premium",
    price: "$30/month",
    description: "Comprehensive access for industry leaders.",
    features: [
      "All Standard features",
      "Real-time data dashboards",
      "Personalized insights",
      "Dedicated account manager",
    ],
  },
];

export const recentAnalysis = [
  {
    id: "1",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "Digital Transformation in Ethiopia: Progress and Potential",
    description: "Examining Ethiopia's journey towards a digital economy.",
    image: "/images/digital-transformation.jpg",
    href: "/tech-and-science/digital/transformation-progress",
    author: "Mesfin Belay",
    date: "May 15, 2025",
    readTime: "9 min",
    slug: "digital-transformation-in-ethiopia-progress-and-potential",
    content: "",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "E-Commerce Boom in Ethiopia: Opportunities for Growth",
    description: "How e-commerce is reshaping Ethiopia's business landscape.",
    image: "/images/ecommerce-boom.jpg",
    href: "/tech-and-science/digital/ecommerce-growth",
    author: "Kalkidan Yohannes",
    date: "May 8, 2025",
    readTime: "7 min",
    isPremium: true,
    slug: "e-commerce-boom-in-ethiopia-opportunities-for-growth",
    content: "",
  },
  {
    id: "3",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "Ethiopia's Innovation Ecosystem: Startups and Beyond",
    description:
      "A look at how Ethiopia is fostering innovation through startups and tech hubs.",
    image: "/images/innovation-ecosystem.jpg",
    href: "/tech-and-science/innovation/startup-ecosystem",
    author: "Tsegaye Girma",
    date: "May 1, 2025",
    readTime: "7 min",
    slug: "ethiopias-innovation-ecosystem-startups-and-beyond",
    content: "",
  },
];

export const trustedPartners = [
  {
    name: "Global Corp",
    logo: "/images/global-corp-logo.png",
  },
  {
    name: "Africa Insights",
    logo: "/images/africa-insights-logo.png",
  },
  {
    name: "Eco Solutions",
    logo: "/images/eco-solutions-logo.png",
  },
  {
    name: "Tech Innovators",
    logo: "/images/tech-innovators-logo.png",
  },
  {
    name: "Finance Group",
    logo: "/images/finance-group-logo.png",
  },
];

export const navItems = [
  {
    label: "Business",
    submenu: [
      { label: "Startups", href: "/business/startups" },
      { label: "Markets", href: "/business/markets" },
      { label: "Policy & Regulation", href: "/business/policy-regulation" },
    ],
  },
  {
    label: "Finance",
    submenu: [
      { label: "Banking", href: "/finance/banking" },
      { label: "Investment", href: "/finance/investment" },
      { label: "Fintech", href: "/finance/fintech" },
      { label: "Capital Markets", href: "/finance/capital-markets" },
    ],
  },
  {
    label: "Economy",
    submenu: [
      { label: "Policies", href: "/economy/policies" },
      { label: "Trade", href: "/economy/trade" },
      { label: "Development", href: "/economy/development" },
      { label: "Inflation", href: "/economy/inflation" },
      { label: "Growth", href: "/economy/growth" },
      { label: "Jobs", href: "/economy/jobs" },
    ],
  },
  {
    label: "Tech and Science",
    submenu: [
      { label: "Innovation", href: "/technology/innovation" },
      { label: "Digital", href: "/technology/digital" },
      { label: "Research", href: "/technology/research" },
    ],
  },
  {
    label: "Corporate",
    href: "/corporate",
    submenu: [],
  },
  {
    label: "Analysis",
    href: "/analysis",
    submenu: [],
    badge: "WEEKLY",
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [],
  },
];

export const Footermenus = [
  {
    title: "Explore",
    items: [
      { label: "Business", href: "/business" },
      { label: "Finance", href: "/finance" },
      { label: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];
