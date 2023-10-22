import { useSignal } from "@preact/signals";
import { PageProps, Handlers } from "$fresh/server.ts";

export const handler:Handlers = {
    async GET(res,ctx){
        const users = [
            {name: "jose"},
            {name: "amigo"},
        ]
        return await ctx.render(users);
    }
}

export default function Teste(page: PageProps) {
    console.log(page)
        
    return (
        <>
            <h1>Testando. Testando!</h1>
            <p>{page.data[1].name}</p>    
        </>
    );
}
