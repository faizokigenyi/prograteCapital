import React from "react";

// Generic type for props
interface TableProps<T> {
  data: T[]; // Array of data items
  columns: { header: string; accessor: keyof T }[]; // Column definitions (header and data key)
}

const ReusableTable = <T extends {}>({ data, columns }: TableProps<T>) => {
  return (
    <div className="overflow-x-scroll no-scrollbar  shadow-md bg-white">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-2 border-b bg-blue-100 font-semibold text-gray-600 text-left text-[13px]"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td
                  key={column.accessor as string}
                  className="px-4 py-2 border-b  font-normal text-black text-[13px]"
                >
                  {row[column.accessor] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
