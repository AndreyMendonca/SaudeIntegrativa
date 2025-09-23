"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = new URLSearchParams();
        if (cidade) query.append("cidade", cidade);
        if (especialidade) query.append("especialidade", especialidade);

        // navega para a página de resultados
        router.push(`/guiamedico?${query.toString()}`);
    };

    return (
        <div className="flex items-center p-2 gap-2" data-aos="fade-down">
            <h2 className="text-lg font-bold w-full">Guia Médico</h2>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                <select
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    className="p-2 rounded-md text-green-700 border border-green-600"
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
                    className="p-2 rounded-md text-green-700 border border-green-600"
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
                    className="bg-green-500 text-black font-bold py-2 rounded-md hover:bg-green-400 cursor-pointer px-2 transition"
                >
                    BUSCAR
                </button>
            </form>
        </div>
    );
}
