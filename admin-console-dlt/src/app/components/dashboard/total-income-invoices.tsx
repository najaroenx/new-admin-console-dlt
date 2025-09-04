// IncomeChartCard.tsx
"use client";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// ตัวอย่างข้อมูลรายเดือน (แก้เป็นของจริงได้)
const data = [
  { label: "Jan", income: 12000 },
  { label: "Feb", income: 13500 },
  { label: "Mar", income: 15000 },
  { label: "Apr", income: 14000 },
  { label: "May", income: 16000 },
  { label: "Jun", income: 17500 },
  { label: "Jul", income: 17000 },
  { label: "Aug", income: 18545 },
];

// helper แปลงเป็นรูปแบบเงิน
const fmt = (n: number) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function IncomeChartCard() {
  const total = data.reduce((s, d) => s + d.income, 0); // = 98,545

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md/3" style={{borderRadius:'5px'}}>
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Total Income on Invoice</p>
          <p className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900">
            {fmt(total)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Growth</p>
          <p className="mt-1 text-xl font-semibold text-emerald-600">30.2%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            {/* ซ่อนแกนให้คลีนเหมือนตัวอย่าง */}
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip
              formatter={(v: number) => [fmt(v as number), "Income"]}
              labelStyle={{ color: "#6b7280" }}
              contentStyle={{
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            />
            {/* fill gradient เขียวอ่อนแบบในการ์ด */}
            <defs>
              <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#incomeFill)"
              dot={false}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* footer ตัวเลือก (ถ้าอยากให้เหมือน “Vs Last …”) */}
      {/* <div className="mt-4 text-sm text-gray-500">Vs Last Period</div> */}
    </div>
  );
}
