// TopSalesSemiDonut.tsx
"use client";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

type Item = { name: string; value: number; color: string };

const DATA: Item[] = [
  { name: "Dell XPS 13",   value: 30, color: "#F59BC3" }, // pink
  { name: "Nike T-shirt",  value: 38, color: "#5A95FF" }, // blue
  { name: "Apple iPhone 15", value: 32, color: "#7DD3A7" } // green
];

export default function TopSalesSemiDonut() {
  const total = DATA.reduce((s, d) => s + d.value, 0);
  const top = DATA.reduce((a, b) => (a.value > b.value ? a : b));

  return (
    <div className="bg-white shadow-sm px-8" style={{border: 'unset'}}>
      <h2 className="text-2xl font-bold text-gray-900 pt-8">Top Sales Statistics</h2>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-lg text-gray-800">
        {DATA.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            {d.name}
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative mt-6 h-56 w-full">
        {/* center label */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[52%]">
          <div className="rounded-xl bg-white px-4 py-2 text-xl font-bold text-gray-900 shadow-md">
            {Math.round((top.value / total) * 100)}%
          </div>
        </div>

        <div className="border-b-1 mb-0"></div>
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              innerRadius={90}
              outerRadius={150}
              paddingAngle={3}
              stroke="#ffffff"
              strokeWidth={4}
              cornerRadius={8}
            >
              {DATA.map((entry, index) => (
                <Cell  key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
