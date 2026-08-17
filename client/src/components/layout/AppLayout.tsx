import { Outlet } from 'react-router';

import PageLayout from './PageLayout';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <PageLayout>
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex flex-col gap-2 overflow-auto p-4 w-full h-full">
          {children ?? <Outlet />}
        </main>
      </div>
    </PageLayout>
  );
}
