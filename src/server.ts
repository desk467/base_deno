import { app } from "./app.ts";
import { PORT } from "./config.ts";
import { Controller } from "./core/Controller.ts";
import * as controllers from "./controllers/index.ts";
import { log } from "./deps.ts";

Controller
  .registerAllControllers(app, controllers);

await (async function () {
  log.info(`Server started at ${PORT}`);
  await app.listen({ port: PORT });
})();
