import React, { useCallback } from 'react';
import { Container, Header } from '@pages/Channel/styles';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import useInput from '@hooks/useInput';
import { useParams } from 'react-router';

const Channel = () => {
  // useParams로 channel을 쓸 수 있는 이유는 Route 처리 시 url에서 파라미터로 받는 값이기 때문이다.
  const { channel } = useParams<{ channel: string }>();
  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    setChat('');
  }, []);
  return (
    <Container>
      <Header>'{channel}'채널입니다.</Header>
      {/* <ChatList /> */}
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default Channel;
