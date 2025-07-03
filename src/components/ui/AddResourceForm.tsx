"use client";

import { useState } from "react";
import { Button, TextInput, Textarea, Group, Select } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { Resource } from "@/lib/types";

interface AddResourceFormProps {
  onClose: () => void;
}

export default function AddResourceForm({ onClose }: AddResourceFormProps) {
  const [formData, setFormData] = useState<Resource>({
    title: "",
    description: "",
    category: "Featured Insight",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create resource");
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error creating resource:", err);
      } else {
        setError("An unknown error occurred");
        console.error("Error creating resource:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <TextInput
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <Textarea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <Select
        label="Category"
        name="category"
        value={formData.category}
        onChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            category: value as Resource["category"],
          }))
        }
        data={[
          "Featured Insight",
          "Our Latest Reports",
          "Data & Ensights",
          "Date Hub & Archive",
        ]}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <Group justify="flex-end" gap="xs">
        <Button
          variant="outline"
          color="gray"
          onClick={onClose}
          leftSection={<IconX size={16} />}
          size="compact-md"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="filled"
          color="blue"
          loading={loading}
          size="compact-md"
        >
          Create
        </Button>
      </Group>
    </form>
  );
}
