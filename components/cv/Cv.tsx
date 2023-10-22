import { PageProps, Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Entry, {Role} from 'entry.tsx';

import exp_data from "$home/static/cv/entries.json" with {type:"json"};
import edu_data from "$home/static/cv/edu.json" with {type:"json"};

export const handler:Handlers = {
  async GET (res,ctx){
    
    const entries: Role[] = Object.values(exp_data);
    const edu: Role[] = Object.values(edu_data);

    const params = [{"entries": entries},{"edu": edu}]

    return await ctx.render()
  }
}


export default function Cv({params}: PageProps) {
  const [isActive, setActive] = useState(true);

  return (
    <>
      <div class="bg-[#0D0208] h-full w-full p-[10%] flex flex-col gap-[50px]">
        <button class="text-[#008f11]" onClick={() => setActive((prevState) => !prevState)}> {isActive?"Experiência":"Educação"} </button>
        {isActive ? params.entries.map((item,index) => (<Entry {...item}/>)): params.edu.map((item,index) => (<Entry {...item}/>))}
      </div>
    </>
    
  );
}
