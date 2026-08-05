import { Outlet } from 'react-router';

import PageLayout from './PageLayout';

type Props = {
  children?: React.ReactNode;
};

export default function GuestLayout({ children }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="flex flex-col justify-center items-center gap-2 w-1/2">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-green-500">Plants</span>{' '}
            <span className="text-lime-500">Pal</span>
          </h1>
          <p className="text-xl">Welcome to your digital garden</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-1/2">
          {children ?? <Outlet />}
        </div>
      </div>
    </PageLayout>
  );
}
