import { Trophy, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

const gems = [
  { name: 'Ember', color: 'from-orange-400 to-red-600', active: false },
  { name: 'Ruby', color: 'from-red-400 to-pink-600', active: true },
  { name: 'Sapphire', color: 'from-blue-400 to-blue-700', active: false },
  { name: 'Emerald', color: 'from-green-400 to-emerald-700', active: false },
  { name: 'Amethyst', color: 'from-purple-400 to-purple-700', active: false },
  { name: 'Diamond', color: 'from-cyan-300 to-blue-400', active: false },
  { name: 'Onyx', color: 'from-gray-600 to-gray-900', active: false },
];

const weekData = [40, 65, 30, 80, 55, 70, 45];

const StatsScreen = () => {
  const [period, setPeriod] = useState<'Week' | 'Month' | 'Lifetime'>('Week');

  const maxVal = Math.max(...weekData);
  const chartH = 80;
  const chartW = 280;
  const points = weekData.map((v, i) => ({
    x: (i / (weekData.length - 1)) * chartW,
    y: chartH - (v / maxVal) * chartH,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${chartW} ${chartH} L 0 ${chartH} Z`;

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-6 px-4 pt-4 space-y-5">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-full gradient-ruby p-0.5">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="gradient-ruby-text font-black text-xl">A</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-black" />
        </div>
        <div>
          <p className="text-white font-bold text-lg">Alex Morgan</p>
          <div className="flex items-center gap-1.5 glass rounded-full px-2.5 py-1 w-fit mt-1">
            <Trophy size={12} className="text-amber-400" />
            <span className="text-xs font-semibold text-white/80">Level 7 — Achiever</span>
          </div>
        </div>
      </div>

      {/* Gem Collection */}
      <div>
        <p className="text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">Gem Collection</p>
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
          {gems.map((gem, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${gem.color} flex items-center justify-center ${gem.active ? 'ring-2 ring-white/40 shadow-lg' : 'opacity-60'}`}
                style={gem.active ? { boxShadow: '0 0 20px rgba(220,38,38,0.5)' } : {}}>
                <span className="text-white font-black text-lg">💎</span>
                {gem.active && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-black pulse-dot" />}
              </div>
              <span className={`text-[10px] font-medium ${gem.active ? 'text-white' : 'text-white/40'}`}>{gem.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Big Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-amber flex items-center justify-center">
              <span className="text-base">🔥</span>
            </div>
            <span className="text-white/60 text-xs font-medium">Day Streak</span>
          </div>
          <div>
            <span className="text-white font-black text-3xl">12</span>
            <p className="text-white/40 text-xs mt-0.5">days in a row</p>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10">
            <div className="h-full rounded-full gradient-amber" style={{ width: '68%' }} />
          </div>
          <p className="text-amber-400 text-xs font-semibold">+3 from last week</p>
        </div>

        <div className="glass rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-blue flex items-center justify-center">
              <Clock size={14} className="text-white" />
            </div>
            <span className="text-white/60 text-xs font-medium">Focus Hours</span>
          </div>
          <div>
            <span className="text-white font-black text-3xl">47</span>
            <p className="text-white/40 text-xs mt-0.5">hours total</p>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10">
            <div className="h-full rounded-full gradient-blue" style={{ width: '78%' }} />
          </div>
          <p className="text-blue-400 text-xs font-semibold">Top 22% of users</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="glass rounded-2xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-white font-bold text-sm">Screen Time</p>
          <div className="flex gap-1">
            {(['Week', 'Month', 'Lifetime'] as const).map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${period === p ? 'gradient-ruby text-white' : 'text-white/40'}`}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <p className="text-white/50 text-xs">Avg Screen</p>
            <p className="text-white font-black text-xl">4h <span className="text-sm font-semibold text-white/60">30m</span></p>
          </div>
          <div>
            <p className="text-white/50 text-xs">Awake Time</p>
            <p className="text-white font-black text-xl">14h <span className="text-sm font-semibold text-white/60">12m</span></p>
          </div>
        </div>

        <svg width="100%" viewBox={`0 0 ${chartW} ${chartH + 10}`} preserveAspectRatio="none" className="h-20">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#chartGrad)" />
          <path d={pathD} stroke="#60a5fa" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill="#60a5fa" />
          ))}
        </svg>

        <div className="flex justify-between">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="text-white/30 text-xs">{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsScreen;
