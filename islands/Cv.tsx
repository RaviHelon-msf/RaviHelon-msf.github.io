import { Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Entry, {Role} from '$home/components/cv/entry.tsx';

import exp_data from "$home/static/cv/entries.json" with {type:"json"};
import edu_data from "$home/static/cv/edu.json" with {type:"json"};

const entries: Role[] = Object.values(exp_data);
const edu: Role[] = Object.values(edu_data);

export default function Cv() {
  const [isActive, setActive] = useState(true);

  return (
    <>
      <div class="bg-[#0D0208] w-full py-[3%] px-[10%] flex flex-col gap-[50px]">
        <button class="text-[#008f11]" onClick={() => setActive((prevState) => !prevState)}> {isActive?"Experiência":"Educação"} </button>
        {isActive ? entries.map((item,index) => (<Entry {...item}/>)): edu.map((item,index) => (<Entry {...item}/>))}
      </div>
    </>
    
  );
}
