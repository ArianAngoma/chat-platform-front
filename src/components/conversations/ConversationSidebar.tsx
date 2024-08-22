import { TbEdit } from 'react-icons/tb';

import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarItem,
  ConversationSidebarStyle,
} from '../../utils/styles';
import { ConversationType } from '../../utils/types.ts';

import styles from './index.module.scss';

interface Props {
  conversations: ConversationType[];
}

export const ConversationSidebar: React.FC<Props> = ({ conversations }) => {
  console.log('ConversationSidebar');
  return (
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={40} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem key={conversation.id}>
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
