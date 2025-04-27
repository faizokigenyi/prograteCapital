"use client";

import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

const ReusableTable = <T extends object>({
  data,
  columns,
  onEdit,
  onDelete,
}: TableProps<T>) => {
  return (
    <div className="relative w-full bg-red-200 rounded-xl shadow-md group">
      {/* Important: no scrollbar-hide here */}
      <div>
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.accessor)}
                  className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b transition-all duration-300 ease-in-out"
                >
                  {column.header}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b transition-all duration-300 ease-in-out">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                  className="text-center text-gray-400 py-8 text-sm"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-blue-50 transition-all duration-300 ease-in-out"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.accessor)}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 transition-all duration-300 ease-in-out"
                    >
                      {renderCell(row[column.accessor])}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center gap-3 transition-all duration-300 ease-in-out">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out"
                          title="Edit"
                        >
                          <FiEdit2 size={18} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className="text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out"
                          title="Delete"
                        >
                          <MdDeleteOutline size={20} />
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 🎯 Status badge rendering
function renderCell(value: any) {
  if (typeof value === "string") {
    switch (value) {
      case "Active":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 transition-all duration-300 ease-in-out">
            {value}
          </span>
        );
      case "Inactive":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 transition-all duration-300 ease-in-out">
            {value}
          </span>
        );
      case "Paid":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 transition-all duration-300 ease-in-out">
            {value}
          </span>
        );
      case "Pending":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 transition-all duration-300 ease-in-out">
            {value}
          </span>
        );
      default:
        return (
          <span className="transition-all duration-300 ease-in-out">
            {value}
          </span>
        );
    }
  }
  return (
    <span className="transition-all duration-300 ease-in-out">
      {String(value)}
    </span>
  );
}

export default ReusableTable;
