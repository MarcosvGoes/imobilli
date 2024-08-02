export default function About() {
    return (
        <main className="text-center grid gap-y-10 my-10 max-w-[90%] mx-auto">
            <h1 className="text-raisin-black font-semibold text-3xl">Sobre Nós</h1>
            <div className="p-5 bg-white rounded-xl">
                <h1 className="text-xl font-semibold">Quem Somos</h1>
                <p className="text-justify pt-4">Somos uma equipe apaixonada por tecnologia e inovação, comprometida em criar soluções que fazem a diferença. Combinando expertise tecnológica, experiência no mercado imobiliário e uma compreensão das necessidades dos usuários, desenvolvemos uma plataforma que coloca a locação imóveis na palma da sua mão.</p>
            </div>
            <div className="bg-raisin-black p-5 text-white rounded-xl">
                <h1 className="text-xl font-semibold">Missão</h1>
                <p className="text-justify pt-4">Nossa missão é transformar a experiência de administrar imóveis, tornando-a mais simples, segura e eficiente para proprietários e inquilinos. Acreditamos que o processo de aluguel e administração de propriedades pode ser simplificado através da tecnologia, facilitando a vida de todos os envolvidos.</p>
            </div>
            <div className="p-5 bg-white rounded-xl">
                <h1 className="text-xl font-semibold">O Que Fazemos</h1>
                <p className="text-justify pt-4">Nossa plataforma oferece uma solução integrada para proprietários e inquilinos. Permitimos que proprietários cadastrarem seus imóveis e acompanhem todo o ciclo de locação de forma digital. Desde a assinatura eletrônica de contratos, passando pelo acompanhamento de pagamentos e cobranças, até o repasse automático de aluguéis — tudo é facilitado através de uma única interface.</p>
            </div>
            <div className="bg-raisin-black p-5 text-white rounded-xl">
                <h1 className="text-xl font-semibold">Como Podemos Ajudar</h1>
                <div>
                    <h1 className="text-lg text-left pt-5 pb-2 font-semibold">Para Proprietários:</h1>
                    <ul className="text-justify list-disc pl-[5%]">
                        <li><strong className="font-semibold">Facilidade:</strong> Cadastre seus imóveis e acompanhe todos os detalhes em um só lugar.</li>
                        <li><strong className="font-semibold">Automação de Pagamentos:</strong> Controle e rastreie pagamentos de forma segura e eficiente.</li>
                        <li><strong className="font-semibold">Transparência:</strong> Acesse relatórios detalhados e mantenha controle sobre os contratos e repasses.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg text-left pt-5 pb-2 font-semibold">Para Inquilinos:</h1>
                    <ul className="text-justify list-disc pl-[5%]">
                        <li><strong className="font-semibold">Simplicidade na Locação:</strong> Encontre e alugue imóveis com facilidade, assinando contratos eletronicamente.</li>
                        <li><strong className="font-semibold">Pagamentos Práticos:</strong> Controle e rastreie pagamentos de forma segura e eficiente.</li>
                        <li><strong className="font-semibold">Alternativas de Pagamentos:</strong> Tenha em mãos mais de uma opção de forma de pagamento para evitar inadimplência.</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}