import process from "process";

const formatMeta = (meta) => {
  if (!meta) return undefined;
  try {
    return JSON.parse(JSON.stringify(meta));
  } catch {
    return {meta: String(meta)};
  }
};

const log = (level, message, meta) => {
  const payload = {
    timestamp: new Date().toISOString(),
    level,
    message,
  };

  if (meta !== undefined) {
    payload.meta = formatMeta(meta);
  }

  const output = JSON.stringify(payload);
  if (level === "error") {
    console.error(output);
  } else if (level === "warn") {
    console.warn(output);
  } else {
    console.log(output);
  }
};

export const info = (message, meta) => log("info", message, meta);
export const warn = (message, meta) => log("warn", message, meta);
export const error = (message, meta) => log("error", message, meta);
export const debug = (message, meta) => {
  if (process.env.NODE_ENV !== "production") {
    log("debug", message, meta);
  }
};

export default {info, warn, error, debug};
