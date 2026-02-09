import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../mock/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-mono text-sm md:text-base px-4 py-2 bg-blue-50 rounded-full">
                Hola, soy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Especializado en <span className="font-semibold text-slate-900">React</span> y{' '}
              <span className="font-semibold text-slate-900">Angular</span>, creando interfaces web
              funcionales y atractivas con las mejores prácticas.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Proyectos
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <div className="animate-bounce">
              <ArrowDown className="text-slate-400 hover:text-blue-600 transition-colors" size={32} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
