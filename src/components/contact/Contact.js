import React, { Fragment } from 'react';
import { contactDetails } from '../../data/datasets';
import ContactItem from './ContactItem';

const Contact = () => {
  return (
    <Fragment>
      <h1 className="text-center">CONTACT</h1>
      <div className="icon">
        {contactDetails.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </Fragment>
  );
};

export default Contact;
