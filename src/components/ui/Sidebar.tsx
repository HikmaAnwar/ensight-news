import { Card, Text, Group, Divider } from "@mantine/core";
import { getPopularArticles } from "@/lib/data";

export default async function Sidebar() {
  const articles = await getPopularArticles();

  return (
    <aside className="w-full md:w-80">
      <Card className="bg-background border border-border shadow-card p-6 rounded-3xl">
        <Text className="text-primary font-bold text-xl mb-4">
          Popular This Week
        </Text>
        <Divider className="mb-4 border-t border-gray-300 visible-divider" />

        {articles.map((article, index) => (
          <div key={article.slug}>
            {index > 0 && (
              <Divider className="my-4 border-t border-gray-300 visible-divider" />
            )}
            <a
              href={`/articles/${article.slug}`}
              className="no-underline block hover:bg-surface hover:px-2 hover:py-1 hover:rounded-md transition-all duration-200"
            >
              <Text className="text-white font-semibold hover:text-red-600 hover:underline cursor-pointer transition-colors duration-200">
                {article.title}
              </Text>
              <Group className="text-muted mb-6 inline-flex flex-row gap-4 hover:text-red-600">
                <Text
                  className={`whitespace-nowrap px-1 py-0 rounded ${
                    article.category === "Economy"
                      ? "text-blue-600 hover:text-red-600"
                      : "text-green-500 hover:text-red-600"
                  }`}
                >
                  {article.category}
                </Text>
                <Text className="whitespace-nowrap">|</Text>
                <Text className="whitespace-nowrap">{article.readTime}</Text>
              </Group>
            </a>
          </div>
        ))}
      </Card>
    </aside>
  );
}
