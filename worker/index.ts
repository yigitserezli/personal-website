import { handleContact, type Env } from "./contact";

type WorkerEnv = Env & {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
};

// Every request runs here first so www can redirect; everything else falls through to the assets.
export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    if (url.hostname === "www.yigitserezli.tr") {
      url.hostname = "yigitserezli.tr";
      return Response.redirect(url.toString(), 301);
    }

    if (pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Use POST" }), {
          status: 405,
          headers: { "Content-Type": "application/json", Allow: "POST" },
        });
      }
      return handleContact({ request, env });
    }

    if (pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
