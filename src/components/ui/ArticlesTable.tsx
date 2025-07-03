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
import { Article } from "@/lib/types";
import EntityTable from "@/components/common/EnitityTable";
import AddArticleForm from "./AddArticleForm";
import EditArticleForm from "./EditArticleForm";

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
    if (typeof window === "undefined") return;
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
    { header: "Author", accessor: "authorName" },
    { header: "Status", accessor: "status" },
    { header: "Publication Date", accessor: "date" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderRow = (article: Article) => (
    <tr key={article.id} className="text-sm md:text-base">
      <td className="p-2">
        <input type="checkbox" className="h-4 w-4" />
      </td>
      <td className="p-2">{article.title}</td>
      <td className="p-2 hidden sm:table-cell">{article.category}</td>
      <td className="p-2 hidden md:table-cell">{article.subcategory || "-"}</td>
      <td className="p-2 hidden md:table-cell">{article.authorName}</td>
      <td className="p-2">
        <Badge
          color={statusColors[article.isPremium ? "Active Now" : "Mute"]}
          size="sm"
        >
          {article.isPremium ? "Premium" : "Mute"}
        </Badge>
      </td>
      <td className="p-2 hidden lg:table-cell">
        {new Date(article.date).toLocaleDateString()}
      </td>
      <td className="p-2">
        <Group gap="xs" wrap="nowrap">
          <ActionIcon
            color="blue"
            onClick={() => {
              setSelectedArticle(article);
              setEditOpened(true);
            }}
            title="Edit"
            size="sm"
          >
            <IconPencil size={14} />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => console.log("Delete article", article.id)}
            title="Delete"
            size="sm"
          >
            <IconTrash size={14} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-full overflow-x-auto">
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Group gap="xs" wrap="wrap">
          <Button
            leftSection={<IconPlus size={16} />}
            variant="filled"
            color="blue"
            onClick={() => setAddOpened(true)}
            size="compact-md"
            className="w-full sm:w-auto"
          >
            Add new
          </Button>
          <Button
            leftSection={<IconRefresh size={16} />}
            variant="outline"
            color="blue"
            onClick={handleRefresh}
            size="compact-md"
            className="w-full sm:w-auto"
          >
            Refresh
          </Button>
          <Select
            placeholder="This Month"
            data={["This Month", "Last Month", "This Year"]}
            defaultValue="This Month"
            size="sm"
          />
        </Group>
        <Group gap="xs" wrap="wrap">
          <TextInput
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            rightSection={<IconSearch size={16} />}
            size="sm"
          />
          <Select
            placeholder="All"
            data={["All", "tech_science", "finance", "economy", "business"]}
            value={filter}
            onChange={setFilter}
            size="sm"
          />
        </Group>
      </div>

      <div className="overflow-x-auto">
        <EntityTable
          columns={columns}
          data={filteredData}
          isLoading={loading}
          renderRow={renderRow}
        />
      </div>

      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add New Article"
        size="xl"
        closeOnEscape={false}
      >
        <AddArticleForm onClose={() => setAddOpened(false)} />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Article"
        size="xl"
        closeOnEscape={false}
      >
        <div className="flex justify-end mb-4">
          <ActionIcon
            color="gray"
            onClick={() => setEditOpened(false)}
            title="Close"
            size="sm"
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
