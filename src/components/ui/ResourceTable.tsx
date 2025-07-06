"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextInput,
  Group,
  ActionIcon,
  Modal,
  Badge,
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconPencil,
  IconTrash,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";
import EntityTable from "@/components/common/EnitityTable";
import AddResourceForm from "./AddResourceForm";
import EditResourceForm from "./EditResourceForm";
import { Resource } from "@/lib/types";

interface ResourceTableProps {
  data: Resource[];
}

const categoryColors: Record<Resource["category"], string> = {
  "Featured Insight": "blue",
  "Our Latest Reports": "green",
  "Data & Ensights": "orange",
  "Date Hub & Archive": "purple",
};

export default function ResourceTable({
  data: initialData,
}: ResourceTableProps) {
  const [search, setSearch] = useState("");
  const [resources, setResources] = useState<Resource[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const loadResources = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/resources", {
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
        setResources(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, [token]);

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resources", {
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
      setResources(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching resources:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (title: string) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;

    try {
      setLoading(true);
      const res = await fetch(`/api/resources/${title}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!res.ok) throw new Error("Failed to delete resource");
      handleRefresh();
    } catch (error) {
      console.error("Error deleting resource:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { header: "", accessor: "checkbox" },
    { header: "Title", accessor: "title" },
    { header: "Description", accessor: "description" },
    { header: "Category", accessor: "category" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderRow = (resource: Resource) => (
    <tr key={resource.title} className="text-sm md:text-base">
      <td className="p-2">
        <input type="checkbox" className="h-4 w-4" />
      </td>
      <td className="p-2" style={{ color: "var(--color-muted)" }}>
        {resource.title}
      </td>
      <td className="p-2" style={{ color: "var(--color-muted)" }}>
        {resource.description}
      </td>
      <td className="p-2">
        <Badge color={categoryColors[resource.category]} size="sm">
          {resource.category}
        </Badge>
      </td>
      <td className="p-2">
        <Group gap="xs" wrap="nowrap">
          <ActionIcon
            color="blue"
            onClick={() => {
              setSelectedResource(resource);
              setEditOpened(true);
            }}
            title="Edit"
            size="sm"
          >
            <IconPencil size={14} />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => handleDelete(resource.title)}
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
        </Group>
        <Group gap="xs" wrap="wrap">
          <TextInput
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            rightSection={<IconSearch size={16} />}
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
        title="Add New Resource"
        size="90%"
        className="max-w-sm mx-auto sm:flex sm:items-center sm:justify-center"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <AddResourceForm
          onClose={() => {
            setAddOpened(false);
            handleRefresh();
          }}
        />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Resource"
        size="90%"
        className="max-w-sm mx-auto sm:flex sm:items-center sm:justify-center"
        transitionProps={{ transition: "slide-right", duration: 300 }}
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
        {selectedResource && (
          <EditResourceForm
            resource={selectedResource}
            onClose={() => {
              setEditOpened(false);
              handleRefresh();
            }}
          />
        )}
      </Modal>
    </div>
  );
}
