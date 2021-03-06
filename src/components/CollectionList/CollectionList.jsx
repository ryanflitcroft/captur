import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionList.css';

export default function CollectionList({ collection }) {
  return (
    <>
      <section aria-label="image gallery">
        {collection.map((item, i) => (
          <CollectionItem key={`${item.id} ${i}`} item={item} />
        ))}
      </section>
    </>
  );
}
