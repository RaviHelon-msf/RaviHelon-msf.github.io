/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";
import { Application, Router } from "$fresh/mod.ts"

await start(manifest, config);

const app = new Application()
const router = new Router()

const exp_data = JSON.parse(await Deno.readTextFile("../../static/cv/entries.json"));

router.get("/api/entries",(ctx) => {ctx.response.body = exp_data});


app.use(router.routes());
app.use(router.allowedMethods());