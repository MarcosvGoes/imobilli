import { currentYear } from "@/utils/dateTime"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#110e0b] w-screen h-full">
            <main className="text-white max-w-[90%] mx-auto gap-y-10 py-10 gap-x-5 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/*<section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Comprar</h2>
                    <ul className="ml-2 font-medium mt-2 text-xl">
                        <li className="py-2"><Link href={'/'}>Compra</Link></li>
                        <li className="py-2"><Link href={'/'}>Compra Financiada</Link></li>
                        <li className="py-2"><Link href={'/'}>Compre com Segurança</Link></li>
                        <li className="py-2"><Link href={'/'}>Guia do Comprador</Link></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Vender</h2>
                    <ul className="ml-2 font-medium mt-5 text-md md:text-lg">
                        <li className="py-2"><Link href={'/'}>Venda</Link></li>
                        <li className="py-2"><Link href={'/'}>Venda Financiada</Link></li>
                        <li className="py-2"><Link href={'/'}>Venda com Segurança</Link></li>
                        <li className="py-2"><Link href={'/'}>Guia do Vendedor</Link></li>
                    </ul>
                </section> */}
                <section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Alugar</h2>
                    <ul className="ml-2 font-medium mt-2 text-md md:text-lg">
                        <li className="py-2"><Link href={'/'}>Alugue</Link></li>
                        <li className="py-2"><Link href={'/'}>Gestão de Aluguel Imobilli</Link></li>
                        <li className="py-2"><Link href={'/'}>Alugue com Segurança</Link></li>
                        <li className="py-2"><Link href={'/'}>Guia do Locador</Link></li>
                        <li className="py-2"><Link href={'/'}>Guia do Locatário</Link></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Gerir Aluguel</h2>
                    <ul className="ml-2 font-medium mt-2 text-md md:text-lg">
                        <li className="py-2"><Link href={'/'}>Gerencie seu Aluguel</Link></li>
                        <li className="py-2"><Link href={'/'}>Automatize seu Pagamento</Link></li>
                        <li className="py-2"><Link href={'/'}>Automatize seu Recebimento</Link></li>
                        <li className="py-2"><Link href={'/'}>Reduza sua Inadimplência</Link></li>
                        <li className="py-2"><Link href={'/'}>Guia de Gestão de Aluguel</Link></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Ajuda</h2>
                    <ul className="ml-2 font-medium mt-2 text-md md:text-lg">
                        <li className="py-2"><Link href={'/'}>Contate Nos</Link></li>
                        <li className="py-2"><Link href={'/'}>Dúvidas Frequentes</Link></li>
                        <li className="py-2"><Link href={'/'}>Problemas com Pagamento</Link></li>
                        <li className="py-2"><Link href={'/'}>Problemas com Recebimento</Link></li>
                        <li className="py-2"><Link href={'/'}>Financiamento não Aprovado</Link></li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl lg:text-4xl mb-1 font-semibold">Sobre Nós</h2>
                    <ul className="ml-2 font-medium mt-2 text-md md:text-lg">
                        <li className="py-2"><Link href={'/'}>Quem Somos</Link></li>
                        <li className="py-2"><Link href={'/'}>Nossa Visão</Link></li>
                        <li className="py-2"><Link href={'/'}>Trabalhe Conosco</Link></li>
                    </ul>
                </section>
            </main>
            <section className="bg-white border-white text-center w-screen">
                <div className="flex justify-between mx-auto max-w-[90%] text-white py-3">
                <Link className="hover:scale-105" href="/"><Image src="icons/imobilli.svg" height={60} width={60} alt="Imobbili Logo" /></Link>
                <ul className="flex gap-x-3 items-center text-center">
                <Link className="hover:scale-105" target="_blank" href={"https://www.instagram.com/imobilli_/"}><i className="uil uil-instagram text-black text-xl"></i></Link>
                <Link className="hover:scale-105" target="_blank" href={"#"}><i className="uil uil-facebook-f text-black text-xl"></i></Link>
                <Link className="hover:scale-105" target="_blank" href={"#"}><i className="uil uil-youtube text-black text-xl"></i></Link>
                <Link className="hover:scale-105" target="_blank" href={"#"}><Image src="/icons/x.svg" alt="logo x icon" width={15} height={15}/></Link>
                </ul>
                </div>
                <p className="font-semibold text-sm pb-3">Copyright © {currentYear}</p>
            </section>
        </footer>
    )
}