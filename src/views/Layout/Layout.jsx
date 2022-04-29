import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route path="/">
            <Main
              collection={collection}
              setCollection={setCollection}
              search={search}
              setSearch={setSearch}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              count={count}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
