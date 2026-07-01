import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const refreshToken = req.cookies.get('refreshToken');

  const publicPaths = [
    '/login',
    '/login/login-password',
    '/login/login-otp',
    '/login/forget',
    '/login/forget-verify',
    '/login/register',
    '/login/signup',
    '/login/verify-otp',
    '/about',
    '/rules',
    '/margin-rules'

  ];

  const isPublic = publicPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (
    refreshToken &&
    pathname.startsWith('/login')
  ) {
    return NextResponse.redirect(
      new URL('/dashboard', req.url)
    );
  }

  if (pathname === '/') {
    return NextResponse.redirect(
      new URL('/dashboard', req.url)
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