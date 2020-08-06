import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  project: { id, title, description, technologies, gitUrl, liveUrl },
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <ul className="list">
        <li className="proj-title">{title}</li>
        <li className="text-justify">{description}</li>
        <li className="my-1">
          <strong>Technologies Used:</strong>&nbsp;&nbsp;{technologies}
        </li>
        <li>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn code-btn"
          >
            <i className="fab fa-github" />
            &nbsp;&nbsp;VIEW CODE
          </a>

          {id === 1 || id === 2 ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn live-btn"
            >
              <i className="fas fa-link" />
              &nbsp;&nbsp;VISIT SITE
            </a>
          ) : (
            ''
          )}
        </li>
      </ul>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
