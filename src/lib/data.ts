import { Article, SubscriptionPlan } from "./types";

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
