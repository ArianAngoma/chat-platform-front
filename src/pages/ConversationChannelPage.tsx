import { useParams } from 'react-router-dom';

import { ConversationChannelPageStyle } from '../utils/styles';

export const ConversationChannelPage = () => {
  const { conversationId } = useParams();
  console.log({ conversationId });
  return (
    <ConversationChannelPageStyle>Chanel Page</ConversationChannelPageStyle>
  );
};
