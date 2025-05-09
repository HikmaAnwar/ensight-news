import { Card, Title, Text, Image, Group, Badge } from "@mantine/core";
import { Article } from "@/lib/types";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
  linkPath?: string;
}

export function ArticleCard({ article, linkPath }: ArticleCardProps) {
  const CardContent = (
    <Card
      className="bg-background border border-border rounded-xl flex flex-col w-full cursor-pointer hover:shadow-lg transition-shadow"
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
          {article.category.split(" | ")[0]}
        </Badge>
        <Title
          order={4}
          className="mb-2 line-clamp-2 text-blueblack-white font-bold font-serif"
        >
          {article.title}
        </Title>
        <Text className="text-primary font-serif text-sm mb-4 line-clamp-1 flex-1">
          {article.description ||
            article.content?.slice(0, 100) ||
            "No content available"}
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
  );

  return linkPath ? (
    <Link href={linkPath} passHref>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
