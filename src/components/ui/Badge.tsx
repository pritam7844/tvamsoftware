import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20',
    secondary: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20',
    ghost: 'bg-slate-100 text-slate-600 border border-slate-200',
  };
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide', variants[variant], className)}>
      {children}
    </span>
  );
}
