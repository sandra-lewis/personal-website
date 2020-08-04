import React, { Fragment } from 'react';

const Footer = () => {
  const openAbout = () => {
    document.getElementById('about').style.display = 'block';
  };

  const closeAbout = () => {
    document.getElementById('about').style.display = 'none';
  };

  window.ontouchstart = (e) => {
    if (e.target.id === 'about') {
      document.getElementById('about').style.display = 'none';
    }
  };

  window.onclick = (e) => {
    if (e.target.id === 'about') {
      document.getElementById('about').style.display = 'none';
    }
  };

  return (
    <Fragment>
      <footer>
        <p>&copy; 2020 | SANDRA REBECCA LEWIS</p>
        <p className="cursor-pointer" onClick={openAbout}>
          ABOUT THIS SITE
        </p>
      </footer>

      <div id="about">
        <div className="about-site">
          <div className="modal-header">
            <span className="close cursor-pointer" onClick={closeAbout}>
              &times;
            </span>
            <h1>ABOUT THIS SITE</h1>
          </div>
          <div className="modal-body">
            <p>
              This site is built from scratch using CSS3, ReactJS and AOS
              libraries, with a mobile-first approach.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
