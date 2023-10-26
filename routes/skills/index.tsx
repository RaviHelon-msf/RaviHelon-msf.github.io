import MyHeader from "$home/components/MyHeader.tsx";

export function MySkills () {

    return (
        <>
            <MyHeader />
            <section 
                class="flex flex-col w-full items-center gap-0 pt-5 p-0">
                <figcaption class="opacity-100 text-center text-xl font-bold text-[#008F11]"> Habilidades Tecnicas: </figcaption>  
                <figure class="relative">
                    <div 
                        class="absolute inset-0 bg-center bg-no-repeat bg-contain md:bg-auto" 
                        style="
                            background-image: url(/Cloudy.png);
                            opacity: 12%;                            
                            "></div>
                    <object data="/skills.svg" type="image/svg+xml" class ="hidden md:block opacity-100">
                        Your browser does not support SVG
                    </object>
                    <object data="/skills_small.svg" type="image/svg+xml" class ="md:hidden opacity-100">
                        Your browser does not support SVG
                    </object>
                </figure>
            </section>

            <section class="px-8 flex flex-col text-left text-base font-extralight text-[#00FF41]">
                <h2 class="mt-4 text-center text-xl font-bold text-[#008F11]"> 
                    Habilidades interpessoais: 
                </h2> 
                <ul class="list-disc">
                    <li class = "py-5 pl-3">
                        <p> <b>AI-Powered</b>: Sei usar o google e ferramentas de Inteligência Artifical</p>
                        <p class="text-xs text-right pr-[5%]">"<i>Nenhuma IA vai roubar seu emprego. Uma pessoa usando uma IA vai.</i>" - Richard Baldwin</p>
                    </li>
                    <li class = "py-5 pl-3">
                        <p> <b>Aprendizado</b>: Gosto de estudar e aprender sobre as mais diferentes áreas</p>
                        <p class="text-xs text-right pr-[5%]">"<i>Excelência é uma arte conquistada através de prática e hábito. Não agimos corretamente porque temos virtude ou excelência, mas sim porque agimos corretamente. Nós somos o que repetidamente fazemos. Excelência, então, não é um ato, mas um hábito.</i>" - Aristóteles</p>
                    </li>
                    <li class = "py-5 pl-3">
                        <p> <b>Mentalidade</b>: Tenho mentalidade prática e voltada a soluções</p>
                        <p class="text-xs text-right pr-[5%]">"<i>Não fuja de coisas desagradáveis para abraçar coisas agradáveis. Coloque as mãos na terra. Enfrente as dificuldades e desenvolva uma nova felicidade.</i>" - Thich Nhat Hanh</p>
                    </li>
                </ul>
                <h2 class="mt-4 text-center text-xl font-bold text-[#008F11]"> 
                    Linguagens:
                </h2>
            </section>

        </>
    )

}

export default MySkills