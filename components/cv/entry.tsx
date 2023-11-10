export interface Role {
    name?:string;
    at?: string;
    description?:string;
    tags?: string[];
    atrib?: string[];
    sDate?: string;
    eDate?: string;
}


const tcc: Role = {
    name: 'Template role name',
    at: 'Template employer',
    description: 'template description',
    tags: ['TemplateTag1' , 'TemplateTag2'],
    atrib: 
        ['TemplateAtrib1', 
        'TemplateAtrib2'],
    sDate: 'Mon.YEAR',
    eDate: 'Mon.YEAR',
}

export function Entry(role: Role = tcc) {
    if(role){role={...tcc,...role}}

    return(
        <>
          <div class="">
            <h1 class="font-outline flex items-center justify-center p-2 text-3xl font-extrabold text-[#008F11]">{role.name}</h1>
            <p class="text.outline py-1 text-[#008f11]"><span class="text-[#003B00]">@</span> {role.at}</p>
            <h2 class="py-1 text-base font-extralight text-[#00FF41]">{role.description}</h2>
            <div class="flex w-full py-1 justify-between">
                <ul class="list-disc pl-4 text-sm font-extralight text-[#00FF41]">
                {role.atrib?.map((item,index)=>(
                    <li key={index}>
                        <p>{item}</p>
                    </li>
                ))}
                </ul>
                <ul class="w-[15%] text-left text-[#00FF41]">
                {role.tags?.map((item,index)=>(
                    <li key={index}>
                        <button class = "hover:animate-pulse">{item}</button>
                    </li>
                ))}
                </ul>
                </div>
            <div class="flex justify-between px-[25%] py-1 text-center text-xs text-[#00FF41]"><span>{role.sDate}</span><span>{role.eDate}</span></div>
          </div>
        </>
    )
}

export default Entry;