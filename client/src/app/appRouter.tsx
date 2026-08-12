import { createBrowserRouter, Navigate } from 'react-router';

import AppLayout from '@/components/layout/AppLayout';
import GuestLayout from '@/components/layout/GuestLayout';
import LoginPage from '@/features/auth/pages/LoginPage';
import NotFoundPage from '@/features/auth/pages/NotFoundPage';
import RegisterPage from '@/features/auth/pages/RegisterPage';
import DashboardPage from '@/features/dashboard/pages/DashboardPage';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: 'home',
            element: <DashboardPage />,
          },
          {
            path: 'plants',
            element: <div>Plants Page</div>,
          },
          {
            path: 'history',
            element: <div>History Page</div>,
          },
          {
            path: 'subscription',
            element: <div>Subscription Page</div>,
          },
          {
            path: 'settings',
            element: <div>Settings Page</div>,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <GuestRoute />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
