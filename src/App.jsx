import { useState, useEffect } from 'react';
import requestUnsplash from './services/UnsplashService';
import randomNum from './utils/randomNum';
import Layout from './views/Layout/Layout';

// const query = window.matchMedia('(prefers-color-scheme: dark)');
// query.matches;
// query.addEventListener('change', (res) => {
//   console.log(res);
//   res.matches;
// });

export default function App() {
  const [collection, setCollection] = useState([]);
  const [headerImg, setHeaderImg] = useState({});
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(30);

  const defaultQuery = ['Portland', 'Oregon', 'PNW'];

  async function updateCollection() {
    setIsLoading(true);
    const data = await requestUnsplash(search, count);
    setCollection(data);
    setHeaderImg(data[randomNum(count)]);
    setSearch('');
    setIsLoading(false);
  }

  useEffect(() => {
    async function getdata() {
      setIsLoading(true);
      const collectionData = await requestUnsplash(
        defaultQuery[randomNum(defaultQuery.length)],
        count
      );
      setCollection(collectionData);
      setHeaderImg(collectionData[randomNum(count)]);
      setIsLoading(false);
    }
    getdata();
  }, []);

  return (
    <>
      <Layout
        collection={collection}
        headerImg={headerImg}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        updateCollection={updateCollection}
      />
    </>
  );
}
