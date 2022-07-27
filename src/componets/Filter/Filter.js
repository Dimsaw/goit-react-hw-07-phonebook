import React from 'react';

import s from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contact_slice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={s.label}>
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          onChange={e => dispatch(filterContact(e.target.value.trim()))}
        />
      </label>
    </>
  );
};

export default Filter;
