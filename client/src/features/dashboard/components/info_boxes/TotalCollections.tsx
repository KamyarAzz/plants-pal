import { Link } from 'react-router';

import type { PlantCategory } from '@/types';

interface Props {
  total: number;
  categories: PlantCategory[];
}

export default function TotalCollections({ total, categories }: Props) {
  const totalCategories = categories.reduce((sum, category) => sum + category.count, 0);

  const segments = categories.map((category, index) => {
    const percentage = totalCategories > 0 ? (category.count / totalCategories) * 100 : 0;

    const start = categories
      .slice(0, index)
      .reduce((sum, previous) => sum + (previous.count / totalCategories) * 100, 0);

    return {
      ...category,
      percentage,
      start,
    };
  });

  const circumference = 2 * Math.PI * 38;

  return (
    <div className="relative w-1/4 overflow-hidden flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-white p-2.5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            🪴{' '}
          </div>

          <div className="flex flex-col items-start gap-0">
            <p className="text-sm font-medium text-slate-800">Total Collection</p>
            <div className="flex flex-col items-baseline">
              <span className="text-3xl font-bold tracking-tight text-slate-900">{total}</span>
              <span className="text-sm text-slate-600">Plants</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* Chart */}
        <div className="relative h-28 w-28 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {/* Background */}
            <circle cx="50" cy="50" r="38" fill="none" stroke="#ecfdf5" strokeWidth="14" />

            {/* Segments */}
            {segments.map((segment) => {
              const dashLength = (segment.percentage / 100) * circumference;

              const dashOffset = -(segment.start / 100) * circumference;

              return (
                <circle
                  key={segment.name}
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="12"
                  strokeDasharray={`${dashLength} ${circumference}`}
                  strokeDashoffset={dashOffset}
                />
              );
            })}
          </svg>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              A{' '}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="min-w-0 flex-1">
          <div className="space-y-2.5">
            {segments.map((category, index) => (
              <div
                key={category.name}
                className={index !== segments.length - 1 ? 'border-b border-slate-100 pb-2.5' : ''}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: category.color,
                      }}
                    />

                    <span className="truncate text-sm text-slate-600">{category.name}</span>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-slate-800">
                    {category.count}{' '}
                    <span className="font-normal text-slate-400">
                      ({Math.round(category.percentage)}%)
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Link
        to="/plants"
        className="cursor-pointer flex items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
      >
        View all plants →{' '}
      </Link>
    </div>
  );
}
