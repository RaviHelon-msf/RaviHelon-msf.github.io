import { useSignal } from "@preact/signals";
import { ROUTE } from "global"

export default function LandingPage() {
  return (
    <>
      <div
        class="static z-2 flex overflow-hidden bg-cover bg-no-repeat bg-image opacity-100 delay-75 w-full h-screen"
        style="
          background-position: 50%;
          background-image: url('https://media.giphy.com/media/WoD6JZnwap6s8/giphy.gif');"
      >
        <div
          class="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="text-[#00ff00] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-6 text-5xl font-bold">
                Ravi Helon de Melo Serafim Ferreira
              </h1>
              <h3 class="text-emerald-400 mb-8 text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                Engenharia de Dados e TI
              </h3>
              <ul class="flex shadow shadow-[#3d3a4b] flex-row items-center gap-[4vw] justify-center">
                <li>
                  <a
                    class="hover:text-[#00FF00] text-[#3b93e6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.CV + navigator.language}
                  >
                    Currículo
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF00] text-[#3b93e6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.SKILLS}
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF00] text-[#3b93e6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.PORTFOLIO}
                  >
                    Portfólio
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF00] text-[#3b93e6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.CONTATO}
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
