import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './About.scss';

const About = () => {
  const svgSize = { width: '2rem', height: '2rem' };

  return (
    <div className="about-wrapper">
      <header className="about-header">
        <h1>Tile matching game.</h1>
      </header>
      <section className="about-content">
        <p>by Arc</p>
        <div className="about-socials">
          <span className="github">
            <a href="https://github.com/arcbjorn">
              <FontAwesomeIcon icon={faGithub} style={svgSize} />
            </a>
          </span>
          <span className="linkedin">
            <a href="https://arcbjorn.github.io">
              <FontAwesomeIcon icon={faGlobeAmericas} style={svgSize} />
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
