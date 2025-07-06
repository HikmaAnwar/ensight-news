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
import { v4 as uuidv4 } from "uuid";
import { Article } from "@/lib/types";

const categories = [
  {
    label: "Business",
    value: "Business",
    subcategories: ["Startup", "Markets"],
  },
  {
    label: "Finance",
    value: "Finance",
    subcategories: ["Banking", "Investment"],
  },
  { label: "Economy", value: "Economy", subcategories: ["Policies", "Trade"] },
  {
    label: "Tech and Science",
    value: "Tech and Science",
    subcategories: ["Innovation", "Digital"],
  },
];

interface AddArticleFormProps {
  onClose: () => void;
}

export default function AddArticleForm({ onClose }: AddArticleFormProps) {
  const [token, setToken] = useState<string | null>(null);
  const form = useForm<Article>({
    initialValues: {
      id: uuidv4(),
      slug: "",
      title: "",
      status: "DRAFT",
      category: "",
      subcategory: "",
      author: "",
      date: new Date(),
      readTime: "",
      image: "",
      href: null,
      content: "",
      description: "",
      isPremium: false,
      caption: "",
      quote: "",
      quoteAuthor: "",
      tag: "",
      noOfReaders: 0,
    },
    validate: {
      title: (value) =>
        value.length < 3 ? "Title must be at least 3 characters" : null,
      category: (value) => (!value ? "Category is required" : null),
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
      const newSubcategories = selectedCategory?.subcategories || [];

      setSubcategories((prev) => {
        const isSame =
          prev.length === newSubcategories.length &&
          prev.every((val, index) => val === newSubcategories[index]);
        return isSame ? prev : newSubcategories;
      });

      if (
        form.values.subcategory &&
        !newSubcategories.includes(form.values.subcategory)
      ) {
        form.setFieldValue("subcategory", "");
      }
    } else {
      setSubcategories((prev) => (prev.length === 0 ? prev : []));
      if (form.values.subcategory) {
        form.setFieldValue("subcategory", "");
      }
    }
  }, [form, form.values.category]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (values: Article) => {
    try {
      const articleData = {
        title: values.title,
        status: values.status,
        category: values.category,
        subcategory: values.subcategory || null,
        date: values.date instanceof Date ? values.date.toISOString() : null,
        read_time: values.readTime,
        content: values.content,
        description: values.description,
        is_premium: values.isPremium,
        caption: values.caption || null,
        quote: values.quote || null,
        quote_author: values.quoteAuthor || null,
        tag: values.tag || null,
      };

      const formData = new FormData();
      formData.append("article_data", JSON.stringify(articleData));
      //eslint-disable-next-line
      if (values.image && (values.image as any) instanceof File) {
        formData.append("image", values.image);
      }

      const response = await fetch("/api/article", {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message || `HTTP error! status: ${response.status}`
        );
      }

      form.reset();
      onClose();
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("Error posting article:", error);
      form.setFieldError("title", error.message || "Failed to create article");
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="p-4">
      <TextInput
        label="Title"
        placeholder="Enter article title"
        {...form.getInputProps("title")}
        mb="md"
      />
      <Select
        label="Status"
        placeholder="Select status"
        data={[
          { label: "Draft", value: "DRAFT" },
          { label: "Published", value: "PUBLISHED" },
        ]}
        {...form.getInputProps("status")}
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
        data={subcategories.map((sub: string) => ({ label: sub, value: sub }))}
        {...form.getInputProps("subcategory")}
        disabled={!form.values.category}
        mb="md"
      />
      <DateTimePicker
        label="Publication Date"
        placeholder="Select publication date"
        value={form.values.date}
        onChange={(date) => {
          form.setFieldValue(
            "date",
            date && date instanceof Date ? date : null
          );
        }}
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
        placeholder="Upload image"
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
      <TextInput
        label="Quote"
        placeholder="Enter quote (optional)"
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
        placeholder="Enter tag (optional)"
        {...form.getInputProps("tag")}
        mb="md"
      />
      <Group justify="flex-end" mt="lg">
        <Button type="submit">Create Article</Button>
      </Group>
    </form>
  );
}
