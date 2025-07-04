"use client";

import { useForm } from "@mantine/form";
import { Button, TextInput, Select, Group } from "@mantine/core";

interface AddProfileFormProps {
  onClose: () => void;
}

export default function AddProfileForm({ onClose }: AddProfileFormProps) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "User" as "Admin" | "User",
    },
    validate: {
      firstName: (value) =>
        value.trim().length > 0 ? null : "First name is required",
      lastName: (value) =>
        value.trim().length > 0 ? null : "Last name is required",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      role: (value) =>
        ["Admin", "User"].includes(value) ? null : "Invalid role",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(), // Generate a unique ID
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onClose(); // Close modal on success
    } catch (error) {
      console.error("Error adding profile:", error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="p-4 sm:p-6">
      <TextInput
        label="First Name"
        placeholder="Enter first name"
        {...form.getInputProps("firstName")}
        mb="md"
        size="sm"
        className="w-full"
      />
      <TextInput
        label="Last Name"
        placeholder="Enter last name"
        {...form.getInputProps("lastName")}
        mb="md"
        size="sm"
        className="w-full"
      />
      <TextInput
        label="Email"
        placeholder="Enter email"
        {...form.getInputProps("email")}
        mb="md"
        size="sm"
        className="w-full"
      />
      <Select
        label="Role"
        placeholder="Select role"
        data={["User", "Admin"]}
        {...form.getInputProps("role")}
        mb="md"
        size="sm"
        className="w-full"
      />
      <Group justify="flex-end" mt="md" gap="xs" className="flex-wrap">
        <Button
          variant="outline"
          onClick={onClose}
          size="compact-md"
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="filled"
          color="blue"
          size="compact-md"
          className="w-full sm:w-auto"
        >
          Add Profile
        </Button>
      </Group>
    </form>
  );
}
