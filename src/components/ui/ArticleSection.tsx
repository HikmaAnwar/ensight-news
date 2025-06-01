import { Title, Text } from "@mantine/core";
import { BreadcrumbsNav } from "./BreadcrumbsNav";
import Sidebar from "./Sidebar";
import { RelatedArticles } from "./RelatedArticles";

import { articles } from "@/lib/data";
import { ArticleCard } from "./ArticleCard";

interface ArticleSectionProps {
  section: string;
  subtype: string;
  breadcrumbItems: { label: string; href: string }[];
}

const createUrlFriendlyTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

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
  breadcrumbItems,
}: ArticleSectionProps) {
  const filteredArticles = articles.filter((article) => {
    const { mainCategory, subcategory } = parseCategory(article.category);
    return (
      mainCategory.toLowerCase() === section.toLowerCase() &&
      subcategory.toLowerCase() === subtype.toLowerCase()
    );
  });

  return (
    <section className="w-full py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-50">
        <div className="w-full">
          <BreadcrumbsNav items={breadcrumbItems} className="font-semibold" />
          <Title
            order={1}
            className="text-blueblack-white font-serif text-2xl md:text-3xl font-bold mt-4 mb-2"
          >
            {section} - {subtype}
          </Title>
          <Text className="text-muted font-serif mb-6 md:mb-8 text-lg md:text-xl">
            Showing {filteredArticles.length} articles
          </Text>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {filteredArticles.map((article) => {
              const { mainCategory, subcategory } = parseCategory(
                article.category
              );
              const urlFriendlyTitle = createUrlFriendlyTitle(article.title);
              const linkPath = `/${mainCategory}/${subcategory}/${urlFriendlyTitle}`;

              return (
                <ArticleCard
                  key={article?.slug || article?.id}
                  article={article}
                  linkPath={linkPath}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[480px] md:mt-0">
          <Sidebar />
          <RelatedArticles />
        </div>
      </div>
    </section>
  );
}
