import React from 'react';

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
        <figcaption>{`${alt} by ${artist}`}</figcaption>
      </figure>
    </>
  );
}
