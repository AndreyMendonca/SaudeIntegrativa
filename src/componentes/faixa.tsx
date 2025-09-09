import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FaixaWhatsapp() {
  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-center md:justify-between gap-4 text-center md:text-left">
        
        {/* Comercial Birigui */}
        <Link
          href="https://api.whatsapp.com/send/?phone=5518991858235&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900 font-medium"
        >
          <span className="p-1 border border-green-700 rounded">
            <MessageCircle size={20} />
          </span>
          Comercial Birigui
        </Link>

        {/* Agendamentos Birigui */}
        <Link
          href="https://api.whatsapp.com/send/?phone=551830216834&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900 font-medium"
        >
          <span className="p-1 border border-green-700 rounded">
            <MessageCircle size={20} />
          </span>
          Agendamentos Birigui
        </Link>

        {/* Whatsapp Promissão */}
        <Link
          href="https://api.whatsapp.com/send/?phone=551422210757&text&type=phone_number&app_absent=0"
          target="_blank"
          className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900 font-medium"
        >
          <span className="p-1 border border-green-700 rounded">
            <MessageCircle size={20} />
          </span>
          Whatsapp Promissão
        </Link>
      </div>
    </div>
  );
}
