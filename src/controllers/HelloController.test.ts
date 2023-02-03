import * as bdd from "std/testing/bdd.ts";
import * as asserts from "std/testing/asserts.ts";
import * as Oak from "oak/mod.ts";
import { app } from "/src/app.ts";
import { HelloController } from "controllers/HelloController.ts";

const { describe, it } = bdd;

describe("HelloController", () => {
  it("should return Hello World when calling hello handler", () => {
    // arrange
    const ctx = { response: { body: {} } };
    const controller = new HelloController(app);

    // act
    controller.hello(<Oak.Context> ctx);

    // assert
    asserts.assertEquals(ctx.response.body, "Hello World!");
  });
});
