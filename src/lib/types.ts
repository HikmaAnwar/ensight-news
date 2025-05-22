export interface Article {
  id?: string;
  slug?: string;
  title: string;
  category: string;
  author: string;
  date?: string;
  readTime: string;
  image: string;
  //eslint-disable-next-line
  content?: any;
  description: string;
  isPremium?: boolean;
  section?: string;
  index?: number;
  caption?: string;
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

export interface Startup {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}
