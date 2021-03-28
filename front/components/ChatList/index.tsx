import Chat from '@components/Chat';
import { IChat, IDM } from '@typings/db';
import React, { FC, useCallback, useRef } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: (IDM | IChat)[] };
}

const ChatList: FC<Props> = ({ chatSections }) => {
  const scrollbarRef = useRef(null);
  const onScroll = useCallback((values) => {
    // 스크롤이 가장위로 올라갔을 때
    if (values.scrollTop === 0) {
      console.log('가장위');
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {/* 객체를 반복돌 때, Object.entries() */}
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
