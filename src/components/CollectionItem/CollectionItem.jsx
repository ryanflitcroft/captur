import React from 'react';
import './CollectionItem.css';

export default function CollectionItem({ item }) {
  const alt = item.altDescription
    ? item.altDescription
    : item.description
    ? item.description
    : 'photograph';

  const artist = `${item.artistNameFirst} ${item.artistNameLast}`;

  return (
    <>
      <figure>
        <img src={item.imageUrlSm} alt={`${alt} by ${artist}`} />
        <figcaption>{`${
          alt[0].toUpperCase() + alt.substring(1)
        } by ${artist}.`}</figcaption>
      </figure>
    </>
  );
}
