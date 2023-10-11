import { PageProps, Handlers } from "$fresh/server.ts";
import Entry, {Role} from './entry.tsx';



export default function GreetPage(props: PageProps) {
  const tcc: Role = {
    name: 'Engenheiro de dados - Estagiário',
    at: 'Universidade Federal de Campina Grande/LIEC',
    description: 'Sistema para manutenção preditiva para motores elétricos a partir de dados de vibração utilizando técnicas de aprendizado de máquina.',
    tags: ['Data' , 'Python'],
    atrib: 
        ['Desenvolvimento de plataforma de testes', 
        'Design dos experimentos'],
  }
  const { language } = props.params;

  return (
    <>
      <div class="bg-[#0D0208] h-full w-full p-[10%] flex flex-col gap-[50px]">
        <Entry {...tcc}/>
        <Entry />
      </div>
      
    </>
    
  );
}
