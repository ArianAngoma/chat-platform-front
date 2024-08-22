import { createBrowserRouter } from 'react-router-dom';

import { RegisterPage } from '../pages/RegisterPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';
import { ConversationChannelPage } from '../pages/ConversationChannelPage.tsx';
import { ConversationPage } from '../pages/ConversationPage.tsx';

export const router = createBrowserRouter([
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'conversation',
    element: <ConversationPage />,
    children: [
      {
        path: ':conversationId?',
        element: <ConversationChannelPage />,
      },
    ],
  },
]);
