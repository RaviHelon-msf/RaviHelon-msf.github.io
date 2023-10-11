export interface Role {
    name?:string;
    at?: string;
    description?:string;
    tags?: string[];
    atrib?: string[];
}


const tcc: Role = {
    name: 'Template role name',
    at: 'Template employer',
    description: 'template description',
    tags: ['TemplateTag1' , 'TemplateTag2'],
    atrib: 
        ['TemplateAtrib1', 
        'TemplateAtrib2'],
}

export default function Entry(role: Role = tcc) {
    if(role){role={...tcc,...role}}

    return(
        <>
          <div class="">
            <h1 class="font-outline flex items-center justify-center p-2 text-3xl font-extrabold text-[#008F11]">{role.name}</h1>
            <p class="text.outline py-1 text-[#008f11]"><span class="text-[#003B00]">@</span> {role.at}</p>
            <p class="text.outline py-1 text-[#008f11]"><span class="text-[#003B00]">@</span> Petrobrás</p>
            <h2 class="py-1 text-base font-extralight text-[#00FF41]">{role.description}</h2>
            <div class="flex w-full py-1 justify-between">
                <ul class="list-disc pl-4 text-sm font-extralight text-[#00FF41]">
                    <li>
                    <p>Desenvolvimento de plataforma de testes</p>
                    </li>
                    <li>
                    <p>Design dos experimentos</p>
                    </li>
                    <li>
                    <p>Coleta e tratamento de dados</p>
                    </li>
                    <li>
                    <p>Escolha e avaliação de modelos para aprendizado de máquina</p>
                    </li>
                    <li>
                    <p>Determinação de hiper-parâmetros para os modelos</p>
                    </li>
                    <li>
                    <p>Fine-tuning dos modelos</p>
                    </li>
                    <li>
                    <p>Avaliação da performance dos modelos</p>
                    </li>
                    <li>
                    <p>Interface utilizando Power BI de forma a orientar usuários de acordo com saúde do equipamento</p>
                    </li>
                    <li>
                    <p>Apresentação, inclusive em contexto científico, dos resultado obtido</p>
                    </li>
                </ul>
                <ul class="w-[15%] text-left text-[#00FF41]">
                    <li><button class="hover:animate-pulse">Data</button></li>
                    <li><button class="hover:animate-pulse">Python</button></li>
                    <li><button class="hover:animate-pulse">ML</button></li>
                    <li><button class="hover:animate-pulse">ETL</button></li>
                    <li><button class="hover:animate-pulse">Power BI</button></li>
                </ul>
                </div>
            <div class="flex justify-between px-[25%] py-1 text-center text-xs text-[#00FF41]"><span>may. 2017</span><span> jan. 2020</span></div>
          </div>
        </>
    )
}