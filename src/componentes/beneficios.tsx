"use client";
import Image from "next/image";
export default function Beneficios() {
  const beneficios = [
    {
      titulo: "Cuidado Centrado em Você",
      texto:
        "Você não é apenas mais um paciente. Desenvolvemos um plano que respeita sua individualidade.",
      imagem: "/1.jpg",
    },
    {
      titulo: "Resultados que Permanecem",
      texto:
        "Focamos em tratar a causa dos problemas, não apenas em mascarar sintomas, promovendo uma saúde sustentável.",
      imagem: "/2.jpg",
    },
    {
      titulo: "Profissionalismo e Confiança",
      texto:
        "Conte com uma equipe qualificada, em constante atualização e apaixonada por promover qualidade de vida.",
      imagem: "/3.jpg",
    },
    {
      titulo: "Ambiente Acolhedor",
      texto:
        "Um espaço pensado para o seu conforto e bem-estar, onde você se sente seguro para cuidar de si.",
      imagem: "/4.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-green-700">
          Mais que um Tratamento, uma Transformação
        </h2>

        {/* Cards */}
        <div className="space-y-20">
          {beneficios.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-10 md:gap-16 md:flex-row ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Imagem */}
              <div className="flex-1">
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  width={400}
                  height={250}
                  className="rounded-xl shadow-xl"
                />
              </div>

              {/* Texto */}
              <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {item.titulo}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
