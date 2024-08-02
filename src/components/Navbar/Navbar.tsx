"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuIcon = isOpen ? (
    <i className="uil cursor-pointer uil-multiply text-raisin-black"></i>
  ) : (
    <i className="uil cursor-pointer uil-bars text-raisin-black"></i>
  );

  return (
    <nav className="bg-[#F5F5F5] shadow-[0_3px_0_rgb(0,0,0,0.2)] px-5 rounded-lg fixed top-[-5px] pt-[15px] pb-[10px] text-raisin-black w-full">
      <div className="flex justify-between">
        <Link href="/"><Image onClick={closeMenu} width={100} height={100} alt="logo imobilli" src={'icons/imobilli.svg'} /></Link>
        <span onClick={toggleMenu}>{menuIcon}</span>
      </div>
      <ul className={`fixed w-full right-0 text-end bg-[#F5F5F5] shadow-[0_3px_0_rgb(0,0,0,0.2)] transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} p-5 rounded-lg`}>
        <Link onClick={closeMenu} href="/"><li className="mb-2 font-medium">Início</li></Link>
        <Link onClick={closeMenu} href="/about"><li className="mb-2 font-medium">Sobre Nós</li></Link>
        <Link onClick={closeMenu} href="/lessor-guide"><li className="mb-2 font-medium">Guia do Locador</li></Link>
        <Link onClick={closeMenu} href="/lessee-guide"><li className="mb-2 font-medium">Guia do Locatário</li></Link>
        <Link onClick={closeMenu} href="/help"><li className="mb-2 font-medium">Ajuda</li></Link>
        <div className="flex gap-x-2 mt-3 justify-end">
          <Button onClick={closeMenu} label="Criar conta" className="font-semibold text-sm"><Link href="https://appimobilli.vercel.app/signup" target="_blank"/></Button>
          <Button onClick={closeMenu} label="Entrar" className="font-semibold text-sm"><Link href="https://appimobilli.vercel.app/signin" target="_blank"/></Button>
        </div>
      </ul>
      <i />
    </nav>
  )
}
