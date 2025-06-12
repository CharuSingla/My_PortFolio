import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// import profileImage from '../assets/profile.png';



const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <nav className="navbar">
        <h1 className="logo">Charu Singla</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h2>Hi, I'm Charu Singla</h2>
          <h3>Full Stack Developer</h3>
          <p>
            I am currently pursuing my Bachelor's in Computer Science and Engineering. I am passionate about crafting web applications and seeking freelancing opportunities in web development.
          </p>
          <div className="buttons">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="#contact" className="btn-outline">Let's Talk</a>
            <a href="/resume.pdf" download className="btn-primary">Download Resume</a>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
            <a href="https://www.linkedin.com/in/charu-singla-/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
            <a href="https://github.com/CharuSingla" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
          </div>
        </div>

        <div className="hero-image">
          <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbealepark.org.uk%2Fanimals%2Fmammals%2Fcapybara%2F&psig=AOvVaw19a9DHrOETGek-NGEGaBsd&ust=1749794133469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjjm62Z640DFQAAAAAdAAAAABAE"} alt="Charu Singla" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
