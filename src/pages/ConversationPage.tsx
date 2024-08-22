import { Outlet } from 'react-router-dom';

import { PageContainer } from '../utils/styles';
import { ConversationSidebar } from '../components/conversations/ConversationSidebar.tsx';

export const ConversationPage = () => {
  return (
    <PageContainer>
      <ConversationSidebar />
      <Outlet />
    </PageContainer>
  );
};
