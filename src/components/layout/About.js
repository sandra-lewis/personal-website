import React from 'react';
import photo from '../../images/personal-photo.png';

const About = () => {
  return (
    <div className="container grid-lg">
      <div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1 className="align">HI, I'M</h1>
          <br />
          <h2>SANDRA REBECCA LEWIS</h2>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <p className="about-me">
            A web development enthusiast, currently pursuing my Master's in
            Computer Applications at Manipal Institute of Technology, Manipal.
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <img src={photo} alt="" className="personal-photo" />
      </div>
    </div>
  );
};

export default About;
