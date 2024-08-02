import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="w-full max-w-[90%] mx-auto">
          <h1 className="text-xl text-raisin-black font-bold text-center mt-10">Simples, <br /> confiável e segura,<br /> para quem busca praticidade</h1>
          <p className="text-sm text-raisin-black text-center mt-2">Automatize cobranças, contratos e gerencie aluguéis sem dor de cabeça</p>
          <Button href="/signup" label="Cadastre-se" className="font-bold mx-auto flex mt-10" />
        </div>
        <Image className="mb-10" src='/assets/homeone.png' layout="responsive" width={100} height={100} alt="Troca de chaves por imóvel" />
      </section>
      <section className="my-20 max-w-[90%] mx-auto">
        <div className="py-10 bg-white rounded-xl">
          <h1 className="text-2xl mb-10 font-bold text-raisin-black text-center">Tem um imóvel e <br />busca facilitar a gestão ?<br />Conte com a Imobilli</h1>
          <ul className="text-raisin-black grid max-w-[90%] p-2 mx-auto font-bold rounded-lg gap-y-3">
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Cobranças automática</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Geração de contrato</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Assinatura digital</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Facilidade no pagamento</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Suporte 24h</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Maior visibilidade</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Menor burocracia</li>
            <li className="flex items-center text-md"><i className="text-2xl uil uil-check" />Repasse instantanêo</li>
          </ul>
        </div>
      </section>
      <section className="bg-[#171717] py-14">
        <div className="max-w-[90%] mx-auto">
          <h1 className="text-2xl mb-14 font-bold text-white text-center">Cobrança automatizada e repasse instantâneo</h1>
          <ul className="text-gray-300 text-center text-md grid gap-y-5">
            <li className="bg-[#272727] p-5 rounded-lg">Reduza a taxa de inadimplência com as cobranças automáticas. Venceu o aluguel ? O valor é cobrado imediatamente</li>
            <li className="bg-[#272727] p-5 rounded-lg">Escolha a data de vencimento padrão para as cobranças serem realizadas</li>
            <li className="bg-[#272727] p-5 rounded-lg">Tenha o repasse realizado para sua conta em poucos minutos</li>
            <li className="bg-[#272727] p-5 rounded-lg">Dê mais opções de pagamento para seu inquilino, diminuindo ainda mais a chance de inadimplência</li>
            <li className="bg-[#272727] p-5 rounded-lg">Suporte a pagamentos via PIX, Cartão de Crédito, Cartão de Débito, Carteiras Digitais, Boleto, dentre outros.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
