import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-4"
        >
          Pedro Cardoso Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-neutral-400 max-w-xl"
        >
          Soluções visuais inteligentes para marcas que querem se destacar.
        </motion.p>
      </section>

      {/* Sobre Mim */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Sobre Mim</h2>
        <p className="text-neutral-300 leading-relaxed">
          Sou designer gráfico com mais de 10 anos de experiência, atuando em projetos de identidade visual, branding, campanhas digitais e muito mais. Tenho paixão por transformar ideias em peças visuais impactantes.
        </p>
      </section>

      {/* Projetos */}
      <section className="bg-neutral-900 px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-neutral-800 rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-medium mb-2">Projeto {i}</h3>
              <p className="text-neutral-400 text-sm mb-4">Descrição rápida do projeto com foco em design e resultados.</p>
              <a href="#" className="inline-flex items-center text-amber-400 hover:underline">
                Ver projeto <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>
        <p className="text-neutral-400 mb-6">Entre em contato para orçamentos ou parcerias criativas.</p>
        <a
          href="mailto:pedrocardoso@email.com"
          className="inline-flex items-center bg-amber-400 text-black font-medium px-6 py-3 rounded-full hover:bg-amber-300 transition"
        >
          <Mail className="w-5 h-5 mr-2" /> Enviar e-mail
        </a>
      </section>
    </main>
  );
}