import { LayoutDefault } from "@/componentes/layout/layoutDefault";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ContatosPage() {
    return (
        <LayoutDefault>
            <section className="bg-green-700 py-16 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    {/* Título */}
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
                        data-aos="fade-up"
                    >
                        Entre em Contato Conosco
                    </h2>

                    {/* Grid de contatos */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        data-aos="fade-up"
                    >
                        {/* WhatsApps */}
                        <div className="bg-white text-green-700 rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition transform hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>

                            <Link
                                href="https://api.whatsapp.com/send/?phone=5518991858235&text&type=phone_number&app_absent=0"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-green-900 font-medium"
                            >
                                <span className="p-1 border border-green-700 rounded">
                                    <MessageCircle size={20} />
                                </span>
                                Comercial Birigui - (18) 99185-8235
                            </Link>

                            <Link
                                href="https://api.whatsapp.com/send/?phone=551830216834&text&type=phone_number&app_absent=0"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-green-900 font-medium"
                            >
                                <span className="p-1 border border-green-700 rounded">
                                    <MessageCircle size={20} />
                                </span>
                                Agendamentos Birigui - (18) 1830216834
                            </Link>

                            <Link
                                href="https://api.whatsapp.com/send/?phone=551422210757&text&type=phone_number&app_absent=0"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-green-900 font-medium"
                            >
                                <span className="p-1 border border-green-700 rounded">
                                    <MessageCircle size={20} />
                                </span>
                                Whatsapp Promissão - (14) 22210757
                            </Link>
                        </div>

                        {/* Informações fixas */}
                        <div className="bg-white text-green-700 rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition transform hover:scale-105 hover:shadow-2xl">
                            <div>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <Phone size={20} /> Contato
                                </h3>
                                <p className="mb-1">(18) 3021-6834</p>
                                <p className="flex items-center gap-2">
                                    <Mail size={18} /> agendamento@saudeintegrativabirigui.com.br
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <MapPin size={20} /> Endereço
                                </h3>
                                <p>Av São Francisco, 632</p>
                                <p>Jardim Pérola - Birigui - SP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutDefault>
    )
} 