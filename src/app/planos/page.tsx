import { LayoutDefault } from "@/componentes/layout/layoutDefault";
import { CheckCircle } from "lucide-react";

export default function PlanosPage() {
    const planos = [
        {
            nome: "Plano Individual",
            preco: "R$ 24,90/mês",
            beneficios: [
                "Consultas médicas com valores acessíveis",
                "Exames laboratoriais e de imagem com até 80% de desconto",
                "Clínico geral gratuito",
                "Sem carência",
            ],
        },
        {
            nome: "Plano Familiar",
            preco: "R$ 49,90/mês",
            beneficios: [
                "Todas as vantagens do plano individual",
                "Para toda a família: titular, cônjuge, filhos até 18 anos e pais do titular",
                "Valor de R$ 7,00 por carteirinha de dependente",
            ],
        },
    ];

    return (
        <LayoutDefault>
            <section className="bg-green-700 py-16 px-6 md:px-20">
                <div className="max-w-6xl mx-auto" data-aos="fade-up">
                    {/* Título */}
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
                        data-aos="fade-up"
                    >
                        Nossos Planos de Saúde
                    </h2>

                    {/* Grid de planos */}
                    <div
                        className="grid grid-cols-1 mb-10 md:grid-cols-2 gap-10"
                        
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
                            </div>
                        ))}
                    </div>

                    {/* Plano Empresarial */}
                    <div
                        className="bg-white text-green-700 rounded-2xl shadow-lg p-10 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
                    >
                        <h3 className="text-3xl font-extrabold text-center mb-2">
                            Plano Empresarial
                        </h3>
                        <p className="text-center text-lg mb-6 opacity-80">
                            Solução ideal para empresas que desejam oferecer saúde e bem-estar aos colaboradores.
                        </p>

                        <div className="flex w-full flex-col md:flex-row gap-5 mb-8">
                            <div className="flex-1 bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-md text-center hover:bg-green-900 transition">
                                <p className="block text-sm opacity-80">Por colaborador</p>
                                <p className="text-xl font-extrabold">Individual</p>
                                <p className="text-xl font-extrabold">R$ 24,90</p>
                            </div>
                            <div className="flex-1 bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-md text-center hover:bg-green-900 transition">
                                <p className="block text-sm opacity-80">Com dependentes</p>
                                <p className="text-xl font-extrabold">Familiar</p>
                                <p className="text-xl font-extrabold">R$ 49,90</p>
                            </div>
                        </div>

                        <ul className="flex-1 space-y-4 max-w-md w-full">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                                <span>Todas as vantagens do plano familiar</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                                <span>Atendimento personalizado para empresas e colaboradores</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                                <span>Planos flexíveis conforme o número de funcionários</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </LayoutDefault>
    );
}
