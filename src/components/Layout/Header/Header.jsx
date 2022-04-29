import React from 'react';
import './Header.css';

export default function Header({ headerImg }) {
  return (
    <>
      <header>
        <h1
          style={{
            backgroundImage: `url(${headerImg.imageUrlSm})`,
            filter: `drop-shadow(1px 1px 5px ${headerImg.color}`,
          }}
        >
          CAPTUR
        </h1>
      </header>
    </>
  );
}
