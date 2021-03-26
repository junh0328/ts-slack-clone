import { IDM, IChat } from '@typings/db';
import dayjs from 'dayjs';

export default function makeSection(chatList: (IDM | IChat)[]) {
  const sections: { [key: string]: (IDM | IChat)[] } = {};
  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');

    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}

/* 
[{id:1, d: '2021-03-26'}, {id:2, d: '2021-03-26'}, {id:3, d: '2021-03-27'}, {id:4, d: '2021-03-27'}]
>>>

section = {
  ...
  '2021-03-26' : [1, 2]
  '2021-03-27' : [3, 4]
}

*/

/*
컴퓨터가 아닌 내가 분류한다면 어떻게 분류할까? 라는 생각으로 알고리즘을 나눠보자
*/

/*
js로 먼저 코딩을 하고 타입을 추가해 주자
*/
