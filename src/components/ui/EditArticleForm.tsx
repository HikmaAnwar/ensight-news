"use client";

import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  TextInput,
  Textarea,
  Select,
  Group,
  Switch,
  FileInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { Article } from "@/lib/types";

const categories = [
  {
    label: "Business",
    value: "business",
    subcategories: ["startup", "markets"],
  },
  {
    label: "Finance",
    value: "finance",
    subcategories: ["banking", "investment"],
  },
  { label: "Economy", value: "economy", subcategories: ["policies", "trade"] },
  {
    label: "Tech and Science",
    value: "tech_science",
    subcategories: ["innovation", "digital"],
  },
];

interface EditArticleFormProps {
  article: Article;
  onClose: () => void;
}

export default function EditArticleForm({
  article,
  onClose,
}: EditArticleFormProps) {
  const form = useForm<Article>({
    initialValues: {
      ...article,
      image: "",
      author: article.author || "",
      quote: "",
      quoteAuthor: "",
      tag: "",
      noOfReaders: 0,
    },
    validate: {
      slug: (value) =>
        !value
          ? "Slug is required"
          : /^[a-z0-9-]+$/i.test(value)
          ? null
          : "Slug must be URL-friendly",
      title: (value) =>
        value.length < 3 ? "Title must be at least 3 characters" : null,
      category: (value) => (!value ? "Category is required" : null),
      author: (value) =>
        value.length < 2 ? "Author name must be at least 2 characters" : null,
      date: (value) => (!value ? "Publication date is required" : null),
      readTime: (value) => (!value ? "Read time is required" : null),

      content: (value) =>
        value.length < 10 ? "Content must be at least 10 characters" : null,
      description: (value) =>
        value.length < 10 ? "Description must be at least 10 characters" : null,
    },
  });

  const [subcategories, setSubcategories] = useState<string[]>([]);

  useEffect(() => {
    if (form.values.category) {
      const selectedCategory = categories.find(
        (cat) => cat.value === form.values.category
      );
      setSubcategories(selectedCategory?.subcategories || []);
      if (
        !selectedCategory?.subcategories.includes(form.values.subcategory || "")
      ) {
        form.setFieldValue("subcategory", "");
      }
    } else {
      setSubcategories([]);
      form.setFieldValue("subcategory", "");
    }
  }, [form, form.values.category]);

  const handleSubmit = async (values: Article) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      // Remove fields not needed in the payload
      formData.delete("noOfReaders");
      formData.delete("tag");
      formData.delete("quote");
      formData.delete("quoteAuthor");
      formData.delete("author");
      formData.append("authorName", values.author);

      const response = await fetch(`/api/article/${values.id}`, {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token")
            ? `Bearer ${localStorage.getItem("token")}`
            : "",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onClose();
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="p-4">
      <TextInput
        label="Slug"
        placeholder="Enter URL-friendly slug (e.g., article-title)"
        {...form.getInputProps("slug")}
        mb="md"
      />
      <TextInput
        label="Title"
        placeholder="Enter article title"
        {...form.getInputProps("title")}
        mb="md"
      />
      <Select
        label="Category"
        placeholder="Select category"
        data={categories.map((cat) => ({ label: cat.label, value: cat.value }))}
        {...form.getInputProps("category")}
        mb="md"
      />
      <Select
        label="Subcategory"
        placeholder="Select subcategory"
        data={subcategories.map((sub) => ({ label: sub, value: sub }))}
        {...form.getInputProps("subcategory")}
        disabled={!form.values.category}
        mb="md"
      />
      <TextInput
        label="Author Name"
        placeholder="Enter author name"
        {...form.getInputProps("authorName")}
        mb="md"
      />
      <DateTimePicker
        label="Publication Date"
        placeholder="Select publication date"
        value={form.values.date ? new Date(form.values.date) : null}
        onChange={(date) =>
          form.setFieldValue("date", date ? date.toString() : "")
        }
        error={form.errors.date}
        mb="md"
      />
      <TextInput
        label="Read Time"
        placeholder="Enter read time (e.g., 5 min)"
        {...form.getInputProps("readTime")}
        mb="md"
      />
      <FileInput
        label="Image"
        placeholder="Upload new image"
        accept="image/*"
        {...form.getInputProps("image")}
        mb="md"
      />

      <Textarea
        label="Content"
        placeholder="Enter article content"
        minRows={6}
        {...form.getInputProps("content")}
        mb="md"
      />
      <Textarea
        label="Description"
        placeholder="Enter article description"
        minRows={4}
        {...form.getInputProps("description")}
        mb="md"
      />
      <Switch
        label="Premium Content"
        checked={form.values.isPremium}
        onChange={(event) =>
          form.setFieldValue("isPremium", event.currentTarget.checked)
        }
        mb="md"
      />
      <TextInput
        label="Image Caption"
        placeholder="Enter image caption (optional)"
        {...form.getInputProps("caption")}
        mb="md"
      />
      <Group justify="flex-end" mt="lg">
        <Button type="submit">Update Article</Button>
      </Group>
    </form>
  );
}
