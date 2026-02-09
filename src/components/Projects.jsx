import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../mock/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mis <span className="text-blue-600">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-md">
                  {project.year}
                </div>
                {/* Overlay opcional */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>
                
                <p className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide text-xs">
                  {project.company}
                </p>

                <p className="text-slate-600 mb-6 leading-relaxed flex-1 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button - AHORA ES UN ENLACE */}
                <a
                  href={project.link || "#"} /* Usa el link del data o # si no existe */
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 mt-auto group"
                >
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                  Visitar Sitio
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">¿Quieres ver más código?</p>
          <a
            href="https://github.com/AgueroLucas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            <Code2 size={20} />
            Visitar GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;