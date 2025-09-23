import { ReactNode } from "react"
import { HeaderP } from "./header"
import Navbar from "./nav-bar"
import { Tela } from "./tela"
import { Footer } from "./footer"
import { Whatsapp } from "./whatsapp"
import Servicos from "../servicos"
import BuscaGuia from "../busca-guia"

type Props = {
    children: ReactNode
}

export const Layout = ({children }: Props) => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <HeaderP />
                <Navbar />
                <div className="bg-zinc-100 flex justify-center">
                    <BuscaGuia/>
                </div>
                <Tela />
            </div>
            {children}
            <Footer />
            <Whatsapp />
        </>
    )
}