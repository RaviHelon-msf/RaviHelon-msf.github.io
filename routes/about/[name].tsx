import { PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";

export default function About(props: PageProps) {
    const { name } = props.params;
    return (
      <main>
        <p>Greetings to you, {name}!</p>
      </main>
    );
  }