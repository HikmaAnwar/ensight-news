"use client";
import { Container, Title, Text, Badge, Group, Button } from "@mantine/core";
import {
  IconBookmark,
  IconShare,
  IconClock,
  IconUsers,
  IconBook,
  IconCalendar,
} from "@tabler/icons-react";
import Image from "next/image";

export default function WeeklyAnalysis() {
  const badges = [
    { label: "ANALYSIS | WEEKLY SESSIONS" },
    { label: "PREMIUM" },
    {
      label: "MAY 10, 2025",
      icon: <IconCalendar size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "5 min read",
      icon: <IconClock size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "1.2K readers",
      icon: <IconUsers size={14} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "Premium",
      icon: <IconBook size={14} className="inline-block mr-2 -mt-1" />,
    },
  ];

  const buttons = [
    {
      label: "Save",
      icon: <IconBookmark size={16} className="inline-block mr-2 -mt-1" />,
    },
    {
      label: "Share",
      icon: <IconShare size={16} className="inline-block mr-2 -mt-1" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Container size="md" className="py-6">
        <Group gap="xs" className="mb-2 flex flex-wrap">
          {badges.slice(0, 2).map((badge, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "light" : "filled"}
              size="sm"
              radius="md"
              className={`text-sm text-blueblack-white rounded-xl ${
                badge.label === "PREMIUM"
                  ? "bg-blue-700 text-white px-3 ml-3"
                  : ""
              }`}
            >
              {badge.label}
            </Badge>
          ))}
        </Group>

        <Title
          order={1}
          className="text-3xl font-bold text-primary-accent mb-2 leading-tight"
        >
          Weekly Economic Briefing:{" "}
          <span>Inflation Trends and Monetary Policy</span>
        </Title>

        <Text c="dimmed" className="text-base text-blueblack-white mb-4">
          Expert analysis of the latest inflation data and its implications for
          Ethiopian businesses.
        </Text>

        <Group className="flex items-start my-7">
          <Image
            src="/images/Frehiwot.jpg"
            alt="Author"
            width={48}
            height={48}
            className="rounded-full object-cover my-auto"
          />
          <div className="flex flex-col ml-4">
            <h1 className="text-sm text-blueblack-white font-semibold mb-1">
              Dr. Abebe Worku
            </h1>
            <div className="flex items-center gap-3 text-sm text-blueblack-white">
              <span>April 15, 2025</span>
              <span>• 15 min read</span>
            </div>
          </div>
        </Group>

        <Group gap="xs" className="my-10 flex flex-wrap">
          {badges.slice(2).map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`border border-gray-300 text-blueblack-white hover:bg-gray-100 cursor-pointer rounded-xl mr-2 px-3 ${
                badge.label === "Premium"
                  ? "border-orange-500 text-orange-500"
                  : ""
              }`}
            >
              {badge.icon && badge.icon}
              {badge.label}
            </Badge>
          ))}
        </Group>

        <Group gap="xs" className="mb-6 flex flex-wrap">
          {buttons.map((button, index) => (
            <Button
              key={index}
              leftSection={button.icon}
              variant="outline"
              className="border border-gray-300 text-blueblack-white hover:bg-gray-100 cursor-pointer rounded-sm mr-2 px-3 py-1"
            >
              {button.label}
            </Button>
          ))}
        </Group>

        <div className="w-2/3 mb-6">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/Frehiwot.jpg"
              alt="Featured Image"
              width={400}
              height={150}
              className="w-full h-100 rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <Text className="text-sm text-blueblack-white mt-2 italic">
              Featured image: Economic trends in Ethiopia, showcasing recent
              developments.
            </Text>
          </div>
        </div>

        <div className="prose max-w-none w-2/3 mb-10">
          <Title
            order={2}
            className="text-xl font-bold text-blueblack-white mb-3"
          >
            Introduction
          </Title>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            Ethiopia has been experiencing significant economic growth over the
            past decade, emerging as one of Africa’s fastest-growing economies.
            The government’s ambitious economic reforms have played a crucial
            role in driving this growth, focusing on liberalizing key sectors
            and attracting foreign investment.
          </Text>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            One of the most notable aspects of these reforms has been the
            opening up of previously state-dominated sectors such as
            telecommunications and banking. This shift marks a departure from
            the country’s historically state-led economic model toward a more
            market-oriented approach.{" "}
            <a href="#">Learn more about economic liberalization.</a>
          </Text>

          <Title order={2} className="text-xl font-bold text-red-600 mb-3">
            Key Reform Areas
          </Title>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            The privatization of state-owned enterprises has been a centerpiece
            of the reform agenda. The partial privatization of Ethio Telecom and
            the issuance of new telecom licenses to foreign operators represent
            landmark changes in this traditionally closed sector.
          </Text>

          <Title order={2} className="text-xl font-bold text-red-600 mb-3">
            Investment Environment
          </Title>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            The investment climate has improved considerably, with the
            government simplifying business registration procedures and
            establishing industrial parks to attract manufacturers. These
            efforts have particularly targeted labor-intensive industries like
            textiles and apparel, leveraging Ethiopia’s large workforce and
            competitive labor costs.
          </Text>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            Foreign direct investment (FDI) has responded positively to these
            changes, with significant inflows into manufacturing, agriculture,
            and increasingly, technology and services. Chinese, Turkish, and
            European investors have been particularly active in the Ethiopian
            market.
          </Text>

          <Title order={2} className="text-xl font-bold text-red-600 mb-3">
            Challenges and Outlook
          </Title>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            Despite these positive developments, challenges remain.
            Infrastructure bottlenecks, particularly in transportation and
            energy, continue to affect business operations. The foreign exchange
            shortage, while improving, still creates difficulties for importers
            and companies with foreign currency needs.{" "}
            <a href="#">Read our infrastructure report.</a>
          </Text>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            Political stability is another crucial factor for sustained economic
            growth. The government’s ability to maintain peace and security will
            be essential for investor confidence and the continued
            implementation of reforms.
          </Text>
          <Text className="text-base text-blueblack-white mb-4 leading-relaxed">
            Looking ahead, Ethiopia’s economic prospects remain promising. The
            country’s large consumer market, strategic location, and ongoing
            reform momentum position it well for sustained growth in Ethiopia.
          </Text>
        </div>
      </Container>
    </div>
  );
}
