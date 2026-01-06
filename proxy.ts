// proxy.ts  (root or src/proxy.ts)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Your proxy logic here (auth, redirects, etc.)
export function proxy(request: NextRequest) {
  // Example: protect everything except the exclusions below
  // const token = request.cookies.get('auth_token')
  // if (!token) return NextResponse.redirect(new URL('/login', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Apply proxy to ALL paths EXCEPT:
     * - API routes           (/api/*)
     * - Next.js internals    (/_next/static/*, /_next/image/* ← crucial for optimizer!)
     * - Static files         (anything with . in name like .png, .ico, .txt)
     * - Common static paths  (favicon, robots, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
}