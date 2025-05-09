import { Card, Title, Text, Image } from "@mantine/core";
import { SharedButton } from "./SharedButton";
import { Startup } from "@/lib/types";
import { startups } from "@/lib/data";

export function StartupSection() {
  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <Title order={2} className="text-text-primary mb-8">
          Featured Startups
        </Title>
        <div className="flex flex-row gap-6 overflow-x-auto pb-4">
          {startups.map((startup: Startup) => (
            <Card
              key={startup.id}
              className="bg-surface border border-border shadow-card p-4 flex flex-col items-center flex-shrink-0"
              radius="md"
              style={{ width: "250px", height: "250px" }}
            >
              <Image
                src={startup.image}
                alt={`${startup.name} logo`}
                className="h-16 w-auto mb-2"
                fallbackSrc="/images/placeholder-logo.png"
              />
              <Title
                order={4}
                className="text-text-primary text-center mb-2 line-clamp-1"
              >
                {startup.name}
              </Title>
              <Text className="text-text-muted text-sm text-center mb-4 line-clamp-2 flex-1">
                {startup.description}
              </Text>
              <SharedButton
                variant="filled"
                color="primary-accent"
                size="xs"
                onClick={() => {
                  window.location.href = startup.href;
                }}
              >
                Learn More
              </SharedButton>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
