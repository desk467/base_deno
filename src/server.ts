import { app } from "/src/app.ts";
import { PORT } from "/src/config.ts";
import { Controller } from "core/Controller.ts";
import * as controllers from "controllers/index.ts";
import * as log from "@std/log";

await (async function () {
  Controller.registerAllControllers(app, controllers);

  log.info(`Server started at ${PORT}`);
  await app.listen({ port: PORT });
})();
