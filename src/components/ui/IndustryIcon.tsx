import React from 'react';
import { 
  Stethoscope, 
  ShoppingCart, 
  BookOpen, 
  CreditCard, 
  Utensils, 
  Plane, 
  Trophy, 
  Clapperboard, 
  Truck, 
  Users, 
  Zap, 
  Cpu,
  HelpCircle
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Stethoscope,
  ShoppingCart,
  BookOpen,
  CreditCard,
  Utensils,
  Plane,
  Trophy,
  Clapperboard,
  Truck,
  Users,
  Zap,
  Cpu
};

interface IndustryIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IndustryIcon({ name, className, size }: IndustryIconProps) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} size={size} />;
}
