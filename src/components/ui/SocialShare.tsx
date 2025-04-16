import { Group, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

export function SocialShare() {
  return (
    <Group gap="xs" className="mb-4">
      <ActionIcon
        component="a"
        href="https://twitter.com"
        className="text-muted hover:text-primary-accent"
      >
        <IconBrandTwitter />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://linkedin.com"
        className="text-muted hover:text-primary-accent"
      >
        <IconBrandLinkedin />
      </ActionIcon>
    </Group>
  );
}
