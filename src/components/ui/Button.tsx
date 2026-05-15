'use client';
import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-[#F59E0B] text-white hover:bg-[#D97706] focus-visible:ring-[#F59E0B] shadow-md hover:shadow-lg',
    secondary:
      'bg-[#0F172A] text-white hover:bg-[#1E293B] focus-visible:ring-slate-700',
    ghost:
      'bg-transparent text-[#F59E0B] hover:bg-[#F59E0B]/10 focus-visible:ring-[#F59E0B]',
    outline:
      'border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white focus-visible:ring-[#F59E0B]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], (loading || disabled) && 'opacity-60 pointer-events-none', className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <svg className="spinner w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 60" />
        </svg>
      )}
      {children}
    </button>
  );
}
