import { createBrowserRouter, Navigate } from 'react-router';

import PageLayout from '@/components/layout/PageLayout';
import LoginPage from '@/features/auth/pages/LoginPage';
import RegisterPage from '@/features/auth/pages/RegisterPage';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <PageLayout />,
        children: [
          {
            index: true,
            element: <></>,
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
        element: <PageLayout />,
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
