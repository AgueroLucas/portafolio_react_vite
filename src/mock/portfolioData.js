// Mock data para el portfolio de Lucas Agüero

import whatclickImg from '../assets/whatclick.PNG';
import wordpressImg from '../assets/wordpress.PNG';
import asolmenImg from '../assets/Asolmen.PNG';

export const personalInfo = {
  name: "Lucas Agüero",
  title: "Desarrollador Front-End",
  location: "Mendoza, Argentina",
  email: "lucas.ez.aguero@gmail.com",
  photo: "https://customer-assets.emergentagent.com/job_8d35622f-560a-495d-b924-3341061af263/artifacts/6zb95duo_fotoperfil%20s.jpg",
  profileDescription: "Desarrollador Front-End con experiencia en React y Angular, apasionado por crear interfaces web funcionales y atractivas. Destaca por su compromiso con el aprendizaje continuo, capacidad para trabajar en equipo y aportar soluciones creativas. Ha trabajado tanto en proyectos internos como para clientes, participando activamente en decisiones de diseño, maquetación e integración con back-end.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lucas-aguero-16447724b/",
    github: "https://github.com/AgueroLucas",
    portfolio: "https://portafolioaguero.netlify.app/"
  }
};

export const experiences = [
  {
    id: 1,
    role: "Desarrollador Front-end Jr. - Pasante",
    company: "Kiura - Consultora de software",
    period: "Octubre 2024 - Enero 2025",
    duration: "4 meses",
    description: "Desarrollo front-end con React 17-18, maquetación de pantallas a partir de diseños UI/UX, mantenimiento de código e implementación de buenas prácticas. Trabajo con metodologías Ágiles (SCRUM).",
    projects: ["WhatClick", "Fluyana"],
    technologies: ["React", "JavaScript", "HTML/CSS", "Git", "SCRUM"]
  },
  {
    id: 2,
    role: "Desarrollador Front-End",
    company: "Asolment - Proyecto independiente",
    period: "Mayo 2024 - Septiembre 2024",
    duration: "5 meses",
    description: "Desarrollo completo de aplicación web utilizando Angular 16. Maquetación responsiva, diseño de interfaces con enfoque en experiencia de usuario (UX), e integración con back-end para gestión de datos y usuarios.",
    projects: ["Aplicación web Angular"],
    technologies: ["Angular", "TypeScript", "HTML/CSS", "Git"]
  }
];

export const skills = [
  { name: "React", level: "Avanzado", category: "frontend" },
  { name: "Angular", level: "Avanzado", category: "frontend" },
  { name: "JavaScript (ES6+)", level: "Avanzado", category: "frontend" },
  { name: "TypeScript", level: "Intermedio", category: "frontend" },
  { name: "HTML5 & CSS3", level: "Avanzado", category: "frontend" },
  { name: "Git & GitHub", level: "Intermedio", category: "tools" },
  { name: "SQL", level: "Intermedio", category: "backend" },
  { name: "SCRUM", level: "Intermedio", category: "methodology" }
];

export const projects = [
  {
    id: 1,
    title: "WhatClick",
    description: "Plataforma de comunicación web desarrollada con React 17-18. Maquetación de pantallas, integración con back-end y mantenimiento de código siguiendo buenas prácticas.",
    image: whatclickImg,
    technologies: ["React", "JavaScript", "HTML/CSS", "SCRUM", "VITE"],
    company: "Kiura",
    year: "2024",
    link: "https://whatclick-front.onrender.com/dashboard/inicio"
  },
 {
    id: 2,
    title: "Proyect Art",
    description: "Desarrollo y diseño de sitio web autogestionable utilizando WordPress. Personalización de temas, integración de plugins para funcionalidades específicas y optimización de SEO y velocidad de carga para mejorar la experiencia del usuario.",
    image: wordpressImg,
    technologies: ["WordPress", "CSS3", "HTML5", "SEO", "MySQL", "Elementor"],
    company: "Freelance / Personal",
    year: "2024",
    link: "https://proyectart.netlify.app/"
  },
  {
    id: 3,
    title: "Asolment Web App",
    description: "Aplicación web completa desarrollada con Angular 16. Diseño de interfaces UX/UI, maquetación responsiva e integración con back-end para gestión de datos.",
    image: asolmenImg,
    technologies: ["Angular", "TypeScript", "HTML/CSS", "UX Design"],
    company: "Proyecto Independiente",
    year: "2024",
    link: "https://asolmen.vercel.app/"
  }
];

export const education = [
  {
    id: 1,
    institution: "UTN-FRM",
    degree: "Técnicatura Universitaria en Programación",
    period: "2025 - Actualmente",
    status: "En curso"
  }
];

export const certifications = [
  { name: "Certificación en Angular", institution: "Udemy" },
  { name: "Programador Full Stack", institution: "T.TEC San Juan – Cuyo" },
  { name: "Desarrollador Web", institution: "Coder House" },
  { name: "Desarrollo Web (Js/Node.Js)", institution: "Codo a Codo 4.0" },
  { name: "Curso de Programación desde Cero", institution: "EEG Cooperation" }
];
