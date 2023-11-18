import { useState, useEffect } from 'preact/hooks';

interface Repository {
    name: string;
    description: string;
    url: string;
}

// Define your component
export function MyGithubProjects() {
    // Define state to store the repositories
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from GitHub API when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://api.github.com/users/RaviHelon-msf/repos`);

                if (!resp.ok) {
                    throw new Error('An error occurred while fetching data');
                }

                const data = await resp.json();
                // Map the data to the Repository interface
                const mappedData: Repository[] = data.map((repo: any) => ({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                }));

                setRepositories(mappedData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    // Render the component
    return (
        <>
            <section> 
                <h1 class = "font-outline flex items-center justify-center p-2 text-5xl text-center pt-[50px] font-extrabold text-[#008F11]"> Alguns dos meus projetos pessoais </h1>
                
                {error ?
                (
                    <h2>{error}</h2>
                ) : (
                    <ul class="h-full w-full flex flex-col gap-3 px-[50px] py-[20px]">
                        {repositories.map((repo) => (
                            <li key={repo.name} class="flex flex-col px-[10%] py-[1%] border border-[#003B00] hover:border-[#008f11] text-[#008f11] hover:text-[#00ff41]">
                                <strong class="font-outline flex items-center justify-center p-2 text-3xl font-extrabold">{repo.name}</strong>
                                <p class="text.outline py-1">{repo.description}</p>
                                <a href={repo.url} target="_blank" rel="noopener noreferrer" class="border rounded-xl md:w-[200px] w-[100px] md:h-[30px] hover:border-white border-[#008f11] text-center">
                                    View on GitHub
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
};

export default MyGithubProjects