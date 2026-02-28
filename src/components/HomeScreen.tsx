import { Flame, Plus, Minus, Play, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";
import rubyGem from "@/assets/ruby-gem.gif";

const HomeScreen = () => {
  const [duration, setDuration] = useState(20);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-6 px-4 pt-4 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full gradient-ruby flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm tracking-tight">9R</span>
          </div>
          <span className="text-white font-semibold text-base">9 Ruby</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 glass rounded-full px-3 py-1.5">
            <Flame size={14} className="text-orange-400" />
            <span className="text-white font-bold text-sm">12</span>
          </div>
          <button className="gradient-ruby text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Get PRO
          </button>
        </div>
      </div>

      {/* Central Gem */}
      <div className="flex flex-col items-center py-4">
        <div className="glass rounded-full px-4 py-1.5 mb-4 flex items-center gap-2">
          <span className="text-xs text-white/60">Owned by</span>
          <span className="text-xs font-bold gradient-ruby-text">64%</span>
        </div>

        <div className="relative flex items-center justify-center mb-3">
          {/* Outer glow rings */}
          <div className="absolute w-52 h-52 rounded-full" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)' }} />
          <div className="absolute w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(219,39,119,0.15) 0%, transparent 70%)' }} />
          <div className="float-gem gem-glow w-36 h-36 rounded-full overflow-hidden">
            <img src={rubyGem} alt="Ruby Gem" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="glass rounded-full px-5 py-1.5">
          <span className="gradient-ruby-text font-bold text-sm tracking-widest uppercase">Diligent</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-white/50 text-xs">Focus</span>
          <span className="text-white font-black text-2xl">79<span className="text-base font-semibold text-white/60">%</span></span>
          <div className="w-full h-1 rounded-full bg-white/10 mt-1">
            <div className="h-full rounded-full gradient-ruby" style={{ width: '79%' }} />
          </div>
        </div>
        <div className="glass rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-white/50 text-xs">Screen</span>
          <span className="text-white font-black text-lg leading-tight">4h<span className="text-sm font-semibold text-white/60"> 30m</span></span>
          <div className="w-full h-1 rounded-full bg-white/10 mt-1">
            <div className="h-full rounded-full gradient-blue" style={{ width: '60%' }} />
          </div>
        </div>
        <div className="glass rounded-2xl p-3 flex flex-col gap-1">
          <span className="text-white/50 text-xs">Culprits</span>
          <div className="flex gap-1 mt-1">
            {['S', 'IG', 'X'].map((app, i) => (
              <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-black text-white"
                style={{ background: ['#0070C9', 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', '#000'][i] || '#333' }}>
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Timer Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-base">Focus Timer</span>
          <button className="glass text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            + New
          </button>
        </div>

        {/* Timer Cards - Horizontal Scroll */}
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {[
            { name: 'Deep Work', duration: '45m', color: 'from-red-500 to-pink-600', active: true },
            { name: 'Coding Session', duration: '60m', color: 'from-blue-500 to-purple-600', active: false },
            { name: 'Reading', duration: '30m', color: 'from-amber-500 to-orange-600', active: false },
          ].map((card, i) => (
            <div key={i} className={`flex-shrink-0 w-36 glass rounded-2xl p-3 ${card.active ? 'border border-white/20' : ''}`}>
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-2`}>
                <Play size={12} className="text-white" fill="white" />
              </div>
              <p className="text-white font-semibold text-sm">{card.name}</p>
              <p className="text-white/50 text-xs mt-0.5">{card.duration}</p>
              {card.active && <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot mt-2" />}
            </div>
          ))}
        </div>

        {/* Active Timer Control */}
        <div className="glass rounded-2xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">Duration</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setDuration(d => Math.max(5, d - 5))} className="w-8 h-8 glass rounded-full flex items-center justify-center">
                <Minus size={14} className="text-white" />
              </button>
              <span className="text-white font-black text-lg w-12 text-center">{duration}m</span>
              <button onClick={() => setDuration(d => d + 5)} className="w-8 h-8 glass rounded-full flex items-center justify-center">
                <Plus size={14} className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTimerActive(t => !t)}
              className={`flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${timerActive ? 'gradient-ruby text-white shadow-lg' : 'glass text-white'}`}
            >
              <Play size={14} fill={timerActive ? 'white' : 'none'} />
              {timerActive ? 'Pause' : 'Start Focus'}
            </button>
            <button className="glass rounded-xl px-4 py-3 flex items-center gap-2">
              <Shield size={14} className="text-white/60" />
              <span className="text-white/60 text-sm font-medium">Block</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
