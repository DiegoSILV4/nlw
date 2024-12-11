import React from 'react';
import { Stethoscope } from 'lucide-react';
import logo1 from '../assets/Design sem nome (4) (1)-Photoroom (1).png';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <img 
              src={logo1}
              alt="BrightSmile Dental Logo" 
              className="h-12 w-auto"
            />
      <p className="text-center text-gray-400">
      

      © {new Date().getFullYear()} Studio Dental. Todos os direitos reservados.
    </p>



          </div>
        
        </div>
       
      </div>
    </footer>
  );
}