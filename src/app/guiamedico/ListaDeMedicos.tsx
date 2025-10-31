"use client";
import { Medico } from "@/types/medico";
import medicos from "@/data/guiamedico.json";
import { useSearchParams } from "next/navigation";
import { MapPin, Stethoscope, Navigation, SearchX } from "lucide-react";

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

    if (dadosFiltrados.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-20">
                <SearchX className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum médico encontrado</h3>
                <p className="text-sm max-w-md">
                    Não encontramos profissionais com os filtros selecionados.
                    Tente alterar a cidade ou especialidade para ver outras opções.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 mx-4 md:mx-16 lg:mx-32">
            {dadosFiltrados.map((m, index) => (
                <div
                    key={index}
                    className="bg-white border border-green-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
                >
                    {/* Nome do médico */}
                    <h3 className="font-extrabold text-xl text-green-700 mb-2 text-center">
                        {m.NOMES}
                    </h3>

                    {/* Especialidade e cidade */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                        <Stethoscope className="w-4 h-4 text-green-500" />
                        <span>{m.ESPECIALIDADES}</span>
                        <span className="mx-1">•</span>
                        <span>{m.MUNICIPIO}</span>
                    </div>

                    {/* Endereço */}
                    <div className="flex items-start gap-2 text-gray-700 text-sm mb-4">
                        <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>{m.ENDEREÇO}</p>
                    </div>

                    {/* Botão / link */}
                    <a
                        href={m.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-green-800 transition"
                    >
                        <Navigation className="w-4 h-4" />
                        Ver no mapa
                    </a>
                </div>
            ))}
        </div>
    );
}
