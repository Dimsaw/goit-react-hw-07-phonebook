import React from 'react';
import s from './ContatcItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteContacts }) => {
  return (
    <>
      {name}: {number}
      <button className={s.btn} type="button" onClick={onDeleteContacts}>
        <span className={s.btn__name}>delete</span>
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
