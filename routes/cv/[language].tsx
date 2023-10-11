import { PageProps, Handlers } from "$fresh/server.ts";
import Entry, {Role} from './entry.tsx';



export default function GreetPage(props: PageProps) {
  const tcc: Role = {
    name: 'Engenheiro de dados - Estagiário',
    at: 'Universidade Federal de Campina Grande/LIEC & Petrobrás',
    description: 'Sistema para manutenção preditiva para motores elétricos a partir de dados de vibração utilizando técnicas de aprendizado de máquina.',
    tags: ['Data' , 'Python','ML','ETL','Power BI'],
    atrib: ['Desenvolvimento de plataforma de testes', 
        'Design dos experimentos',
        'Coleta e tratamento de dados',
        'Escolha e avaliação de modelos para aprendizado de máquina',
        'Determinação de hiper-parâmetros para os modelos',
        'Fine-tuning dos modelos',
        'Avaliação da performance dos modelos',
        'Interface utilizando Power BI de forma a orientar usuários de acordo com saúde do equipamento',
        'Apresentação, inclusive em contexto científico, dos resultado obtido'],
    sDate: 'may. 2017', 
    eDate: 'jan. 2020',
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
