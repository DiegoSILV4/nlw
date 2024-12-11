import React from 'react';
import imgcon from '../assets/2024-02-23.jpg';

export function Hero() {
  return (
    <div
      className="relative h-[550px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imgcon})` }}
    >
      {/* Overlay mais escuro para destaque */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex items-start justify-start h-full px-4 sm:px-6 lg:px-16 pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Seu sorriso perfeito</span>
            <span className="block text-yellow-400">Começa Aqui</span>
          </h1>
          <p className="mt-3 text-lg text-gray-200 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl">
            Experimente cuidados odontológicos de classe mundial em um ambiente
            confortável e moderno. Nossa equipe de especialistas está dedicada a
            proporcionar a você o sorriso saudável e bonito que você merece.
          </p>
          <div className="mt-5 sm:mt-8">
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
              <a href="https://w.app/StudioDentall">Converse conosco</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
