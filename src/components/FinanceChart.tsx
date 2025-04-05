// 'use client';

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Jan", income: 500000, expenses: 300000 },
//   { name: "Feb", income: 600000, expenses: 350000 },
//   { name: "Mar", income: 700000, expenses: 400000 },
//   { name: "Apr", income: 650000, expenses: 380000 },
//   { name: "May", income: 800000, expenses: 420000 },
//   { name: "Jun", income: 750000, expenses: 390000 },
//   { name: "Jul", income: 850000, expenses: 450000 },
//   { name: "Aug", income: 900000, expenses: 470000 },
//   { name: "Sep", income: 870000, expenses: 440000 },
//   { name: "Oct", income: 920000, expenses: 460000 },
//   { name: "Nov", income: 950000, expenses: 480000 },
//   { name: "Dec", income: 1000000, expenses: 500000 },
// ];

// const FinancialChart = () => {
//   return (
//     <div className="w-full h-[250px] sm:min-h-[250px] md:min-h-[250px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" vertical={false} />
//           <XAxis dataKey="name" />
//           <YAxis
//             tickFormatter={(value) => `${value / 1000}K`}
//             style={{ fontSize: '1rem' }} // Default font size
//           />
//           <Tooltip
//             formatter={(value) => `${(Number(value) / 1000).toLocaleString()}K`}
//           />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="income"
//             stroke="#4ade80"
//             strokeWidth={4}
//             name="Income"
//             dot={{ r: 5 }}
//             activeDot={{ r: 8 }}
//           />
//           <Line
//             type="monotone"
//             dataKey="expenses"
//             stroke="#f87171"
//             strokeWidth={4}
//             name="Expenses"
//             dot={{ r: 5 }}
//             activeDot={{ r: 8 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default FinancialChart;

"use client";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

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
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="income" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="expenses" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
