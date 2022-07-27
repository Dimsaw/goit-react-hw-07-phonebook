import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { getContactsItem } from '../../redux/contact_selector';
import { addContact } from '../../redux/contact_slice';

import shortid from 'shortid';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '380px',
  position: 'center-top',
  failure: {
    background: '#00bfff',
    textColor: '#fff',
  },
});

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsItem);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (
      contacts.find(
        newContact => newContact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact(newContact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handelSubmit}>
      <label className={s.label}>
        <span className={s.text__name}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.text}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
