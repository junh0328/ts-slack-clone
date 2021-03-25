import io from 'socket.io-client';
import { useCallback } from 'react';
// import axios from 'axios';

export const backUrl = `http://localhost:3095`;
// axios.get(`${backUrl}/api/users`);

const sockets: { [key: string]: SocketIOClient.Socket } = {};
// workspace에 들어오는 값이 다양하므로 key 라고 지정해줌

const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  }, []);

  if (!workspace) {
    return [undefined, disconnect];
  }
  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
    transports: ['websocket'],
  });

  sockets[workspace].emit('hello', 'world');

  return [sockets[workspace], disconnect];
};

export default useSocket;

/*
API.md 에서 websoket 참조

emit  : 프론트에서 백엔드로 요청 보냄
on : 백엔드에서 프론트로 넘겨 받음
disconnect  : 연결 종료

socket.emit(event, data);
> 'hello'라는 이벤트 명으로 world라는 데이터를 서버로 보낸다.

*/
