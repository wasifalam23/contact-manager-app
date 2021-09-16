import React from 'react';
import Contacts from './Contacts';

const ContactList = (props) => {
  // console.log(props.newContact);
  return (
    <ul>
      {props.newContact.map((contact) => (
        <Contacts
          onContactDelete={props.onContactDelete}
          id={contact.id}
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </ul>
  );
};

export default ContactList;
