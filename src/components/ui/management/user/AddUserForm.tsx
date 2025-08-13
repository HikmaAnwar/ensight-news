"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import UserFormBase from "./UserFormBase";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
}

interface AddUserFormProps {
  onClose: () => void;
}

export default function AddUserForm({ onClose }: AddUserFormProps) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const initialValues: User = {
    id: uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  };

  const handleSubmit = async (values: User) => {
    if (!token) {
      toast.error("Authentication token missing");
      return;
    }

    // Client-side validation
    if (!values.firstName.trim()) {
      toast.error("First name is required");
      return;
    }
    if (!values.lastName.trim()) {
      toast.error("Last name is required");
      return;
    }
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      toast.error("A valid email is required");
      return;
    }
    if (!values.password || values.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (!values.role) {
      toast.error("Role is required");
      return;
    }

    setLoading(true);
    try {
      const userData = {
        first_name: values.firstName.trim(),
        last_name: values.lastName.trim(),
        email: values.email.trim(),
        password: values.password,
        role: values.role,
        avatar: null,
        enablePersonalization: false,
        trackReadingProgress: false,
        contentUpdateNotifications: false,
        topics: [],
      };

      console.log("Sending payload:", JSON.stringify(userData, null, 2));

      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Server error:", error);
        const errorMessage =
          error.detail?.[0]?.msg || error.message || "Failed to create user";
        toast.error(errorMessage);
        return;
      }

      toast.success("User created successfully");
      onClose();
      // eslint-disable-next-line
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserFormBase
      initialValues={initialValues}
      onSubmit={handleSubmit}
      loading={loading}
      isEditMode={false}
    />
  );
}
