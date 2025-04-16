import { Card, Text } from "@mantine/core";

export function Sidebar() {
  return (
    <aside className="w-full md:w-80">
      <Card className="bg-surface border border-border shadow-card p-6">
        <Text className="text-text-primary font-semibold mb-4">
          Subscribe for Updates
        </Text>
        <Text className="text-text-muted">
          Get the latest insights delivered to your inbox.
        </Text>
      </Card>
    </aside>
  );
}
