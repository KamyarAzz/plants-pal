import { createBrowserRouter } from 'react-router';

import App from '../../../app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
