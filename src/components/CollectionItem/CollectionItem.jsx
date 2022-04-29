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
        <figcaption>
          {`${alt} by `}
          {item.artistInstagram ? (
            <Link
              to={{
                pathname: `https://www.instagram.com/${item.artistInstagram}/`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              title={`Instagram: @${item.artistInstagram}`}
            >
              <span>{artist}</span>
            </Link>
          ) : (
            <span>{artist}</span>
          )}
        </figcaption>
      </figure>
    </>
  );
}
