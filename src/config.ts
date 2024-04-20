import { load } from "@std/dotenv";
import { LevelName } from "@std/log";

let config: Record<string, string> = {
  PORT: "8000",
  LOG_LEVEL: "DEBUG",
};

async function init() {
  config = await load();
}

await init();

export const PORT = Number.parseInt(config.PORT);
export const LOG_LEVEL = <LevelName> config.LOG_LEVEL;
