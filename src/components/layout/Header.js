import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h1 className="center">
          HI, <span>I'M</span>
        </h1>
        <br />
        <h2>
          SANDRA <span>REBECCA</span> LEWIS
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <p className="about-me">
          I am currently pursuing my Master of Computer Applications at Manipal
          Institute of Technology, Manipal. I am a fast learner and have a keen
          interest in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
