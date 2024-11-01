import { cookieKeys } from '@/constants/cookiePreferences';
import { setCookies } from '@/lib/cookies';
import { store } from '@/store';
import { setAuth } from '@/store/slices/auth';
import { LoginPayload, LoginResponse } from '@/types/models';

import NetworkCall from '../networkCall';
import UserRequest from '../requests/user';

export const userLoginApi = async (req: LoginPayload): Promise<LoginResponse | Error> => {
  try {
    const user: LoginResponse | null = await NetworkCall.makeApiCall(UserRequest.userLogin(req));
    store.dispatch(setAuth(user as LoginResponse));
    setCookies(cookieKeys.auth, user as LoginResponse);
    return user as LoginResponse;
  } catch (error) {
    return error as Error;
  }
};
