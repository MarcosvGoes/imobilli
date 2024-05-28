import Button from "@/components/Button/Button";
import Link from "next/link";

export default function SignIn() {
    return (
        <main className="border p-3 max-w-[90%] mx-auto my-10 rounded-xl">
            <form className="rounded-xl" action="">
                <div className="grid rounded-lg grid-cols-2 p-1 font-medium items-center w-full bg-[#E5E7EB]">
                    <Button label="Login" href="/signin" className="border-none w-full bg-white" />
                    <Button label="Nova Conta" href="/signup" className="border-none w-full bg-[#e5e7eb]"/>
                </div>
                <h1 className="text-xl font-semibold text-center my-10">Acesse sua conta</h1>
                <div className="grid grid-cols-1 gap-y-5">
                    <input type="text" placeholder="Seu e-mail" className="border rounded-xl p-3" />
                    <input type="text" placeholder="Sua senha" className="border rounded-xl p-3" />
                </div>
                <div className="grid grid-cols-1">
                    <div className="flex my-5 justify-between">
                        <div className="text-xs">
                            <input className="" type="radio" id="remember" />
                            <label className="pl-2" htmlFor="remember">Lembrar-me</label>
                        </div>
                    <Link className="text-xs" href={``}>Esqueci minha senha</Link>
                    </div>
                <Button href="/" label="Acessar minha conta" themeDark className="flex w-full my-5 justify-center"/>
                </div>
            </form>
        </main>
    )
}