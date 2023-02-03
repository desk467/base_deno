import { load } from "std/dotenv/mod.ts";

let config: Record<string, string> = {
  PORT: "8000",
  LOG_LEVEL: "DEBUG",
};

async function init() {
  config = await load();
}

await init();

type LOG_LEVEL_TYPE =
  | "NOTSET"
  | "DEBUG"
  | "INFO"
  | "WARNING"
  | "ERROR"
  | "CRITICAL";

export const PORT = Number.parseInt(config.PORT);
export const LOG_LEVEL = <LOG_LEVEL_TYPE> config.LOG_LEVEL;
