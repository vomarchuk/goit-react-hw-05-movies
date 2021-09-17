import PropTypes from 'prop-types';

import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState(' ');

  const hundleChange = event => {
    event.preventDefault();
    setQuery(event.currentTarget.value);
  };

  const hundleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          value={query}
          onChange={hundleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
