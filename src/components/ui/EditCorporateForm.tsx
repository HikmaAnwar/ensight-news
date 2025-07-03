"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextInput,
  Textarea,
  Group,
  FileInput,
  Text,
} from "@mantine/core";
import { IconX, IconUpload } from "@tabler/icons-react";
import { Corporate } from "@/lib/types";

interface EditCorporateFormProps {
  article: Corporate;
  onClose: () => void;
}

export default function EditCorporateForm({
  article,
  onClose,
}: EditCorporateFormProps) {
  const [formData, setFormData] = useState<Corporate>(article);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormData(article);
  }, [article]);

  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to upload file");
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = formData.image;
      let profileImageUrl = formData.profileImage;

      // Upload new images if selected
      if (imageFile) {
        imageUrl = await uploadFile(imageFile);
      }
      if (profileImageFile) {
        profileImageUrl = await uploadFile(profileImageFile);
      }

      const payload = {
        ...formData,
        image: imageUrl,
        profileImage: profileImageUrl,
      };

      const res = await fetch(`/api/corporate/${article.title}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to update corporate article");
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error updating corporate article:", err);
      } else {
        setError("An unknown error occurred");
        console.error("Error updating corporate article:", err);
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
      <Textarea
        label="Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        rows={6}
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <div>
        <FileInput
          label="Corporate Image"
          name="image"
          onChange={setImageFile}
          accept="image/png,image/jpeg"
          required
          size="sm"
          leftSection={<IconUpload size={16} />}
          placeholder="Upload new corporate image"
          styles={{ label: { color: "var(--color-blueblack-white)" } }}
        />
        {formData.image && (
          <Text size="xs" c="dimmed" mt={4}>
            Current: {formData.image}
          </Text>
        )}
      </div>
      <div>
        <FileInput
          label="Profile Picture"
          name="profileImage"
          onChange={setProfileImageFile}
          accept="image/png,image/jpeg"
          required
          size="sm"
          leftSection={<IconUpload size={16} />}
          placeholder="Upload new profile picture"
          styles={{ label: { color: "var(--color-blueblack-white)" } }}
        />
        {formData.profileImage && (
          <Text size="xs" c="dimmed" mt={4}>
            Current: {formData.profileImage}
          </Text>
        )}
      </div>
      <TextInput
        label="Display Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Born"
        name="born"
        value={formData.born}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Education"
        name="education"
        value={formData.education}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <Textarea
        label="Mission"
        name="mission"
        value={formData.mission}
        onChange={handleChange}
        rows={3}
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Specialties"
        name="specialties"
        value={formData.specialties}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Certifications"
        name="certifications"
        value={formData.certifications}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Motto"
        name="motto"
        value={formData.motto}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <TextInput
        label="Founded"
        name="founded"
        value={formData.founded}
        onChange={handleChange}
        required
        size="sm"
        styles={{ label: { color: "var(--color-blueblack-white)" } }}
      />
      <Textarea
        label="Quote (Optional)"
        name="quote"
        value={formData.quote}
        onChange={handleChange}
        rows={3}
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
          Update
        </Button>
      </Group>
    </form>
  );
}
