export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  content: string;
  description: string;
  isPremium: boolean;
  status: "DRAFT" | "PUBLISHED";
  caption: string;
  quote: string;
  quoteAuthor: string;
  tag: string;
  noOfReaders: number;
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

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "Admin" | "User";
}
