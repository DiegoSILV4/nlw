import React from 'react';
import { Stethoscope, Phone, Clock } from 'lucide-react';
import logo from '../assets/logoPreta.png';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
 
            <img 
              src={logo}
              alt="BrightSmile Dental Logo" 
              className="h-[100px] w-[220px]"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre nós</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">Nossa equipe</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>(11) 97086-2714</span>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}