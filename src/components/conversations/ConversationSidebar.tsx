import { TbEdit } from 'react-icons/tb';

import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarItem,
  ConversationSidebarStyle,
} from '../../utils/styles';
import { ConversationType } from '../../utils/types.ts';

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  conversations: ConversationType[];
}

export const ConversationSidebar: React.FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();

  const onNavigateToConversation = (id: number) => {
    navigate(`/conversation/${id}`);
  };

  return (
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={40} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem
            key={conversation.id}
            onClick={() => {
              onNavigateToConversation(conversation.id);
            }}
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>
                {conversation.name}
              </span>
              <span className={styles.conversationLastMessage}>
                {conversation.lastMessage}
              </span>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </ConversationSidebarStyle>
  );
};
