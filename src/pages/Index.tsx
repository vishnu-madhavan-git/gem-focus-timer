import { useState } from "react";
import { Home, BarChart2, Bot } from "lucide-react";
import HomeScreen from "@/components/HomeScreen";
import StatsScreen from "@/components/StatsScreen";
import AgentsScreen from "@/components/AgentsScreen";

type Tab = "home" | "stats" | "agents";

const tabs = [
  { id: "home" as Tab, icon: Home, label: "Home" },
  { id: "stats" as Tab, icon: BarChart2, label: "Stats" },
  { id: "agents" as Tab, icon: Bot, label: "Agents" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile frame */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: 375,
          height: 780,
          background: '#000',
          borderRadius: 44,
          boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8), 0 0 120px rgba(220,38,38,0.08)',
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end">
              {[3, 5, 7, 9].map((h, i) => (
                <div key={i} className="w-1 rounded-sm bg-white" style={{ height: h }} />
              ))}
            </div>
            <div className="w-4 h-2.5 rounded-sm border border-white ml-1 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0.5 h-1.5 bg-white/40 rounded-r-sm" />
              <div className="h-full w-3/4 bg-white rounded-sm" />
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="flex justify-center mb-1 flex-shrink-0">
          <div className="w-28 h-7 bg-black rounded-full border border-white/10" />
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "home" && <HomeScreen />}
          {activeTab === "stats" && <StatsScreen />}
          {activeTab === "agents" && <AgentsScreen />}
        </div>

        {/* Bottom Navigation */}
        <div
          className="flex-shrink-0 px-6 py-4"
          style={{
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex justify-around">
            {tabs.map(({ id, icon: Icon, label }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className="flex flex-col items-center gap-1.5 px-4 py-1 rounded-2xl transition-all"
                >
                  <div className={`relative w-8 h-8 flex items-center justify-center rounded-xl transition-all ${isActive ? 'gradient-ruby' : ''}`}
                    style={isActive ? { boxShadow: '0 4px 12px rgba(220,38,38,0.4)' } : {}}>
                    <Icon size={18} className={isActive ? "text-white" : "text-white/30"} />
                  </div>
                  <span className={`text-[10px] font-semibold transition-colors ${isActive ? "text-white" : "text-white/30"}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 flex-shrink-0">
          <div className="w-32 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Index;
