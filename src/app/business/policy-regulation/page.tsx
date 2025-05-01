import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "BUSINESS | POLICY & REGULATION",
    title: "Ethiopia's New Tax Law: Implications for Businesses",
    description:
      "A comprehensive overview of the new tax regulations and their impact on...",
    image: "/images/tax-law.jpg",
    href: "/business/policy-regulation/ethiopia-tax-law",
    author: "Amina Tesfaye",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "BUSINESS | POLICY & REGULATION",
    title: "New Trade Agreements in East Africa: What You Need to Know",
    description:
      "An analysis of the recent trade agreements and their potential effects on...",
    image: "/images/trade-agreements.jpg",
    href: "/business/policy-regulation/east-africa-trade-agreements",
    author: "Samuel Abebe",
    readTime: "7 min",
    isPremium: true,
  },
  {
    id: "3",
    category: "BUSINESS | POLICY & REGULATION",
    title: "The Future of Digital Currency in Africa",
    description:
      "Exploring the rise of digital currencies and their implications for...",
    image: "/images/digital-currency.jpg",
    href: "/business/policy-regulation/digital-currency-africa",
    author: "Fatima Ibrahim",
    readTime: "6 min",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Policy & Regulation", href: "/business/policy-regulation" },
];

export default function PolicyRegulationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Business"
        subtype="Policy & Regulation"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
