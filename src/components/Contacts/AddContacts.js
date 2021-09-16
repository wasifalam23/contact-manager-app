import React, { useState } from 'react';
import styles from './AddContacts.module.css';

const AddContact = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName === '' || enteredPhone === '' || enteredEmail === '') {
      alert('Please fill in all the required fields!');
      return;
    }

    const contactData = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
    };

    props.onSaveContactData(contactData);

    setEnteredName('');
    setEnteredPhone('');
    setEnteredEmail('');
  };

  return (
    <form onSubmit={submitHandler} action="#">
      <div className={styles['input-box']}>
        <label htmlFor="username">Name :</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>

      <div className={styles['input-box']}>
        <label htmlFor="phone">Phone :</label>
        <input
          id="phone"
          type="number"
          value={enteredPhone}
          onChange={phoneChangeHandler}
        />
      </div>

      <div className={styles['input-box']}>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>

      <div className={styles['btn-box']}>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
        {props.totalContact !== 0 ? (
          <p className={styles['manage-text']}>
            You are currently managing {props.totalContact} contacts.
          </p>
        ) : (
          <p className={styles['manage-text']}>
            You currently have no contacts.
          </p>
        )}
      </div>
    </form>
  );
};

export default AddContact;
