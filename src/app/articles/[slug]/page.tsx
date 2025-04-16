// app/articles/[slug]/page.tsx
import { ArticleSection } from "@/components/ui/ArticleSection";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/data";

export async function generateStaticParams() {
  // Replace with actual slugs from your data source
  return [{ slug: "ethiopia-financing-models-gerd" }];
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleSection article={article} />;
}
