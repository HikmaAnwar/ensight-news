"use client";

import { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import ArticlesTable from "../../components/ui/ArticlesTable";
import UserTable from "../../components/ui/UsersTable";
import { Article } from "@/lib/types";
import ResourceTable from "@/components/ui/ResourceTable";
import CorporateTable from "@/components/ui/CorporateTable";

export default function ManagementPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchedArticles: Article[] = [];
    setArticles(fetchedArticles);
  }, []);

  return (
    <div>
      <Tabs defaultValue="Articles">
        <Tabs.List>
          <Tabs.Tab value="User">User</Tabs.Tab>
          <Tabs.Tab value="Articles">Articles</Tabs.Tab>
          <Tabs.Tab value="Resources">Resources</Tabs.Tab>
          <Tabs.Tab value="Corporate">Corporate</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Articles" pt="xs">
          <ArticlesTable data={articles} />
        </Tabs.Panel>
        <Tabs.Panel value="User" pt="xs">
          <UserTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Resources" pt="xs">
          <ResourceTable data={[]} />
        </Tabs.Panel>
        <Tabs.Panel value="Corporate" pt="xs">
          <CorporateTable data={[]} />
        </Tabs.Panel>

        {/* Add other panels for User, Resources, and Corporate as needed */}
      </Tabs>
    </div>
  );
}
