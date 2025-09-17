"use client";

import {
  Stethoscope,
  FlaskConical,
  Image as ImageIcon,
  Apple,
  Bone,
  Brain,
  Activity,
  HeartHandshake,
  Scissors,
  MoreHorizontal,
  Laugh,
} from "lucide-react";

export default function Servicos() {
  const servicos = [
    { icon: Stethoscope, label: "Consultas Médicas" },
    { icon: FlaskConical, label: "Exames Laboratoriais" },
    { icon: ImageIcon, label: "Exames de Imagem" },
    { icon: Apple, label: "Serviços de Nutrição" },
    { icon: Laugh, label: "Odontologia" },
    { icon: Brain, label: "Psicologia" },
    { icon: Activity, label: "Fisioterapia" },
    { icon: HeartHandshake, label: "Método ABA" },
  ];

  return (
    <section className="bg-green-700 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          Nossos serviços e <br /> especialidades
        </h2>

        {/* Grid de cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {servicos.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-800 rounded-xl p-8 flex flex-col items-center text-center shadow-lg 
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <item.icon className="w-12 h-12 text-white mb-4" />
              <span className="text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Extra: clínico geral e outros */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-2xl font-extrabold bg-white text-green-700 px-6 py-3 rounded-lg shadow-md">
            CLÍNICO GERAL GRATUITO
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-3 bg-green-800 px-6 py-3 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <Scissors className="w-5 h-5" />
              <span>Cirurgia em geral</span>
            </div>

            <div className="flex items-center gap-3 bg-green-800 px-6 py-3 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <MoreHorizontal className="w-5 h-5" />
              <span>Entre outros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
