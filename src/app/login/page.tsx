'use client';
import { useEffect, useState } from 'react';

import { cookieKeys } from '@/constants/cookiePreferences';
import { deleteCookies, getaCookie } from '@/lib/cookies';
import { userLoginApi } from '@/network/apis/user';
import { LoginPayload } from '@/types/models';

const Login = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleLogin = async () => {
    const userCreds: LoginPayload = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    await userLoginApi(userCreds);
  };
  const user: any = getaCookie(cookieKeys.auth);
  return (
    <>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => deleteCookies('auth')}>Clear cookies</button>
      {isClient && <h1>{user && JSON.parse(user).username}</h1>}
    </>
  );
};

export default Login;
