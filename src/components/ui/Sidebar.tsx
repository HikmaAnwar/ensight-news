import { Card, Text, Group, Divider } from "@mantine/core";

export function Sidebar() {
  return (
    <aside className="w-full md:w-80">
      <Card className="bg-background border border-border shadow-card p-6 rounded-3xl">
        <Text className="text-primary font-bold text-xl mb-4">
          Popular This Week
        </Text>

        <Text className="text-white">
          Global Market Volatility: Navigating Q2 2025 Uncertainties
        </Text>
        <Group className="text-muted mb-6 inline-flex flex-row gap-4">
          <Text className="whitespace-nowrap text-red-600 px-1 py-0 rounded">
            Breaking News
          </Text>
          <Text className="whitespace-nowrap">|</Text>
          <Text className="whitespace-nowrap">5 min read</Text>
        </Group>

        <Divider color="white" className="my-4" />

        <Text className="text-white">
          AI Startups: The Next Big Thing in 2025
        </Text>
        <Group className="text-muted mb-6 inline-flex flex-row gap-4">
          <Text className="whitespace-nowrap text-green-500 px-1 py-0 rounded">
            Featured
          </Text>
          <Text className="whitespace-nowrap">|</Text>
          <Text className="whitespace-nowrap">4 min read</Text>
        </Group>
      </Card>
    </aside>
  );
}
