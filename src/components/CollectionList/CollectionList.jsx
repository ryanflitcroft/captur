import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

export default function CollectionList({ collection }) {
  return (
    <>
      <section>
        {collection.map((item, i) => (
          <CollectionItem key={`${item.id} ${i}`} item={item} />
        ))}
      </section>
    </>
  );
}