"use client";

import { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import ArticlesTable from "../../components/ui/ArticlesTable";
import { Article } from "@/lib/types";

export default function ManagementPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchedArticles: Article[] = [];
    setArticles(fetchedArticles);
  }, []);

  const handleDelete = async (id: string) => {
    setArticles(articles.filter((article: Article) => article.id !== id));
    console.log("Deleting article:", id);
  };

  const handleUpdate = (updatedArticle: Article) => {
    setArticles(
      articles.map((article: Article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
    console.log("Updating article:", updatedArticle);
  };

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
          <ArticlesTable
            data={articles}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </Tabs.Panel>
        {/* Add other panels for User, Resources, and Corporate as needed */}
      </Tabs>
    </div>
  );
}
