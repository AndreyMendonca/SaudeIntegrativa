import Image from "next/image"
import Link from "next/link"

export const Whatsapp = () => {
    return (
        <Link
            href="https://wa.me/551830216834"
            target="_blank"
            className="fixed bottom-4 right-4 z-30"
        >
            <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
        </Link>
    )
}