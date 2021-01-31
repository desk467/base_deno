type LOG_LEVEL_TYPE =
  | "NOTSET"
  | "DEBUG"
  | "INFO"
  | "WARNING"
  | "ERROR"
  | "CRITICAL";

export const PORT = Number.parseInt(Deno.env.get("PORT") || "8000");
export const LOG_LEVEL = <LOG_LEVEL_TYPE> Deno.env.get("LOG_LEVEL") || "DEBUG";
