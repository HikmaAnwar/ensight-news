import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";
import { relatedArticles } from "@/lib/data";
import { Article } from "@/lib/types";

export function RelatedArticles() {
  return (
    <div className="mt-8 w-full">
      <Title
        order={3}
        className="text-blueblack-white mb-4 text-xl font-semibold"
      >
        Related Articles
      </Title>
      <hr className="border-t border-blueblack-white mb-6" />
      <div className="flex flex-col gap-6 w-full">
        {relatedArticles.map((article: Article) => (
          <Card
            key={article.id}
            className="bg-background border border-border rounded-xl flex flex-col w-full"
            radius="md"
          >
            <div className="relative">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-[160px] sm:h-[180px] lg:h-[200px] object-cover rounded-t-md"
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
                className="mb-2 text-blueblack-white font-serif"
                style={{ borderColor: "#1e40af" }}
              >
                {article.category}
              </Badge>
              <Title
                order={4}
                className="mb-2 line-clamp-2 text-blueblack-white font-bold font-serif"
              >
                {article.title}
              </Title>
              <Text className="text-primary font-serif text-sm mb-4 line-clamp-1 flex-1">
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
                <Text className="text-text-muted text-blueblack-white font-serif text-sm">
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
