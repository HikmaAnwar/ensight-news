import React from "react";
import { Article } from "../../../../lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";

// Helper function to parse category string into main category and subcategory
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

async function getArticleByTitleAndCategory(
  category: string,
  subcategory: string,
  title: string
): Promise<Article> {
  const articles: Article[] = [
    {
      slug: "ethiopias-economic-policies-a-new-era-of-reform",
      title: "Ethiopia's Economic Policies: A New Era of Reform",
      category: "ECONOMY | POLICIES",
      author: "Yared Lemma",
      date: "2025-05-01",
      readTime: "9 min",
      image: "/images/economic-policies.jpg",
      content:
        "A new book about economic policies and reforms is coming soon! This book dives deep into Ethiopia's economic strategies...",
      description:
        "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    },
    {
      slug: "impact-of-monetary-policy-on-ethiopias-economy",
      title: "Impact of Monetary Policy on Ethiopia's Economy",
      category: "ECONOMY | POLICIES",
      author: "Selamawit Gebremedhin",
      date: "2025-05-01",
      readTime: "6 min",
      image: "/images/monetary-policy.jpg",
      content:
        "An analysis of how monetary policies are influencing Ethiopia's economic landscape...",
      description:
        "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
      isPremium: true,
    },
    {
      slug: "ethiopias-coffee-market-trends-and-opportunities",
      title: "Ethiopias Coffee Market Trends And Opportunities",
      category: "BUSINESS | MARKETS",
      author: "Tsedey Kebede",
      date: "2025-05-03",
      readTime: "7 min",
      image: "/images/coffee-market.jpg",
      content:
        "Ethiopia's coffee market is booming as global demand for specialty coffee increases. This article dives into emerging market trends, export opportunities, and challenges facing Ethiopian coffee producers. It highlights sustainable farming practices, government policies, and international trade dynamics shaping the industry today.",
      description:
        "A look into Ethiopia's dynamic coffee market and future opportunities.",
    },
  ];

  const formattedTitle = title
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const fullCategory = `${category.toUpperCase()} | ${subcategory.toUpperCase()}`;
  const article = articles.find(
    (article) =>
      article.category === fullCategory && article.title === formattedTitle
  );

  if (!article) {
    throw new Error(
      `Article with title ${formattedTitle} in category ${fullCategory} not found`
    );
  }
  return article;
}

export async function generateStaticParams() {
  const articles: Article[] = [
    {
      slug: "ethiopias-economic-policies-a-new-era-of-reform",
      title: "Ethiopia's Economic Policies: A New Era of Reform",
      category: "ECONOMY | POLICIES",
      author: "Yared Lemma",
      date: "2025-05-01",
      readTime: "9 min",
      image: "/images/economic-policies.jpg",
      content: "A new book about economic policies and reforms is coming soon!",
      description:
        "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    },
    {
      slug: "impact-of-monetary-policy-on-ethiopias-economy",
      title: "Impact of Monetary Policy on Ethiopia's Economy",
      category: "ECONOMY | POLICIES",
      author: "Selamawit Gebremedhin",
      date: "2025-05-01",
      readTime: "6 min",
      image: "/images/monetary-policy.jpg",
      content:
        "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
      description:
        "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
      isPremium: true,
    },
    {
      slug: "ethiopias-coffee-market-trends-and-opportunities",
      title: "Ethiopias Coffee Market Trends And Opportunities",
      category: "BUSINESS | MARKETS",
      author: "Tsedey Kebede",
      date: "2025-05-03",
      readTime: "7 min",
      image: "/images/logo.png",
      content:
        "Ethiopia's coffee market is booming as global demand for specialty coffee increases...",
      description:
        "A look into Ethiopia's dynamic coffee market and future opportunities.",
    },
  ];

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
  params: { category: string; subcategory: string; title: string };
}) {
  const article = await getArticleByTitleAndCategory(
    params.category,
    params.subcategory,
    params.title
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full p-8">
        <h1 className="text-4xl font-bold text-blueblack-white font-serif text-center mb-4">
          {article.title}
        </h1>
        <div className="text-lg text-primary font-serif text-center mb-6">
          {parseCategory(article.category).mainCategory}
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 text-primary font-serif leading-relaxed">
            {article.content.split(". ").slice(0, 2).join(". ") + "."}
          </div>
          <div className="flex-1">
            <Image
              src={article.image}
              alt={article.title}
              className="w-[680px] h-[400px] object-cover rounded-md pl-8"
              width={680}
              height={400}
            />
          </div>
        </div>

        <div className="text-primary font-serif leading-relaxed mb-6">
          {article.content}
        </div>
        <div className="text-center">
          <p className="text-primary font-serif mb-4">
            Be the first to know about our latests news! Sign up below to
            register your interest:
          </p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-red-800 font-serif text-white px-4 py-2 rounded-md hover:bg-red-950 transition">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
