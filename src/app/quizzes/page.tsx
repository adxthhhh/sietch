import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react';

export default function QuizzesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 relative z-10">
      
      <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sietch Vault
        </Link>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Active Recall</h1>
        <p className="text-neutral-400">Test your knowledge with topic-based rapid-fire quizzes.</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Placeholder Data */}
        <div className="glass-card p-6 flex flex-col justify-between items-start hover:border-white/30 transition-all cursor-pointer group">
          <div className="mb-6">
            <span className="text-xs font-semibold px-2 py-1 bg-white/10 text-neutral-300 rounded-full mb-3 inline-block">C Programming</span>
            <h3 className="text-lg font-medium text-white leading-tight">Pointers & Memory</h3>
            <p className="text-sm text-neutral-500 mt-2">15 Questions • 10 mins</p>
          </div>
          <div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
            <PlayCircle className="w-4 h-4 mr-2" />
            Start Quiz
          </div>
        </div>
      </div>

    </main>
  );
}