import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: 'bg-[#00C4B4]/10 text-[#00C4B4] border border-[#00C4B4]/20',
    secondary: 'bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20',
    ghost: 'bg-slate-100 text-slate-600 border border-slate-200',
  };
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide', variants[variant], className)}>
      {children}
    </span>
  );
}
