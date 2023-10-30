import { Handlers } from "$fresh/server.ts";
import MyHeader from "$home/components/MyHeader.tsx";



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
  email: string
  hireable: boolean
  bio: string
}
  
export default async function About(_req: Request) {
  const resp = await fetch(
    `https://api.github.com/users/RaviHelon-msf`,
  );

  if (!resp.ok) {
    return ( 
      <>
        <MyHeader /> 

        <h1> An Error occurred {resp.ok}</h1>
      </>
    );
  }

  const { url, name, avatar_url, email, hireable, bio } = (await resp.json()) as GitHubResponse;
  return(
    <>
      <MyHeader />
      <section class="flex flex-col text-green-500 px-[10%] py-[3%] gap-4">
        <h1 class = "font-bold text-xl justify-center flex"> Redes sociais </h1>
        <a href="https://www.github.com/RaviHelon-msf" class=" flex flex-row items-center">
            <img src="/contact/github.svg" alt="github" class = "w-[50px] h-[50px]" />
            <p> RaviHelon-msf </p>
        </a>

        <a href="https://www.linkedin.com/in/ravi-helon" class=" flex flex-row items-center">
            <img src="/contact/linkedin.svg" alt="linkedin" class = "w-[50px] h-[50px]" />
            <p> /in/ravi-helon</p>
        </a>

        <a href="mailto:ravihelon@gmail.com" class=" flex flex-row items-center">
            <img src="/contact/gmail.svg" alt="gmail" class = "w-[50px] h-[50px]" />
            <p> ravihelon@gmail.com </p>
        </a>

        <a href="tel:+5583986695155" class=" flex flex-row items-center">
            <img src="/contact/whatsapp-logo.svg" alt="whatsapp" class = "w-[50px] h-[50px]" />
            <p> +55 (83) 9 8669-5155 </p>
        </a>
      </section>
    </>
  );
}

