import React from "react";
import { Article } from "../../../../lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";
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
const articles: Article[] = [
  {
    id: "1",
    category: "ECONOMY | POLICIES",
    slug: "ethiopias-economic-policies-a-new-era-of-reform",
    title: "Ethiopia's Economic Policies: A New Era of Reform",
    description:
      "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    image: "/images/economic-policies.jpg",
    author: "Yared Lemma",
    readTime: "9 min",
  },
  {
    id: "2",
    category: "ECONOMY | POLICIES",
    slug: "impact-of-monetary-policy-on-ethiopias-economy",
    title: "Impact of Monetary Policy on Ethiopia's Economy",
    description:
      "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
    image: "/images/monetary-policy.jpg",
    author: "Selamawit Gebremedhin",
    readTime: "6 min",
    isPremium: true,
  },
  {
    id: "3",
    slug: "ethiopias-coffee-market-trends-and-opportunities",
    title: "Ethiopias Coffee Market Trends And Opportunities",
    category: "BUSINESS | MARKETS",
    author: "Tsedey Kebede",
    date: "2025-05-03",
    readTime: "7 min",
    image: "/images/frehiwot.jpg",
    content:
      "Ethiopia's coffee market is booming as global demand for specialty coffee increases...",
    description:
      "A look into Ethiopia's dynamic coffee market and future opportunities.",
  },
];

async function getArticleByTitleAndCategory(
  category: string,
  subcategory: string,
  title: string
): Promise<Article> {
  const formattedTitle = title
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const normalizeTitle = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim();

  const fullCategory = `${category.toUpperCase()} | ${subcategory.toUpperCase()}`;
  const article = articles.find((article) => {
    const normalizedArticleTitle = normalizeTitle(article.title);
    const normalizedInputTitle = normalizeTitle(formattedTitle);
    return (
      article.category === fullCategory &&
      normalizedArticleTitle === normalizedInputTitle
    );
  });

  if (!article) {
    throw new Error(
      `Article with title ${formattedTitle} in category ${fullCategory} not found`
    );
  }
  return article;
}

export async function generateStaticParams() {
  return articles.map((article) => {
    const { mainCategory, subcategory } = parseCategory(article.category);
    const urlFriendlyTitle = createUrlFriendlyTitle(article.title);
    return {
      category: mainCategory,
      subcategory: subcategory,
      title: urlFriendlyTitle,
    };
  });
}

const createUrlFriendlyTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};
export default async function ReadingPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string; title: string }>;
}) {
  const { category, subcategory, title } = await params;
  const article = await getArticleByTitleAndCategory(
    category,
    subcategory,
    title
  );
  if (!article) {
    notFound();
  }
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="max-w-5xl w-full p-8">
        {}
        <h1 className="text-4xl font-bold text-blueblack-white font-serif text-center mb-4">
          {article.title}
        </h1>
        {}
        <div className="text-lg text-primary font-serif text-center mb-6">
          {parseCategory(article.category).mainCategory}
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 text-primary font-serif leading-relaxed">
            {article.content
              ? article?.content.split(". ").slice(0, 2).join(". ") + "."
              : ""}
          </div>
          <div className="flex-1 ">
            <Image
              src={article.image}
              alt={article.title}
              className="object-cover rounded-md"
              width={680}
              height={400}
            />
          </div>
        </div>
        {}
        <div className="text-primary font-serif leading-relaxed mb-6">
          {article.content}
        </div>
        {}
        <div className="text-center">
          <p className="text-blueblack-white font-semibold font-serif mb-4">
            Be the first to know about our latest news! Sign up below to
            register your interest:
          </p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-red-800 font-serif text-white px-4 py-2 rounded-md hover:bg-red-900 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
