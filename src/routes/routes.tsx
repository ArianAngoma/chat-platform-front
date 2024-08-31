import { createBrowserRouter } from 'react-router-dom';

import { PrivateOutlet } from './PrivateOutlet.tsx';
import { PublicOutlet } from './PublicOutlet.tsx';

import { RegisterPage } from '../pages/RegisterPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';

import { ConversationChannelPage } from '../pages/ConversationChannelPage.tsx';
import { ConversationPage } from '../pages/ConversationPage.tsx';

export const router = createBrowserRouter([
  {
    element: <PublicOutlet />,
    children: [
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateOutlet />,
    children: [
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
    ],
  },
]);
