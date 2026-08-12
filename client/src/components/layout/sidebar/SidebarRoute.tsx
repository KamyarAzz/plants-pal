import { Link } from 'react-router';

import type { SidebarItem } from '@/types/sidebar';

type Props = { item: SidebarItem };

export default function SidebarRoute({ item }: Props) {
  const isActive = window.location.pathname === item.path;
  return (
    <div className="flex w-full relative px-3">
      {isActive && (
        <div className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-r-md" content="" />
      )}
      <Link
        key={item.path}
        to={item.path}
        className="hover:bg-green-600/15 w-full flex items-center p-2 gap-2 rounded-md "
      >
        <img src={item.icon} alt={item.title} className="w-6 h-6" />
        <p>{item.title}</p>
      </Link>
    </div>
  );
}
