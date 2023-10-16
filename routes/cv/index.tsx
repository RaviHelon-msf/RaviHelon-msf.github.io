import { Handlers, PageProps } from "$fresh/server.ts";
//import {Role} from '../../components/entry.tsx';
import { useState } from "https://esm.sh/preact@10.15.1/hooks";

import data from "$home/static/cv/entries.json" with {type:"json"}
const entries: Role[] = Object.values(data);
type User = {
  id: string;
  name: string;
};

// Simple in-memory storage as an alternative
const inMemoryStorage: User[] = [];

export const handler: Handlers<User | null> = {
    async GET(_req, _ctx) {
        const users = inMemoryStorage;
        return new Response(JSON.stringify(users));
    },
    async POST(req, _ctx) {
        const user = (await req.json()) as User;
        inMemoryStorage.push(user);
        return new Response(JSON.stringify(user));
    },
};

// export const handler: Handlers <Role | null> = {
//     async GET(req, ctx) {
//         return await ctx.render();
//     },
//     async POST(req, ctx) {
//         const form = await req.formData();

//         const name = form.get("name")?.toString();
//         const at = form.get("at")?.toString();
//         const description = form.get("description")?.toString();
//         const tags = form.get("tags")?.toString();
//         const atrib = form.get("atrib")?.toString();
//         const sDate = form.get("sDate")?.toString();
//         const eDate = form.get("eDate")?.toString();
        
//         const role = (await req.json()) as Role;
//         const userKey = 
//         return new Response(JSON.stringify(role));
//     },
//   };


export default function Page() {
       // ...
        const [username, setUsername] = useState("");
        const [id, setId] = useState("");

        const handleUsernameChange = (e) => {
            setUsername(e.target.value);
        };

        const handleIdChange = (e) => {
            setId(e.target.value);
        };

        const handleSubmit = async (e) => {
          e.preventDefault(); // Prevent the default form submission
      
          const formData = {
            username,
            id,
          };
      
          try {
            const response = await fetch("/saveUserData", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              // Handle success, e.g., show a success message
            } else {
              // Handle errors
            }
          } catch (error) {
            // Handle network errors
          }
        };
            
    return (
        <div>
            <form class="flex flex-col items-center justify-center gap-4 p-8">
                <input type="text" name="username" value={username} class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="username" />
                <input type="text" name="id" value={id} class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="id" />
                
                {/* <input type="text" name="name" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="name" />
                <input type="text" name="at" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="at" />
                <input type="text" name="description" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="description" />
                <input type="text" name="tags" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="tags" />
                <input type="text" name="atrib" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="atrib" />
                <input type="text" name="sDate" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="sDate" />
                <input type="text" name="eDate" class="w-[300px] border bg-[#00FF41] placeholder:text-[#008F11] px-[10px] border-[#008f11] text-[#0d0208]" placeholder="eDate" /> */}
                <button type="submit" class="border border-[#00FF41] text-[#00FF41] px-7 py-1">Submit</button>
            </form>
        </div>
    );
}