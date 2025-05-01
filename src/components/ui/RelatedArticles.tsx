import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  author: string;
  readTime: string;
  isPremium?: boolean;
}

const relatedArticles: Article[] = [
  {
    id: "1",
    category: "Technology",
    title: "The Future of AI",
    description: "Exploring advancements in artificial intelligence.",
    image: "/images/ai-future.jpg",
    href: "/articles/ai-future",
    author: "John Doe",
    readTime: "5 min",
    isPremium: true,
  },
  {
    id: "2",
    category: "Science",
    title: "Quantum Computing Basics",
    description: "An introduction to quantum computing concepts.",
    image: "/images/quantum-computing.jpg",
    href: "/articles/quantum-computing",
    author: "Jane Smith",
    readTime: "4 min",
  },
  {
    id: "3",
    category: "Innovation",
    title: "Next-Gen Robotics",
    description: "How robotics are transforming industries.",
    image: "/images/robotics.jpg",
    href: "/articles/robotics",
    author: "Alex Johnson",
    readTime: "6 min",
    isPremium: true,
  },
];

export function RelatedArticles() {
  return (
    <div className="mt-8 w-full">
      <Title order={3} className="text-primary mb-4 text-xl font-semibold">
        Related Articles
      </Title>
      <hr className="border-t border-blueblack-white mb-6" />
      <div className="flex flex-col gap-6 w-full">
        {relatedArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-background border border-border rounded-xl flex flex-col w-full"
            radius="md"
          >
            <div className="relative">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-[150px] object-cover rounded-t-md"
                fallbackSrc="/images/placeholder-image.jpg"
              />
              {article.isPremium && (
                <Badge
                  className="absolute top-2 right-2"
                  color="blue"
                  variant="filled"
                  style={{ backgroundColor: "#1e40af", color: "#ffffff" }}
                >
                  PREMIUM
                </Badge>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <Badge
                variant="outline"
                color="blue"
                className="mb-2"
                style={{ borderColor: "#1e40af", color: "#1e40af" }}
              >
                {article.category}
              </Badge>
              <Title
                order={4}
                className="mb-2 line-clamp-2"
                style={{ color: "#1e40af" }}
              >
                {article.title}
              </Title>
              <Text className="text-text-muted text-sm mb-4 line-clamp-1 flex-1">
                {article.description}
              </Text>
              <Group gap="xs" className="mt-auto">
                <Image
                  src={`/images/authors/${article.author
                    .toLowerCase()
                    .replace(" ", "-")}.jpg`}
                  alt={article.author}
                  className="w-6 h-6 rounded-full"
                  fallbackSrc="/images/placeholder-author.jpg"
                />
                <Text className="text-text-muted text-sm">
                  {article.author} • {article.readTime}
                </Text>
              </Group>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
