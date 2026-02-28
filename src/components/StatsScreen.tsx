import { Trophy, Clock, Flame } from "lucide-react";
import { useState } from "react";

const gems = [
  { name: "Ember",    gradient: "linear-gradient(135deg, #FB923C, #DC2626)", active: false },
  { name: "Ruby",     gradient: "linear-gradient(135deg, #DC2626, #F472B6, #A855F7)", active: true },
  { name: "Sapphire", gradient: "linear-gradient(135deg, #60A5FA, #1D4ED8)", active: false },
  { name: "Emerald",  gradient: "linear-gradient(135deg, #34D399, #065F46)", active: false },
  { name: "Amethyst", gradient: "linear-gradient(135deg, #C084FC, #7E22CE)", active: false },
  { name: "Diamond",  gradient: "linear-gradient(135deg, #67E8F9, #3B82F6)", active: false },
  { name: "Onyx",     gradient: "linear-gradient(135deg, #6B7280, #111827)", active: false },
];

const weekData = [40, 65, 30, 80, 55, 70, 45];

const StatsScreen = () => {
  const [period, setPeriod] = useState<"Week" | "Month" | "Lifetime">("Week");

  const maxVal = Math.max(...weekData);
  const chartH = 100;
  const chartW = 300;
  const points = weekData.map((v, i) => ({
    x: (i / (weekData.length - 1)) * chartW,
    y: chartH - (v / maxVal) * chartH,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${chartW} ${chartH} L 0 ${chartH} Z`;

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-6 px-4 pt-4 space-y-5" style={{ scrollbarWidth: "none" }}>

      {/* ── PROFILE HEADER ── */}
      <div className="flex items-center gap-4" style={{ height: 80 }}>
        {/* Avatar with gradient border */}
        <div
          className="flex-shrink-0 rounded-full p-[1.5px]"
          style={{ background: "linear-gradient(135deg, #DC2626, #F472B6)", width: 64, height: 64 }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{ background: "#1C1C1C" }}
          >
            <span className="text-white font-black" style={{ fontSize: 22 }}>P</span>
          </div>
        </div>

        {/* Name + badge */}
        <div className="space-y-1.5">
          <p className="text-white font-bold" style={{ fontSize: 24, letterSpacing: "-0.2px" }}>Prince</p>
          <div
            className="flex items-center gap-1 rounded-lg w-fit"
            style={{
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              padding: "4px 8px",
            }}
          >
            <Trophy size={12} style={{ color: "#F59E0B" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#F59E0B" }}>Top 94%</span>
          </div>
        </div>
      </div>

      {/* ── GEM COLLECTION ── */}
      <div>
        <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>Gem Collection</p>
        <div
          className="flex gap-4 overflow-x-auto pb-1 -mx-1 px-1"
          style={{ scrollbarWidth: "none", height: 80 }}
        >
          {gems.map((gem, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-1.5">
              <div
                className="relative rounded-full"
                style={{
                  width: 48,
                  height: 48,
                  background: gem.active ? gem.gradient : "rgba(107,107,107,0.3)",
                  filter: gem.active ? "drop-shadow(0 0 20px rgba(244,114,182,0.4))" : "none",
                  border: gem.active ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {gem.active && (
                  <div
                    className="absolute pulse-dot rounded-full"
                    style={{
                      width: 8,
                      height: 8,
                      background: "#10B981",
                      bottom: 2,
                      right: 2,
                      border: "1.5px solid #000",
                    }}
                  />
                )}
              </div>
              <span style={{ fontSize: 11, fontWeight: 500, color: gem.active ? "#fff" : "rgba(255,255,255,0.35)" }}>{gem.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BIG STATS GRID ── */}
      <div className="grid grid-cols-2 gap-4">
        {/* Day Streak */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "24px 16px",
          }}
        >
          <div
            className="absolute pointer-events-none rounded-full"
            style={{ width: 128, height: 64, top: -32, left: -32, background: "rgba(245, 158, 11, 0.1)", filter: "blur(64px)" }}
          />
          <div
            className="flex items-center justify-center rounded-xl mb-4 mx-auto"
            style={{ width: 40, height: 40, background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
          >
            <Flame size={18} className="text-white" />
          </div>
          <p className="text-white font-bold text-center" style={{ fontSize: 40, lineHeight: 1.2 }}>12</p>
          <p className="text-center font-semibold" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Day Streak</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, marginTop: 24 }}>
            <div className="flex justify-between items-center mb-2">
              <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>Progress</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#F59E0B" }}>33%</span>
            </div>
            <div className="w-full rounded-full" style={{ height: 4, background: "rgba(107,107,107,0.3)" }}>
              <div className="rounded-full" style={{ width: "33%", height: "100%", background: "#F59E0B" }} />
            </div>
          </div>
        </div>

        {/* Focus Hours */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "24px 16px",
          }}
        >
          <div
            className="absolute pointer-events-none rounded-full"
            style={{ width: 128, height: 64, top: -32, left: -32, background: "rgba(59, 130, 246, 0.1)", filter: "blur(64px)" }}
          />
          <div
            className="flex items-center justify-center rounded-xl mb-4 mx-auto"
            style={{ width: 40, height: 40, background: "linear-gradient(135deg, #60A5FA, #2563EB)" }}
          >
            <Clock size={18} className="text-white" />
          </div>
          <p className="text-white font-bold text-center" style={{ fontSize: 40, lineHeight: 1.2 }}>47</p>
          <p className="text-center font-semibold" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Focus Hours</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, marginTop: 24 }}>
            <div className="flex justify-between items-center mb-2">
              <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>Progress</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "#3B82F6" }}>10%</span>
            </div>
            <div className="w-full rounded-full" style={{ height: 4, background: "rgba(107,107,107,0.3)" }}>
              <div className="rounded-full" style={{ width: "10%", height: "100%", background: "#3B82F6" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── CHART SECTION ── */}
      <div
        className="rounded-3xl space-y-4"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: 16,
        }}
      >
        {/* Period toggles */}
        <div className="flex gap-2">
          {(["Week", "Month", "Lifetime"] as const).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: "8px 16px",
                borderRadius: 16,
                fontSize: 14,
                fontWeight: 600,
                background: period === p ? "#FFFFFF" : "transparent",
                color: period === p ? "#000000" : "rgba(255,255,255,0.5)",
                transition: "all 0.2s ease",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Main stat */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-bold" style={{ fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.5px" }}>
              6 hr, <span style={{ fontSize: 24 }}>29 min</span>
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>Avg Screen Time</p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Awake Time</p>
            <p className="text-white font-bold" style={{ fontSize: 24 }}>41%</p>
          </div>
        </div>

        {/* SVG chart */}
        <svg
          width="100%"
          viewBox={`0 0 ${chartW} ${chartH + 8}`}
          preserveAspectRatio="none"
          style={{ height: 100 }}
        >
          <defs>
            <linearGradient id="blueAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#blueAreaGrad)" />
          <path d={pathD} stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="4" fill="#3B82F6" />
          ))}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsScreen;
