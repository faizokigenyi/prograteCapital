"use client";

import { RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

type ChartItem = {
  name: string;
  value: number;
  fill: string;
};

type CategoryRadialChartProps = {
  title?: string;
  data: ChartItem[];
  dataKey?: string;
  className?: string;
};

export default function CategoryRadialChart({
  title = "Total",
  data,
  dataKey = "value",
  className = "",
}: CategoryRadialChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const chartConfig = {
    [dataKey]: { label: title },
  } satisfies ChartConfig;

  return (
    <Card
      className={`rounded-none bg-white shadow-md flex flex-col border border-gray-200 ${className}`}
    >
      <CardContent className="flex-1 pt-6 px-6 pb-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[240px] sm:max-w-[260px] md:max-w-[300px]"
        >
          <RadialBarChart
            data={data}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <RadialBar dataKey={dataKey} background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 px-6 pb-6 pt-2 text-sm">
        <div className="w-full">
          <h2 className="text-left text-gray-700 font-semibold text-base sm:text-lg">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl sm:text-2xl text-gray-900">
            ${total.toLocaleString()}
          </span>
          <span className="bg-emerald-100 text-emerald-700 rounded-md px-2 py-[2px] text-xs font-medium">
            100%
          </span>
        </div>

        {/* Scroll area with scrollbar visible only on hover */}
        <div className="pt-3 border-t border-gray-100 w-full max-h-[180px] overflow-y-hidden lg hover:overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400 transition-all duration-300">
          {data.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (
              <div
                key={item.name}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-[12px] w-[12px] rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <div>
                    <h1 className="font-medium text-sm sm:text-base text-gray-800">
                      {item.name}
                    </h1>
                    <span className="text-gray-500 text-xs sm:text-sm">
                      ${item.value.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className="bg-gray-100 text-gray-700 rounded-md px-2 py-[2px] text-xs font-medium">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
