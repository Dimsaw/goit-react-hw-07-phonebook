import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import {
  getContactsItem,
  getContactsFilter,
} from '../../redux/contact_selector';
import { deleteContact } from '../../redux/contact_slice';

import { useState, useEffect } from 'react';

const ContactsList = () => {
  const [filterContacts, setFilterContacts] = useState([]);
  const contacts = useSelector(getContactsItem);
  const filter = useSelector(getContactsFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredContact = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ??
        contact.number.toLowerCase().includes(filter)
    );
    return setFilterContacts(filteredContact);
  }, [filter, contacts]);
  const onDeleteContacts = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContacts={() => onDeleteContacts(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
