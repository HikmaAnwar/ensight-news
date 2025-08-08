"use client";

import {
  Table,
  Loader,
  Modal,
  Title,
  Text,
  Badge,
  Card,
  Button,
  Group,
  Box,
  ActionIcon,
  Menu,
  Pagination,
  rem,
} from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import React, { useState } from "react";

// Assuming a similar EntityTableProps interface
interface EntityTableProps<T> {
  columns: { header: string; accessor: keyof T }[];
  data: T[];
  isLoading?: boolean;
}

export default function EntityTable<T>({
  columns,
  data,
  isLoading = false,
}: EntityTableProps<T>) {
  const [viewOpened, setViewOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Updated statusColors for 'Active' and 'Inactive'
  const statusColors = {
    Active: "green",
    Inactive: "red",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderValue = (value: any, accessor: keyof T | string) => {
    if (typeof value === "undefined" || value === null) {
      return "-";
    }
    if (accessor === "status" && (value === "Active" || value === "Inactive")) {
      return (
        <Badge
          color={statusColors[value as "Active" | "Inactive"]}
          size="sm"
          variant="light"
        >
          {value}
        </Badge>
      );
    }
    if (typeof value === "number" && accessor === "price") {
      return `$${value.toFixed(2)}`;
    }
    return String(value);
  };

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Box className="flex justify-between items-center mb-1">
        <Title order={3}>Plan Management</Title>
        <Button>+ Add Plan</Button>
      </Box>
      <Text size="sm" c="dimmed" mb="lg">
        Overview of subscription plans
      </Text>

      <div className="overflow-x-auto">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              {columns.map((col) => (
                <Table.Th
                  key={String(col.accessor)}
                  className="text-sm font-semibold text-gray-600 uppercase tracking-wider p-4"
                >
                  {col.header}
                </Table.Th>
              ))}
              <Table.Th className="text-sm font-semibold text-gray-600 uppercase tracking-wider p-4">
                Action
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {isLoading ? (
              <Table.Tr>
                <Table.Td colSpan={columns.length + 1}>
                  <div className="flex items-center justify-center py-6">
                    <Loader color="blue" />
                  </div>
                </Table.Td>
              </Table.Tr>
            ) : currentData.length > 0 ? (
              currentData.map((item, index) => (
                <Table.Tr key={index} className="border-b border-gray-200">
                  {columns.map((col) => (
                    <Table.Td key={String(col.accessor)}>
                      {renderValue(item[col.accessor], col.accessor)}
                    </Table.Td>
                  ))}
                  <Table.Td>
                    <Menu shadow="md" width={200}>
                      <Menu.Target>
                        <ActionIcon variant="transparent">
                          <IconDots
                            style={{ width: rem(16), height: rem(16) }}
                          />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item
                          onClick={() => {
                            setSelectedItem(item);
                            setViewOpened(true);
                          }}
                        >
                          View Details
                        </Menu.Item>
                        <Menu.Item>Update</Menu.Item>
                        <Menu.Item color="red">Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Table.Td>
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={columns.length + 1}>
                  <div className="py-4 text-center text-gray-500">
                    No records found.
                  </div>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </div>

      <Group justify="flex-end" className="mt-4">
        <Text size="sm" c="dimmed">
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
        />
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Group>

      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title="View Item"
        size="xl"
        closeOnEscape={true}
      >
        {selectedItem && (
          <div className="space-y-4">
            {columns.map((col) => (
              <div key={String(col.accessor)}>
                <Title order={4}>{col.header}</Title>
                <Text>
                  {renderValue(selectedItem[col.accessor], col.accessor)}
                </Text>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </Card>
  );
}
