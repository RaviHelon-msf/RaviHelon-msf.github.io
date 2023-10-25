import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ravi Helon</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>
      </head>
      <body class="relative bg-[#0D0208]">
        <div class="absolute inset-0 z-[-1]"
        style="
        background-position: 50%;
        background-image: url('https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif');
        opacity:0.15
        "></div>
        <Component />
      </body>
    </html>
  );
}
