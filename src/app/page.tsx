"use client"
import Navbar from "@/componentes/nav-bar";
import { Clock, Dot, Facebook, Instagram, MapPin, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; 
import Servicos from "@/componentes/servicos";
import { Sobre } from "@/componentes/sobre";
import Beneficios from "@/componentes/beneficios";
import Saude from "@/componentes/saude";
import FaixaWhatsapp from "@/componentes/faixa";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,  // duração da animação
            once: false,     // anima só 1 vez
        });
    }, []);
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="hidden xl:flex h-10 bg-green-700 text-sm text-white  items-center px-40 justify-between">
                    <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <Link href="https://www.google.com/maps/place/Sa%C3%BAde+Integrativa+Clinica+M%C3%A9dica/data=!4m2!3m1!1s0x0:0x1d9db642fe4510ad?sa=X&ved=1t:2428&ictx=111" target="_blank">
                            <p>Av São Francisco, 632 - Jardim Pérola - Birigui - SP</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={18} />
                        <p>Segunda à Sexta: 07:00h às 18:00h</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="https://www.instagram.com/saudeintegrativa_clinicamedica/" target="_blank">
                            <Instagram className="hover:text-black" size={18} />
                        </Link>
                        <Link href="https://www.instagram.com/saudeintegrativa_clinicamedica/" target="_blank">
                            <Facebook className="hover:text-black" size={18} />
                        </Link>
                    </div>
                </div>
                <Navbar />
                <div className="h-20 bg-zinc-100">

                </div>
                <div
                    className="flex-1 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/principal.jpg')" }}
                    data-aos="zoom-out"
                >
                    {/* Overlay para contraste do texto */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Conteúdo */}
                    <div className="relative z-10 flex flex-col gap-10 p-10 md:p-20 text-white">
                        {/* Frase inicial */}
                        <div
                            className="text-4xl md:text-6xl font-bold leading-tight"
                            data-aos="fade-right"
                        >
                            <p>
                                A sua saúde e de <br /> sua família é a nossa <br /> prioridade
                            </p>
                        </div>

                        {/* Box com benefício */}
                        <div
                            className="bg-green-600 text-white px-6 py-8 rounded-2xl shadow-lg w-fit motion-safe:animate-bounce motion-reduce:animate-bounce"
                            data-aos="fade-up"
                        >
                            <p className="text-lg font-semibold">Benefício a partir de:</p>
                            <p className="text-5xl font-extrabold">R$ 24,90</p>
                        </div>
                    </div>
                </div>
            </div>
            <Sobre />
            <Servicos />
            <Beneficios />
            <Saude />
            <FaixaWhatsapp />

            <Link
                href="https://wa.me/551830216834"
                target="_blank"
                className="fixed bottom-4 right-4 z-30"
            >
                <Image
                    src="/whatsapp.svg"
                    alt="whatsapp"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
            </Link>
            <footer className="bg-green-700 text-white py-10">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                        {/* Contato */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Contato</h3>
                            <p className="mb-1">(18) 3021-6834</p>
                            <p>agendamento@saudeintegrativabirigui.com.br</p>
                        </div>

                        {/* Endereço */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Endereço</h3>
                            <p>Av São Francisco, 632</p>
                            <p>Jardim Pérola - Birigui - SP</p>
                        </div>

                        {/* CNPJ */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">CNPJ</h3>
                            <p>Matriz: 43.332.461/0001-74</p>
                            <p>Filial: 43.332.461/0002-55</p>
                        </div>
                    </div>

                    {/* Linha final */}
                    <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-80">
                        <p>© {new Date().getFullYear()} Saúde Integrativa Birigui. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
