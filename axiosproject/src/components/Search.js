import React, { useState } from "react";

export const Search = ({ search }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(searchItem);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value)
  };
  return (
    <div className="search">
      <form onSubmit={handleFormSubmit}>
        <p>Axtar</p>
        <input className="search-input" type="text" placeholder="axtar" onChange={changeHandler} />
      </form>
    </div>
  );
};
