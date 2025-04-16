import { Button, Text } from "@mantine/core";

export function InlineCTA() {
  return (
    <div className="my-6 text-center">
      <Text className="text-text-secondary mb-4">
        Want more insights like this?
      </Text>
      <Button className="bg-primary-accent text-text-light">
        Subscribe Now
      </Button>
    </div>
  );
}
