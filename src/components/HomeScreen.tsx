import { Flame, Plus, Minus, Play, Pause, Shield } from "lucide-react";
import { useState } from "react";
import rubyGem from "@/assets/ruby-gem.gif";

const timerCards = [
  {
    name: "Deep Work",
    desc: "Block all social apps",
    duration: "45m",
    colorFrom: "#3B82F6",
    colorTo: "#6366F1",
    glowColor: "rgba(59, 130, 246, 0.1)",
    active: true,
  },
  {
    name: "Coding Session",
    desc: "No distractions",
    duration: "60m",
    colorFrom: "#8B5CF6",
    colorTo: "#7C3AED",
    glowColor: "rgba(139, 92, 246, 0.1)",
    active: false,
  },
  {
    name: "Reading",
    desc: "Quiet mode enabled",
    duration: "30m",
    colorFrom: "#F59E0B",
    colorTo: "#D97706",
    glowColor: "rgba(245, 158, 11, 0.1)",
    active: false,
  },
];

const HomeScreen = () => {
  const [duration, setDuration] = useState(20);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-4 px-4 pt-4 space-y-5" style={{ scrollbarWidth: "none" }}>

      {/* ── HEADER ── */}
      <div className="flex items-center justify-between" style={{ height: 56 }}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #DC2626, #F472B6)",
            }}
          >
            <span className="text-white font-bold" style={{ fontSize: 14 }}>9R</span>
          </div>
          <span className="text-white font-semibold" style={{ fontSize: 16 }}>9 Ruby</span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <div className="glass flex items-center gap-1 rounded-full px-3 py-1.5">
            <Flame size={16} style={{ color: "#F472B6" }} />
            <span className="text-white font-bold" style={{ fontSize: 14 }}>12</span>
          </div>
          <button
            className="text-white font-bold rounded-xl"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
              fontSize: 12,
              padding: "4px 12px",
            }}
          >
            Get PRO
          </button>
        </div>
      </div>

      {/* ── GEM SECTION ── */}
      <div className="flex flex-col items-center" style={{ height: 240 }}>
        {/* Ownership badge */}
        <div
          className="glass flex flex-col items-center rounded-2xl mb-4"
          style={{ padding: "8px 16px" }}
        >
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
            Diligent
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#10B981" }}>
            Owned by 64%
          </span>
        </div>

        {/* Gem + radial glow */}
        <div className="relative flex items-center justify-center flex-1">
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 220,
              height: 220,
              background: "radial-gradient(circle at 10% 20%, rgba(220,38,38,0.2) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(168,85,247,0.2) 0%, transparent 50%)",
            }}
          />
          {/* Gem */}
          <div
            className="float-gem gem-glow rounded-full overflow-hidden"
            style={{ width: 152, height: 152 }}
          >
            <img
              src={rubyGem}
              alt="Ruby Gem"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pedestal */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 96,
              height: 16,
              bottom: -4,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>

        {/* Sub-label */}
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 20 }}>
          Focus for 100 hours
        </p>
      </div>

      {/* ── STATS ROW ── */}
      <div
        className="grid grid-cols-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, paddingBottom: 12 }}
      >
        {/* Focus */}
        <div className="flex flex-col items-center gap-1" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Focus</span>
          <span className="text-white font-bold" style={{ fontSize: 24, lineHeight: 1.2 }}>79<span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>%</span></span>
        </div>

        {/* Screen */}
        <div className="flex flex-col items-center gap-1" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Screen</span>
          <span className="text-white font-bold" style={{ fontSize: 20, lineHeight: 1.2 }}>4h<span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}> 30m</span></span>
        </div>

        {/* Culprits */}
        <div className="flex flex-col items-center gap-1">
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.8px" }}>Culprits</span>
          <div className="flex items-center gap-1 mt-0.5">
            {[
              { label: "S", bg: "#3B82F6" },
              { label: "IG", bg: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
              { label: "X", bg: "#000" },
            ].map(({ label, bg }, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg font-black text-white"
                style={{ width: 24, height: 24, fontSize: 9, background: bg, border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIMER SECTION ── */}
      <div className="space-y-3">
        {/* Section header */}
        <div className="flex items-center justify-between">
          <span className="text-white font-bold" style={{ fontSize: 24, letterSpacing: "-0.2px" }}>Focus Timer</span>
          <button
            className="glass flex items-center gap-1 rounded-full"
            style={{ padding: "6px 12px" }}
          >
            <Plus size={14} style={{ color: "rgba(255,255,255,0.5)" }} />
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>New</span>
          </button>
        </div>

        {/* Horizontal scroll cards */}
        <div
          className="flex gap-4 overflow-x-auto pb-1 -mx-4 px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {timerCards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl"
              style={{
                width: 200,
                minHeight: 112,
                background: `linear-gradient(135deg, ${card.colorFrom}0D, ${card.colorTo}0D)`,
                border: "1px solid rgba(255,255,255,0.1)",
                padding: 16,
              }}
            >
              {/* Top-right glow blob */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: 128,
                  height: 128,
                  top: -64,
                  right: -64,
                  background: card.glowColor,
                  filter: "blur(64px)",
                }}
              />
              <p className="text-white font-semibold" style={{ fontSize: 17 }}>{card.name}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4, marginBottom: 12 }}>{card.desc}</p>
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: 8 }}
                >
                  {card.duration}
                </span>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 32, height: 32, background: "rgba(255,255,255,0.1)" }}
                >
                  <Play size={14} className="text-white" fill="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active timer control */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Top gradient bar */}
          <div className="timer-gradient-bar w-full" style={{ height: 4 }} />

          <div className="p-6 space-y-5">
            {/* Duration selector */}
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Duration</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDuration(d => Math.max(5, d - 5))}
                  className="flex items-center justify-center rounded-full transition-transform active:scale-95"
                  style={{ width: 40, height: 40, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", minWidth: 44, minHeight: 44 }}
                >
                  <Minus size={16} className="text-white" />
                </button>

                {/* Duration display — white box */}
                <div
                  className="flex items-center justify-center rounded-2xl"
                  style={{
                    width: 96,
                    height: 48,
                    background: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#000000" }}>{duration}m</span>
                </div>

                <button
                  onClick={() => setDuration(d => d + 5)}
                  className="flex items-center justify-center rounded-full transition-transform active:scale-95"
                  style={{ width: 40, height: 40, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", minWidth: 44, minHeight: 44 }}
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {/* Start/Pause — full width */}
              <button
                onClick={() => setTimerActive(t => !t)}
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl font-semibold transition-transform active:scale-[0.98]"
                style={{
                  height: 56,
                  fontSize: 16,
                  letterSpacing: "-0.2px",
                  ...(timerActive
                    ? {
                        background: "rgba(220, 38, 38, 0.2)",
                        border: "1px solid rgba(220, 38, 38, 0.3)",
                        color: "#EF4444",
                      }
                    : {
                        background: "linear-gradient(to right, #FFFFFF, #E5E7EB)",
                        color: "#000000",
                      }),
                }}
              >
                {timerActive ? <Pause size={20} /> : <Play size={20} />}
                {timerActive ? "Pause" : "Start Focus"}
              </button>

              {/* Block apps */}
              <button
                className="flex items-center gap-2 rounded-2xl font-medium transition-colors"
                style={{
                  padding: "0 16px",
                  height: 56,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  minWidth: 44,
                }}
              >
                <Shield size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
                <span>Block</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
