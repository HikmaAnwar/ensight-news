// lib/data.ts
import { Article, SubscriptionPlan } from "./types";

export const getArticleBySlug = async (
  slug: string
): Promise<Article | null> => {
  // Replace with CMS or database fetch
  const articles: Article[] = [
    {
      slug: "ethiopia-financing-models-gerd",
      title:
        "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
      category: "Economy",
      author: "John Abebe",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/images/gerd-placeholder.png",
      content: <div>{/* Article content */}</div>,
    },
  ];
  return articles.find((a) => a.slug === slug) || null;
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
  // Add Individual and Enterprise plans
];
