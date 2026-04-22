import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  if (host === 'insight.covex.app' && url.pathname === '/') {
    url.pathname = '/insight';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
