import React from 'react';

import { useFetchContactsQuery } from '../../redux/contact_slice';
import s from './ContactList.module.css';
import ContactItem from 'componets/ContactItem';

const ContactList = ({ filter }) => {
  const { data, isFetching } = useFetchContactsQuery();

  const filteredContact = data?.filter(
    contact =>
      contact.name.toLowerCase().includes(filter) ??
      contact.number.toLowerCase().includes(filter)
  );
  if (filteredContact) {
    return (
      <ul>
        {isFetching && <p>Loading!!!!!</p>}
        {filteredContact.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    );
  }
};

export default ContactList;
