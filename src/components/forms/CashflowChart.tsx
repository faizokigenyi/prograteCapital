import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import FinanceChart from "../FinanceChart";
import RecentActivities from "../RecentActivities";

const CashflowChart = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between bg-blue-100 rounded-xl p-4 shadow-md mb-4">
        <h1>Cashflow</h1>
        <div className="flex items-center gap-2">
          <h1>Last 12 months</h1>
          <FaAngleDown />
        </div>
      </div>
      <div className="w-full h-[300px]  md:min-h-[250px] ">
        <FinanceChart />
      </div>
    </div>
  );
};

export default CashflowChart;
