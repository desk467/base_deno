import { asserts, Oak } from "/src/deps.ts";
import { app } from "/src/app.ts";
import { HelloController } from "/src/controllers/HelloController.ts";

const { test } = Deno;

test({
  name: "should return Hello World when calling hello",
  fn(): void {
    // arrange
    const ctx = { response: { body: {} } };
    const controller = new HelloController(app);

    // act
    controller.hello(<Oak.Context>ctx);

    // assert
    asserts.assertEquals(ctx.response.body, "Hello World!");
  },
});
