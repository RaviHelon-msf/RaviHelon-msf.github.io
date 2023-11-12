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
              <h1 class="text-[#00FF41] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-6 text-3xl md:text-5xl font-bold">
                Ravi Helon de Melo Serafim Ferreira
              </h1>
              <h3 class="text-emerald-400 mb-8 text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                Engenharia de Dados e TI
              </h3>
              <ul class="flex shadow shadow-[#3d3a4b] flex-row items-center gap-[4vw] justify-center">
                <li>
                <a
                    class="hover:text-[#00FF41] text-[#008F11] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.CV}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 md:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <p class="hidden md:block drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Currículo</p>
                  </a>
                  
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF41] text-[#008F11] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.SKILLS}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 md:hidden">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                    <p class="hidden md:block">Habilidades</p>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF41] text-[#008F11] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.PORTFOLIO}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 md:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                    <p class="hidden md:block">Portfólio</p>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-[#00FF41] text-[#008F11] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-3xl h-[4vw]"
                    href={ROUTE.CONTATO}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 md:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <p class="hidden md:block">Contato</p>
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
