import { PageProps, Handlers } from "$fresh/server.ts";
import { Tcc } from './tcc.tsx';

export default function GreetPage(props: PageProps) {
  const { language } = props.params;

  return (
    <Tcc />
  );
}
