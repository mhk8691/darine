import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const refreshToken = req.cookies.get('refreshToken');

  const publicPaths = [
    '/login',
    '/login/login-password',
    '/about',
  ];

  const isPublic = publicPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (pathname === '/login') {
    return NextResponse.redirect(
      new URL('/login/login-password', req.url)
    );
  }

  if (!refreshToken && !isPublic) {
    return NextResponse.redirect(
      new URL('/login/login-password', req.url)
    );
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};