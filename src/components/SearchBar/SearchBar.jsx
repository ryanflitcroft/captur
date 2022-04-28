import React from 'react';
import requestUnsplash from '../../services/UnsplashService';

export default function SearchBar({
  search,
  setSearch,
  setCollection,
  setIsLoading,
}) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const collection = await requestUnsplash(search);
    setCollection(collection);
    setIsLoading(false);
  }

  return (
    <>
      <form
        aria-label="search Unsplash images by keyword"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">
          Browse Unsplash images:
          <input
            name="search"
            type="text"
            placeholder="search by keyword"
            value={search}
            onChange={handleChange}
          />
        </label>
        <button>Search</button>
      </form>
    </>
  );
}
