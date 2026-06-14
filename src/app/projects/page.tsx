import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 relative z-10">
      
      <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sietch Vault
        </Link>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Project Specs</h1>
        <p className="text-neutral-400">Workshop manuals, basic hardware setups, and early coding templates.</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 gap-4">
        {/* Placeholder Data */}
        <div className="glass-card p-6 flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
               <Terminal className="w-6 h-6 text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Basic Hardware Workshop</h3>
              <p className="text-sm text-neutral-500">Logic gates and breadboard fundamentals.</p>
            </div>
          </div>
          <span className="text-sm text-neutral-400">View Details &rarr;</span>
        </div>
      </div>

    </main>
  );
}