import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/:workspace" component={Workspace} />
      {/* workspace/sleact || workspace/text || ... , 라우트 파라미터 역할로 바꿔줌 */}
    </Switch>
  );
};

export default App;

// pages - 페이지
// components - 페이지 안에 들어가는 컴포넌트
// layouts - 페이지에 들어가는 공통 레이아웃
