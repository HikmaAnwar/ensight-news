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
  NumberInput,
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
    initialValues: article,
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
        !value
          ? "Author UUID is required"
          : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
              value
            )
          ? null
          : "Invalid UUID format",
      date: (value) => (!value ? "Publication date is required" : null),
      readTime: (value) => (!value ? "Read time is required" : null),
      image: (value) => (!value ? "Image URL is required" : null),
      href: (value) => (!value ? "Article URL is required" : null),
      content: (value) =>
        value.length < 10 ? "Content must be at least 10 characters" : null,
      description: (value) =>
        value.length < 10 ? "Description must be at least 10 characters" : null,
      noOfReaders: (value) =>
        value < 0 ? "Number of readers cannot be negative" : null,
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

  const handleSubmit = (values: Article) => {
    console.log(values);
    onClose();
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
        label="Author UUID"
        placeholder="Enter author UUID"
        {...form.getInputProps("author")}
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
      <TextInput
        label="Image URL"
        placeholder="Enter image URL"
        {...form.getInputProps("image")}
        mb="md"
      />
      <TextInput
        label="Article URL"
        placeholder="Enter article URL"
        {...form.getInputProps("href")}
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
      <Textarea
        label="Quote"
        placeholder="Enter quoted text (optional)"
        minRows={3}
        {...form.getInputProps("quote")}
        mb="md"
      />
      <TextInput
        label="Quote Author"
        placeholder="Enter quote author (optional)"
        {...form.getInputProps("quoteAuthor")}
        mb="md"
      />
      <TextInput
        label="Tag"
        placeholder="Enter tag (e.g., SPECIAL REPORT) (optional)"
        {...form.getInputProps("tag")}
        mb="md"
      />
      <NumberInput
        label="Number of Readers"
        placeholder="Enter number of readers"
        min={0}
        {...form.getInputProps("noOfReaders")}
        mb="md"
      />

      <Group justify="flex-end" mt="lg">
        <Button type="submit">Update Article</Button>
      </Group>
    </form>
  );
}
