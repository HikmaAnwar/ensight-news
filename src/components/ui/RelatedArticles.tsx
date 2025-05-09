import { Title } from "@mantine/core";
import { relatedArticles } from "@/lib/data";
import { Article } from "@/lib/types";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles() {
  return (
    <div className="mt-8 w-full">
      <Title
        order={3}
        className="text-blueblack-white mb-4 text-xl font-semibold"
      >
        Related Articles
      </Title>
      <hr className="border-t border-blueblack-white mb-6" />
      <div className="flex flex-col gap-6 w-full">
        {relatedArticles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
