"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import React from "react";
import FinanceChart from "../FinanceChart";

const options = ["Last 12 months", "Last 6 months", "Last 30 days"];

const CashflowChart = () => {
  const [selected, setSelected] = useState("Last 12 months");
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-blue-100 rounded-xl p-4 shadow-md mb-4 gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl font-semibold text-blue-900">
          Cashflow
        </h1>

        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-sm sm:text-base text-blue-800 hover:text-blue-900 cursor-pointer transition"
          >
            {selected}{" "}
            {open ? (
              <FaTimes className="text-xs sm:text-sm" />
            ) : (
              <FaAngleDown className="text-xs sm:text-sm" />
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-900 text-gray-800"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[300px]  md:min-h-[250px] ">
        <FinanceChart />
      </div>
    </div>
  );
};

export default CashflowChart;
