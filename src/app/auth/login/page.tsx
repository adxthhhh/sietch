import Link from 'next/link';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      
      {/* Absolute positioned back button */}
      <Link href="/" className="absolute top-8 left-8 md:left-12 inline-flex items-center text-white/50 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Vault
      </Link>

      <div className="glass-card w-full max-w-md p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-white/50">Sign in to access your private dashboard.</p>
        </div>

        <form className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all" 
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-white transition-colors" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/10 transition-all" 
            />
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-xl mt-2 hover:bg-neutral-200 active:scale-[0.98] transition-all">
            Sign In
          </button>
        </form>

        <p className="text-center text-white/50 text-sm mt-6">
          New to Sietch? <Link href="/auth/signup" className="text-white hover:underline transition-all">Create an account</Link>
        </p>
      </div>
    </main>
  );
}