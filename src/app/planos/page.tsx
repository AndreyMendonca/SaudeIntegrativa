import { LayoutDefault } from "@/componentes/layout/layoutDefault";
import { CheckCircle } from "lucide-react";

export default function PlanosPage() {
    const planos = [
        {
            nome: "Plano Essencial",
            preco: "R$ 29,90/mês",
            beneficios: [
                "Consultas médicas com preço reduzido",
                "Exames laboratoriais com desconto",
                "Acesso a clínico geral gratuito",
                "Atendimento prioritário na recepção",
            ],
        },
        {
            nome: "Plano Premium",
            preco: "R$ 59,90/mês",
            beneficios: [
                "Todas as vantagens do Essencial",
                "Descontos em exames de imagem",
                "Sessões de psicologia com valor diferenciado",
                "Nutricionista e fisioterapia inclusos no plano",
            ],
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
                        Nossos Planos de Saúde
                    </h2>

                    {/* Grid de planos */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        data-aos="fade-up"
                    >
                        {planos.map((plano, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-green-700 rounded-2xl shadow-lg p-10 flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Cabeçalho do card */}
                                <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                                <p className="text-3xl font-extrabold mb-6">{plano.preco}</p>

                                {/* Lista de benefícios */}
                                <ul className="flex-1 space-y-4">
                                    {plano.beneficios.map((beneficio, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                                            <span>{beneficio}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Botão CTA */}
                                <button className="mt-8 bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-900 transition">
                                    Quero este plano
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutDefault>
    )
}