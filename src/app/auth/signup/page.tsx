import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User, Book } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      
      <Link href="/" className="absolute top-8 left-8 md:left-12 inline-flex items-center text-white/50 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Vault
      </Link>

      <div className="glass-card w-full max-w-md p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Join Sietch</h2>
          <p className="text-white/50">Create an account to track your academic progress.</p>
        </div>

        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
          </div>

          {/* Email Address */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
          </div>

          {/* Semester Dropdown */}
          <div className="relative group">
            <Book className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white/70 appearance-none outline-none focus:border-white/30 focus:bg-white/10 transition-all">
              <option value="1" className="bg-[#050505] text-white">Semester 1</option>
              <option value="2" className="bg-[#050505] text-white">Semester 2</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <input type="password" placeholder="Create Password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all" />
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-xl mt-4 hover:bg-neutral-200 active:scale-[0.98] transition-all">
            Create Account
          </button>
        </form>

        <p className="text-center text-white/50 text-sm mt-6">
          Already have an account? <Link href="/auth/login" className="text-white hover:underline transition-all">Sign in</Link>
        </p>
      </div>
    </main>
  );
}