"use client"
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Servicos from "@/componentes/servicos";
import { Sobre } from "@/componentes/sobre";
import Beneficios from "@/componentes/beneficios";
import Saude from "@/componentes/saude";
import FaixaWhatsapp from "@/componentes/faixa";
import { Layout } from "@/componentes/layout/layout";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <Layout>
            <Sobre />
            <Servicos />
            <Beneficios />
            <Saude />
            <FaixaWhatsapp />
        </Layout>
    );
}
