import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import CollectionList from '../../CollectionList/CollectionList';
import Loading from '../../Loading/Loading';

export default function Main({
  collection,
  setCollection,
  search,
  setSearch,
  isLoading,
  setIsLoading,
}) {
  return (
    <>
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          setCollection={setCollection}
          setIsLoading={setIsLoading}
        />
        <Loading isLoading={isLoading} />
        <CollectionList collection={collection} />
      </main>
    </>
  );
}
