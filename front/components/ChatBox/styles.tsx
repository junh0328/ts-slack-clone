import styled from '@emotion/styled';
// import { MentionsInput } from 'react-mentions';
import { MentionsInput } from 'react-mentions';

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`;

export const MentionsTextarea = styled(MentionsInput)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;

export const Toolbox = styled.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    // & : nested selector
    margin-right: 5px;
  }

  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;

// emotion에서는 변수를 담아서 사용할 수 있다.
/*
 ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};

처럼 focus가 true 인 상황에서 다음과 같은 CSS를 대입하도록 만들어준다.
*/

// emotion에서 함수호출하기
/*
함수는 호출하는 방법이 여러가지 있다.
function a();
a();  > 일반적인 함수 호출
a``;  > 태그드 템플릿 리터럴 방식으로 함수 호출

따라서 스타일드컴포넌트, emotion에서 

export const EachMention = styled.button<{ focus: boolean }>`
`;

와 같은 방식으로 함수를 선언하고, 호출할 수 있는 것이다.
*/
