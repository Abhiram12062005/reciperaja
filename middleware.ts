import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the coming-soon page and its assets through
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/team") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Must use NEXT_PUBLIC_ prefix for middleware (edge runtime) to read env vars
  // Set in .env locally AND in Vercel dashboard
  const launchDateStr = process.env.NEXT_PUBLIC_LAUNCH_DATE;

  if (launchDateStr) {
    const launchDate = new Date(launchDateStr);
    const now = new Date();

    if (now < launchDate) {
      const url = request.nextUrl.clone();
      url.pathname = "/coming-soon";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};