import { Outlet } from 'react-router';

type Props = {
  children?: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-100">
      {children ?? <Outlet />}
    </div>
  );
}
