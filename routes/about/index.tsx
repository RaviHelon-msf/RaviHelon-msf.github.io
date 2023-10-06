import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

interface GitHubResponse {
  url: string;
  name: string;
  avatar_url: string;
  email: string
  hireable: boolean
  bio: string
}
  
export default async function About(_req: Request) {
  const resp = await fetch(
    `https://api.github.com/users/RaviHelon-msf`,
  );

  if (!resp.ok) {
    return <h1>An Error occurred {resp.ok}</h1>;
  }

  const { url, name, avatar_url, email, hireable, bio } = (await resp.json()) as GitHubResponse;
  return(
     <div>
        <img src={avatar_url} width={64} height={64} />
        <h1>{name}</h1>
        <p>{url}</p>
        <p>{email}</p>
        <p>{bio}</p>
        <b>{ hireable ? "Disponível para novos projetos" : "Ocupado para novos projetos."}</b>
    </div>
  );
}

