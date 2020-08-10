import React from 'react';
import { projectList } from '../../data/datasets';
import Project from './Project';

const Projects = () => {
  return (
    <div className="container ">
      <div
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h1>PROJECTS</h1>
        <div className="line"></div>
      </div>
      <div className="grid-2">
        {projectList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
