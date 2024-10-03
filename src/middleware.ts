import { clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";


const isProctetedRoute = createRouteMatcher(["/admin", "/teacher"])

export  default clerkMiddleware((auth,req) => {
    if(isProctetedRoute(req)) auth().protect()

      const { sessionClaims } = auth();

        // const role = (sessionClaims?.metadata as { role?: string })?.role;
})

// import { routeAccessMap } from "./lib/settings";
// import { NextResponse } from "next/server";

// const matchers = Object.keys(routeAccessMap).map((route) => ({
//   matcher: createRouteMatcher([route]),
//   allowedRoles: routeAccessMap[route],
// }));

// console.log(matchers);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect()

// 

//   for (const { matcher, allowedRoles } of matchers) {
//     if (matcher(req) && !allowedRoles.includes(role!)) {
//       return NextResponse.redirect(new URL(`/${role}`, req.url));
//     }
//   }
// });

// export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};