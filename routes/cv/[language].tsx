import { PageProps, Handlers } from "$fresh/server.ts";
import Entry, {Role} from './entry.tsx';

import data from "$home/static/cv/entries.json" with {type:"json"}

const entries: Role[] = Object.values(data);

export default function GreetPage(props: PageProps) {
  const { language } = props.params;

  return (
    <>
      <div class="bg-[#0D0208] h-full w-full p-[10%] flex flex-col gap-[50px]">
        {entries.map((item,index) => (<Entry {...item}/>))}
      </div>
      
    </>
    
  );
}
