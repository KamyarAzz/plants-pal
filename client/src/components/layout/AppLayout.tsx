import { Outlet } from 'react-router';

import Navbar from './navbar/Navbar';
import PageLayout from './PageLayout';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <PageLayout>
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex flex-col gap-2 overflow-auto px-4 py-6 md:p-4 w-full h-full">
          {children ?? <Outlet />}
        </main>
      </div>
    </PageLayout>
  );
}
