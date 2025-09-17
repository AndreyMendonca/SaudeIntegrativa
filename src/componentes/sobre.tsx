export const Sobre = () => {
    return (
        <section className="w-[80%] mx-auto py-16 px-5 flex flex-col lg:flex-row items-center gap-10" data-aos="fade-up">
            {/* Imagem com semântica */}
            <figure className="flex-1">
                <img
                    src="/clinica.jpg"
                    alt="Clínica Saúde Integrativa Birigui"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
            </figure>

            {/* Texto */}
            <article className="flex-1 space-y-6">
                <header>
                    <h2 className="text-green-700 text-sm font-semibold tracking-widest uppercase">
                        Sobre a Saúde Integrativa
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
                        Uma Nova Abordagem para a Sua Saúde
                    </h3>
                </header>

                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                    Acreditamos que a verdadeira saúde vai além da ausência de doenças.
                    Ela é um estado de completo bem-estar físico, mental e emocional.
                    Na <span className="font-semibold text-green-700">Saúde Integrativa</span>,
                    nosso propósito é entender você como um todo. Unimos o melhor da
                    medicina convencional e das terapias complementares para criar um
                    plano de tratamento único, focado em restaurar o equilíbrio natural
                    do seu corpo e promover uma vitalidade duradoura.
                </p>
            </article>
        </section>
    )
}