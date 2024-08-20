import { createBrowserRouter } from 'react-router-dom';

import { RegisterPage } from '../pages/RegisterPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
  },
  {
    path: 'conversations',
    element: <div>Hello, Conversations!</div>,
    children: [
      {
        path: ':conversationId',
        element: <div>Conversation ID Page</div>,
      },
    ],
  },
]);
