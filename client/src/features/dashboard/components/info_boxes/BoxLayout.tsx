import { type ReactNode } from 'react';
import { Link } from 'react-router';

import BoxWrapper from './BoxWrapper';

type Props = {
  children?: ReactNode;
  title: string;
  value: string | number;
  description: string;
  icon?: string;
  link?: string;
  linkText?: string;
  color?: 'green' | 'blue' | 'orange' | 'purple';
};

export default function BoxLayout({
  children,
  description,
  icon,
  title,
  value,
  link,
  linkText,
  color,
}: Props) {
  return (
    <BoxWrapper color={color}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full 
            ${color === 'orange' ? 'bg-orange-100' : color === 'purple' ? 'bg-purple-100' : color === 'blue' ? 'bg-blue-100' : 'bg-emerald-100'}`}
          >
            {icon}
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-sm font-medium text-slate-800">{title}</p>
            <div className="flex flex-col items-baseline">
              <span className="text-3xl font-bold tracking-tight text-slate-900">{value}</span>
              <span className="text-sm text-slate-600">{description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full">{children}</div>
      {/* Footer */}
      {link && (
        <Link
          to={link}
          className="cursor-pointer ml-2 flex items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          {linkText} →
        </Link>
      )}
    </BoxWrapper>
  );
}
