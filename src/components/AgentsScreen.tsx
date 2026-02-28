import { Bot, Code, Search, Zap, Plus } from "lucide-react";

const agents = [
  {
    name: 'Research Assistant',
    icon: Search,
    status: 'Active',
    desc: 'Searches and summarizes topics',
    gradient: 'from-purple-500 to-violet-700',
    active: true,
  },
  {
    name: 'Code Reviewer',
    icon: Code,
    status: 'Active',
    desc: 'Reviews and optimizes your code',
    gradient: 'from-blue-500 to-cyan-600',
    active: true,
  },
  {
    name: 'Focus Coach',
    icon: Zap,
    status: 'Idle',
    desc: 'Keeps you on track and motivated',
    gradient: 'from-amber-500 to-orange-600',
    active: false,
  },
  {
    name: 'Ruby Guide',
    icon: Bot,
    status: 'Idle',
    desc: 'Your personal productivity guide',
    gradient: 'from-red-500 to-pink-600',
    active: false,
  },
];

const AgentsScreen = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-6 px-4 pt-4 space-y-5">
      {/* Heading */}
      <div>
        <h1 className="text-white font-black text-3xl tracking-tight">AI Agents</h1>
        <p className="text-white/40 text-sm mt-1">Powered by 9 Ruby intelligence</p>
      </div>

      {/* Active count */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
        <span className="text-white/60 text-sm"><span className="text-white font-bold">2</span> agents currently active</span>
      </div>

      {/* Agent Cards */}
      <div className="space-y-3">
        {agents.map((agent, i) => {
          const Icon = agent.icon;
          return (
            <div key={i} className="glass rounded-2xl p-4 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center flex-shrink-0`}
                style={agent.active ? { boxShadow: '0 4px 20px rgba(0,0,0,0.4)' } : {}}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-white font-bold text-sm">{agent.name}</p>
                  {agent.active && <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />}
                </div>
                <p className="text-white/40 text-xs mt-0.5 truncate">{agent.desc}</p>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${agent.active ? 'bg-green-400/20 text-green-400' : 'glass text-white/40'}`}>
                {agent.status}
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Button */}
      <button className="w-full glass rounded-2xl py-4 flex items-center justify-center gap-2 border border-dashed border-white/20 hover:border-white/40 transition-all">
        <Plus size={16} className="text-white/60" />
        <span className="text-white/60 font-semibold text-sm">Create New Agent</span>
      </button>

      {/* Info card */}
      <div className="glass-strong rounded-2xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl gradient-ruby flex items-center justify-center flex-shrink-0 mt-0.5">
          <Zap size={14} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Upgrade to PRO</p>
          <p className="text-white/50 text-xs mt-0.5">Unlock unlimited agents, faster responses, and advanced automation.</p>
        </div>
      </div>
    </div>
  );
};

export default AgentsScreen;
