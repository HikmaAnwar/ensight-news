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
        <Divider className="mb-4 border-t-2 border-gray-300 visible-divider" />

        {articles.map((article, index) => (
          <div key={article.slug}>
            {index > 0 && (
              <Divider className="my-4 border-t-2 border-gray-300 visible-divider" />
            )}
            <a href={`/articles/${article.slug}`} className="no-underline">
              <Text className="text-white font-semibold hover:text-primary cursor-pointer transition-colors duration-200">
                {article.title}
              </Text>
              <Group className="text-muted mb-6 inline-flex flex-row gap-4">
                <Text
                  className={`whitespace-nowrap px-1 py-0 rounded ${
                    article.category === "Economy"
                      ? "text-blue-600"
                      : "text-green-500"
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
