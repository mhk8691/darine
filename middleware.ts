import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // استفاده از نام صحیح کوکی‌ها
  const refreshToken = req.cookies.get('refreshToken');
  const accessToken = req.cookies.get('accessToken');

  const isProtected = pathname.startsWith('/dashboard');

  // if (isProtected && !refreshToken) {
  //   const loginUrl = new URL('/login/login-password', req.url);
  //   return NextResponse.redirect(loginUrl);
  // }

  // if (pathname === '/') {
  //   return NextResponse.redirect(new URL('/dashboard', req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};