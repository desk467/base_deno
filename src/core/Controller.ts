import * as Oak from "@oak/oak";
import * as log from "@std/log";
import { NotImplementedError } from "./exceptions.ts";
interface ControllerList {
  [name: string]: typeof Controller;
}

export class Controller {
  app: Oak.Application;
  router: Oak.Router;

  constructor(app: Oak.Application) {
    this.app = app;

    this.router = new Oak.Router();
    this.defineRoutes();
  }

  /**
   * register all routes into oak application
   */
  private register() {
    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());
  }

  /**
   * Register a list of controllers into an oak application
   *
   * @param app Represents an Oak Application
   * @param controllers A list of controllers to register
   */
  static registerAllControllers(
    app: Oak.Application,
    controllers: ControllerList,
  ) {
    for (const ControllerClass of Object.values(controllers)) {
      const instance = new ControllerClass(app);
      instance.register();
      log.info(`"${ControllerClass.name}" routes registered.`);
    }
  }

  defineRoutes() {
    throw new NotImplementedError(
      "You should implement defineRoutes() method!",
      "defineRoutes",
    );
  }
}
