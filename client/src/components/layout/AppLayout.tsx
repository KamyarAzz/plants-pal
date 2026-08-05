import { Outlet } from 'react-router';

import PageLayout from './PageLayout';
import Sidebar from './Sidebar';

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <PageLayout>
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="flex flex-col justify-center items-center p-2 w-full h-full">
          {children ?? <Outlet />}
        </main>
      </div>
    </PageLayout>
  );
}
