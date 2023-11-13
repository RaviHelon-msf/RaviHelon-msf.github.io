import { useState } from "preact/hooks";

export function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [objectives, setObjectives] = useState([]);
  const [objective, setObjective] = useState("");
  
  const [entregas, setEntregas] = useState([]);
  const [entrega, setEntrega] = useState("");
  
  const [techStacks, setTechStacks] = useState(['Versionamento: github', 'CI/CD: github', 'Container: Docker', 'Project Manager: Github', 'Database: postgreSQL']);
  const [techStack, setTechStack] = useState("");
  
  const [custos, setCustos] = useState(['Meu contrato - R$ 200,00']);
  const [custo, setCusto] = useState("");
  
  const [timelines, setTimelines] = useState(['tbd', 'tbd', 'tbd']);
  const [timeline, setTimeline] = useState("");
  
  const [criterios, setCriterios] = useState([]);
  const [criterio, setCriterio] = useState("");
  
  const [riscos, setRiscos] = useState([]);
  const [risco, setRisco] = useState("");
  
  const [interessados, setInteressados] = useState(['Ravi Helon de Melo']);
  const [interessado, setInteressado] = useState("");

  const submitProject = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleProject = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setProjectName(sanitizedInput);
  }

  const handleInput = (setStateFunction, state, e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setStateFunction(sanitizedInput);
  }

  const submitItem = (setStateFunction, setStateFunctions, state, e) => {
    e.preventDefault();
    setStateFunctions((prevState) => [...prevState, state]);
    // Clear the input field after submission
    setStateFunction('');
  }

  return (
    <main class="pt-7 flex flex-col gap-10 w-full min-h-[300px] px-[10%] py-[3%] text-[#10b981] items-start justify-center">
      {(!submitted)?(
          <>
            <h1 class="w-full font-bold text-center text-3xl h-[50px]" > 
              Quer trabalhar comigo? 
            </h1>
            <form onSubmit={submitProject} class="items-center flex flex-col w-full gap-4">
              <label class="flex flex-row gap-3">
                <p>Project Name: </p>
                <input
                  type="text"
                  value={projectName}
                  onInput={handleProject}
                  class="bg-[#0D0208] border border-[#003b00] py-[1px] px-[5px]"
                />
              </label>
              <button 
                type="submit" 
                class="border border-[#0d0208] hover:border-[#003b00] w-[60px] h-[25px] text-center justify-center"
                >
                  Enviar
              </button>
            </form>
          </>
      ) : (
        <>      
          <h1 class="w-full font-bold text-center text-3xl h-[50px]" > 
            Adicione suas Especificações 
          </h1>    
          <section id="pdfElement" class="flex flex-row w-full min-h-[500px] px-[20px] py-[40px] justify-between overflow-hidden">
            
            <div class="bg-[#0D0208] flex flex-col w-[70%] gap-3 pt-[20px]">
              <h1 class="w-full font-bold text-center text-6xl h-[50px] bg-[#0D0208]" > Project: { projectName } </h1>
              <p class = "pt-[20px] font-semibold"> Data de início: TBD </p>
              <p class = "pt-[20px] font-semibold"> Data de conclusão: TBD </p>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Objetivos: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{objectives.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Interessados: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{interessados.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Escopo do Projeto: </h2>
              <h3 class = "pt-[20px] font-extrabold text-lg"> Entregas: </h3>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{entregas.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h3 class = "pt-[20px] font-extrabold text-lg"> Tech-Stack: </h3>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{techStacks.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h3 class = "pt-[20px] font-extrabold text-lg"> Custo: </h3>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{custos.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Critérios: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{criterios.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Linha de Tempo: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{timelines.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              <h2 class = "pt-[20px] font-extrabold text-2xl"> Riscos e Mitigação: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{riscos.map((obj, index) => (
                  <li class="font-medium text-sm">{obj}</li>
              ))}</ol>
              
            </div>

            <aside class="w-[25%] bg-gradient-to-b from-[#0D0208] via-transparent to-[#0D0208] bg-opacity-5 pt-[50px] border-[#0D0208] gap-10 flex flex-col px-[1%]">
              
              <h1 class="w-full font-bold text-center text-xl"> Especificações: </h1>
              
              <form onSubmit={(e) => submitItem(setObjective, setObjectives, objective, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Objetivo: </p>
                  <input
                    type="text"
                    value={objective}
                    onInput={(e) => handleInput(setObjective, objective, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>
              
              <form onSubmit={(e) => submitItem(setInteressado, setInteressados, interessado, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Interessado: </p>
                  <input
                    type="text"
                    value={interessado}
                    onInput={(e) => handleInput(setInteressado, interessado, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>
              
              <form onSubmit={(e) => submitItem(setEntrega, setEntregas, entrega, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Entrega: </p>
                  <input
                    type="text"
                    value={entrega}
                    onInput={(e) => handleInput(setEntrega, entrega, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>
              <form onSubmit={(e) => submitItem(setTechStack, setTechStacks, techStack, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Tech Stack: </p>
                  <input
                    type="text"
                    value={techStack}
                    onInput={(e) => handleInput(setTechStack, techStack, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>

              <form onSubmit={(e) => submitItem(setCusto, setCustos, custo, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Custo: </p>
                  <input
                    type="text"
                    value={custo}
                    onInput={(e) => handleInput(setCusto, custo, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>

              {/* <form onSubmit={(e) => submitItem(setTimeline, setTimelines, timeline, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Timeline: </p>
                  <input
                    type="text"
                    value={timeline}
                    onInput={(e) => handleInput(setTimeline, timeline, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form> */}

              <form onSubmit={(e) => submitItem(setCriterio, setCriterios, criterio, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Critério: </p>
                  <input
                    type="text"
                    value={criterio}
                    onInput={(e) => handleInput(setCriterio, criterio, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>

              <form onSubmit={(e) => submitItem(setRisco, setRiscos, risco, e)} class="items-center flex flex-col gap-4">
                <label class="flex flex-col">
                  <p>Risco: </p>
                  <input
                    type="text"
                    value={risco}
                    onInput={(e) => handleInput(setRisco, risco, e)}
                    class="bg-[#0D0208] border border-[#003b00] w-full py-[1px] px-[5px]"
                  />
                </label>
              </form>
            </aside>
          </section>
          <p> Geração de PDF não está funcionando no momento. Por favor, use a função <b> ctrl + p </b> do teclado e me mande resultado por e-mail</p>
        </>
      )}
    </main>
  );
}

export default ProjectForm;
