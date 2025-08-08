"use client";

import { useState, useEffect } from "react";
import { Button, TextInput, Group, Modal } from "@mantine/core";
import { IconPlus, IconSearch, IconRefresh } from "@tabler/icons-react";
import CorporateTableView from "./CorporateTableView";
import AddCorporateForm from "./AddCorporateForm";
import EditCorporateForm from "./EditCorporateForm";
import ViewCorporate from "./ViewCorporate";
import { Corporate } from "@/lib/types"; // Make sure your Corporate type is correctly defined here
import toast from "react-hot-toast";

interface CorporateTableProps {
  data: Corporate[];
}

export default function CorporateTable({
  data: initialData,
}: CorporateTableProps) {
  const [search, setSearch] = useState("");
  const [addOpened, setAddOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [viewOpened, setViewOpened] = useState(false);
  const [selectedCorporate, setSelectedCorporate] = useState<Corporate | null>(
    null
  );
  // Initialize corporates state with initialData or an empty array
  const [corporates, setCorporates] = useState<Corporate[]>(initialData || []);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs only on the client-side
    if (typeof window === "undefined") return;
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const loadCorporates = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/corporate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) {
        toast.error(
          `Failed to fetch corporate entries: ${response.statusText}`
        );
        setCorporates([]); // Ensure corporates is an array even on error
        return; // Exit early on non-OK response
      }
      const data = await response.json();
      // Ensure data is an array before setting state
      if (Array.isArray(data)) {
        setCorporates(data);
      } else {
        console.error("API response is not an array:", data);
        toast.error("Received unexpected data format from API.");
        setCorporates([]); // Set to empty array if unexpected format
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to load corporate entries. Please try again later."
      );
      setCorporates([]); // Ensure corporates is an array even on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only load corporates if a token is available
    if (token) {
      loadCorporates();
    } else {
      setLoading(false); // If no token, we're not loading
    }
  }, [token]); // Rerun when token changes

  const handleRefresh = () => {
    loadCorporates();
  };

  const handleDelete = async (corporateId: string | undefined) => {
    if (!corporateId) {
      toast.error("Corporate ID is missing for deletion.");
      return;
    }
    try {
      const response = await fetch(`/api/corporate/${corporateId}`, {
        method: "DELETE",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        toast.error(
          error.message ||
            `Failed to delete corporate entry: ${response.statusText}`
        );
        return;
      }
      toast.success("Corporate entry deleted successfully!");
      await loadCorporates(); // Refresh the list after deletion
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to delete corporate entry. Please try again later."
      );
    }
  };

  const handleView = (corporate: Corporate) => {
    setSelectedCorporate(corporate);
    setViewOpened(true);
  };

  const handleEdit = (corporate: Corporate) => {
    setSelectedCorporate(corporate);
    setEditOpened(true);
  };

  // The crucial fix: Safely handle potentially null or undefined properties
  const filteredData = corporates.filter((corporate) => {
    // Use logical OR (||) to default to an empty string if the property is null or undefined
    // This ensures .toLowerCase() is always called on a string.
    const title = corporate.title || "";
    const description = corporate.description || "";
    const name = corporate.name || "";
    const role = corporate.role || "";

    // Perform case-insensitive search on all relevant fields
    return (
      title.toLowerCase().includes(search.toLowerCase()) ||
      description.toLowerCase().includes(search.toLowerCase()) ||
      name.toLowerCase().includes(search.toLowerCase()) ||
      role.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="max-w-full p-4 overflow-x-auto sm:p-6 md:p-8">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
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
        </Group>
      </div>
      <CorporateTableView
        corporates={filteredData}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {/* Modals for Add, Edit, and View operations */}
      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add New Corporate"
        size="xl"
        closeOnEscape={false}
        closeOnClickOutside={false}
      >
        <AddCorporateForm
          onClose={() => {
            setAddOpened(false);
            handleRefresh(); // Refresh data after adding
          }}
        />
      </Modal>
      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Corporate"
        size="xl"
        closeOnEscape={false}
        closeOnClickOutside={false}
      >
        {selectedCorporate && (
          <EditCorporateForm
            corporate={selectedCorporate}
            onClose={() => {
              setEditOpened(false);
              handleRefresh(); // Refresh data after editing
            }}
          />
        )}
      </Modal>
      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title="View Corporate"
        size="xl"
        closeOnEscape={false}
        closeOnClickOutside={false}
      >
        {selectedCorporate && (
          <ViewCorporate selectedCorporate={selectedCorporate} />
        )}
      </Modal>
    </div>
  );
}
