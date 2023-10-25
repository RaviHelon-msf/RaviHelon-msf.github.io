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
                        class="absolute inset-0 bg-center bg-no-repeat" 
                        style="
                            background-image: url(/Cloudy.png); 
                            background-size: auto;
                            opacity: 12%;                            "
                            ></div>
                    <object data="/skills.svg" type="image/svg+xml" class ="opacity-100">
                        Your browser does not support SVG
                    </object>
                </figure>
            </section>

            <section class="px-8 flex flex-col text-left text-base font-extralight text-[#00FF41]">
                <h2 class="mt-4 text-center text-xl font-bold text-[#008F11]"> 
                    Habilidades interpessoais: 
                </h2> 
                <ul class="list-disc">
                    <li>
                        <p> <b>AI-Powered</b>: Sei usar o google e ferramentas de Inteligência Artifical</p>
                        <p>"Nenhuma IA vai roubar seu emprego. Uma pessoa usando uma IA vai."</p>
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