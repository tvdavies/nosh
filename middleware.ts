import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';

/**
 * Middleware to protect routes
 *
 * Routes that require authentication:
 * - /chat (AI chat feature)
 * - /api/chat (AI chat API)
 *
 * Routes that are public:
 * - /login
 * - /api/auth/* (NextAuth routes)
 * - All other pages (for now - can tighten later)
 */

// Routes that require authentication
const protectedRoutes = ['/chat', '/api/chat'];

// Routes that should always be public
const publicRoutes = ['/login', '/api/auth'];

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Check if this is a public route
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Check if this is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If protected route and not authenticated, redirect to login
  if (isProtectedRoute && !req.auth) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match all routes except static files and _next
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
