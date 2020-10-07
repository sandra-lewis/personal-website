import React, { Fragment, useEffect } from 'react';
import About from './components/layout/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';
import Particles from 'react-particles-js';
import { particlesOptions } from './data/particles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const onClick = () => {
    const links = document.getElementById('nav-links');
    links.className === 'nav-bar'
      ? links.classList.add('responsive')
      : (links.className = 'nav-bar');
  };

  return (
    <Fragment>
      <div
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Particles className="particles" params={particlesOptions} />
        <nav className="nav-bar" id="nav-links">
          <AnchorLink offset="initial" href="#aboutme">
            ABOUT
          </AnchorLink>

          <AnchorLink offset="30" href="#projects">
            PROJECTS
          </AnchorLink>

          <AnchorLink offset="90" href="#skills">
            SKILLS
          </AnchorLink>

          <AnchorLink href="#contact">CONTACT</AnchorLink>

          <div className="bar-icon" onClick={onClick}>
            <i className="fas fa-bars" />
          </div>
        </nav>

        <section id="aboutme" className="overlay">
          <About />
        </section>
      </div>
      <section id="projects" className="white-bg">
        <Projects />
      </section>

      <section id="skills" className="white-bg">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </Fragment>
  );
};

export default App;
