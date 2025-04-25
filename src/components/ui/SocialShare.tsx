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
        flexWrap: "nowrap",
        alignItems: "center",
      }}
    >
      <Text
        className="text-white"
        style={{ minWidth: "50px", marginRight: "8px" }}
      >
        Share:
      </Text>
      <Group gap="sm" style={{ flexWrap: "nowrap", alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://linkedin.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <IconBrandLinkedin className="text-white" />
        </ActionIcon>
        <Text className="text-white text-sm" style={{ whiteSpace: "nowrap" }}>
          LinkedIn
        </Text>
      </Group>
      <Group gap="sm" style={{ flexWrap: "nowrap", alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://twitter.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <IconBrandTwitter className="text-white" />
        </ActionIcon>
        <Text className="text-white text-sm" style={{ whiteSpace: "nowrap" }}>
          Twitter
        </Text>
      </Group>
      <Group gap="sm" style={{ flexWrap: "nowrap", alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="https://facebook.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <IconBrandFacebook className="text-white" />
        </ActionIcon>
        <Text className="text-white text-sm" style={{ whiteSpace: "nowrap" }}>
          Facebook
        </Text>
      </Group>
      <Group gap="sm" style={{ flexWrap: "nowrap", alignItems: "center" }}>
        <ActionIcon
          component="a"
          href="mailto:example@example.com"
          variant="filled"
          size="lg"
          radius="xl"
          className="bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <IconMail className="text-white" />
        </ActionIcon>
        <Text className="text-white text-sm" style={{ whiteSpace: "nowrap" }}>
          Email
        </Text>
      </Group>
    </Group>
  );
}
