import { Clock, Facebook, Instagram, MapPin } from "lucide-react"
import Link from "next/link"

export const HeaderP = () => {
    return (
        <>
            <header className="hidden xl:flex h-10 bg-green-700 text-sm text-white items-center px-40 justify-between">
                <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <Link
                        href="https://www.google.com/maps/place/Sa%C3%BAde+Integrativa+Clinica+M%C3%A9dica/data=!4m2!3m1!1s0x0:0x1d9db642fe4510ad?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        aria-label="Abrir localização no Google Maps"
                    >
                        Av São Francisco, 632 - Jardim Pérola - Birigui - SP
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <p>Segunda à Sexta: 07:00h às 18:00h</p>
                </div>

                <nav className="flex items-center gap-2" aria-label="Redes sociais">
                    <Link
                        href="https://www.instagram.com/saudeintegrativa_clinicamedica/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <Instagram className="hover:text-black" size={18} />
                    </Link>
                    <Link
                        href="https://www.facebook.com/saudeintegrativa_clinicamedica/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <Facebook className="hover:text-black" size={18} />
                    </Link>
                </nav>
            </header>
        </>
    )
}