"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "January", income: 120000, expenses: 80000 },
  { month: "February", income: 150000, expenses: 95000 },
  { month: "March", income: 170000, expenses: 110000 },
  { month: "April", income: 140000, expenses: 100000 },
  { month: "May", income: 160000, expenses: 105000 },
  { month: "June", income: 180000, expenses: 115000 },
  { month: "July", income: 200000, expenses: 120000 },
  { month: "August", income: 190000, expenses: 110000 },
  { month: "September", income: 210000, expenses: 130000 },
  { month: "October", income: 220000, expenses: 125000 },
  { month: "November", income: 230000, expenses: 140000 },
  { month: "December", income: 250000, expenses: 150000 },
];

export default function FinanceChart() {
  const [showIncome, setShowIncome] = useState(true);
  const [showExpenses, setShowExpenses] = useState(true);

  const handleLegendClick = (dataKey: string) => {
    if (dataKey === "income") {
      setShowIncome(!showIncome);
    } else if (dataKey === "expenses") {
      setShowExpenses(!showExpenses);
    }
  };

  return (
    <div className="w-full h-full p-0 bg-transparent">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Monthly Finance Overview
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 10, bottom: 40 }}
        >
          {/* Removed strokeDasharray to make grid invisible if desired */}
          <CartesianGrid stroke="#f9fafb" vertical={false} />
          <XAxis
            dataKey="month"
            tickFormatter={(value) => value.slice(0, 3)}
            tickLine={false}
            axisLine={false}
            height={40}
            style={{ fontSize: "0.75rem", fill: "#6b7280" }}
          />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
            contentStyle={{ borderRadius: 8, fontSize: "0.875rem" }}
          />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ marginBottom: "20px" }}
            onClick={(e) =>
              typeof e.dataKey === "string" && handleLegendClick(e.dataKey)
            }
            formatter={(value) => (
              <span
                style={{
                  cursor: "pointer",
                  color: value === "income" ? "#22c55e" : "#ef4444",
                  fontWeight: 600,
                }}
              >
                {value === "income" ? "Income" : "Expenses"}
              </span>
            )}
          />

          {showIncome && (
            <Bar
              dataKey="income"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
              isAnimationActive
            />
          )}
          {showExpenses && (
            <Bar
              dataKey="expenses"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
              isAnimationActive
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
