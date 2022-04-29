import React from 'react';
import './SearchBar.css';
import requestUnsplash from '../../services/UnsplashService';

export default function SearchBar({
  search,
  setSearch,
  setCollection,
  setIsLoading,
  count,
}) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const collection = await requestUnsplash(search, count);
    setCollection(collection);
    setIsLoading(false);
  }

  return (
    <>
      <form
        aria-label="search Unsplash images by keyword"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">Browse Unsplash images:</label>
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
