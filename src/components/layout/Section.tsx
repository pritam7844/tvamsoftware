import { cn } from '@/utils/cn';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bg?: 'white' | 'alt' | 'dark' | 'gradient';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
}

const bgs = {
  white:    'bg-white',
  alt:      'bg-[#F8FAFC]',
  dark:     'bg-[#0A0E1A] text-white',
  gradient: 'gradient-bg text-white',
};

export default function Section({ children, className, containerClassName, bg = 'white', containerSize = 'xl', id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', bgs[bg], className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
