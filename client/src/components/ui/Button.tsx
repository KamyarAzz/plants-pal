import React from 'react';

import { cn } from '@/lib/cn';

type Props = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ disabled, onClick, children, className }: Props) {
  return (
    <button
      className={cn(
        'bg-green-500 cursor-pointer disabled:cursor-auto text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20',
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
