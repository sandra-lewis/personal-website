import React from 'react';
import { skillSet } from '../../data/datasets';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="container pb-4">
      <div
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h1>
          SKI<span>LLS</span>
        </h1>
        <div className="line"></div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="icon">
          {skillSet.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
