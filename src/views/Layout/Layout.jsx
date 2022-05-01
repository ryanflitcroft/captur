import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Main from '../../components/Layout/Main/Main';
import Footer from '../../components/Layout/Footer/Footer';
import './Layout.css';

export default function Layout({
  collection,
  headerImg,
  search,
  setSearch,
  updateCollection,
  isLoading,
}) {
  return (
    <>
      <Header headerImg={headerImg} />
      <Router>
        <Switch>
          <Route path="/">
            <Main
              collection={collection}
              search={search}
              setSearch={setSearch}
              isLoading={isLoading}
              updateCollection={updateCollection}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
