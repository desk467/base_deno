import { Oak } from "/src/deps.ts";
import { Controller } from "/src/core/Controller.ts";

export class HelloController extends Controller {
  defineRoutes() {
    this.router.get("/", this.hello);
  }

  hello(ctx: Oak.Context) {
    ctx.response.body = "Hello World!";
  }
}
