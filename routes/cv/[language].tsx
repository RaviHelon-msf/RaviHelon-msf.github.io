import { PageProps, Handlers } from "$fresh/server.ts";
import Cv from "../../islands/Cv.tsx";

export default function CvPage(props: PageProps) {
  const { language } = props.params;

  return (
    <>
      <Cv />
    </>
    
  );
}
