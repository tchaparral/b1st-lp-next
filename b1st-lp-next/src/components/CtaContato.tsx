"use client";

import Image from "next/image";
import brancoLogo from "@/../public/branco_logotipo.svg";

export default function CtaContato() {
  return (
    <section id="contato" className="bg-[#1C1C1C] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-10">

        {/* Texto institucional */}
        <div className="grid grid-cols-1">
          <Image
            src={brancoLogo}
            alt="Logo B1st"
            className="mx-auto h-15 mb-4 w-auto"
            
            priority
          />
          <p className="text-sm text-gray-300 text-center md:text-left">
            A B1st é especialista em automação, bots e soluções com inteligência artificial.
            Nosso compromisso é transformar tarefas manuais em operações escaláveis e inteligentes.
          </p>
        </div>

        {/* Newsletter / Contato */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-center md:text-left">Fale com a gente</h3>
          <p className="text-sm text-gray-300 mb-4 text-center md:text-left">
            Envie uma mensagem ou cadastre-se para saber mais sobre nossas soluções.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 rounded-lg text-black bg-white"
            />
            <label className="text-sm flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              Eu aceito receber comunicações da B1st de acordo com meus interesses
            </label>
            <button
              type="submit"
              className="bg-[#FF005C] hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-xl w-full md:w-auto"
            >
              CADASTRAR
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
