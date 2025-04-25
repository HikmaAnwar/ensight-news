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
      gap="lg"
      className="mb-4"
      style={{
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        width: "100%",
        minWidth: "400px", // Ensures enough space for horizontal layout
      }}
    >
      <Text className="text-white" style={{ marginRight: "8px" }}>
        Share:
      </Text>
      <Group gap="xs" style={{ alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://linkedin.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandLinkedin className="text-white" />
        </ActionIcon>
        <Text className="text-white" size="sm">
          LinkedIn
        </Text>
      </Group>
      <Group gap="xs" style={{ alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://twitter.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandTwitter className="text-white" />
        </ActionIcon>
        <Text className="text-white" size="sm">
          Twitter
        </Text>
      </Group>
      <Group gap="xs" style={{ alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://facebook.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200"
        >
          <IconBrandFacebook className="text-white" />
        </ActionIcon>
        <Text className="text-white" size="sm">
          Facebook
        </Text>
      </Group>
      <Group gap="xs" style={{ alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="mailto:example@example.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200"
        >
          <IconMail className="text-white" />
        </ActionIcon>
        <Text className="text-white" size="sm">
          Email
        </Text>
      </Group>
    </Group>
  );
}
