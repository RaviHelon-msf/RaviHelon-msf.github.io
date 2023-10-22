import { PageProps, Handlers } from "$fresh/server.ts";
import Cv from "Cv.tsx";

export default function CvPage(props: PageProps) {
  const { language } = props.params;

  return (
    <>
      <main>
        <Cv />
      </main>
    </>
  );
}
