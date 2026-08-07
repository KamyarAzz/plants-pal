import React from 'react';

import { cn } from '@/lib/cn';

type Props = {
  title: string;
  value: string;
  valueType?: string;
  icon: React.ReactNode;
  color: string;
};

export default function HeaderInfoBox({ title, value, icon, color, valueType }: Props) {
  return (
    <div
      className={cn(
        'p-4 rounded-md flex-1 grow shadow bg-gray-50/90 text-gray-900 flex-col flex gap-3',
        color === 'blue' && 'bg-blue-600/90 text-white',
        color === 'green' && 'bg-green-800/90 text-white',
        color === 'yellow' && 'bg-yellow-600/90 text-white',
        '',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{icon}</p>
      </div>
      <p className="text-2xl font-bold">
        {value} {valueType}
      </p>
    </div>
  );
}
