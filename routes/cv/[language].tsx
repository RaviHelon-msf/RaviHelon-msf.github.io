import { PageProps, Handlers } from "$fresh/server.ts";
import Tcc from './tcc.tsx';

export default function GreetPage(props: PageProps) {
  const { language } = props.params;

  return (
    <>
      <div class="bg-[#0D0208] h-full w-full p-[10%] flex flex-col gap-[50px]">
        <Tcc />
      </div>
      
    </>
    
  );
}
