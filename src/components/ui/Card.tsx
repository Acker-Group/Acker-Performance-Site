import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: FC<CardProps> = ({ children, className, hoverable = false }) => {
  return (
    <div
      className={clsx(
        'bg-white border border-gray-200 rounded-lg p-6 shadow-sm',
        hoverable && 'hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};
