import { Search, FolderOpen, BookOpen, CheckCircle, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import ProfileMenu from '../components/ProfileMenu';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 relative z-10">
      
      {/* 2. Injecting Profile Menu */}
      <ProfileMenu />

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
          Sietch
        </h1>
        <p className="text-neutral-400 text-lg">
          The S1/S2 Engineering Resource Vault.
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="w-full max-w-3xl mb-16 relative">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-neutral-400" />
        </div>
        <input
          type="text"
          className="glass-card w-full py-5 pl-14 pr-6 text-lg text-white placeholder-neutral-500 outline-none focus:border-white/30 transition-all duration-300"
          placeholder="Search Solid State Physics, PYQs, or modules..."
        />
      </div>

      {/* Quick Access Bento Grid */}
      <div className="w-full max-w-4xl">
        <h2 className="text-sm font-semibold text-neutral-500 tracking-widest uppercase mb-6 pl-2">
          Quick Access
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <Link href="/pyqs" className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group">
            <FolderOpen className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors" />
            <div className="text-center">
              <h3 className="font-medium text-white">PYQs</h3>
              <p className="text-xs text-neutral-400">Previous Years</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/notes" className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group">
            <BookOpen className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors" />
            <div className="text-center">
              <h3 className="font-medium text-white">Notes</h3>
              <p className="text-xs text-neutral-400">Module-wise</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/quizzes" className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group">
            <CheckCircle className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors" />
            <div className="text-center">
              <h3 className="font-medium text-white">Quizzes</h3>
              <p className="text-xs text-neutral-400">Topic-based</p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/projects" className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all group">
            <Lightbulb className="w-8 h-8 text-neutral-300 group-hover:text-white transition-colors" />
            <div className="text-center">
              <h3 className="font-medium text-white">Projects</h3>
              <p className="text-xs text-neutral-400">Ideas & Specs</p>
            </div>
          </Link>

        </div>
      </div>

    </main>
  );
}