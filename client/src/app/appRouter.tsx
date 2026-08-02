import { createBrowserRouter } from 'react-router';

import LoginPage from '../features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
      //   {
      //     index: true,
      //     element: <App />,
      //   },
      //   {
      //     path: 'about',
      //     element: <App />,
      //   },
    ],
  },
]);
