import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const adminRoutes = ["/dashboard", "/uzytkownicy", "/uslugi", "/rezerwacje", "/wiadomosci"];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
    
    if (isAdminRoute && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        const pathname = req.nextUrl.pathname;
        
        // Public routes - no auth needed
        if (
          pathname === "/" ||
          pathname === "/login" ||
          pathname === "/register" ||
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/treningi") ||
          pathname.startsWith("/fizjoterapia") ||
          pathname.startsWith("/galeria") ||
          pathname.startsWith("/kontakt") ||
          pathname.startsWith("/kalendarz") ||
          pathname.startsWith("/platnosci")
        ) {
          return true;
        }

        return token !== null;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
