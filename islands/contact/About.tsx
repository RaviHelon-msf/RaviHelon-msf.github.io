import { useState } from "preact/hooks";

export function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [projectScope, setProjectScope] = useState("");
  const [budget, setBudget] = useState("");
  const [parties, setParties] = useState(["Yourself"]);

  const handleProjectNameChange = (e) => {
    const value = e.target.value;
    setProjectName(value);

    // Update HTML or perform other actions with the value
    updateHtml("projectName", value);
  };

  const handleProjectScopeChange = (e) => {
    const value = e.target.value;
    setProjectScope(value);

    // Update HTML or perform other actions with the value
    updateHtml("projectScope", value);
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setBudget(value);

    // Update HTML or perform other actions with the value
    updateHtml("budget", value);
  };

  const updateHtml = (field, value) => {
    // Perform actions to dynamically update HTML based on the field and value
    console.log(`Update HTML for ${field}: ${value}`);
  };

  const addParty = () => {
    const newParty = "New Party";
    setParties((prevParties) => [...prevParties, newParty]);

    // Update HTML or perform other actions with the new party
    updateHtml("party", newParty);
  };

  return (
    <main class="flex flex-row h-[1100px] w-full px-[10%] py-[3%] text-[#008F11]">
      <form>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onInput={handleProjectNameChange}
          />
        </label>
      </form>
      {projectName && (
        <div>
          <p>Project Name: {projectName}</p>
        </div>
      )}
      <form>
        <label>
          Project Scope:
          <textarea
            value={projectScope}
            onInput={handleProjectScopeChange}
          ></textarea>
        </label>
      </form>
      {projectScope && (
        <div>
          <p>Project Scope: {projectScope}</p>
        </div>
      )}

      <form>
        <label>
          Budget:
          <input type="text" value={budget} onInput={handleBudgetChange} />
        </label>
      </form>
      {budget && (
        <div>
          <p>Budget: {budget}</p>
        </div>
      )}

      <button onClick={addParty}>Add Party</button>
      {parties.map((party, index) => (
        <div key={index}>
          <p>Party {index + 1}: {party}</p>
        </div>
      ))}
    </main>
  );
}

export default ProjectForm;
