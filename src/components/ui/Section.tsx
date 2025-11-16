import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export const Section: FC<SectionProps> = ({
  children,
  className,
  background = 'default',
  padding = 'lg',
}) => {
  const backgrounds = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
  };
  
  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };
  
  return (
    <section className={clsx(backgrounds[background], paddings[padding], className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
