import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link
          to={{ pathname: item.imageLink }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.imageUrlSm} alt={`${alt} by ${artist}`} />
        </Link>
        <figcaption>
          {`${alt} by `}
          <Link
            to={{
              pathname: `https://www.instagram.com/${item.artistInstagram}/`,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{artist}</span>
          </Link>
        </figcaption>
      </figure>
    </>
  );
}
