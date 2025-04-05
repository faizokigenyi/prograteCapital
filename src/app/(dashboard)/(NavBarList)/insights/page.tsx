// components/Insights.tsx
"use client";

import { TrendingUp, ArrowUpRight, Users } from "lucide-react";

export default function Insights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Insight 1: Total Users */}
      <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Total Users</h3>
        </div>
        <p className="text-3xl font-bold text-primary">12,345</p>
        <div className="flex items-center text-green-500 text-sm mt-2">
          <TrendingUp className="h-4 w-4" />
          <span>+8.5% from last month</span>
        </div>
      </div>

      {/* Insight 2: Revenue */}
      <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpRight className="h-6 w-6 text-indigo-600" />
          <h3 className="text-lg font-semibold">Revenue</h3>
        </div>
        <p className="text-3xl font-bold text-indigo-600">$124,550</p>
        <div className="flex items-center text-green-500 text-sm mt-2">
          <TrendingUp className="h-4 w-4" />
          <span>+15.2% from last quarter</span>
        </div>
      </div>

      {/* Insight 3: Monthly Active Users */}
      <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <Users className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Monthly Active Users</h3>
        </div>
        <p className="text-3xl font-bold text-blue-600">7,890</p>
        <div className="flex items-center text-red-500 text-sm mt-2">
          <TrendingUp className="h-4 w-4 transform rotate-180" />
          <span>-3.5% from last month</span>
        </div>
      </div>

      {/* Insight 4: Conversion Rate */}
      <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <ArrowUpRight className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold">Conversion Rate</h3>
        </div>
        <p className="text-3xl font-bold text-green-600">18.7%</p>
        <div className="flex items-center text-green-500 text-sm mt-2">
          <TrendingUp className="h-4 w-4" />
          <span>+4.1% from last week</span>
        </div>
      </div>
    </div>
  );
}
