import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React showcasing my skills and projects.',
    link: 'https://github.com/CharuSingla/My_PortFolio',
  },
  {
    title: 'Timer Challenge App',
    description: 'A React app that tests your timer skills with fun challenges.',
    link: 'https://github.com/CharuSingla/timer-challenge',
  },
  {
    title: 'Employee Management System',
    description: 'Web application that allows adding, updating, and deleting employee records to efficiently manage workforce data.',
    link: 'https://github.com/CharuSingla/Employee_Management_System',
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 class="heading">Projects</h2>
    <div className="projects-grid">
      {projects.map(({ title, description, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
