"use client";
import React from "react";

import {
  Tabs,
  Switch,
  Text,
  Title,
  Group,
  Badge,
  Container,
} from "@mantine/core";
import { IconSettings, IconBookmark, IconHistory } from "@tabler/icons-react";

const ProfilePage = () => {
  return (
    <Container className="min-h-screen p-6">
      <Title order={1} className="text-blue mb-2">
        Your Profile
      </Title>
      <Text className="text-muted mb-6">
        Manage your personalization settings and reading preferences
      </Text>

      <Tabs defaultValue="preferences" className="mb-6">
        <Tabs.List>
          <Tabs.Tab
            value="preferences"
            leftSection={<IconSettings size={16} className="text-blue" />}
            className="text-blue bg-surface border border-border"
          >
            Preferences
          </Tabs.Tab>
          <Tabs.Tab
            value="saved"
            leftSection={<IconBookmark size={16} className="text-blue" />}
            className="text-blue bg-surface border border-border"
          >
            Saved Articles
          </Tabs.Tab>
          <Tabs.Tab
            value="history"
            leftSection={<IconHistory size={16} className="text-blue" />}
            className="text-blue bg-surface border border-border"
          >
            Reading History
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="preferences" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-surface border-1 border-border">
              <Title order={3} className="text-blue mb-4">
                Personalization Settings
              </Title>
              <Text className="text-muted mb-6">
                Adjust how we personalize your content
              </Text>

              <Group className="mb-4" justify="space-between">
                <div>
                  <Text className="text-blue">Enable Personalization</Text>
                  <Text className="text-muted text-sm">
                    We will use the reading history to recommend relevant
                    content
                  </Text>
                </div>
                <Switch
                  color="var(--color-blue)"
                  size="md"
                  onLabel="ON"
                  offLabel="OFF"
                  className="text-blue"
                />
              </Group>

              <Group className="mb-4" justify="space-between">
                <div>
                  <Text className="text-blue">Track Reading Progress</Text>
                  <Text className="text-muted text-sm">
                    Save your progress in articles so you can continue reading
                    later
                  </Text>
                </div>
                <Switch
                  color="var(--color-blue)"
                  size="md"
                  onLabel="ON"
                  offLabel="OFF"
                  className="text-blue"
                />
              </Group>

              <Group justify="space-between">
                <div>
                  <Text className="text-blue">
                    Content Update Notifications
                  </Text>
                  <Text className="text-muted text-sm">
                    Get notified when new relevant content is published
                  </Text>
                </div>
                <Switch
                  color="var(--color-blue)"
                  size="md"
                  onLabel="ON"
                  offLabel="OFF"
                  className="text-blue"
                />
              </Group>
            </div>

            <div className="p-6 rounded-lg bg-surface border-1 border-border">
              <Title order={3} className="text-blue mb-4">
                Topic Preferences
              </Title>
              <Text className="text-muted mb-6">
                Select topics you are interested in
              </Text>

              <Group>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Business
                </Badge>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Economy
                </Badge>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Technology
                </Badge>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Politics
                </Badge>
              </Group>
              <Group className="mt-2">
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Markets
                </Badge>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Finance
                </Badge>
                <Badge
                  variant="filled"
                  className="text-blue bg-surface-emphasis"
                >
                  Agriculture
                </Badge>
              </Group>

              <Text className="text-muted mt-4">
                Click topics to add or remove them from your interests
              </Text>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="saved">
          <Text className="text-muted">No saved articles yet.</Text>
        </Tabs.Panel>

        <Tabs.Panel value="history">
          <Text className="text-muted">No reading history available.</Text>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default ProfilePage;
