"use client";

import { useState } from "react";
import {
  Table,
  Button,
  TextInput,
  Select,
  Group,
  ActionIcon,
  Badge,
  Modal,
  LoadingOverlay,
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconX,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

import AddArticleForm from "./AddArticleForm";
import EditArticleForm from "./EditArticleForm";
import { Article } from "@/lib/types";

interface ArticlesTableProps {
  data: Article[];
  onDelete: (id: string) => void;
  onUpdate: (article: Article) => void;
}

const statusColors: Record<"Mute" | "Active Now" | "Deactivated", string> = {
  Mute: "red",
  "Active Now": "green",
  Deactivated: "gray",
};

export default function ArticlesTable({
  data,
  onDelete,
  onUpdate,
}: ArticlesTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>("All");
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredData = data.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || article.category === filter)
  );

  const rows = filteredData.map((article) => (
    <Table.Tr key={article.id}>
      <Table.Td>
        <input type="checkbox" />
      </Table.Td>
      <Table.Td>{article.title}</Table.Td>
      <Table.Td>{article.category}</Table.Td>
      <Table.Td>{article.subcategory || "-"}</Table.Td>
      <Table.Td>{article.author}</Table.Td>
      <Table.Td>
        <Badge color={statusColors[article.isPremium ? "Active Now" : "Mute"]}>
          {article.isPremium ? "Premium" : "Mute"}
        </Badge>
      </Table.Td>
      <Table.Td>{new Date(article.date).toLocaleDateString()}</Table.Td>
      <Table.Td>
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
            onClick={() => onDelete(article.id)}
            title="Delete"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  const handleAddSubmit = async (values: Article) => {
    setLoading(true);
    try {
      // Simulate API call to save article
      console.log("New article:", values);
      notifications.show({
        title: "Article Created",
        message: "Article was successfully created",
        color: "green",
      });
      // Optionally refresh the table data here if needed
    } catch {
      notifications.show({
        title: "Error",
        message: "Failed to create article",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubmit = async (values: Article) => {
    setLoading(true);
    try {
      // Simulate API call to update article
      console.log("Updated article:", values);
      notifications.show({
        title: "Article Updated",
        message: "Article was successfully updated",
        color: "green",
      });
      onUpdate(values); // Call the update callback
    } catch {
      notifications.show({
        title: "Error",
        message: "Failed to update article",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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

      <Table
        highlightOnHover
        withTableBorder
        withColumnBorders
        className="mt-4"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <input type="checkbox" />
            </Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Subcategory</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Publication Date</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add New Article"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <LoadingOverlay visible={loading} />
        <AddArticleForm
          onSubmit={handleAddSubmit}
          loading={loading}
          onClose={() => setAddOpened(false)}
        />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Article"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <LoadingOverlay visible={loading} />
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
            onSubmit={handleEditSubmit}
            loading={loading}
            onClose={() => setEditOpened(false)}
          />
        )}
      </Modal>
    </div>
  );
}
