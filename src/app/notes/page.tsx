import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function NotesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 relative z-10">
      
      <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sietch Vault
        </Link>
      </div>

      <div className="w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Module Notes</h1>
        <p className="text-neutral-400">Curated, high-yield study materials for S1/S2.</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Data */}
        <div className="glass-card p-6 flex justify-between items-center group cursor-pointer hover:bg-white/5 transition-all">
          <div>
            <h3 className="text-xl font-medium text-white mb-1">Solid State Physics</h3>
            <p className="text-sm text-neutral-500">Module 1: Crystal Structures</p>
          </div>
          <Download className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
        </div>

        <div className="glass-card p-6 flex justify-between items-center group cursor-pointer hover:bg-white/5 transition-all">
          <div>
            <h3 className="text-xl font-medium text-white mb-1">Calculus & Linear Algebra</h3>
            <p className="text-sm text-neutral-500">Module 3: Partial Derivatives</p>
          </div>
          <Download className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
        </div>
      </div>

    </main>
  );
}