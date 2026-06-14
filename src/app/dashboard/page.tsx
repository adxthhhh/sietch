import { BarChart3, Settings, LogOut, BookOpen, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-24 px-6 relative z-10 max-w-5xl mx-auto">
      
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 animate-in fade-in duration-500">
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">Welcome back, Adith.</h1>
          <p className="text-white/50">Computer Science and Engineering • Semester 1</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card px-4 py-2 flex items-center text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </button>
          <Link href="/" className="glass-card px-4 py-2 flex items-center text-sm text-white/70 hover:text-white hover:bg-red-500/20 transition-all">
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Link>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white/70 font-medium">Series 1 Average</h3>
            <BarChart3 className="w-5 h-5 text-white/30" />
          </div>
          <div>
            <p className="text-5xl font-bold text-white">42<span className="text-2xl text-white/30">/50</span></p>
            <p className="text-sm text-emerald-400 mt-2">On track for internal targets</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white/70 font-medium">Saved Resources</h3>
            <BookOpen className="w-5 h-5 text-white/30" />
          </div>
          <div>
            <p className="text-5xl font-bold text-white">12</p>
            <p className="text-sm text-white/50 mt-2">PYQs & Syllabus Modules</p>
          </div>
        </div>
        
        {/* Action Card */}
        <button className="glass-card p-6 flex flex-col items-center justify-center border-white/20 hover:bg-white/10 hover:border-white/40 transition-all group">
          <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors mb-4">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <p className="text-white font-medium">Log Exam Score</p>
          <p className="text-xs text-white/50 mt-1">Update marks tracking</p>
        </button>

      </div>
    </main>
  );
}