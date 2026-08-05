// GuestRoute.tsx
import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '@/stores/authStore';

export default function GuestRoute() {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
