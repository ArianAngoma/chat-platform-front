import { ConversationChannelPageStyle } from '../utils/styles';
import { useParams } from 'react-router-dom';

export const ConversationChannelPage = () => {
  const { conversationId } = useParams();
  console.log({ conversationId });
  return (
    <ConversationChannelPageStyle>Chanel Page</ConversationChannelPageStyle>
  );
};
