import { PageProps, Handlers } from "$fresh/server.ts";
import Cv from "$home/islands/Cv.tsx";
import MyHeader from "$home/components/MyHeader.tsx";

export default function CvPage(props: PageProps) {
  const { language } = props.params;

  return (
    <>
      <MyHeader />
      <Cv />
    </>
    
  );
}
