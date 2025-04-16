// app/page.tsx
import { HeroSection } from "@/components/ui/HeroSection";
import { ArticleSection } from "@/components/ui/ArticleSection";
import { SubscriptionPlans } from "@/components/ui/SubscriptionPlans";
import { TrustedBy } from "@/components/ui/TrustedBy";

export default function Home() {
  return (
    <div className="bg-surface">
      <HeroSection />
      <ArticleSection />
      <SubscriptionPlans />
      <TrustedBy />
    </div>
  );
}
