import React from 'react';
import './Header.css';

export default function Header({ headerImg }) {
  return (
    <>
      <header>
        <h1
          style={{
            backgroundImage: `url(${headerImg.imageUrlSm})`,
            filter: `drop-shadow(2px 2px 10px ${headerImg.color})`,
          }}
        >
          CAPTUr
        </h1>
      </header>
    </>
  );
}
