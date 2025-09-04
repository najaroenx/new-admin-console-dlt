import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", received: 180, outstanding: 120 },
  { day: "Tue", received: 120, outstanding: 60 },
  { day: "Wed", received: 340, outstanding: 260 },
  { day: "Thu", received: 380, outstanding: 300 },
  { day: "Fri", received: 420, outstanding: 100 },
  { day: "Sat", received: 260, outstanding: 150 },
  { day: "Sun", received: 430, outstanding: 260 },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MiniTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const r = payload.find((p: any) => p.dataKey === "received");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const o = payload.find((p: any) => p.dataKey === "outstanding");
  return (
    <div className="rounded-md bg-white px-3 py-2 text-sm shadow border border-gray-100">
      <div className="font-medium text-gray-800">{payload[0].payload.day}</div>
      <div className="mt-1 space-y-0.5">
        <div className="flex items-center gap-2 text-gray-600">
          <span className="h-2 w-2 rounded-full bg-purple-400/20 ring-1 ring-purple-300/40" />
          <span>Received:</span>
          <span className="font-medium text-gray-800">
            ${"{"}r?.value ?? 0{"}"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span className="h-2 w-2 rounded-full bg-purple-600" />
          <span>Outstanding:</span>
          <span className="font-medium text-gray-800">
            ${"{"}o?.value ?? 0{"}"}
          </span>
        </div>
      </div>
    </div>
  );
};
const LegendDots = () => {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-500">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-purple-400/20 ring-1 ring-purple-300/40 inline-block" />
        <span>Received</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-purple-600 inline-block" />
        <span>Outstanding</span>
      </div>
    </div>
  );
};

export default function RevenueCard() {
  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500">Total Revenue</div>
          <div className="mt-1 flex items-center gap-2">
            <div className="text-2xl font-semibold tracking-tight">$98,545</div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
              +45 ▲
            </span>
          </div>
        </div>
        <LegendDots />
      </div>

      {/* Chart */}
      <div className="mt-2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={12}>
            <defs>
              {/* soft bar background to imitate the screenshot's light bars */}
              <linearGradient id="receivedSoft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.08} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280" }}
            />
            <Tooltip cursor={{ fill: "#f9fafb" }} content={<MiniTooltip />} />
            {/* Stack to show light (received) + dark (outstanding) per day */}
            <Bar
              dataKey="received"
              stackId="rev"
              fill="url(#receivedSoft)"
              //   TOP LEFT, TOP-RIGHT, BOTTOM-RIGHT, BOTTOM-LEFT
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="outstanding"
              stackId="rev"
              fill="#7c3aed"
              //   TOP LEFT, TOP-RIGHT, BOTTOM-RIGHT, BOTTOM-LEFT
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
