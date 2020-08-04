import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { link, icon } }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`contact-icon ${icon}`} />
    </a>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
