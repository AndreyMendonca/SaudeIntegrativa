"use client";

import { Stethoscope, HeartHandshake, Pill } from "lucide-react";

export default function Saude() {
  const servicos = [
    {
      icon: Stethoscope,
      titulo: "Atendimento",
      descricao:
        "Oferecemos excelência em Pronto Atendimento, a melhor opção para agilizar sua consulta sem a necessidade de agendamento prévio.",
    },
    {
      icon: HeartHandshake,
      titulo: "Diagnósticos",
      descricao:
        "Criamos um modelo que atende nossos pacientes quando eles precisam, com diagnósticos rápidos e precisos.",
    },
    {
      icon: Pill,
      titulo: "Tratamentos",
      descricao:
        "Você receberá orientações, as receitas dos medicamentos e exames, caso necessários.",
    },
  ];

  return (
    <section className="px-6 pb-20 md:px-20 bg-green-700" data-aos="fade-up">
      {/* Título */}
      <h2 className="text-center font-bold text-4xl md:text-5xl mb-16 py-10 text-white">
        Cuide bem da sua saúde
      </h2>

      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10">
        {servicos.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center space-y-4 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 bg-green-800 hover:scale-105"
          >
            {/* Ícone */}
            <div className="rounded-full border-4 w-fit p-4 border-white bg-green-700">
              <item.icon size={40} className="text-white" />
            </div>

            {/* Título */}
            <p className="text-lg font-semibold text-white">{item.titulo}</p>

            {/* Descrição */}
            <p className="text-center text-green-100">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
