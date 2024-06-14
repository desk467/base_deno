import * as log from "@std/log";
import { LOG_LEVEL } from "/src/config.ts";

/**
 * setupLogging sets up default logging configurations.
 */
export async function setupLogging() {
  await log.setup({
    handlers: {
      console: new log.ConsoleHandler("DEBUG", {
        formatter: log.formatters.jsonFormatter,
        useColors: true,
      }),
    },
    loggers: {
      default: {
        level: LOG_LEVEL,
      },
    },
  });
}
