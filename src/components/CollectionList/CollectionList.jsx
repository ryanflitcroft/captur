import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

export default function CollectionList({ collection }) {
  return (
    <>
      <section>
        {collection.map((item) => (
          <CollectionItem />
        ))}
      </section>
    </>
  );
}
