type WorkerEnv = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
};

// Every request runs here first so www can redirect; everything else is served from the static assets.
export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.yigitserezli.tr") {
      url.hostname = "yigitserezli.tr";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
