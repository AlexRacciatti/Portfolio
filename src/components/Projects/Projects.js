import React from 'react';

import Header from '../Home/Header/Header';
import ProjectN from './ProjectN/ProjectN';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <div>
        <Header />
        <h1>This is Projects Component</h1>
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
            />
          )
          
        }) }
    </div>
  ) 
};

export default Projects;
