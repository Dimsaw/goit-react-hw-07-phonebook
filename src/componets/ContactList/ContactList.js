// import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import s from './ContactList.module.css';
// // import ContactPage from './ContactPage';
// // import {
// //   getContactsItem,
// //   getContactsFilter,
// // } from '../../redux/contact_selector';
// // import { deleteContact } from '../../redux/contact_slice';

// // import { useState, useEffect } from 'react';

// const Contactslist = ({ contacts }) => {
//   // const [filterContacts, setFilterContacts] = useState([]);
//   // const contacts = useSelector(getContactsItem);
//   // const filter = useSelector(getContactsFilter);

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   const filteredContact = contacts.filter(
//   //     contact =>
//   //       contact.name.toLowerCase().includes(filter) ??
//   //       contact.number.toLowerCase().includes(filter)
//   //   );
//   //   return setFilterContacts(filteredContact);
//   // }, [filter, contacts]);
//   // const onDeleteContacts = id => dispatch(deleteContact(id));

//   return (
//     <ul>
//       {/* {contacts.map(contact => (
//         <li key={contact.id}>
//           {' '}
//           {contact.name}: {contact.phone}{' '}
//         </li>
//       ))} */}
//     </ul>
//   );
// };

// export default Contactslist;

import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
