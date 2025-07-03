export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  author: string;
  date: Date | null;
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

export interface Resource {
  title: string;
  description: string;
  category:
    | "Featured Insight"
    | "Our Latest Reports"
    | "Data & Ensights"
    | "Date Hub & Archive";
}
export interface Corporate {
  title: string;
  description: string;
  content: string;
  image: string; // Corporate article image URL
  profileImage: string; // Person's profile picture URL
  quote?: string;
  name: string; // Display name for the person
  role: string; // e.g., "CEO", "Analyst"
  born: string; // e.g., "New York", "1980-01-01"
  education: string; // e.g., "PhD, MIT"
  mission: string; // Person or company mission
  specialties: string; // Company specialties
  certifications: string; // Company certifications
  motto: string; // Company motto
  founded: string;
}
