import MyHeader from "$home/components/MyHeader.tsx";
import MyFooter from "$home/components/MyFooter.tsx";
import MyGithubProjects from "$home/islands/projects/Github.tsx"
interface Repository {
  name: string;
  description: string;
  url: string;
}

export function MyProjects(){
  return (
    <>
        <MyHeader />
        
        <MyGithubProjects />
        
        <MyFooter />
    </>
  );
};

export default MyProjects