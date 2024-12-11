import React from 'react';
import { Sparkles, Shield, Heart, Smile } from 'lucide-react';

const services = [
  {
    title: 'Limpeza',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    icon: Shield,
  },
  {
    title: 'Manutenção',
    description: 'Transform your smile with whitening, veneers, and other aesthetic procedures.',
    icon: Sparkles,
  },
  {
    title: 'Facetas..',
    description: '24/7 emergency dental services when you need immediate attention.',
    icon: Heart,
  },
  {
    title: 'Lando',
    description: 'Straighten your teeth with modern braces and clear aligners.',
    icon: Smile,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 -mt-8 left-1/2 -ml-8 bg-[#242D3E] rounded-full p-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-500 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}