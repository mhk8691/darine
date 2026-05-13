import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const access = req.cookies.get('accessToken');
  const pathname = req.nextUrl.pathname;

  const isHome = pathname === '/';
  const isDashboard = pathname.startsWith('/dashboard');

  // اگر روی صفحه اصلی بود
  if (isHome) {
    if (access) {
      return NextResponse.redirect(
        new URL('/dashboard', req.url),
      );
    } else {
      return NextResponse.redirect(
        new URL('/login/login-password', req.url),
      );
    }
  }

  // اگر وارد داشبورد شد ولی لاگین نیست
  if (isDashboard && !access) {
    return NextResponse.redirect(
      new URL('/login/login-password', req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};