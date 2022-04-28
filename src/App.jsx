import { useState, useEffect } from 'react';
import Layout from './views/Layout/Layout';

export default function App() {
  const [collection, setCollection] = useState([]);
  const [headerImg, setHeaderImg] = useState(
    'https://images.unsplash.com/photo-1573828562803-1d582aa6ab6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM2MzV8MHwxfHNlYXJjaHwxfHxwb3J0bGFuZHxlbnwwfHx8fDE2NTExNzg2MDc&ixlib=rb-1.2.1&q=80&w=1080'
  );
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(30);

  return (
    <>
      <Layout
        collection={collection}
        headerImg={headerImg}
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
