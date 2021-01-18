import React from 'react';

const SearchBar = (props) => {
  return (
      <input
        className='form-control'
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
        placeholder="Search movies"></input>

    );
};

export default SearchBar;