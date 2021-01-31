import { Oak } from "../deps.ts";
import { assertEquals } from "https://deno.land/std@0.84.0/testing/asserts.ts";

import { app } from "../app.ts";
import { HelloController } from "./HelloController.ts";

Deno.test({
  name: "should return Hello World when calling hello",
  fn(): void {
    // arrange
    const ctx = { response: { body: {} } };
    const controller = new HelloController(app);

    // act
    controller.hello(<Oak.Context> ctx);

    // assert
    assertEquals(ctx.response.body, "Hello World!");
  },
});
