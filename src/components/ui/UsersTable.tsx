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
    <tr key={user.id} className="text-sm md:text-base">
      <td className="p-2">
        <input type="checkbox" className="h-4 w-4" />
      </td>
      <td className="p-2">{user.firstName}</td>
      <td className="p-2 hidden sm:table-cell">{user.lastName}</td>
      <td className="p-2 hidden md:table-cell">{user.email}</td>
      <td className="p-2">
        <Badge color={roleColors[user.role]} size="sm">
          {user.role}
        </Badge>
      </td>
      <td className="p-2">
        <Group gap="xs" wrap="nowrap">
          <ActionIcon
            color="blue"
            onClick={() => {
              setSelectedUser(user);
              setEditOpened(true);
            }}
            title="Edit"
            size="sm"
          >
            <IconPencil size={14} />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => console.log("Delete user", user.id)}
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
      {/* Actions */}
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
          <Select
            placeholder="All"
            data={["All", "Admin", "User"]}
            value={filter}
            onChange={setFilter}
            size="sm"
          />
        </Group>
      </div>

      {/* Entity Table */}
      <div className="overflow-x-auto min-w-full">
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
        title="Add New User"
        size="90%"
        className="max-w-sm mx-auto sm:flex sm:items-center sm:justify-center"
        transitionProps={{ transition: "slide-right", duration: 300 }}
        closeOnEscape={false}
      >
        <AddUserForm onClose={() => setAddOpened(false)} />
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit User"
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
