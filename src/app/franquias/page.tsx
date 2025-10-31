import { LayoutDefault } from "@/componentes/layout/layoutDefault";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function FranquiasPage() {
    const franquias = [
        {
            nome: "Birigui - SP",
            imagem: "/bgi.jpg",
            endereco: "Av. São Francisco, 632 - Jardim Pérola",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        },
        {
            nome: "Promissão - SP",
            imagem: "/bgi.jpg",
            endereco: "Rua das Flores, 210 - Centro",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        },
        {
            nome: "Araçatuba - SP",
            imagem: "/bgi.jpg",
            endereco: "Rua Silva Jardim, 950 - Centro",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        },
                {
            nome: "Birigui - SP",
            imagem: "/bgi.jpg",
            endereco: "Av. São Francisco, 632 - Jardim Pérola",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        },
        {
            nome: "Promissão - SP",
            imagem: "/bgi.jpg",
            endereco: "Rua das Flores, 210 - Centro",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        },
        {
            nome: "Araçatuba - SP",
            imagem: "/bgi.jpg",
            endereco: "Rua Silva Jardim, 950 - Centro",
            telefone: "(18) 3021-6834",
            whatsapp: "https://api.whatsapp.com/send/?phone=5518991858235&text=Olá! Gostaria de saber mais sobre a unidade de Birigui.",
        }, 
    ];

    return (
        <LayoutDefault>
            <section className="bg-green-700 py-16 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    {/* Título */}
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
                        data-aos="fade-up"
                    >
                        Nossas Unidades
                    </h2>

                    {/* Grid de franquias */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        data-aos="fade-up"
                    >
                        {franquias.map((franquia, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-green-700 rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Imagem da unidade */}
                                <div className="h-48 w-full relative">
                                    <Image
                                        src={franquia.imagem}
                                        alt={`Unidade ${franquia.nome}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Conteúdo */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold mb-4 text-center">{franquia.nome}</h3>

                                    <ul className="space-y-3 text-sm flex-1">
                                        <li className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-green-300 mt-0.5" />
                                            <span>{franquia.endereco}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-green-300 mt-0.5" />
                                            <span>{franquia.telefone}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MessageCircle className="w-5 h-5 text-green-300 mt-0.5" />
                                            <a
                                                href={franquia.whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                Conversar pelo WhatsApp
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutDefault>
    );
}
