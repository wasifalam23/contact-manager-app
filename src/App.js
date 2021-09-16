import React, { useState } from 'react';
import AddContact from './components/Contacts/AddContacts';
import ContactsList from './components/Contacts/ContactsList';

import './App.css';

const App = () => {
  const [contact, setContact] = useState([]);
  console.log(contact);

  const SaveContactDataHandler = (contactData) => {
    setContact((prevData) => [
      ...prevData,
      { ...contactData, id: Math.random().toString() },
    ]);
  };

  const contactDeleteHandler = (id) => {
    setContact(contact.filter((cont) => cont.id !== id));
  };

  return (
    <div className="main-container">
      <div className="container">
        <header className="header">
          <h1 className="heading">Contact Manager</h1>
        </header>

        <div className="contact-box">
          <div className="contact-form">
            <AddContact
              totalContact={contact.length}
              onSaveContactData={SaveContactDataHandler}
            />
          </div>

          <div className="contact-list">
            {contact.length !== 0 && (
              <ContactsList
                onContactDelete={contactDeleteHandler}
                newContact={contact}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
