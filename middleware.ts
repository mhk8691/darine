import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("refreshToken");

  const isProtected = pathname.startsWith("/dashboard");

  // if (isProtected && !token) {
  //   return NextResponse.redirect(new URL("/login/login-password", req.url));
  // }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/",  "/dashboard/:path*"],
};