import React from 'react';
import { contactDetails } from '../../data/datasets';
import ContactItem from './ContactItem';

const Contact = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <h1 className="text-center">CONTACT</h1>
      <div className="icon">
        {contactDetails.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
