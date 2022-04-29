import React from 'react';
import './Header.css';

export default function Header({ headerImg }) {
  return (
    <>
      <header>
        <h1 style={{ backgroundImage: `url(${headerImg})` }}>CAPTUr</h1>
      </header>
    </>
  );
}
