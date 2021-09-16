import React from 'react';
import styles from './Contacts.module.css';

const Contacts = (props) => {
  const idGenerateHandler = (e) => {
    props.onContactDelete(e.target.id);
  };

  return (
    <div className={styles['details-box']}>
      <span className={styles.name}>{props.name}</span>
      <span className={styles.phone}>{props.phone}</span>
      <span className={styles.email}>{props.email}</span>
      <span id={props.id} onClick={idGenerateHandler} className={styles.delete}>
        [Delete]
      </span>
    </div>
  );
};

export default Contacts;
