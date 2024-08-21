import { createBrowserRouter } from 'react-router-dom';

import { RegisterPage } from '../pages/RegisterPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
