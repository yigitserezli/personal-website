import { handleContact, type Env } from "./contact";

type WorkerEnv = Env & {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
};

// Static assets are served by Cloudflare directly; only /api/* reaches this code.
export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const { pathname } = new URL(request.url);

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
