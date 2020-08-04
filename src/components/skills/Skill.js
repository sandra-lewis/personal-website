import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill: { name, fabico } }) => {
  return (
    <div>
      <i className={`dev-icon ${fabico}`} />
      <h5 className="text-center">{name}</h5>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
