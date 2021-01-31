import { log } from "../deps.ts";
import { LOG_LEVEL } from "../config.ts";

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
