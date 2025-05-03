// app/articles/[slug]/page.tsx

import { ArticleDetail } from "@/components/ui/ArticleDetail";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/data";

export interface PageProps {
  params: {
    slug: string;
  };
}

// Optional — If you ever use generateMetadata:
/*
export async function generateMetadata({ params }: PageProps) {
  return {
    title: `Article: ${params.slug}`,
  };
}
*/

export async function generateStaticParams() {
  // Replace with actual slugs from your data source
  return [{ slug: "ethiopia-financing-models-gerd" }];
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
