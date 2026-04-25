import { info } from "../utils/logger.js";

const sanitizeBody = (body) => {
  if (!body || typeof body !== "object") return body;

  return JSON.parse(
    JSON.stringify(body, (key, value) => {
      if (!key) return value;
      const normalizedKey = key.toLowerCase();
      if (
        normalizedKey.includes("password") ||
        normalizedKey.includes("token") ||
        normalizedKey.includes("authorization")
      ) {
        return "***";
      }
      return value;
    }),
  );
};

export const requestLogger = (req, res, next) => {
  info("Incoming request", {
    method: req.method,
    path: req.originalUrl,
    query: req.query,
    params: req.params,
    body: sanitizeBody(req.body),
  });
  next();
};
