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
    <Card className={`flex flex-col ${className}`}>
      <CardContent className="flex-1 pb-0 pt-4 px-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
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

      <CardFooter className="flex flex-col gap-4 px-4 pb-4 pt-2 text-sm">
        <div className="w-full">
          <h2 className="text-left text-gray-600 font-semibold text-base">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-xl text-gray-800">
            ${total.toLocaleString()}
          </span>
          <span className="bg-green-200 text-green-800 rounded px-2 py-1 text-xs font-medium">
            100%
          </span>
        </div>

        {/* Professional Scrollbar */}
        <div className="pt-2 border-t border-gray-200 w-full max-h-[180px] overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
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
                    <h1 className="font-semibold text-sm text-gray-800">
                      {item.name}
                    </h1>
                    <span className="text-gray-500 text-xs">
                      ${item.value.toLocaleString()}
                    </span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-medium">
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
