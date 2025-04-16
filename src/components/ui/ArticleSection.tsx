// components/ui/ArticleSection.tsx
import { Card, Title, Text, Image, Group } from "@mantine/core";
import { Sidebar } from "@/components/ui/Sidebar";
import { SocialShare } from "@/components/ui/SocialShare";
import { AuthorBio } from "@/components/ui/AuthorBio";
import { RelatedArticles } from "@/components/ui/RelatedArticles";
import { GraphPlaceholder } from "@/components/ui/GraphPlaceholder";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { ReadingSettings } from "@/components/ui/ReadingSettings";
import { Article } from "@/lib/types";

interface ArticleSectionProps {
  article?: Article;
}

export function ArticleSection({ article }: ArticleSectionProps) {
  const defaultArticle = {
    title:
      "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
    category: "Economy",
    author: "John Abebe",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "/images/gerd-placeholder.png",
    content: (
      <>
        <Text className="mb-4">
          <strong>
            ADDIS ABABA – With the Grand Ethiopian Renaissance Dam (GERD)
            entering its final operational phases...
          </strong>
        </Text>
        {/* Add more content as per your HTML */}
        <GraphPlaceholder />
        <InlineCTA />
        {/* Add toggle content */}
      </>
    ),
  };

  const displayArticle = article || defaultArticle;

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 flex flex-wrap gap-8">
      <div className="flex-1 min-w-[300px]">
        <Card className="bg-surface border border-border shadow-md p-6 mb-8">
          <Title order={1} className="text-text-primary mb-4">
            {displayArticle.title}
          </Title>
          <Group className="text-text-muted mb-6">
            <Text>{displayArticle.category}</Text>
            <Text>By {displayArticle.author}</Text>
            <Text>{displayArticle.date}</Text>
            <Text>{displayArticle.readTime}</Text>
          </Group>
          <SocialShare />
          <Image
            src={displayArticle.image}
            alt="Grand Ethiopian Renaissance Dam"
            className="my-6"
          />
          {displayArticle.content}
        </Card>
        <AuthorBio
          name="John Abebe"
          bio="John Abebe is a senior analyst at Ensight, specializing in African infrastructure and economic policy."
          image="/images/author-placeholder.png"
        />
        <RelatedArticles />
        <ReadingSettings />
      </div>
      <Sidebar />
    </section>
  );
}
