import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        className='form-control'
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
        placeholder="Search movies"></input>
    </div>
    );
};


export default SearchBar;
