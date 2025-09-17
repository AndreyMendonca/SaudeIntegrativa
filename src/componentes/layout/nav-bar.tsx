"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center justify-between bg-white shadow-md px-10">
            <Link href="/"> 
                <Image src="/logo.jpg" height={80} width={240} alt="Logo" />
            </Link>
            
            <div className="flex justify-between items-center">
                <div className="hidden xl:flex gap-10 items-center">
                    <a href="/" className="hover:text-green-700 text-xl font-semibold">Home</a>
                    <a href="/servicos" className="hover:text-green-700 text-xl font-semibold">Serviços</a>
                    <a href="/planos" className="hover:text-green-700 text-xl font-semibold">Planos</a>
                    <a href="/franquias" className="hover:text-green-700 text-xl font-semibold">Franquias</a>
                    <a href="/contatos" className="hover:text-green-700 text-xl font-semibold">Contatos</a>
                </div>
            </div>

            {/* botão hamburguer (mobile) */}
            <button
                onClick={() => setOpen(!open)}
                className="relative w-8 h-6 flex flex-col justify-between items-center xl:hidden"
            >
                {/* barra 1 */}
                <span
                    className={`h-0.5 w-8 bg-green-700 rounded transition duration-300 ease-in-out transform ${open ? "rotate-45 translate-y-1.5" : ""
                        }`}
                />
                {/* barra 2 */}
                <span
                    className={`h-0.5 w-8 bg-green-700 rounded transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"
                        }`}
                />
                {/* barra 3 */}
                <span
                    className={`h-0.5 w-8 bg-green-700 rounded transition duration-300 ease-in-out transform ${open ? "-rotate-45 -translate-y-4" : ""
                        }`}
                />
            </button>

            {/* menu dropdown (mobile) */}
            <div
                className={`absolute z-10 top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 transition-all duration-500 ease-in-out xl:hidden ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
                    }`}
            >
                <a href="#" className="hover:text-green-700 text-lg font-semibold">Home</a>
                <a href="#" className="hover:text-green-700 text-lg font-semibold">Serviços</a>
                <a href="#" className="hover:text-green-700 text-lg font-semibold">Sobre</a>
                <a href="#" className="hover:text-green-700 text-lg font-semibold">Franquias</a>
                <a href="#" className="hover:text-green-700 text-lg font-semibold">Parceiros</a>
            </div>
        </div>
    );
}
