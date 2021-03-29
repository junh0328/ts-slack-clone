import { IChat, IDM } from '@typings/db';
import React, { FC, useMemo, memo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';

dayjs.locale('ko');
dayjs.extend(advancedFormat);

interface Props {
  data: IDM | IChat;
}

const Chat: FC<Props> = ({ data }) => {
  const { workspace } = useParams<{ workspace: string }>();
  // 타입스크립트가 IDM 인지 IChat 인지 확인할 수 있는 부분
  // Sender는 IDM에만 들어있는데, data가 없을 경우 IChat,(channel)에서 쓴 것임을 알아서 감지한다.
  const user = 'Sender' in data ? data.Sender : data.User;
  // for in 문을 참조해서 공부해볼 것, js의 유효한 문법임
  // Sender 가 data 안에 있으면 data.Sender 아니라면 data.User

  // @[준희다](7)
  // \d 숫자 ? = 0개나 1개, * = 0개 이상, g = 모두 찾기
  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
        decorator(match, index) {
          const arr: string[] | null = match.match(/@\[(.+?)]\((\d+?)\)/)!;
          if (arr) {
            return (
              <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content],
  );
  return (
    <ChatWrapper>
      <div className="chat_img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
// hoc , memo() : props가 동일하면 부모가 바뀌어도 자식을 리렌더링되지 않게 만들어주는 역할
