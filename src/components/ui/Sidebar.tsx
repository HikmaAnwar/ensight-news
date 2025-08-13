import React, { useState, useEffect } from "react";

// Define a type for the article data
interface Article {
  slug: string;
  title: string;
  readTime: number;
  category: string;
  subcategory: string;
}

// Custom loader component for a better user experience
const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <svg
      className="animate-spin text-white h-10 w-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
);

// Main Sidebar component
const Sidebar = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use a fixed category and subcategory for the API call.
  // This can be changed later to a prop if the component is used in different contexts.
  const API_CATEGORY = "Economy";
  const API_SUBCATEGORY = "Economy";

  // Fetch articles from your Next.js API endpoint
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setError(null);
        setLoading(true);

        // Construct the URL to your Next.js API route
        const url = `/api/article?category=${API_CATEGORY}&subcategory=${API_SUBCATEGORY}`;

        // You can get the authorization token from localStorage if needed
        const token = cookieStore.get("token");

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch articles");
        }

        const data: Article[] = await response.json();
        setArticles(data);
        //eslint-disable-next-line
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_CATEGORY, API_SUBCATEGORY]);

  return (
    <aside className="p-4 font-serif flex justify-center">
      <div className="w-[800px] mx-auto my-2 p-4 border border-gray-700 rounded-lg shadow-lg bg-background text-blueblack-white">
        <h2 className="text-xl font-bold mb-4 font-serif">Popular This Week</h2>
        <div className="border-t border-gray-400 mb-4"></div>

        {loading ? (
          <div className="flex justify-center items-center h-24">
            <Loader />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-24">
            <p className="text-red-500 font-serif">{error}</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="flex justify-center items-center h-24">
            <p className="text-gray-400 font-serif">No articles found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.slice(0, 3).map((article, index) => (
              <div key={article.slug}>
                {/* Replaced Next.js Link with a standard <a> tag to fix the compilation error */}
                <a
                  href={`/${article.category}/${article.subcategory}/${article.slug}`}
                  className="block text-blueblack-white hover:text-red-500 transition-colors duration-200"
                >
                  <p className="text-base font-serif font-semibold">
                    {article.title}
                  </p>
                </a>
                <div className="flex items-center space-x-2 mt-1 text-sm font-serif">
                  <span className="text-red-500">{article.category}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">
                    {article.readTime} min read
                  </span>
                </div>
                {index < articles.length - 1 && (
                  <div className="border-t border-gray-400 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default function App() {
  return <Sidebar />;
}
