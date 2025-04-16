// lib/types.ts
export interface Article {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  description: string;
  price: string | { monthly: string; annual: string };
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}
