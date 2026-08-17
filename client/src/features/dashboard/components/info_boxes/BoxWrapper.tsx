import type { ReactNode } from 'react';

type Props = {
  color?: 'green' | 'blue' | 'orange' | 'purple';
  children: ReactNode;
};

export default function BoxWrapper({ color, children }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col gap-2 rounded-2xl border  bg-linear-to-br to-white p-2.5 shadow-sm 
        ${color === 'blue' ? 'border-sky-100 from-sky-50' : color === 'orange' ? 'border-orange-100 from-orange-50' : color === 'purple' ? 'border-purple-100 from-purple-100' : 'border-emerald-100 from-emerald-50'}`}
    >
      {children}
    </div>
  );
}
