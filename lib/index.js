// dsh-appearance — host half: persists the appearance settings in the host
// settings document (survives restarts; the sandboxed desktop renderer has no
// durable localStorage) and serves them to the client bundle over same-origin
// HTTP routes, mirroring the skin-center plugin's host pattern.
import z from "schemastery";

export const name = "dsh-appearance";
export const inject = ["settings", "webServer"];

export function apply(ctx) {
  const ns = "appearance";
  const scope = ctx.settings.register(ns, z.object({ data: z.string().default("") }), { base: {} });

  ctx.effect(() => {
    const disposers = [];
    disposers.push(ctx.webServer.register({
      kind: "exact",
      path: "/api/dsh-appearance/get",
      handler: (req, res) => {
        if (req.method !== "GET") return json(res, 405, { ok: false, error: "method-not-allowed" });
        if (!isSameOriginRequest(req)) return json(res, 403, { ok: false, error: "cross-site-request-rejected" });
        json(res, 200, { ok: true, data: scope.get().data || "" });
      }
    }));
    disposers.push(ctx.webServer.register({
      kind: "exact",
      path: "/api/dsh-appearance/set",
      handler: (req, res) => {
        if (req.method !== "POST") return json(res, 405, { ok: false, error: "method-not-allowed" });
        if (!isSameOriginRequest(req)) return json(res, 403, { ok: false, error: "cross-site-request-rejected" });
        readJsonBody(req).then((body) => {
          scope.update({ data: body && typeof body.data === "string" ? body.data : "" });
          json(res, 200, { ok: true });
        }, (err) => {
          json(res, 400, { ok: false, error: err instanceof Error ? err.message : String(err) });
        });
      }
    }));
    return () => {
      for (const dispose of disposers) dispose();
    };
  }, "dsh-appearance: routes");
}

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function isSameOriginRequest(req) {
  const site = req.headers["sec-fetch-site"];
  if (typeof site === "string" && site === "cross-site") return false;
  const origin = req.headers.origin;
  if (typeof origin === "string" && origin !== "" && origin !== "null") {
    const host = req.headers.host;
    if (typeof host !== "string" || host === "") return false;
    try {
      if (new URL(origin).host !== host) return false;
    } catch {
      return false;
    }
  }
  return true;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 64 * 1024) {
        reject(new Error("body-too-large"));
        queueMicrotask(() => req.destroy());
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (chunks.length === 0) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}
