import React from 'react';
import "./project.css"

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className='container-card'>
     <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p className='disc'>{p}</p>
    </a>
    </div>
  
  );
}

export default ProjectCard;
