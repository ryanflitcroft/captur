import React from 'react';
import './CollectionItem.css';

export default function CollectionItem({ item }) {
  let alt = item.altDescription
    ? item.altDescription
    : item.description
    ? item.description
    : 'photograph';
  alt = alt[0].toUpperCase() + alt.substring(1);

  const artist = `${item.artistNameFirst} ${item.artistNameLast}`;

  return (
    <>
      <figure>
        <img src={item.imageUrlSm} alt={`${alt} by ${artist}`} />
        <figcaption>{`${alt} by ${artist}.`}</figcaption>
      </figure>
    </>
  );
}
