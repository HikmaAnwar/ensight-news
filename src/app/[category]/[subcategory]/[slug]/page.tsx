import React from "react";
import { Article } from "../../../../lib/types";
import Image from "next/image";
import { BreadcrumbsNav } from "@/components/ui/BreadcrumbsNav";
import { BASE_URL } from "@/lib/constants";
import Link from "next/link";

async function getArticleFromAPI(
  category: string,
  subcategory: string,
  slug: string
): Promise<Article | null> {
  const url = `${BASE_URL}/api/article/${category}/${subcategory}/${slug}`;
  console.log("Fetching article from:", url);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`API responded with status: ${response.status}`);
      return null;
    }

    const data: Article = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

export default async function ReadingPage(
  {
  params,
}: {
  params: Promise<{ category: string; subcategory: string; slug: string }>}
) {
  const { category, subcategory, slug } = params;

  const article = await getArticleFromAPI(category, subcategory, slug);

  const breadcrumbItems = article
    ? [
        { label: "Home", href: "/" },
        { label: category, href: `` },
        { label: subcategory, href: `/${category}/${subcategory}` },
        { label: article.title, href: `/${category}/${subcategory}/${slug}` },
      ]
    : [
        { label: "Home", href: "/" },
        { label: category, href: `` },
        { label: subcategory, href: `/${category}/${subcategory}` },
        { label: slug, href: `/${category}/${subcategory}/${slug}` },
      ];

  return (
    <div className="min-h-screen pt-10">
      <BreadcrumbsNav items={breadcrumbItems} className="font-semibold" />
      <main className="max-w-5xl px-6 py-6 mx-auto">
        <article className="p-8">
          {article ? (
            <>
              <h1 className="mb-6 font-serif text-4xl font-bold text-center md:text-5xl text-blueblack-white">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8 text-sm text-primary">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                {article.date && (
                  <>
                    <span>•</span>
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </>
                )}
              </div>
              <div className="relative w-full mb-8 h-96">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="mb-8 font-serif leading-relaxed prose prose-lg max-w-none text-primary">
                {article.description && (
                  <p className="mb-6 text-xl italic text-primary">
                    {article.description}
                  </p>
                )}
                {article.content ? (
                  article.content
                    .split("\n")
                    .map((paragraph: string, index: number) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))
                ) : (
                  <p>{article.description}</p>
                )}
              </div>
              {article.isPremium && (
                <div className="p-4 mb-8 text-yellow-800 bg-yellow-100 rounded-md">
                  <p className="font-semibold">
                    This is a premium article. Subscribe to access exclusive
                    content.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <h1 className="mb-6 font-serif text-4xl font-bold text-center md:text-5xl text-blueblack-white">
                Article Not Found
              </h1>
              <p className="mb-8 text-lg text-primary">
                Sorry, we couldn&apos;t find the article you&apos;re looking
                for. It may have been moved or deleted.
              </p>
              <Link
                href="/"
                className="font-semibold text-blue-600 hover:underline"
              >
                Return to Home
              </Link>
            </div>
          )}
        </article>
        <section className="mt-12 text-center">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-blueblack-white">
            Stay Updated with Our Newsletter
          </h2>
          <p className="mb-6 text-primary">
            Be the first to know about our latest news! Sign up below to
            register your interest:
          </p>
          <form className="flex justify-center max-w-md gap-4 mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-primary"
              required
            />
            <button
              type="submit"
              className="bg-[#D93A3A] text-white px-6 py-3 rounded-lg hover:bg-[#B32F2F] cursor-pointer transition font-serif"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
