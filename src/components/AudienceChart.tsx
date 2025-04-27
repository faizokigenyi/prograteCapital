'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { age: '13–17', Men: 70, Women: 70 },
  { age: '18–24', Men: 61, Women: 56 },
  { age: '25–35', Men: 75, Women: 90 },
  { age: '36–44', Men: 80, Women: 60 },
  { age: '45–55', Men: 50, Women: 70 },
  { age: '55+', Men: 40, Women: 45 },
];

const AudienceChart = () => {
  return (
    <div className="p-2 sm:p-6 md:p-8 bg-white shadow-md w-full mx-auto h-[450px]">
      <h2 className="text-md font-semibold mb-3 text-gray-600">
        Average client Age
      </h2>
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 5, left: 5, bottom: 5 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 12 }}
            stroke="#9ca3af"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="age"
            tick={{ fontSize: 12 }}
            stroke="#9ca3af"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              fontSize: '14px',
            }}
            cursor={{ fill: '#f3f4f6' }}
          />
          <Legend wrapperStyle={{ fontSize: '13px' }} />
          <Bar dataKey="Men" fill="#2563eb" radius={[0, 10, 10, 0]} barSize={20} />
          <Bar dataKey="Women" fill="#facc15" radius={[0, 10, 10, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudienceChart;
