"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextInput,
  Select,
  Group,
  ActionIcon,
  Badge,
  Modal,
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconX,
  IconPencil,
  IconTrash,
  IconRefresh,
} from "@tabler/icons-react";
import AddArticleForm from "./AddArticleForm";
import EditArticleForm from "./EditArticleForm";
import { Article } from "@/lib/types";
import EntityTable from "@/components/common/EnitityTable";

interface ArticlesTableProps {
  data: Article[];
}

const statusColors: Record<"Mute" | "Active Now" | "Deactivated", string> = {
  Mute: "red",
  "Active Now": "green",
  Deactivated: "gray",
};

export default function ArticlesTable({
  data: initialData,
}: ArticlesTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>("All");
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!window) return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const loadArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/article", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [token]);

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/article", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || article.category === filter)
  );

  const columns = [
    { header: "", accessor: "checkbox" },
    { header: "Title", accessor: "title" },
    { header: "Category", accessor: "category" },
    { header: "Subcategory", accessor: "subcategory" },
    { header: "Author", accessor: "author" },
    { header: "Status", accessor: "status" },
    { header: "Publication Date", accessor: "date" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderRow = (article: Article) => (
    <tr key={article.id}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{article.title}</td>
      <td>{article.category}</td>
      <td>{article.subcategory || "-"}</td>
      <td>{article.author}</td>
      <td>
        <Badge color={statusColors[article.isPremium ? "Active Now" : "Mute"]}>
          {article.isPremium ? "Premium" : "Mute"}
        </Badge>
      </td>
      <td>{new Date(article.date).toLocaleDateString()}</td>
      <td>
        <Group gap="xs">
          <ActionIcon
            color="blue"
            onClick={() => {
              setSelectedArticle(article);
              setEditOpened(true);
            }}
            title="Edit"
          >
            <IconPencil size={16} />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => console.log("Delete article", article.id)}
            title="Delete"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );

  return (
    <div>
      {/* Actions */}
      <div className="mt-4 flex justify-between items-center">
        <Group>
          <Button
            leftSection={<IconPlus size={16} />}
            variant="filled"
            color="blue"
            onClick={() => setAddOpened(true)}
          >
            Add new
          </Button>
          <Button
            leftSection={<IconRefresh size={16} />}
            variant="outline"
            color="blue"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
          <Select
            placeholder="This Month"
            data={["This Month", "Last Month", "This Year"]}
            value="This Month"
          />
        </Group>
        <Group>
          <TextInput
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            rightSection={<IconSearch size={16} />}
          />
          <Select
            placeholder="All"
            data={["All", "tech_science", "finance", "economy", "business"]}
            value={filter}
            onChange={setFilter}
          />
        </Group>
      </div>

      {/* Entity Table */}
      <EntityTable
        columns={columns}
        data={filteredData}
        isLoading={loading}
        renderRow={renderRow}
      />

      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add New Article"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <AddArticleForm onClose={() => setAddOpened(false)} />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Article"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionIcon
            color="gray"
            onClick={() => setEditOpened(false)}
            title="Close"
          >
            <IconX size={16} />
          </ActionIcon>
        </div>
        {selectedArticle && (
          <EditArticleForm
            article={selectedArticle}
            onClose={() => setEditOpened(false)}
          />
        )}
      </Modal>
    </div>
  );
}
