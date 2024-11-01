import { deleteCookie, getCookie, getCookies, hasCookie, setCookie } from 'cookies-next';

let cookies: () => ReadonlyRequestCookies;
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

// import { isServer } from './utils';
export const isServer = () => {
  return typeof window === 'undefined' && typeof global !== 'undefined';
};

if (isServer()) {
  // This code runs on the server only
  import('next/headers').then(headersModule => {
    cookies = headersModule.cookies;
  });
}

export const setCookies = (name: string, data: any) => {
  setCookie(name, data);
};

export const getaCookie = (name: string) => {
  if (isServer()) {
    return getCookie(name, { cookies });
  } else {
    return getCookie(name);
  }
};

export const getAllCookies = () => {
  return getCookies();
};

export const hasCookies = (name: string) => {
  hasCookie(name);
};

export const deleteCookies = async (name: string) => {
  deleteCookie(name);
};
