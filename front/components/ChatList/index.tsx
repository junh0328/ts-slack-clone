import Chat from '@components/Chat';
import { IDM } from '@typings/db';
import React, { FC } from 'react';
import { ChatZone, Section } from './styles';

interface Props {
  chatData?: IDM[];
}

const ChatList: FC<Props> = ({ chatData }) => {
  return (
    <ChatZone>
      {chatData?.map((chat) => (
        <Chat key={chat.id} data={chat}></Chat>
      ))}
    </ChatZone>
  );
};

export default ChatList;
