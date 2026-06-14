import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PYQsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 relative z-10">
      
      {/* Top Navigation */}
      <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sietch Vault
        </Link>
      </div>

      {/* Header */}
      <div className="w-full max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Previous Year Questions</h1>
        <p className="text-neutral-400">Select a subject to view indexed S1/S2 question papers.</p>
      </div>

      {/* Placeholder Content Area */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* We will populate this with Supabase data later */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-medium text-white mb-1">Solid State Physics</h3>
          <p className="text-sm text-neutral-500">Scheme 2024 • 4 Papers</p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-xl font-medium text-white mb-1">Engineering Graphics</h3>
          <p className="text-sm text-neutral-500">Scheme 2024 • 6 Papers</p>
        </div>
      </div>

    </main>
  );
}