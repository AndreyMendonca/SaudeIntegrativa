"use client"
import { Medico } from "@/types/medico"
import medicos from "@/data/guiamedico.json";
import { LayoutDefault } from "@/componentes/layout/layoutDefault";
import { useSearchParams } from "next/navigation";
import BuscaGuia from "@/componentes/busca-guia";
import ListaDeMedicos from "./ListaDeMedicos";
import { Suspense } from "react";

export default function GuiaMedicoPage() {

    return (
        <LayoutDefault>
            <div className="bg-zinc-100 flex justify-center">
                <BuscaGuia />
            </div>
            <div className="py-8 bg-green-600">
                <Suspense fallback={<div className="text-center p-4">Carregando médicos...</div>}>
                    <ListaDeMedicos />
                </Suspense>
            </div>
        </LayoutDefault>

    )
}