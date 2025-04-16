import { Card, Text, Title } from "@mantine/core";

export function RelatedArticles() {
  return (
    <div className="mt-8">
      <Title order={3} className="text-text-primary mb-4">
        Related Articles
      </Title>
      <Card className="bg-surface border border-border shadow-card p-6">
        <Text className="text-text-secondary">
          Placeholder for related articles.
        </Text>
      </Card>
    </div>
  );
}
