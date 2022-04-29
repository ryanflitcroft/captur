import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Main from '../../components/Layout/Main/Main';
import Footer from '../../components/Layout/Footer/Footer';
import './Layout.css';

export default function Layout({
  collection,
  setCollection,
  headerImg,
  search,
  setSearch,
  isLoading,
  setIsLoading,
  count,
}) {
  return (
    <>
      <Header headerImg={headerImg} />
      <Main
        collection={collection}
        setCollection={setCollection}
        search={search}
        setSearch={setSearch}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        count={count}
      />
      <Footer />
    </>
  );
}
