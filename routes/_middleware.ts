import { MiddlewareHandlerContext } from "$fresh/server.ts";

export interface State {
  context: Context;
}

export class Context {
  private static context: Context;
  private complicatedStartupValue: number;

  public constructor() {
    console.log("i'm logged during initialization, and not during handling!");
    // presumably this involves connecting to a
    // database or doing some heavy computation
    this.complicatedStartupValue = 42;
  }

  public static async init() {
    Context.context = new Context();
  }

  public static instance() {
    if (this.context) return this.context;
    else throw new Error("Context is not initialized!");
  }
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.context = Context.instance();
  if (ctx.destination === "route") {
    console.log("i'm logged during a request!");
    console.log(ctx.state.context);
  }
  const resp = await ctx.next();
  return resp;
}