"use client";
import React from "react";
import { Tabs, Switch, Text, Title, Badge, Container } from "@mantine/core";
import { IconSettings, IconBookmark, IconHistory } from "@tabler/icons-react";
const tabItems = [
  {
    value: "preferences",
    label: "Preferences",
    icon: <IconSettings size={16} className="inline-block -mt-1 mr-2" />,
  },
  {
    value: "saved",
    label: "Saved Articles",
    icon: <IconBookmark size={16} className="inline-block -mt-1 mr-2" />,
  },
  {
    value: "history",
    label: "Reading History",
    icon: <IconHistory size={16} className="inline-block -mt-1 mr-2" />,
  },
];
const topicBadges = [
  "Business",
  "Economy",
  "Technology",
  "Politics",
  "Markets",
  "Finance",
  "Agriculture",
];
const ProfilePage = () => {
  return (
    <Container className="min-h-screen p-6">
      <Title order={1} className="text-blue mb-2">
        Your Profile
      </Title>
      <Text className="text-muted mb-6">
        Manage your personalization settings and reading preferences
      </Text>
      <Tabs
        defaultValue="preferences"
        classNames={{
          list: "flex gap-3 mb-6 border-b border-border",
        }}
      >
        <Tabs.List>
          {tabItems.map((tab) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              leftSection={tab.icon}
              className="
        bg-surface 
        border border-border 
        rounded-md px-4 py-2 text-sm font-medium 
        text-blueblack-white
        transition-all duration-200

        hover:bg-primary-accent 
        hover:text-light

        data-[active=true]:bg-primary-accent 
        data-[active=true]:text-light
      "
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panel value="preferences" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-surface border border-border shadow-sm">
              <Title order={3} className="text-blue mb-4">
                Personalization Settings
              </Title>
              <Text className="text-muted mb-6">
                Adjust how we personalize your content
              </Text>
              {[
                {
                  title: "Enable Personalization",
                  description:
                    "We will use the reading history to recommend relevant content",
                },
                {
                  title: "Track Reading Progress",
                  description:
                    "Save your progress in articles so you can continue reading later",
                },
                {
                  title: "Content Update Notifications",
                  description:
                    "Get notified when new relevant content is published",
                },
              ].map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-5 last:mb-0"
                >
                  <div className="flex-1 pr-4">
                    <Text className="text-blue font-medium">
                      {setting.title}
                    </Text>
                    <Text className="text-muted text-sm">
                      {setting.description}
                    </Text>
                  </div>
                  <Switch
                    color="var(--color-blue)"
                    size="md"
                    className="text-blue"
                    onLabel="On"
                    offLabel="Off"
                  />
                </div>
              ))}
            </div>
            <div className="p-6 rounded-lg bg-surface border border-border shadow-sm">
              <Title order={3} className="text-blue mb-4">
                Topic Preferences
              </Title>
              <Text className="text-muted mb-6">
                Select topics you are interested in
              </Text>
              <div className="flex flex-wrap gap-2">
                {topicBadges.map((topic, idx) => (
                  <Badge
                    key={idx}
                    variant="filled"
                    className="
        text-blue 
        bg-surface-emphasis 
        hover:bg-blue hover:text-light 
        transition-all duration-200 
        cursor-pointer
        px-3 py-1 text-sm
      "
                  >
                    {topic}
                  </Badge>
                ))}
              </div>

              <Text className="text-muted mt-5 text-sm">
                Click topics to add or remove them from your interests
              </Text>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="saved" className="mt-6">
          <Text className="text-muted">No saved articles yet.</Text>
        </Tabs.Panel>
        <Tabs.Panel value="history" className="mt-6">
          <Text className="text-muted">No reading history available.</Text>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default ProfilePage;
