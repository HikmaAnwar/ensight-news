import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";
import { BreadcrumbsNav } from "./BreadcrumbsNav";
import Sidebar from "./Sidebar";
import { RelatedArticles } from "./RelatedArticles";

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
    <section className="w-full max-w-[1200px] mx-auto py-12">
      <div className="-mx-20 px-20">
        <div className="flex flex-col sm:flex-row justify-between items-start space-x-0 sm:space-x-8">
          <div className="w-full sm:w-[680px] min-w-0">
            <BreadcrumbsNav items={breadcrumbItems} />
            <Title
              order={1}
              className="text-primary text-3xl font-bold mt-4 mb-2"
            >
              {section} - {subtype}
            </Title>
            <Text className="text-muted mb-8 text-xl">
              Showing {articles.length} articles
            </Text>
            <div className="flex flex-row gap-6 overflow-x-auto pb-4">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-background border border-border rounded-xl flex flex-col flex-shrink-0"
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
                      className="mb-2 line-clamp-2 font-bold"
                      style={{ color: "#1e40af" }}
                    >
                      {article.title}
                    </Title>
                    <Text className="text-primary text-sm mb-4 line-clamp-1 flex-1 ">
                      {article.description}
                    </Text>
                    <Group gap="xs" className="mt-auto">
                      <Image
                        src={`/images/authors/${article.author
                          .toLowerCase()
                          .replace(" ", "-")}.jpg`}
                        alt={article.author}
                        className="w-6 h-12 rounded-full"
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
          <div className="w-full sm:w-[480px] mt-8 sm:mt-0">
            <Sidebar />
            <RelatedArticles />
          </div>
        </div>
      </div>
    </section>
  );
}
