export const Tela = () => {
    return (
        <main
            className="flex-1 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/principal.jpg')" }}
            data-aos="zoom-out"
        >
            {/* Overlay para contraste */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Conteúdo sobreposto */}
            <section className="relative z-10 flex flex-col gap-10 p-10 md:p-20 text-white">
                {/* Headline */}
                <h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    data-aos="fade-right"
                >
                    A sua saúde e de <br /> sua família é a nossa <br /> prioridade
                </h1>

                {/* Box de benefício */}
                <aside
                    className="bg-green-600 text-white px-6 py-8 rounded-2xl shadow-lg w-fit motion-safe:animate-bounce motion-reduce:animate-bounce"
                    data-aos="fade-up"
                >
                    <p className="text-lg font-semibold">Benefício a partir de:</p>
                    <p className="text-5xl font-extrabold">R$ 24,90</p>
                </aside>
            </section>
        </main>
    )
}