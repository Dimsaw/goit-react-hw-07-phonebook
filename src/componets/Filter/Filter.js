import React from 'react';

import s from './Filter.module.css';

const Filter = ({ filter, handelChange }) => {
  return (
    <>
      <label className={s.label}>
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={e => handelChange(e.target.value.trim())}
        />
      </label>
    </>
  );
};

export default Filter;
