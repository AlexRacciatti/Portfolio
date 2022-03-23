import React from 'react';

import './Projects.css'

import Header from '../Home/Header/Header';
import ProjectN from './ProjectN/ProjectN';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <div>
        <Header />
        <main className='main-projects-container'>
          { ProjectsData.map((project, index) => {
            return(
              <ProjectN 
               key={index} 
                title={project.title} 
                subtitle={project.subtitle} 
                description={project.description} 
                pageLink={project.pageLink} 
                gitLink={project.gitLink} 
                techs={project.techs} 
                image={project.coverImage}
                alt={project.altText}
              />
            )
          }) }
        </main>
        
    </div>
  ) 
};

export default Projects;
