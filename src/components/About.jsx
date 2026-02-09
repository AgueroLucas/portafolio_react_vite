import React from 'react';
import { Code2, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { personalInfo } from '../mock/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Desarrollo Frontend',
      description: 'Experiencia sólida en React, Angular y Python'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Metodologías ágiles (SCRUM)'
    },
    {
      icon: Lightbulb,
      title: 'Soluciones Creativas',
      description: 'Enfoque en UX/UI y buenas prácticas'
    },
    {
      icon: TrendingUp,
      title: 'Aprendizaje Continuo',
      description: 'Actualizado con nuevas tecnologías'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sobre <span className="text-blue-600">mí</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {personalInfo.profileDescription}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Actualmente, complemento esta experiencia profesional con mi formación en la UTN-FRM para seguir aportando soluciones técnicas innovadoras y eficientes.
            </p>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-2xl">📍</span>
              <span className="font-mono text-sm">{personalInfo.location}</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg border border-slate-100"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Summary */}
        <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Educación
              </h3>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">Técnicatura Universitaria en Programación</p>
                <p className="text-sm text-slate-600">UTN-FRM • 2025 - Actualmente</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📜</span>
                Certificaciones
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Certificación en Angular (Udemy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Programador Python Full Stack (T.TEC San Juan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Desarrollador Web (Coder House, Codo a Codo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Certificación en React (Udemy)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
