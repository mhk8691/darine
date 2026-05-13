import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export function middleware(
  req: NextRequest,
) {
  const access =
    req.cookies.get('accessToken');

  const pathname =
    req.nextUrl.pathname;

  const isProtected =
    pathname.startsWith('/dashboard');

  if (isProtected && !access) {
    return NextResponse.redirect(
      new URL(
        '/login/login-password',
        req.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};