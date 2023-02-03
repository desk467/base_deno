import * as log from "std/log/mod.ts";
import { LOG_LEVEL } from "/src/config.ts";

/**
 * setupLogging sets up default logging configurations.
 */
export async function setupLogging() {
  await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler("DEBUG"),
    },
    loggers: {
      default: {
        level: LOG_LEVEL,
      },
    },
  });
}
