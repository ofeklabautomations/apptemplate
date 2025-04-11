import { User } from "@supabase/supabase-js";
import { createServerClient } from "@updatedev/ssr/supabase";
import { NextResponse, type NextRequest } from "next/server";

type Redirect =
  | {
      isRedirect: true;
      href: string;
    }
  | {
      isRedirect: false;
    };

function shouldRedirect(user: User | null, pathname: string): Redirect {
  const isPathnameUnauthenticated = pathname.startsWith("/auth");

  if (isPathnameUnauthenticated && user != null) {
    return {
      isRedirect: true,
      href: "/dashboard",
    };
  } else if (isPathnameUnauthenticated && user == null) {
    return {
      isRedirect: false,
    };
  }

  if (user == null) {
    return {
      isRedirect: true,
      href: "/dashboard/auth/sign-in",
    };
  }

  return {
    isRedirect: false,
  };
}

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const client = createServerClient(
    process.env.NEXT_PUBLIC_UPDATE_PUBLIC_KEY!,
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      billing: {
        environment: process.env.NODE_ENV === "production" ? "live" : "test",
      },
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data } = await client.auth.getUser();
  const redirectData = shouldRedirect(data.user, request.nextUrl.pathname);
  if (redirectData.isRedirect) {
    return NextResponse.redirect(new URL(redirectData.href, request.url));
  }

  return response;
}
