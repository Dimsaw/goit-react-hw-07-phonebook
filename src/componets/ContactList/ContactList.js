import React from 'react';

import s from './ContactList.module.css';
import ContactItem from 'componets/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <ContactItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
