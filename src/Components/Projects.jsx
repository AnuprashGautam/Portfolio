import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: "Project A", description: "A web application for managing tasks.", link: "#" },
    { name: "Project B", description: "A mobile app for tracking fitness activities.", link: "#" },
    { name: "Project C", description: "A machine learning model for predicting stock prices.", link: "#" },
    { name: "Project D", description: "A game developed using Unity.", link: "#" },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
      <div className='ProjectButtonBody'>
      <p ><b>Add Project</b></p>
    </div>
    </div>
  );
};

export default Projects;
