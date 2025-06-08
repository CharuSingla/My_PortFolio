import React from 'react';

const tech_Stack = [
  'JavaScript (ES6+)',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'HTML5 & CSS3',
  'Git & GitHub',
  'REST APIs',
  'Tailwind CSS',
];

const techStack = () => (
  <section id="tech-stack" className="section">
    <h2 class="heading">Tech Stack</h2>
    <div className="techstack">
      {tech_Stack.map((tech) => (
        <div key={tech} className="tech-item">
          {tech}
        </div>
      ))}
    </div>
  </section>
);

export default techStack;
