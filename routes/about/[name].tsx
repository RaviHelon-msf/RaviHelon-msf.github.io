import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "$home/islands/Counter.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;

  const date = new Date();
  date.setHours(date.getHours() + 1);
  
  return (
    <>
      <div>
        <form>
          <input type="text" name="q" value={query} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <p>
        The big event is happening <Counter target={date.toISOString()} />.
      </p>    
    </>
  );
}
