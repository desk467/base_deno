import { app } from "/src/app.ts";
import { PORT } from "/src/config.ts";
import { Controller } from "/src/core/Controller.ts";
import * as controllers from "/src/controllers/index.ts";
import { log } from "/src/deps.ts";

Controller
  .registerAllControllers(app, controllers);

await (async function () {
  log.info(`Server started at ${PORT}`);
  await app.listen({ port: PORT });
})();
