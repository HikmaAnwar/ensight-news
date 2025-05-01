import { Group, ActionIcon, Text } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: IconBrandLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: IconBrandTwitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: IconBrandFacebook,
  },
  {
    name: "Email",
    href: "mailto:example@example.com",
    icon: IconMail,
  },
];

export function SocialShare() {
  return (
    <Group gap="md" className="mb-4 flex">
      <Text className="text-blueblack-white" size="sm">
        Share:
      </Text>
      {socialLinks.map((link) => (
        <Group key={link.name} gap="xs" className="flex items-center mx-4">
          <ActionIcon
            component="a"
            href={link.href}
            variant="filled"
            radius="xl"
            className="flex"
          >
            <link.icon
              className="text-blueblack-white mr-2 inline-block"
              size={16}
            />
            <Text className="text-blueblack-white inline" size="xs">
              {link.name}
            </Text>
          </ActionIcon>
        </Group>
      ))}
    </Group>
  );
}
