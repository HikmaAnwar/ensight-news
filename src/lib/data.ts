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
