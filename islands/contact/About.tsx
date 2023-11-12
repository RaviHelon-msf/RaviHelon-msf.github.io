import { useState } from "preact/hooks";

export function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [parties, setParties] = useState(["Yourself"]);
  const [submitted, setSubmitted] = useState(false);

  const submitProject = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleInput = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setProjectName(sanitizedInput);
  }

  return (
    <main class="pt-7 flex flex-col gap-4 w-full min-h-[150px] px-[10%] py-[3%] text-[#10b981] items-start justify-center">
      {(!submitted)?(
          <>
            <h1 class="w-full font-bold text-center text-3xl h-[50px]" > 
              Quer trabalhar comigo? 
            </h1>
            <form onSubmit={submitProject}>
              <label>
                Project Name:
                <input
                  type="text"
                  value={projectName}
                  onInput={handleInput}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
      ) : (
        <>
          <h1 class="w-full font-bold text-center text-3xl h-[50px]" > Project: { projectName } </h1>
        </>
      )}
    </main>
  );
}

export default ProjectForm;
