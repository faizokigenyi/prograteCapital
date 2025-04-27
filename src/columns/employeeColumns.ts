import { Column } from "@/components/ReusableTable";
import { Employee } from "@/types/types";

export const employeeColumns: Column<Employee>[] = [
  { header: "First Name", accessor: "firstName" },
  { header: "Last Name", accessor: "lastName" },
  { header: "Age", accessor: "age" },
  { header: "Department", accessor: "department" },
  { header: "Status", accessor: "status" },
];
