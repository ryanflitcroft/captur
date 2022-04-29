import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import CollectionList from '../../CollectionList/CollectionList';
import Loading from '../../Loading/Loading';
import './Main.css';

export default function Main({
  collection,
  setCollection,
  search,
  setSearch,
  isLoading,
  setIsLoading,
  count,
}) {
  return (
    <>
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCollection={setCollection}
          setIsLoading={setIsLoading}
          count={count}
        />
        <Loading isLoading={isLoading} />
        <CollectionList collection={collection} />
      </main>
    </>
  );
}
