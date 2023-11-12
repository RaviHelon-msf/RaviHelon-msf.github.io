import { useState } from "preact/hooks";

export function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [parties, setParties] = useState(["Yourself"]);
  const [submitted, setSubmitted] = useState(false);
  const [objectives, setObjectives] = useState([]);
  const [objective, setObjective] = useState("")

  const submitProject = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleProject = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setProjectName(sanitizedInput);
  }

  const handleObjectives = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setObjective(sanitizedInput);
  }

  const submitObjective = (e) => {
    setParties((prevParties) => [...prevParties, objective]);
    setObjective('')
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
                  class="bg-[#0D0208] border border-[#003b00]"
                />
              </label>
              <button type="submit" class="border border-[#0d0208] hover:border-[#003b00] w-[60px] h-[25px] text-center justify-center">
                Enviar
              </button>
            </form>
          </>
      ) : (
        <>
          <h1 class="w-full font-bold text-center text-3xl h-[50px]" > Project: { projectName } </h1>
          <section class="flex flex-row w-full px-[20px]">
            <div class="flex flex-col w-[50%]" >
              <p> Data de início: TBD </p>
              <p> Data de conclusão: TBD </p>
              <h2> Objetivos: </h2>
              <ol>{objectives.map((objective, index) => (
                  <li>{party}</li>
              ))}</ol>
            </div>
            <aside class="flex flex-col w-[25%]">
              <form onSubmit={submitObjective}>
                <label>
                  Project Name:
                  <input
                    type="text"
                    value={Objectives[-1]}
                    onInput={handleObjectives}
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </aside>
          </section>
        </>
      )}
    </main>
  );
}

export default ProjectForm;
