import { Group, ActionIcon, Text } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

export function SocialShare() {
  return (
    <Group
      gap="md"
      className="mb-4"
      style={{
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        overflowX: "auto", // Scroll if too wide
        minWidth: 0, // Prevent overflow
      }}
    >
      <Text className="text-white" size="sm" style={{ flexShrink: 0 }}>
        Share:
      </Text>
      <Group gap="xs" style={{ flexShrink: 0, alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://linkedin.com"
          variant="filled"
          size="md"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandLinkedin className="text-white" size={16} />
        </ActionIcon>
        <Text className="text-white" size="xs">
          LinkedIn
        </Text>
      </Group>
      <Group gap="xs" style={{ flexShrink: 0, alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://twitter.com"
          variant="filled"
          size="md"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandTwitter className="text-white" size={16} />
        </ActionIcon>
        <Text className="text-white" size="xs">
          Twitter
        </Text>
      </Group>
      <Group gap="xs" style={{ flexShrink: 0, alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://facebook.com"
          variant="filled"
          size="md"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandFacebook className="text-white" size={16} />
        </ActionIcon>
        <Text className="text-white" size="xs">
          Facebook
        </Text>
      </Group>
      <Group gap="xs" style={{ flexShrink: 0, alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="mailto:example@example.com"
          variant="filled"
          size="md"
          radius="xl"
          className="bg-gray-200"
        >
          <IconMail className="text-white" size={16} />
        </ActionIcon>
        <Text className="text-white" size="xs">
          Email
        </Text>
      </Group>
    </Group>
  );
}
