import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © {currentYear} Lucas Agüero. Todos los derechos reservados.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-slate-300">
            <span>Desarrollado con</span>
            <Heart className="text-red-500 fill-red-500" size={18} />
            <span>por Lucas Agüero</span>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-6 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-400 font-mono">
            React • JavaScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
