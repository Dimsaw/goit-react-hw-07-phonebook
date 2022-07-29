import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
// import {
//   getContactsItem,
//   getContactsFilter,
// } from '../../redux/contact_selector';
// import { deleteContact } from '../../redux/contact_slice';

// import { useState, useEffect } from 'react';
import { useFetchContactsQuery } from '../../redux/contact_slice';

const ContactsPage = () => {
  // const [filterContacts, setFilterContacts] = useState([]);
  // const contacts = useSelector(getContactsItem);
  // const filter = useSelector(getContactsFilter);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const filteredContact = contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter) ??
  //       contact.number.toLowerCase().includes(filter)
  //   );
  //   return setFilterContacts(filteredContact);
  // }, [filter, contacts]);
  // const onDeleteContacts = id => dispatch(deleteContact(id));

  const { data, isFetching } = useFetchContactsQuery();

  return <div>{data && <ConatactList contacts={data} />}</div>;
};

export default ContactsPage;
