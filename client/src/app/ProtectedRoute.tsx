import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '@/stores/authStore';

export default function ProtectedRoute() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}
