"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, X } from "lucide-react";

const cidades = [
    "BIRIGUI",
    "PENÁPOLIS",
    "ARAÇATUBA",
    "LINS",
    "PROMISSÃO",
    "ANDRADINA",
    "BURITAMA",
];

const especialidades = [
    "ACUPUNTURA",
    "ALERGIA E IMUNOLOGIA",
    "ALIVIO DE DORES",
    "ANESTESIOLOGIA",
    "CARDIOLOGIA",
    "CIRURGIA DA MÃO",
    "CIRURGIA GERAL",
    "CIRURGIA PLÁSTICA",
    "CIRURGIÃO VASCULAR",
    "CLÍNICO GERAL (MEDICINA INTERNA)",
    "DERMATOLOGIA",
    "ECOCARDIOGRAMA",
    "ENDOCRINOLOGIA E METABOLOGIA",
    "FISIOTERAPEUTA",
    "FISIOTERAPEUTA RPG ESPORTIVO",
    "FISIOTERAPEUTA ( NEUROMODULAÇÃO)",
    "FONOAUDIOLOGIA",
    "GASTROENTEROLOGIA E PEDIATRICO",
    "GENETICISTA",
    "GERIATRIA",
    "HEMATOLOGIA",
    "HEPATOLOGIA",
    "GINECOLOGIA E OBSTETRÍCIA",
    "MASSOTERAPEUTA",
    "NEUROLOGIA PEDIÁTRICA",
    "NEUROLOGIA",
    "NEUROPSICÓLOGA",
    "NUTRICIONISTA",
    "NUTRÓLOGA",
    "OFTALMOLOGIA",
    "ORTOPEDIA E TRAUMATOLOGIA",
    "OTORRINOLARINGOLOGIA (CIRURGIÃO)",
    "PEDIATRIA",
    "PNEUMOLOGIA PEDIATRICO",
    "PNEUMOLOGIA",
    "PROCTOLOGISTA",
    "PSICOLOGIA",
    "PSICOPEDAGOGA",
    "NEUROPSICOPEDAGOGA",
    "PSIQUIATRIA",
    "REUMATOLOGIA",
    "TERAPEUTA OCUPACIONAL",
    "UROLOGIA",
];

export default function BuscaGuia() {
    const [cidade, setCidade] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [aberto, setAberto] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = new URLSearchParams();
        if (cidade) query.append("cidade", cidade);
        if (especialidade) query.append("especialidade", especialidade);
        router.push(`/guiamedico?${query.toString()}`);
        setAberto(false);
    };

    return (
        <div className="flex justify-center w-full px-4 py-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-5xl p-4">
                {/* Linha principal: título + formulário (desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <h2 className="text-lg font-bold text-green-700 whitespace-nowrap">
                        Guia Médico
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-3 flex-1"
                    >
                        <select
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            className="p-2 rounded-md text-green-700 border border-green-600 flex-1"
                        >
                            <option value="">Cidade</option>
                            {cidades.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>

                        <select
                            value={especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)}
                            className="p-2 rounded-md text-green-700 border border-green-600 flex-1"
                        >
                            <option value="">Especialidade</option>
                            {especialidades.map((e) => (
                                <option key={e} value={e}>
                                    {e}
                                </option>
                            ))}
                        </select>

                        <button
                            type="submit"
                            className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition whitespace-nowrap"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                {/* Versão mobile (colapsável) */}
                <div className="md:hidden">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-bold text-green-700">Guia Médico</h2>
                        <button
                            onClick={() => setAberto(!aberto)}
                            className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
                        >
                            {aberto ? (
                                <>
                                    <X className="w-4 h-4" /> Fechar
                                </>
                            ) : (
                                <>
                                    <Search className="w-4 h-4" /> Buscar
                                </>
                            )}
                        </button>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ${aberto ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <select
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            className="p-2 rounded-md text-green-700 border border-green-600 w-full"
                        >
                            <option value="">Cidade</option>
                            {cidades.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>

                        <select
                            value={especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)}
                            className="p-2 rounded-md text-green-700 border border-green-600 w-full"
                        >
                            <option value="">Especialidade</option>
                            {especialidades.map((e) => (
                                <option key={e} value={e}>
                                    {e}
                                </option>
                            ))}
                        </select>

                        <button
                            type="submit"
                            className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
