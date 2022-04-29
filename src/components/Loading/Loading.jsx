import React from 'react';
import './Loading.css';

export default function Loading({ isLoading }) {
  return (
    <>
      <p>{isLoading && '...Loading'}</p>
    </>
  );
}
