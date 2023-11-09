import { useState } from "preact/hooks";


export function ProjectForm() {
    const [projectName, setProjectName] = useState('');
    const [projectScope, setProjectScope] = useState('');
    const [budget, setBudget] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEvent = new CustomEvent("submitForm", {
          detail: { projectName, projectScope, budget },
        });
        document.dispatchEvent(formEvent);
        setSubmitted(true);
      };

    return (
            <main class="flex flex-row h-[1100px] w-full px-[10%] py-[3%] text-[#008F11]">
            <form onSubmit={handleSubmit}>
            <label>
                Project Name:
                <input type="text" value={projectName} onInput={(e) => setProjectName((e.target as HTMLInputElement).value)} required />
            </label>
            {submitted && (
                <>
                <label>
                    Project Scope:
                    <textarea value={projectScope} onInput={(e) => setProjectScope((e.target as HTMLTextAreaElement).value)}></textarea>
                </label>
                <label>
                    Budget:
                    <input type="text" value={budget} onInput={(e) => setBudget((e.target as HTMLInputElement).value)} />
                </label>
                <label>
                    Parties:
                    <input type="text" value="Yourself" readOnly />
                </label>
                </>
            )}
            <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default ProjectForm;