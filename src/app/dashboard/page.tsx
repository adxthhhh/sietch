import { 
  Search, Command, LayoutDashboard, Calendar, CheckSquare, 
  FolderOpen, Settings, Bell, ChevronRight, Activity, 
  Target, GraduationCap, Circle
} from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex text-white font-sans selection:bg-white/20">
      
      {/* 1. Left Navigation Sidebar */}
      <aside className="w-20 flex flex-col items-center py-8 gap-8 bg-[#111111]">
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl mb-4">
          <LayoutDashboard className="w-5 h-5 text-white/70" />
        </div>
        <nav className="flex flex-col gap-6 w-full items-center">
          <button className="p-3 text-white hover:bg-white/5 rounded-xl transition-colors">
            <CheckSquare className="w-5 h-5" />
          </button>
          <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <FolderOpen className="w-5 h-5" />
          </button>
          <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <Target className="w-5 h-5" />
          </button>
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <button className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* 2. Main Workspace */}
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full p-8 md:p-12">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-start mb-12">
          <div className="text-white/50 text-sm font-medium tracking-wide">
            Monday, 15 June 2026 <span className="mx-2">•</span> Semester 1
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/40 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold border border-blue-500/30">
              AJ
            </div>
          </div>
        </div>

        {/* Greeting & Search */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Good morning, <span className="text-blue-400">Adith</span> 👋
          </h1>
          <p className="text-white/50 mb-8">
            You have 4 high-priority tasks due this week. Let's get going.
          </p>

          <div className="w-full max-w-2xl relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-white/30 group-focus-within:text-white/70 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search courses, tasks, notes..." 
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-2xl py-4 pl-12 pr-16 text-white placeholder-white/30 outline-none focus:border-white/30 transition-all shadow-2xl"
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <div className="flex items-center gap-1 text-xs text-white/30 font-mono bg-white/5 px-2 py-1 rounded-md">
                <Command className="w-3 h-3" /> K
              </div>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {['Solid State Physics', 'C Programming', 'Engineering Graphics', 'Calculus'].map((tag) => (
              <button key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-[#1A1A1A] text-white/50 text-sm hover:text-white hover:border-white/30 transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Analytics Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-32 hover:border-white/20 transition-colors">
            <div className="flex items-center text-white/50 text-sm font-medium tracking-wide uppercase">
              <Activity className="w-4 h-4 mr-2" /> Activity
            </div>
            <div className="text-white/80">42 contributions this month</div>
          </div>
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-32 hover:border-white/20 transition-colors">
            <div className="flex items-center text-white/50 text-sm font-medium tracking-wide uppercase">
              <Target className="w-4 h-4 mr-2" /> Habits
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-32 hover:border-white/20 transition-colors">
            <div className="flex items-center text-white/50 text-sm font-medium tracking-wide uppercase">
              <GraduationCap className="w-4 h-4 mr-2" /> SGPA Tracker
            </div>
          </div>
        </div>

        {/* 4. Tasks and Trends Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Task List */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-white text-lg font-medium">
                <CheckSquare className="w-5 h-5 text-red-400 mr-2" /> High-priority tasks
              </div>
              <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">
                4 due soon
              </span>
            </div>

            <div className="space-y-3">
              {/* Task Item */}
              {[
                { title: 'Submit Solid State Physics assignment', desc: 'Crystal Structures', due: 'Due tomorrow', priority: 'High', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                { title: 'Prepare for C Programming lab viva', desc: 'Pointers & Memory', due: 'Today, 5 PM', priority: 'High', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                { title: 'Complete Graphics sheet draft', desc: 'Isometric projections', due: 'In 3 days', priority: 'Medium', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                { title: 'Read 2 research papers for IEDC', desc: 'Ternary processors', due: 'In 4 days', priority: 'Medium', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' }
              ].map((task, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
                  <div className="mt-1">
                    <Circle className="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm md:text-base">{task.title}</h4>
                    <p className="text-white/40 text-sm mt-1">{task.desc}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs text-white/30 font-medium">{task.due}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md border font-semibold ${task.color} ${task.bg}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Trend Chart Area */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-white text-lg font-medium">
                <Activity className="w-5 h-5 text-blue-400 mr-2" /> Academic trend
              </div>
              <span className="text-white/40 text-sm font-medium">Sem 1 - 2</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
              <p className="text-white/30 text-sm">Chart visualization will render here.</p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}