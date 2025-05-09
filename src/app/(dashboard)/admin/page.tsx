"use client";

import CashflowChart from "@/components/forms/CashflowChart";
import UserCard from "@/components/UserCard";
import { GiSettingsKnobs } from "react-icons/gi";
import ReusableTable, { Column } from "@/components/ReusableTable";
import CategoryRadialChart from "@/components/ExpensesListChart";
import RecentActivities from "@/components/RecentActivities";
import AudienceChart from "@/components/AudienceChart";
import { Employee } from "@/types/types";
import { employees } from "@/lib/data";

export const employeeColumns: Column<Employee>[] = [
  { header: "First Name", accessor: "firstName" },
  { header: "Last Name", accessor: "lastName" },
  { header: "Age", accessor: "age" },
  { header: "Department", accessor: "department" },
  { header: "Status", accessor: "status" },
];

const expensesData = [
  { name: "Food and Dining", value: 820, fill: "#0ea5e9" },
  { name: "Utilities", value: 560, fill: "#6366f1" },
  { name: "Transportation", value: 310, fill: "#f97316" },
  { name: "Entertainment", value: 230, fill: "#ec4899" },
  { name: "Healthcare", value: 150, fill: "#10b981" },
  { name: "Education", value: 400, fill: "#8b5cf6" },
  { name: "Subscriptions", value: 120, fill: "#eab308" },
  { name: "Savings", value: 500, fill: "#14b8a6" },
];

// Random Data Generation Functions
const generateRandomName = () => {
  const firstNames = ["John", "Jane", "Mark", "Emily", "Tom", "Sarah"];
  const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Wilson"];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const generateRandomNIN = () => {
  return `${Math.floor(Math.random() * 1000000000)}`;
};

const generateRandomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
};

const generateRandomAmount = () => {
  return Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
};

const generateRandomStatus = () => {
  const statuses = ["Paid", "Pending"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

// Generate Random Data (Limit to 5 rows)
const generateRandomTableData = (numRows: number) => {
  const tableData = [];
  for (let i = 0; i < numRows; i++) {
    tableData.push({
      customerName: generateRandomName(),
      nin: generateRandomNIN(),
      date: generateRandomDate(),
      amount: generateRandomAmount(),
      status: generateRandomStatus(),
    });
  }
  return tableData;
};

const AdminPage = () => {
  const getRandomAmount = () => Math.floor(Math.random() * 100000) + 1000;

  const getRandomPercentage = () => {
    const isPositive = Math.random() > 0.5;
    const value = Math.random() * 20;
    return parseFloat((isPositive ? value : -value).toFixed(1));
  };

  const getRandomName = () => {
    const names = ["Total Revenue", "", "Clients", "Employess"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const handleEdit = (row: Employee) => {
    console.log("Editing employee:", row);
    // navigate to edit page or open modal
  };

  const handleDelete = (row: Employee) => {
    console.log("Deleting employee:", row);
    // confirm delete and remove from DB
  };

  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <UserCard
              key={idx}
              name={getRandomName()}
              amount={getRandomAmount()}
              percentageIncrease={getRandomPercentage()}
            />
          ))}
        </div>
        {/* MIDDLE CHARTS */}

        {/* ATTENDANCE CHART */}
        <div className="w-full h-fit p-2 my-5 ">
          <CashflowChart />
        </div>
        {/* BOTTOM ITEMS */}
        <div className="flex flex-col gap-2 h-[480px]">
          <div className="w-full flex justify-between items-center px-1 ">
            <h1 className="text-gray-500 font-bold text-sm px-4">
              Expected Transactions
            </h1>
            <div className="flex gap-1 items-center justify-between bg-white rounded-xl p-4 shadow-md mb-4">
              <span className="text-sm text-gray-500 font-bold">
                This month
              </span>
              <GiSettingsKnobs className="text-gray-500 text-[18px] cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-[100%] bg-white rounded-md overflow-x-hidden lg hover:overflow-x-auto pb-1 space-x-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400 transition-all duration-300ease-in-out">
            <ReusableTable<Employee>
              columns={employeeColumns}
              data={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      {/* You can add more components here like charts, reports, or stats */}

      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* CASHFLOW */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <CategoryRadialChart
            title="Total Expenses"
            data={expensesData}
            dataKey="value"
          />
          <RecentActivities />
        </div>

        {/* ANNOUNCEMENTS */}
        {/* FINANCE CHART */}
        <AudienceChart />
      </div>
    </div>
  );
};

export default AdminPage;
