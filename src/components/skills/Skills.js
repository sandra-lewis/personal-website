import React from 'react';
import { skillSet } from '../../data/datasets';
import Skill from './Skill';

const Skills = () => {
  return (
    <div
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className="container pb-4"
    >
      <h1>
        SKI<span>LLS</span>
      </h1>
      <div className="line"></div>
      <div className="icon">
        {skillSet.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
