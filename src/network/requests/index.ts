import { CookieValueTypes } from 'cookies-next';

import { cookieKeys } from '@/constants/cookiePreferences';
import { getaCookie } from '@/lib/cookies';

import K from '../../constants';

interface Headers {
  [key: string]: string;
}

export default class Request {
  url: string;
  method: string;
  body: any;
  headers: Headers;

  constructor(
    relativeURL: string,
    method: string = K.Network.Method.GET,
    body: any = null,
    defaultHeaderType: string = K.Network.Header.Type.Json,
    headers: Headers = {}
  ) {
    const userCookie: CookieValueTypes = getaCookie(cookieKeys.auth);
    let bearerToken: string = '';

    // Check userCookie is a string and not undefined
    if (typeof userCookie === 'string') {
      const user = JSON.parse(userCookie);
      bearerToken = user?.token ?? '';
    }
    headers = {
      ...(defaultHeaderType === K.Network.Header.Type.Json ||
      defaultHeaderType === K.Network.Header.Type.formData
        ? K.Network.Header.Default(bearerToken)
        : K.Network.Header.Authorization()),
      ...headers,
    };

    this.url = relativeURL;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }
}
