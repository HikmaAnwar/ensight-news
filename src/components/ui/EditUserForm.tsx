"use client";

import { useForm } from "@mantine/form";
import { Button, TextInput, Select, Group } from "@mantine/core";
import { User } from "@/lib/types";

interface EditUserFormProps {
  user: User;
  onClose: () => void;
}

export default function EditUserForm({ user, onClose }: EditUserFormProps) {
  const form = useForm({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
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
      const response = await fetch(`/api/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onClose(); // Close modal on success
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="First Name"
        placeholder="Enter first name"
        {...form.getInputProps("firstName")}
        mb="md"
      />
      <TextInput
        label="Last Name"
        placeholder="Enter last name"
        {...form.getInputProps("lastName")}
        mb="md"
      />
      <TextInput
        label="Email"
        placeholder="Enter email"
        {...form.getInputProps("email")}
        mb="md"
      />
      <Select
        label="Role"
        placeholder="Select role"
        data={["User", "Admin"]}
        {...form.getInputProps("role")}
        mb="md"
      />
      <Group justify="flex-end" mt="md">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" variant="filled" color="blue">
          Save Changes
        </Button>
      </Group>
    </form>
  );
}
