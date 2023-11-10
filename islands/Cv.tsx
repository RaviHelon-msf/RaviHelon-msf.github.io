import { PageProps, Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Entry, {Role} from '$home/components/cv/entry.tsx';

// import exp_data from "$home/static/cv/entries.json" with {type:"json"};
// import edu_data from "$home/static/cv/edu.json" with {type:"json"};

export const handler:Handlers = {
  async GET (res,ctx){
    try{
      const exp_data = await import("$home/static/cv/entries.json");
      const edu_data = await import("$home/static/cv/edu.json");

      const entries: Role[] = Object.values(exp_data);
      const edu: Role[] = Object.values(edu_data);

      const params = {entries, edu}

      return await ctx.render({ params })
    }
    catch(error){
      console.error("Error loading JSON data:", error);
      return await ctx.render({status: 500, body: "Internal Server Error"});
    }
    
  }
}


export function Cv({params = {} }: PageProps) {
  const [isActive, setActive] = useState(true);

  const entries = params.entries || [];
  const edu = params.edu || [];


  return (
    <>
      <div class="bg-[#0D0208] h-full w-full p-[10%] flex flex-col gap-[50px]">
        <button class="text-[#008f11]" onClick={() => setActive((prevState) => !prevState)}> {isActive?"Experiência":"Educação"} </button>
        {isActive ? entries.map((item,index) => (<Entry {...item}/>)): edu.map((item,index) => (<Entry {...item}/>))}
      </div>
    </>
    
  );
}

export default Cv;
