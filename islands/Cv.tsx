import { useState } from "preact/hooks";
import Entry, {Role} from '$home/components/cv/entry.tsx';

export function Cv(params) {
  const [isActive, setActive] = useState(true);

  const entries = params.entries || [];
  const edu = params.edu || [];

  return (
    <>
      <div class="w-full py-[3%] px-[10%] flex flex-col gap-[50px]">
        <button class="text-[#008f11]" onClick={() => setActive((prevState) => !prevState)}> {isActive?"Experiência":"Educação"} </button>
        {isActive ? entries.map((item,index) => (<Entry {...item}/>)): edu.map((item,index) => (<Entry {...item}/>))}
      </div>
    </>
    
  );
}

export default Cv;
