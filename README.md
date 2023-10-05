# RaviHelon-msf.github.io
Meu site =)


### Understanding project structure

This code uses:

1. [Deno](https://deno.land/) as runtime
2. [Preact](https://preactjs.com/) as rendering engine
3. [Fresh](https://fresh.deno.dev/) as meta framework.
4. [Deco.cx](https://www.deco.cx/) as CMS, A/B Tester and Analytics

To better encapsulate the store's code and separate it from framework specific
code, all HTML generator code was placed into `components` folder, whereas all
logic related code was placed under `sdk`. This means that UI elements, like
product shelves, footer, header, product galleries etc are all placed into
`components` whereas code for computing the prices, adding to cart etc are
placed under `sdk`. Other folders are framework-specific glue code, and serve
for:

1. `islands`: Fresh based folder for adding JavaScript to the frontend. More
   info at [Fresh's docs](https://fresh.deno.dev/docs/concepts/islands)
1. `routes`: Fresh based folder for responding custom routes to the store. More
   info at [Fresh's docs](https://fresh.deno.dev/docs/concepts/routes)
1. `static`: Fresh based folder for serving static content (assets). Check out
   [Fresh's docs](https://fresh.deno.dev/docs/concepts/static-files)
1. `import_map.json`: File containing your dependencies. Check out
   [Deno's docs](https://deno.land/manual@v1.31.0/basics/import_maps)
1. `tailwind.config.ts`: tailwindcss configuration file.
   [tailwind docs](https://tailwindcss.com/)
