import { NextRequest, NextResponse } from 'next/server';

import { isUserAuthenticated } from './lib/utils';

const protectedRoutes: string[] = ['/mui', '/posts'];

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (!isUserAuthenticated() && protectedRoutes.includes(pathname)) {
    const absoluteURL = new URL('/unauthorized', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
