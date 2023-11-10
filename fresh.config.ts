import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts";

import { Context } from "./routes/_middleware.ts";

await Context.init();

export default defineConfig({
  plugins: [twindPlugin(twindConfig)]
});
