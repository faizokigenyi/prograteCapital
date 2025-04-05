import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import CashflowChart from "@/components/forms/CashflowChart";
import UserCard from "@/components/UserCard";
import { GiSettingsKnobs } from "react-icons/gi";
import ReusableTable from "@/components/ReusableTable";
import ExpensesListChart from "@/components/ExpensesListChart";

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
  const statuses = ["Active", "Pending", "Inactive"];
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

const randomData = generateRandomTableData(5); // Generate 5 random rows

// Define columns
const columns: {
  header: string;
  accessor: "customerName" | "nin" | "date" | "amount" | "status";
}[] = [
  { header: "Customer Name", accessor: "customerName" },
  { header: "NIN", accessor: "nin" },
  { header: "Date", accessor: "date" },
  { header: "Amount", accessor: "amount" },
  { header: "Status", accessor: "status" },
];

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* USER CARDS */}
        <h1 className="text-gray-500 font-bold text-xl px-4">Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <UserCard type="clients" />
          <UserCard type="profit" />
          <UserCard type="expense" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}

        {/* ATTENDANCE CHART */}
        <div className="w-full h-fit p-2 my-5 ">
          <CashflowChart />
        </div>
        {/* BOTTOM ITEMS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between items-center px-1 gap-8">
            <h1 className="text-gray-500 font-bold text-sm px-4">
              Recent Transactions
            </h1>
            <div className="flex gap-1 items-center justify-between bg-white rounded-xl p-4 shadow-md mb-4">
              <span className="text-sm text-gray-500 font-bold">
                This month
              </span>
              <GiSettingsKnobs className="text-gray-500 text-[18px] cursor-pointer" />
            </div>
          </div>
          <div className="w-full bg-white p-4 rounded-md">
            <ReusableTable columns={columns} data={randomData} />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      {/* You can add more components here like charts, reports, or stats */}

      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* CASHFLOW */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <ExpensesListChart />
          <ExpensesListChart />
        </div>

        {/* ANNOUNCEMENTS */}
        <Announcements />
        {/* FINANCE CHART */}
      </div>
    </div>
  );
};

export default AdminPage;
