"use client";

import { Table, Loader } from "@mantine/core";
import React from "react";

interface EntityTableProps<T> {
  columns: { header: string; accessor: keyof T | string }[];
  data: T[];
  isLoading?: boolean;
  renderRow: (item: T) => React.ReactNode;
}

export default function EntityTable<T>({
  columns,
  data,
  isLoading = false,
  renderRow,
}: EntityTableProps<T>) {
  return (
    <Table highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          {columns.map((col) => (
            <Table.Th key={String(col.accessor)}>{col.header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {isLoading ? (
          <Table.Tr>
            <Table.Td colSpan={columns.length}>
              <div className="flex justify-center items-center py-6">
                <Loader color="blue" />
              </div>
            </Table.Td>
          </Table.Tr>
        ) : data.length > 0 ? (
          data.map((item) => renderRow(item))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={columns.length}>
              <div className="text-center py-4 text-gray-500">
                No records found.
              </div>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
}
