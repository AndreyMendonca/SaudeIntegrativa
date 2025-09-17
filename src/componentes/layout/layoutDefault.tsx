"use client"
import { ReactNode, useEffect } from "react"
import { HeaderP } from "./header"
import Navbar from "./nav-bar"
import { Footer } from "./footer"
import { Whatsapp } from "./whatsapp"
import Aos from "aos"
import FaixaWhatsapp from "../faixa"

type Props = { children: ReactNode }

export const LayoutDefault = ({ children }: Props) => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <>
            <HeaderP />
            <Navbar />
            {children}
            <FaixaWhatsapp/>
            <Footer />
            <Whatsapp />
        </>
    )
}
