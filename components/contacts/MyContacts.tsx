export function MyContacts () {
    return (
        <>
            <section class="flex flex-col text-green-500 px-[10%] py-[3%] gap-4">
                <h1 class = "font-bold text-xl justify-center flex"> Redes sociais </h1>
                <a href="https://www.github.com/RaviHelon-msf" class=" flex flex-row items-center">
                    <img src="/contact/github.svg" alt="github" class = "w-[50px] h-[50px]" />
                    <p> RaviHelon-msf </p>
                </a>

                <a href="https://www.linkedin.com/in/ravi-helon" class=" flex flex-row items-center">
                    <img src="/contact/linkedin.svg" alt="linkedin" class = "w-[50px] h-[50px]" />
                    <p> /in/ravi-helon</p>
                </a>

                <a href="mailto:ravihelon@gmail.com" class=" flex flex-row items-center">
                    <img src="/contact/gmail.svg" alt="gmail" class = "w-[50px] h-[50px]" />
                    <p> ravihelon@gmail.com </p>
                </a>

                <a href="tel:+5583986695155" class=" flex flex-row items-center">
                    <img src="/contact/whatsapp-logo.svg" alt="whatsapp" class = "w-[50px] h-[50px]" />
                    <p> +55 (83) 9 8669-5155 </p>
                </a>
            </section>
        </>
    );
}

export default MyContacts;