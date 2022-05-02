import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import CollectionList from '../../CollectionList/CollectionList';
import Loading from '../../Loading/Loading';
import './Main.css';

export default function Main({
  collection,
  search,
  setSearch,
  isLoading,
  updateCollection,
}) {
  return (
    <>
      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          updateCollection={updateCollection}
        />
        {isLoading && <Loading />}

        <CollectionList collection={collection} />
      </main>
    </>
  );
}
