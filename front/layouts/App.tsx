import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Login from '../pages/LogIn';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;

// pages - 페이지
// components - 페이지 안에 들어가는 컴포넌트
// layouts - 페이지에 들어가는 공통 레이아웃
