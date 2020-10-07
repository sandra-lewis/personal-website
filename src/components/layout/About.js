import React from 'react';
import photo from '../../images/personal-photo.png';

const About = () => {
  return (
    <div className="container grid-lg">
      <div>
        <h1 className="align">HI, I'M</h1>
        <br />
        <h2>SANDRA REBECCA LEWIS</h2>
        <p className="about-me">
          A web development enthusiast, currently pursuing my Master's in
          Computer Applications at Manipal Institute of Technology, Manipal.
        </p>
      </div>
      <img src={photo} alt="" className="personal-photo" />
    </div>
  );
};

export default About;
