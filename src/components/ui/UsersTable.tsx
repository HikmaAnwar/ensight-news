"use client";

import { useState, useEffect } from "react";
import {
  Button,
  TextInput,
  Select,
  Group,
  ActionIcon,
  Badge,
  Modal,
} from "@mantine/core";
import {
  IconPlus,
  IconSearch,
  IconX,
  IconPencil,
  IconTrash,
  IconRefresh,
} from "@tabler/icons-react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import { User } from "@/lib/types";
import EntityTable from "@/components/common/EnitityTable";

interface UsersTableProps {
  data: User[];
}

const roleColors: Record<"Admin" | "User", string> = {
  Admin: "blue",
  User: "gray",
};

export default function UsersTable({ data: initialData }: UsersTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>("All");
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!window) return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/user", {
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
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [token]);

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/user", {
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
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = users.filter(
    (user) =>
      (user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "All" || user.role === filter)
  );

  const columns = [
    { header: "", accessor: "checkbox" },
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Actions", accessor: "actions" },
  ];

  const renderRow = (user: User) => (
    <tr key={user.id}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <Badge color={roleColors[user.role]}>{user.role}</Badge>
      </td>
      <td>
        <Group gap="xs">
          <ActionIcon
            color="blue"
            onClick={() => {
              setSelectedUser(user);
              setEditOpened(true);
            }}
            title="Edit"
          >
            <IconPencil size={16} />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => console.log("Delete user", user.id)}
            title="Delete"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );

  return (
    <div>
      {/* Actions */}
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
          <Button
            leftSection={<IconRefresh size={16} />}
            variant="outline"
            color="blue"
            onClick={handleRefresh}
          >
            Refresh
          </Button>
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
            data={["All", "Admin", "User"]}
            value={filter}
            onChange={setFilter}
          />
        </Group>
      </div>

      {/* Entity Table */}
      <EntityTable
        columns={columns}
        data={filteredData}
        isLoading={loading}
        renderRow={renderRow}
      />

      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add New User"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <AddUserForm onClose={() => setAddOpened(false)} />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit User"
        size="xl"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionIcon
            color="gray"
            onClick={() => setEditOpened(false)}
            title="Close"
          >
            <IconX size={16} />
          </ActionIcon>
        </div>
        {selectedUser && (
          <EditUserForm
            user={selectedUser}
            onClose={() => setEditOpened(false)}
          />
        )}
      </Modal>
    </div>
  );
}
