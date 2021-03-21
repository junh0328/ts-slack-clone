import React, { useCallback } from 'react';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';
import { Redirect } from 'react-router';

const Workspace: React.FC = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
        // redux-saga에서 me 와 같은 나의 정보가 들은 state의 역할을 SWR에서는 useSWR()이 하게 됨
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
