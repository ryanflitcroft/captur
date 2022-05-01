import React from 'react';
import './SearchBar.css';

export default function SearchBar({ search, setSearch, updateCollection }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateCollection();
  }

  return (
    <>
      <form
        aria-label="search Unsplash images by keyword"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">
          Browse <span>Unsplash</span> images:
        </label>
        <input
          name="search"
          type="text"
          placeholder="search by keyword"
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </>
  );
}
