import { Outlet } from 'react-router';

type Props = {
  children?: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      {children ?? <Outlet />}
    </main>
  );
}
