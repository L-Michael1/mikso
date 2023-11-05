import { expect, test, describe } from "vitest";
import { createInnerTRPCContext } from "../trpc";
import { postRouter } from "./post";
import type { AppRouter } from "../root";
import type { inferProcedureInput } from "@trpc/server";

describe("Post router", () => {
  test("test hello route", async () => {
    const ctx = createInnerTRPCContext({ session: null });
    const caller = postRouter.createCaller(ctx);

    type HelloInput = inferProcedureInput<AppRouter["post"]["hello"]>;
    const input: HelloInput = { text: "world" };
    const output = await caller.hello(input);

    expect(output).toEqual({ greeting: "Hello world" });
  });
});
