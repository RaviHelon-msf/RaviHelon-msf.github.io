import { useState } from "preact/hooks";

export function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [objectives, setObjectives] = useState([]);
  const [objective, setObjective] = useState("");
  
  const [entregas, setEntregas] = useState([]);
  const [entrega, setEntrega] = useState("");
  
  const [techStacks, setTechStacks] = useState([]);
  const [techStack, setTechStack] = useState("");
  
  const [custos, setCustos] = useState([]);
  const [custo, setCusto] = useState("");
  
  const [timelines, setTimelines] = useState([]);
  const [timeline, setTimeline] = useState("");
  
  const [Criterios, setCriterios] = useState([]);
  const [Criterio, setCriterio] = useState("");
  
  const [riscos, setRiscos] = useState([]);
  const [risco, setRisco] = useState("");
  
  const [interessados, setInteressados] = useState([]);
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
      <h1 class="w-full font-bold text-center text-3xl h-[50px]" > 
        Quer trabalhar comigo? 
      </h1>
      {(!submitted)?(
          <>
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
          <section class="flex flex-row w-full min-h-[500px] px-[20px] justify-between overflow-hidden">
            
            <div class="bg-[#0D0208] flex flex-col w-[70%] gap-3 pt-[20px]">
              <h1 class="w-full font-bold text-center text-3xl h-[50px] bg-[#0D0208]" > Project: { projectName } </h1>
              <p class = "pt-[20px]"> Data de início: TBD </p>
              <p class = "pt-[20px]"> Data de conclusão: TBD </p>
              <h2 class = "pt-[20px]"> Objetivos: </h2>
              <ol class = "flex flex-col list-disc pt-0 ml-[10px] pl-[10px] gap-2">{objectives.map((obj, index) => (
                  <li>{obj}</li>
              ))}</ol>
            </div>

            <aside class="w-[25%] bg-gradient-to-b from-[#0D0208] via-transparent to-[#0D0208] bg-opacity-5 pt-[20px] border-[#0D0208] px-[1%]">
              
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
            
            </aside>
          </section>
        </>
      )}
    </main>
  );
}

export default ProjectForm;
