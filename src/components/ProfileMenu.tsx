"use client";

import { useState } from 'react';
import { User, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-8 right-8 z-50">
      {/* Profile Icon Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card p-3 hover:bg-white/10 transition-all group flex items-center justify-center"
      >
        <User className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
      </button>

      {/* Glassmorphism Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 glass-card p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-4 duration-200">
          
          <Link 
            href="/auth/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <LogIn className="w-4 h-4" />
            Log In
          </Link>

          <div className="h-px w-full bg-white/10 my-1"></div>

          <Link 
            href="/auth/signup"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </Link>
          
        </div>
      )}
    </div>
  );
}