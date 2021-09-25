import PropTypes from 'prop-types';
import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState(' ');

  const hundleChange = event => {
    event.preventDefault();
    const query = event.currentTarget.value;
    setQuery(query);
  };

  const hundleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <>
      <form className={s.form} onSubmit={hundleSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={hundleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={s.button} type="submit">
          <BsSearch className={s.icon} />
        </button>
      </form>
    </>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
