import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";
import { BreadcrumbsNav } from "./BreadcrumbsNav";
import Sidebar from "./Sidebar";
import { RelatedArticles } from "./RelatedArticles";
import Link from "next/link";
import { Article } from "@/lib/types";

interface ArticleSectionProps {
  section: string;
  subtype: string;
  articles: Article[];
  breadcrumbItems: { label: string; href: string }[];
}

// Helper function to create a URL-friendly title
const createUrlFriendlyTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

// Helper function to parse category into main category and subcategory
const parseCategory = (
  category: string
): { mainCategory: string; subcategory: string } => {
  const [mainCategory, subcategory] = category
    .split(" | ")
    .map((part) => part.trim());
  return {
    mainCategory: mainCategory.toLowerCase(),
    subcategory: subcategory.toLowerCase(),
  };
};

export function ArticleSection({
  section,
  subtype,
  articles,
  breadcrumbItems,
}: ArticleSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-8">
        <div className="w-full sm:flex-1 sm:max-w-[680px] min-w-0">
          <BreadcrumbsNav items={breadcrumbItems} className="font-semibold" />
          <Title
            order={1}
            className="text-blueblack-white font-serif text-3xl font-bold mt-4 mb-2"
          >
            {section} - {subtype}
          </Title>
          <Text className="text-muted font-serif mb-8 text-xl">
            Showing {articles.length} articles
          </Text>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            }}
          >
            {articles.map((article) => {
              const { mainCategory, subcategory } = parseCategory(
                article.category
              );
              const urlFriendlyTitle = createUrlFriendlyTitle(article.title);
              const linkPath = `/${mainCategory}/${subcategory}/${urlFriendlyTitle}`;

              return (
                <Link href={linkPath} key={article.slug || article.id} passHref>
                  <Card
                    className="bg-background border border-border rounded-xl flex flex-col flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow"
                    radius="md"
                  >
                    <div className="relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="w-full h-[160px] sm:h-[180px] lg:h-[200px] object-cover rounded-t-md"
                        fallbackSrc="/images/placeholder-image.jpg"
                      />
                      {article.isPremium && (
                        <Badge
                          className="absolute top-2 right-2"
                          color="blue"
                          variant="filled"
                          style={{
                            backgroundColor: "#1e40af",
                            color: "#ffffff",
                          }}
                        >
                          PREMIUM
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <Badge
                        variant="outline"
                        color="blue"
                        className="mb-2 text-blueblack-white font-serif"
                      >
                        {mainCategory}
                      </Badge>
                      <Title
                        order={4}
                        className="mb-2 line-clamp-2 font-bold text-blueblack-white font-serif"
                      >
                        {article.title}
                      </Title>
                      <Text className="text-primary font-serif text-sm mb-4 line-clamp-1 flex-1">
                        {article.description ||
                          article.content?.slice(0, 100) ||
                          "No content available"}
                        ...
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
                        <Text className="text-blueblack-white font-serif text-sm">
                          {article.author} • {article.readTime}
                        </Text>
                      </Group>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full sm:w-[480px] mt-8 sm:mt-0 sm:ml-auto">
          <Sidebar />
          <RelatedArticles />
        </div>
      </div>
    </section>
  );
}
