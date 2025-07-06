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
  Menu,
  Text,
  Title,
  Image,
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconPencil,
  IconTrash,
  IconRefresh,
  IconDots,
  IconEye,
} from "@tabler/icons-react";
import { Article } from "@/lib/types";
import EntityTable from "@/components/common/EnitityTable";
import AddArticleForm from "./AddArticleForm";
import EditArticleForm from "./EditArticleForm";

interface ArticlesTableProps {
  data: Article[];
}

const statusColors: Record<"DRAFT" | "PUBLISHED", string> = {
  DRAFT: "red",
  PUBLISHED: "green",
};

export default function ArticlesTable({
  data: initialData,
}: ArticlesTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [viewOpened, setViewOpened] = useState(false);
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
      // Log unique categories for debugging
      console.log(
        "Unique categories in articles:",
        [
          ...new Set(
            data.map((article: Article) => article.category || "None")
          ),
        ].join(", ")
      );
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    loadArticles();
  }, [token]);

  const handleRefresh = async () => {
    loadArticles();
  };

  const handleDelete = async (articleId: string) => {
    try {
      const response = await fetch(`/api/article/${articleId}`, {
        method: "DELETE",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message || `HTTP error! status: ${response.status}`
        );
      }

      await loadArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleView = (article: Article) => {
    setSelectedArticle(article);
    setViewOpened(true);
  };

  const filteredData = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const articleCategory = article.category || "None";
    const matchesFilter =
      filter === "All" ||
      articleCategory.toLowerCase() === filter.toLowerCase();
    console.log(
      `Article: ${article.title}, Category: ${articleCategory}, Filter: ${filter}, Matches: ${matchesFilter}`
    );
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    console.log(
      "Filtered articles:",
      filteredData.map((article) => ({
        title: article.title,
        category: article.category || "None",
      }))
    );
  }, [filteredData]);

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
    <tr key={article.id} className="text-sm md:text-base">
      <td className="p-2">
        <input type="checkbox" className="h-4 w-4" />
      </td>
      <td className="p-2">{article.title}</td>
      <td className="p-2">{article.category || "None"}</td>
      <td className="p-2">{article.subcategory || "-"}</td>
      <td className="p-2">{article.author}</td>
      <td className="p-2">
        <Badge
          color={statusColors[article.status as "DRAFT" | "PUBLISHED"]}
          size="sm"
        >
          {article.status}
        </Badge>
      </td>
      <td className="p-2">
        {article.date ? new Date(article.date).toLocaleDateString() : "-"}
      </td>
      <td className="p-2">
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <ActionIcon color="gray" title="Actions" size="sm">
              <IconDots size={14} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEye size={14} />}
              onClick={() => handleView(article)}
            >
              View
            </Menu.Item>
            <Menu.Item
              leftSection={<IconPencil size={14} />}
              onClick={() => {
                setSelectedArticle(article);
                setEditOpened(true);
              }}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={14} />}
              onClick={() => handleDelete(article.id)}
              color="red"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
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
            data={["All", "Tech and Science", "Finance", "Economy", "Business"]}
            value={filter}
            onChange={(value) => {
              const newFilter = value || "All";
              setFilter(newFilter);
              console.log("Filter updated to:", newFilter);
            }}
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
        <AddArticleForm
          onClose={() => {
            setAddOpened(false);
            handleRefresh();
          }}
        />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Article"
        size="xl"
        closeOnEscape={false}
      >
        {selectedArticle && (
          <EditArticleForm
            article={selectedArticle}
            onClose={() => {
              setEditOpened(false);
              handleRefresh();
            }}
          />
        )}
      </Modal>

      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title="View Article"
        size="xl"
        closeOnEscape={true}
      >
        {selectedArticle && (
          <div className="space-y-4">
            {selectedArticle.image && (
              <div>
                <Title order={4}>Image</Title>
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  radius="md"
                  height={200}
                  fit="contain"
                  className="w-full max-w-md"
                />
              </div>
            )}
            <div>
              <Title order={4}>Title</Title>
              <Text>{selectedArticle.title}</Text>
            </div>
            <div>
              <Title order={4}>Category</Title>
              <Text>{selectedArticle.category || "None"}</Text>
            </div>
            <div>
              <Title order={4}>Subcategory</Title>
              <Text>{selectedArticle.subcategory || "-"}</Text>
            </div>
            <div>
              <Title order={4}>Author</Title>
              <Text>{selectedArticle.author}</Text>
            </div>
            <div>
              <Title order={4}>Status</Title>
              <Badge
                color={
                  statusColors[selectedArticle.status as "DRAFT" | "PUBLISHED"]
                }
                size="sm"
              >
                {selectedArticle.status}
              </Badge>
            </div>
            <div>
              <Title order={4}>Publication Date</Title>
              <Text>
                {selectedArticle.date
                  ? new Date(selectedArticle.date).toLocaleDateString()
                  : "-"}
              </Text>
            </div>
            <div>
              <Title order={4}>Description</Title>
              <Text>{selectedArticle.description || "-"}</Text>
            </div>
            <div>
              <Title order={4}>Content</Title>
              <Text>{selectedArticle.content || "-"}</Text>
            </div>
            <div>
              <Title order={4}>Read Time</Title>
              <Text>{selectedArticle.readTime || "-"}</Text>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
