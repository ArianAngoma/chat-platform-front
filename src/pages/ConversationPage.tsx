import { Outlet } from 'react-router-dom';

import { PageContainer } from '../utils/styles';
import { ConversationSidebar } from '../components/conversations/ConversationSidebar.tsx';

import mockConversations from '../__mocks__/conversations.ts';

export const ConversationPage = () => {
  return (
    <PageContainer>
      <ConversationSidebar conversations={mockConversations} />
      <Outlet />
    </PageContainer>
  );
};
