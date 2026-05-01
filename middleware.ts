import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname === "/login") {
    return NextResponse.redirect(new URL("/login/login-password", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/login/:path*"],
};
