"use client"
import { Medico } from "@/types/medico"
import medicos from "@/data/guiamedico.json";
import { useSearchParams } from "next/navigation";

export default function ListaDeMedicos() {
    const searchParams = useSearchParams();
    const cidade = searchParams.get("cidade") || "";
    const especialidade = searchParams.get("especialidade") || "";
    const dados: Medico[] = medicos;

    const dadosFiltrados = dados.filter((m) => {
        const matchCidade = cidade ? m.MUNICIPIO === cidade : true;
        const matchEspecialidade = especialidade
            ? m.ESPECIALIDADES === especialidade
            : true;
        return matchCidade && matchEspecialidade;
    });

    return (
        <>
            {dadosFiltrados.map((m, index) => (
                <div key={index} className="p-4 border rounded-md mb-2 w-full max-w-xl mx-auto">
                    <h3 className="font-bold">{m.NOMES}</h3>
                    <p>{m.ESPECIALIDADES} - {m.MUNICIPIO}</p>
                    <p>{m.ENDEREÇO}</p>
                    <a href={m.Link} target="_blank" className="text-blue-500 underline">
                        Ver no mapa
                    </a>
                </div>
            ))}
        </>
    )
}