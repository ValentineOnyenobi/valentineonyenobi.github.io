import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

type Row = {
  month: string;
  index: number;
  region: "North" | "South" | "Central";
  revenue: number;
  orders: number;
  margin: number;
  channel: "Retail" | "Online" | "Wholesale";
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const REGIONS = ["North", "South", "Central"] as const;
const CHANNELS = ["Retail", "Online", "Wholesale"] as const;

// Deterministic pseudo-random sample dataset so SSR and client agree.
function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const DATA: Row[] = MONTHS.flatMap((month, mi) =>
  REGIONS.flatMap((region, ri) =>
    CHANNELS.map((channel, ci) => {
      const seed = mi * 31 + ri * 7 + ci * 3;
      const season = 1 + 0.28 * Math.sin((mi / 12) * Math.PI * 2 - 0.6);
      const base = [46000, 38000, 29000][ri]! * [1, 0.82, 0.61][ci]!;
      const revenue = Math.round(base * season * (0.85 + seeded(seed) * 0.3));
      return {
        month,
        index: mi,
        region,
        channel,
        revenue,
        orders: Math.round(revenue / (70 + seeded(seed + 1) * 40)),
        margin: Math.round((22 + seeded(seed + 2) * 14) * 10) / 10,
      };
    }),
  ),
);

const chartColors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

function TooltipBox({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-sm border border-border bg-popover px-3 py-2 shadow-lg">
      <p className="font-mono text-[11px] uppercase tracking-widest text-signal-dim">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey ?? p.name} className="mt-1 font-mono text-xs">
          <span className="text-muted-foreground">{p.name}: </span>
          {typeof p.value === "number" && p.value > 1000 ? gbp(p.value) : p.value}
        </p>
      ))}
    </div>
  );
}

export function LiveDashboard() {
  const [region, setRegion] = useState<"All" | Row["region"]>("All");
  const [channel, setChannel] = useState<"All" | Row["channel"]>("All");
  const [range, setRange] = useState<[number, number]>([0, 11]);

  const rows = useMemo(
    () =>
      DATA.filter(
        (r) =>
          (region === "All" || r.region === region) &&
          (channel === "All" || r.channel === channel) &&
          r.index >= range[0] &&
          r.index <= range[1],
      ),
    [region, channel, range],
  );

  const kpis = useMemo(() => {
    const revenue = rows.reduce((s, r) => s + r.revenue, 0);
    const orders = rows.reduce((s, r) => s + r.orders, 0);
    const margin = rows.length ? rows.reduce((s, r) => s + r.margin, 0) / rows.length : 0;
    return {
      revenue,
      orders,
      margin,
      aov: orders ? revenue / orders : 0,
    };
  }, [rows]);

  const byMonth = useMemo(() => {
    const map = new Map<number, { month: string; Revenue: number; Orders: number }>();
    rows.forEach((r) => {
      const e = map.get(r.index) ?? { month: r.month, Revenue: 0, Orders: 0 };
      e.Revenue += r.revenue;
      e.Orders += r.orders;
      map.set(r.index, e);
    });
    return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([, v]) => v);
  }, [rows]);

  const byChannel = useMemo(
    () =>
      CHANNELS.map((c) => ({
        name: c,
        value: rows.filter((r) => r.channel === c).reduce((s, r) => s + r.revenue, 0),
      })).filter((d) => d.value > 0),
    [rows],
  );

  const byRegion = useMemo(
    () =>
      REGIONS.map((rg) => ({
        name: rg,
        Revenue: rows.filter((r) => r.region === rg).reduce((s, r) => s + r.revenue, 0),
      })).filter((d) => d.Revenue > 0),
    [rows],
  );

  const marginTrend = useMemo(() => {
    const map = new Map<number, { month: string; total: number; count: number }>();
    rows.forEach((r) => {
      const e = map.get(r.index) ?? { month: r.month, total: 0, count: 0 };
      e.total += r.margin;
      e.count += 1;
      map.set(r.index, e);
    });
    return [...map.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([, v]) => ({ month: v.month, Margin: Math.round((v.total / v.count) * 10) / 10 }));
  }, [rows]);

  const axis = {
    stroke: "var(--muted-foreground)",
    fontSize: 11,
    fontFamily: "var(--font-mono)",
  };

  return (
    <div className="rounded-lg border border-border bg-surface/60 p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mono-label">Live demo · sample retail dataset</p>
          <h3 className="mt-2 font-display text-xl font-semibold">Commercial performance</h3>
        </div>
        <span className="rounded-sm border border-signal/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal">
          {rows.length} rows in scope
        </span>
      </div>

      <div className="mt-6 grid gap-4 rounded-md border border-border bg-background/60 p-4 sm:grid-cols-3">
        <Filter
          label="Region"
          value={region}
          options={["All", ...REGIONS]}
          onChange={(v) => setRegion(v as typeof region)}
        />
        <Filter
          label="Channel"
          value={channel}
          options={["All", ...CHANNELS]}
          onChange={(v) => setChannel(v as typeof channel)}
        />
        <div>
          <label
            htmlFor="range-end"
            className="mono-label block"
          >
            Period · {MONTHS[range[0]]}-{MONTHS[range[1]]}
          </label>
          <div className="mt-2.5 flex items-center gap-2">
            <input
              id="range-start"
              aria-label="Start month"
              type="range"
              min={0}
              max={11}
              value={range[0]}
              onChange={(e) => {
                const v = Number(e.target.value);
                setRange(([, end]) => [Math.min(v, end), end]);
              }}
              className="h-1 w-full accent-[var(--signal)]"
            />
            <input
              id="range-end"
              aria-label="End month"
              type="range"
              min={0}
              max={11}
              value={range[1]}
              onChange={(e) => {
                const v = Number(e.target.value);
                setRange(([start]) => [start, Math.max(v, start)]);
              }}
              className="h-1 w-full accent-[var(--signal)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi label="Revenue" value={gbp(kpis.revenue)} />
        <Kpi label="Orders" value={kpis.orders.toLocaleString("en-GB")} />
        <Kpi label="Avg order value" value={gbp(Math.round(kpis.aov))} />
        <Kpi label="Avg margin" value={`${kpis.margin.toFixed(1)}%`} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Panel title="Revenue trend" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={byMonth} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" {...axis} tickLine={false} />
              <YAxis {...axis} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip content={<TooltipBox />} cursor={{ stroke: "var(--signal-dim)" }} />
              <Area
                type="monotone"
                dataKey="Revenue"
                stroke="var(--chart-1)"
                strokeWidth={2}
                fill="url(#revFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Revenue by channel">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={byChannel}
                dataKey="value"
                nameKey="name"
                innerRadius={52}
                outerRadius={82}
                paddingAngle={3}
                stroke="var(--background)"
              >
                {byChannel.map((_, i) => (
                  <Cell key={i} fill={chartColors[i % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip content={<TooltipBox />} />
              <Legend
                wrapperStyle={{ fontFamily: "var(--font-mono)", fontSize: 11 }}
                iconType="square"
              />
            </PieChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Revenue by region">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={byRegion} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" {...axis} tickLine={false} />
              <YAxis {...axis} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip content={<TooltipBox />} cursor={{ fill: "var(--muted)", opacity: 0.35 }} />
              <Bar dataKey="Revenue" radius={[3, 3, 0, 0]}>
                {byRegion.map((_, i) => (
                  <Cell key={i} fill={chartColors[i % chartColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Margin trend" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={marginTrend} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" {...axis} tickLine={false} />
              <YAxis {...axis} tickLine={false} unit="%" domain={["auto", "auto"]} />
              <Tooltip content={<TooltipBox />} cursor={{ stroke: "var(--signal-dim)" }} />
              <Line
                type="monotone"
                dataKey="Margin"
                stroke="var(--chart-2)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Panel>
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="mono-label block">{label}</span>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={cn(
              "rounded-sm border px-2.5 py-1.5 font-mono text-[11px] transition-colors",
              value === o
                ? "border-signal bg-signal text-primary-foreground"
                : "border-border text-muted-foreground hover:border-signal/50 hover:text-signal",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-background/60 p-4">
      <p className="mono-label">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold tabular-nums">{value}</p>
    </div>
  );
}

function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-md border border-border bg-background/60 p-4", className)}>
      <p className="mono-label">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
