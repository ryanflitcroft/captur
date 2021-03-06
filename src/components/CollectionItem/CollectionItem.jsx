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

  const artist = item.artistNameLast
    ? `${item.artistNameFirst} ${item.artistNameLast}`
    : item.artistNameFirst;

  return (
    <>
      <figure>
        <Link
          to={{ pathname: item.imageLink }}
          target="_blank"
          rel="noopener noreferrer"
          title={'View on Unsplash'}
        >
          <img src={item.imageUrlSm} alt={`${alt} by ${artist}`} />
        </Link>
        <figcaption aria-label="image description provided by photographer">
          {alt}
          <br />
          {' by '}
          <Link
            to={{
              pathname: item.artistLink,
            }}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${item.artistNameFirst} on Unsplash`}
            style={{
              backgroundImage: `linear-gradient(transparent 0%, transparent 90%, ${item.color} 90%, ${item.color} 100%)`,
            }}
          >
            <span aria-label="name of photographer">{artist}</span>
          </Link>
        </figcaption>
      </figure>
    </>
  );
}
