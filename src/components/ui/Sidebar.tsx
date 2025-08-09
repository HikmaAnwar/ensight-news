import React, { useState, useEffect } from "react";

// Define a type for the article data
interface Article {
  slug: string;
  title: string;
  readTime: number;
  category: string;
}

// Mock data to simulate an API response
const mockArticles: Article[] = [
  {
    slug: "ethiopia-explores-new-financing",
    title:
      "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
    category: "Economy",
    readTime: 8,
  },
  {
    slug: "ai-startups-the-next-big-thing",
    title: "AI Startups: The Next Big Thing in 2025",
    category: "Featured",
    readTime: 4,
  },
  {
    slug: "sustainable-cities-of-the-future",
    title: "Sustainable Cities of the Future: A Look at Urban Planning",
    category: "Environment",
    readTime: 12,
  },
];

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

  // Simulate an API call to fetch articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setError(null);
        setLoading(true);
        // Simulate a network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Use mock data instead of a real API call
        setArticles(mockArticles);
      } catch (err) {
        console.error(err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <aside className="p-4 font-serif flex justify-center">
      {/* Increased the fixed pixel width from 500px to 600px to make it wider */}
      <div className="w-[800px] mx-auto my-2 p-4 border border-gray-700 rounded-lg shadow-lg bg-background text-blueblack-white">
        {/* Title Section */}
        <h2 className="text-xl font-bold mb-4 font-serif">Popular This Week</h2>
        <div className="border-t border-gray-400 mb-4"></div>

        {/* Conditional rendering for loading, error, or no articles */}
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
          // Render the list of articles
          <div className="space-y-4">
            {articles.slice(0, 3).map((article, index) => (
              <div key={article.slug}>
                <a
                  href={`/${article.category}/${article.slug}`}
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
