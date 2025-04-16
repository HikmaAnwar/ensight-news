import { Card, Text, Title, Image, Group } from "@mantine/core";

interface AuthorBioProps {
  name: string;
  bio: string;
  image?: string;
}

export function AuthorBio({
  name,
  bio,
  image = "/images/author-placeholder.png",
}: AuthorBioProps) {
  return (
    <Card
      className="bg-surface border border-border shadow-card p-6 mt-8"
      radius="md"
    >
      <Group gap="lg" align="flex-start">
        <Image src={image} alt={name} className="w-16 h-16 rounded-full" />
        <div>
          <Title order={4} className="text-text-primary mb-2">
            {name}
          </Title>
          <Text className="text-text-muted">{bio}</Text>
        </div>
      </Group>
    </Card>
  );
}
