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
            <Suspense fallback={<div className="text-center p-4">Carregando médicos...</div>}>
                <ListaDeMedicos />
            </Suspense>
        </LayoutDefault>

    )
}