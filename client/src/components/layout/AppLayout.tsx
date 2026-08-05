import { Outlet } from 'react-router';

import PageLayout from './PageLayout';

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return <PageLayout>{children ?? <Outlet />}</PageLayout>;
}
