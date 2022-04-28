import { useState, useEffect } from 'react';
import Layout from './views/Layout/Layout';

export default function App() {
  const [collection, setCollection] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(30);

  return (
    <>
      <Layout
        collection={collection}
        setCollection={setCollection}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        count={count}
      />
    </>
  );
}
