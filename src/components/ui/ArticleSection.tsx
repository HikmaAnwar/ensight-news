import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";
import { BreadcrumbsNav } from "./BreadcrumbsNav";

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  author: string;
  readTime: string;
  isPremium?: boolean;
}

interface ArticleSectionProps {
  section: string;
  subtype: string;
  articles: Article[];
  breadcrumbItems: { label: string; href: string }[];
}

export function ArticleSection({
  section,
  subtype,
  articles,
  breadcrumbItems,
}: ArticleSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <BreadcrumbsNav items={breadcrumbItems} />

        <Title
          order={1}
          className="text-text-primary mt-4 mb-2"
          style={{ color: "#1a365d" }}
        >
          {section} - {subtype}
        </Title>
        <Text className="text-text-muted mb-8" style={{ color: "#6b7280" }}>
          Showing {articles.length} articles
        </Text>

        <div className="flex flex-row gap-6 overflow-x-auto pb-4">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-surface border border-border shadow-card flex flex-col flex-shrink-0"
              radius="md"
              style={{ width: "300px" }}
            >
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[150px] object-cover rounded-t-md"
                  fallbackSrc="/images/placeholder-image.jpg"
                />
                {article.isPremium && (
                  <Badge
                    className="absolute top-2 right-2"
                    color="blue"
                    variant="filled"
                    style={{ backgroundColor: "#1e40af", color: "#ffffff" }}
                  >
                    PREMIUM
                  </Badge>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <Badge
                  variant="outline"
                  color="blue"
                  className="mb-2"
                  style={{ borderColor: "#1e40af", color: "#1e40af" }}
                >
                  {article.category}
                </Badge>
                <Title
                  order={4}
                  className="mb-2 line-clamp-2"
                  style={{ color: "#1e40af" }}
                >
                  {article.title}
                </Title>
                <Text className="text-text-muted text-sm mb-4 line-clamp-1 flex-1">
                  {article.description}
                </Text>
                <Group gap="xs" className="mt-auto">
                  <Image
                    src={`/images/authors/${article.author
                      .toLowerCase()
                      .replace(" ", "-")}.jpg`}
                    alt={article.author}
                    className="w-6 h-6 rounded-full"
                    fallbackSrc="/images/placeholder-author.jpg"
                  />
                  <Text className="text-text-muted text-sm">
                    {article.author} • {article.readTime}
                  </Text>
                </Group>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
