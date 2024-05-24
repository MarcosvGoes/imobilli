import Button from "@/components/Button/Button";
import Link from "next/link";

export default function SignUp() {
    return (
        <main className="border p-3 max-w-[90%] mx-auto my-10 rounded-xl">
            <form className="rounded-xl" action="">
            <div className="grid rounded-lg grid-cols-2 p-1 font-medium items-center w-full bg-[#E5E7EB]">
                    <Button label="Login" href="/signin" className="border-none w-full bg-[#e5e7eb]"/>
                    <Button label="Nova Conta" href="/signup" className="border-none w-full bg-white" />
                </div>
                <h1 className="text-xl font-semibold text-center my-10">Nova Conta</h1>
                <div className="grid grid-cols-1 gap-y-5">
                    <input type="text" placeholder="Seu e-mail" className="border rounded-xl p-3" />
                    <input type="text" placeholder="Sua senha" className="border rounded-xl p-3" />
                    <input type="number" placeholder="Seu telefone" className="border rounded-xl p-3" />
                </div>
                <div className="grid grid-cols-1 gap-y-5 mt-10">
                    <input type="text" placeholder="Sua senha" className="border rounded-xl p-3"/>
                    <input type="text" placeholder="Repita sua senha" className="border rounded-xl p-3"/>
                <p className="text-center text-xs font-medium">Ao criar conta, você confirma que<br/> leu e concorda com os <Link className="text-[#32de84]" href={``}>termos de uso</Link> da Imobilli</p>
                </div>
                    <Button href="/" label="Criar conta grátis" themeDark className="my-5 w-full"/>
            </form>
        </main>
    )
}