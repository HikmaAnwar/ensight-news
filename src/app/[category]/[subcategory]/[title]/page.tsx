import React from "react";
import { Article } from "../../../../lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BreadcrumbsNav } from "@/components/ui/BreadcrumbsNav";

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
    image: "/images/Frehiwot.jpg",
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

  const { mainCategory, subcategory: subcat } = parseCategory(article.category);
  const urlFriendlyTitle = createUrlFriendlyTitle(article.title);
  const linkPath = `/${mainCategory}/${subcat}/${urlFriendlyTitle}`;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: mainCategory, href: `` },
    { label: subcat, href: `/${mainCategory}/${subcat}` },
    { label: article.title, href: linkPath },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbsNav items={breadcrumbItems} className="font-semibold mt-10" />
      <main className="max-w-5xl mx-auto px-6 py-6">
        <article className="p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blueblack-white font-serif text-center mb-6">
            {article.title}
          </h1>
          <div className="flex justify-center items-center gap-4 text-primary text-sm mb-8">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            {article.date && (
              <>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </>
            )}
          </div>
          <div className="relative w-full h-96 mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="prose prose-lg max-w-none text-primary font-serif leading-relaxed mb-8">
            {article.description && (
              <p className="text-xl italic text-primary mb-6">
                {article.description}
              </p>
            )}
            {article.content ? (
              //eslint-disable-next-line
              article.content.split("\n").map((paragraph: any, index: any) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{article.description}</p>
            )}
          </div>
          {article.isPremium && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-8">
              <p className="font-semibold">
                This is a premium article. Subscribe to access exclusive
                content.
              </p>
            </div>
          )}
        </article>
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blueblack-white font-serif mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-primary mb-6">
            Be the first to know about our latest news! Sign up below to
            register your interest:
          </p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-primary"
            />
            <button className="bg-[#D93A3A] text-white px-6 py-3 rounded-lg hover:bg-[#D93A3A] cursor-pointer transition font-serif">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
