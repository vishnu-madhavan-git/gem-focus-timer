import { Bot, Code, Search, Zap, Plus, Palette } from "lucide-react";

const agents = [
  {
    name: "Research",
    icon: Search,
    status: "Active",
    desc: "Searches and summarizes topics",
    gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
    active: true,
  },
  {
    name: "Code Review",
    icon: Code,
    status: "Blocking",
    desc: "Reviews and optimizes your code",
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    active: true,
  },
  {
    name: "Design",
    icon: Palette,
    status: "Idle",
    desc: "Generates UI ideas and layouts",
    gradient: "linear-gradient(135deg, #EC4899, #DB2777)",
    active: false,
  },
  {
    name: "Focus Coach",
    icon: Zap,
    status: "Idle",
    desc: "Keeps you on track and motivated",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    active: false,
  },
];

const AgentsScreen = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-6 px-4 pt-4 space-y-4" style={{ scrollbarWidth: "none" }}>

      {/* ── HEADER ── */}
      <div style={{ height: 64, paddingTop: 8 }}>
        <h1 className="text-white font-bold" style={{ fontSize: 32, letterSpacing: "-0.5px", lineHeight: 1.2 }}>
          AI Agents
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <div
            className="rounded-full pulse-dot"
            style={{ width: 8, height: 8, background: "#10B981", flexShrink: 0 }}
          />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <span className="text-white font-bold">2</span> agents currently active
          </span>
        </div>
      </div>

      {/* ── AGENT CARDS ── */}
      <div className="space-y-4">
        {agents.map((agent, i) => {
          const Icon = agent.icon;
          return (
            <div
              key={i}
              className="flex items-center justify-between rounded-2xl"
              style={{
                height: 80,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "0 16px",
              }}
            >
              {/* Left: icon + text */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    background: agent.gradient,
                    boxShadow: agent.active ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontSize: 17 }}>{agent.name}</p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: agent.active ? "#10B981" : "rgba(255,255,255,0.5)",
                      marginTop: 2,
                    }}
                  >
                    {agent.status}
                    {agent.active && (
                      <span
                        className="inline-block pulse-dot rounded-full ml-1.5"
                        style={{ width: 6, height: 6, background: "#10B981", verticalAlign: "middle" }}
                      />
                    )}
                  </p>
                </div>
              </div>

              {/* Right: status dot */}
              <div
                className={`rounded-full flex-shrink-0 ${agent.active ? "pulse-dot" : ""}`}
                style={{
                  width: 8,
                  height: 8,
                  background: agent.active ? "#10B981" : "rgba(107,107,107,0.5)",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ── CREATE BUTTON ── */}
      <button
        className="w-full flex items-center justify-center gap-2 rounded-2xl transition-colors"
        style={{
          height: 72,
          background: "transparent",
          border: "1px dashed rgba(255,255,255,0.2)",
          fontSize: 17,
          fontWeight: 500,
          color: "rgba(255,255,255,0.5)",
          minHeight: 44,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      >
        <Plus size={20} style={{ color: "rgba(255,255,255,0.5)" }} />
        Create New Agent
      </button>

      {/* ── PRO UPSELL ── */}
      <div
        className="flex items-start gap-3 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: 16,
        }}
      >
        <div
          className="flex items-center justify-center rounded-xl flex-shrink-0 mt-0.5"
          style={{ width: 40, height: 40, background: "linear-gradient(135deg, #DC2626, #F472B6, #A855F7)" }}
        >
          <Zap size={16} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold" style={{ fontSize: 15 }}>Upgrade to PRO</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
            Unlock unlimited agents, faster responses, and advanced automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentsScreen;
